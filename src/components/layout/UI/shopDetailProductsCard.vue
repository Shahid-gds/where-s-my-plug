<template>
    <section class="md:py-[5rem] py-[1rem]">
        <div class="container mx-auto py-6 w-[182px] relative">
            <div class="bg-[#61c1b4] w-[182px] mr-auto ml-auto h-0.5">
                <div class="w-full absolute top-0 ">
                    <img class="mr-auto ml-auto" src="@/components/icons/drugLeaf.svg" alt="">
                </div>
            </div>
        </div>
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center px-6">
            <div v-for="card in paginatedCards" :key="card._id" @click="navigateToDetails(card._id)"
                class="2xl:w-[420px] w-[400px] cursor-pointer border-2 border-[#CCE3E0] m-2 p-6 py-8 rounded-2xl hover:shadow-xl hover:border-[#61C1B4] duration-300 transition-all">
                <div class="flex justify-center pb-6">
                    <div class="">
                        <img :src="card.images[0]" alt="Product Image" class="w-full h-[250px]" loading="lazy">
                    </div>
                </div>
                <div class="text-lg font-bold">
                    {{ card.name }}
                </div>
                <div class="py-2 font-[Extra-Bold]">
                    ${{ card.price }}
                </div>
                <div class="flex items-center space-x-5 pb-4">
                    <div class="flex">
                        <div v-for="n in 5" :key="n" class="w-[24px]">
                            <svg v-if="n <= Math.round(card.ratingsAverage)" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="#FFD700" class="w-5 h-5">
                                <path
                                    d="M12 .587l3.668 7.425 8.172 1.186-5.912 5.76 1.394 8.13-7.322-3.856-7.322 3.856 1.394-8.13-5.912-5.76 8.172-1.186L12 .587z" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="w-5 h-5">
                                <path
                                    d="M12 .587l3.668 7.425 8.172 1.186-5.912 5.76 1.394 8.13-7.322-3.856-7.322 3.856 1.394-8.13-5.912-5.76 8.172-1.186L12 .587z" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <div class="text-[#444444] font-[poppin-bold] sm:text-xl">
                            {{ card.ratingsAverage }}
                        </div>
                        <div class="text-[#76c9be] font-[poppin-bold] sm:text-xl">
                            ({{ card.ratingsQuantity }})
                        </div>
                    </div>
                </div>
                <div class="description-container">
                    <p :class="{ 'expanded': card.expanded, 'collapsed': !card.expanded }">
                        {{ card.description }}
                    </p>
                    <button @click="toggleDescription(card._id)" class="float-right pt-6 font-bold">
                        {{ card.expanded ? '' : 'Read More...' }}
                    </button>
                </div>
            </div>
        </transition-group>
        <div class="container mx-auto flex justify-end mt-5 px-[7.8rem]">
            <nav>
                <ul class="pagination">
                    <li>
                        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-btn">&lt;</button>
                    </li>
                    <li v-for="pageNumber in totalPages" :key="pageNumber">
                        <template v-if="pageNumber !== 1">
                            <span class="text-[#999999]"> | </span>
                        </template>
                        <button @click="goToPage(pageNumber)"
                            :class="{ 'pageNumber': true, 'active': pageNumber === currentPage }">{{
                pageNumber }}</button>
                    </li>
                    <li>
                        <button @click="nextPage" :disabled="currentPage === totalPages"
                            class="pagination-btn">&gt;</button>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useApi } from '@/components/api/useApi';
import axios from 'axios';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();
const cards = ref([]);
const currentPage = ref(1);
const itemsPerPage = 12;

const toggleDescription = (id) => {
    const card = cards.value.find(c => c._id === id);
    if (card) {
        card.expanded = !card.expanded;
    }
}

const router = useRouter();

const props = defineProps({
    paginationCard: {
        type: Array,
        required: true
    }
});

const totalPages = computed(() => Math.ceil(cards.value.length / itemsPerPage));

const paginatedCards = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return cards.value.slice(start, end);
});


const navigateToDetails = (id) => {
    scrollToTop();
    router.push({ name: 'ProductDetail', params: { id } });
}

function nextPage() {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
}

function prevPage() {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
}

function goToPage(pageNumber) {
    currentPage.value = pageNumber;
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

onMounted(async () => {
    try {
        // Retrieve dispensaryId from localStorage
        const dispensaryId = localStorage.getItem('dispensaryId');

        if (!dispensaryId) {
            console.error("No Dispensary found");
            return;
        }

        const response = await axios.get(`${apiUrl}/products/getMeBydispensary`, {
            headers: {
                'dispensary-id': dispensaryId
            }
        });
        cards.value = response.data.data.products;
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
});

</script>

<style scoped>
.description-container {
    position: relative;
}

.description-container p {
    max-height: 4.5em;
    overflow: hidden;
    transition: max-height 0.5s ease;
}

.description-container p.expanded {
    max-height: 100em;
}

.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateX(30px);
    opacity: 0;
}

.pagination {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    background: #F5F5F5;
    padding: 10px;
    border-radius: 50px;
}

.pagination li {
    margin: 0 5px;
}

.pagination-btn {
    padding: 0.5rem 1rem;
    color: #000101;
    font-weight: bold;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background: white;
    border-radius: 50%;
    font-size: 15px;
}

.pagination-btn:hover {
    background: rgb(197, 196, 198);
}

.pageNumber {
    padding: 0.5rem 1rem;
    color: #6b5c7d;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.pagination .pageNumber.active {
    color: #000101;
}

.pagination .pageNumber:hover {
    color: black;
}

.pagination-btn:hover {
    color: black;
}

/*.pagination-btn[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}*/

.pagination-btn.active {
    color: black;
    font-weight: bolder;
}
</style>
