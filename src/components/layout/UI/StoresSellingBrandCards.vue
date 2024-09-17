<template>
    <section class="">
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center">
            <div v-for="card in paginationCard" :key="card._id" @click="navigateToDetails(card._id)"
                class="2xl:w-[420px] w-[400px] rounded-2xl 2xl:p-6 p-4 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                <div class="flex space-x-4">
                    <div class="w-full">
                        <img class="w-full" :src="card.image" alt="">
                    </div>
                    <div class="w-full">
                        <div class="py-2 font-[Extra-Bold]">
                            {{ card.name }}
                        </div>
                        <div>
                            {{ card.type }}
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
                    </div>
                </div>
            </div>
        </transition-group>
        <div class="flex justify-center mt-5">
            <nav>
                <ul class="pagination">
                    <li>
                        <button @click="prevPage" :disabled="currentPage === 1" class="pagination-btn">&lt;
                        </button>
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
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useApi } from '@/components/api/useApi';


const { getApiUrl } = useApi();
const apiUrl = getApiUrl();


const router = useRouter();

const navigateToDetails = (id) => {
    scrollToTop();
    localStorage.setItem('dispensaryId', id);
    router.push({ name: 'StoresSellingBrand', params: { id } });
}

const cards = ref([]);


onMounted(async () => {
    try {
        const brandId = localStorage.getItem('brandId');
        const selectedLocation = JSON.parse(localStorage.getItem('selectedLocation'));

        if (!brandId || !selectedLocation || !selectedLocation.state) {
            console.error('Missing required data from localStorage');
            return;
        }

        const state = selectedLocation.state;
        const city = selectedLocation.city || '';
        
        const response = await axios.get(`${apiUrl}/dispensaries/getMeBybrandAndLocation`, {
            headers: {
                'brand-id': brandId,
            },
            params: {
                state, 
                city   
            }
        });

        cards.value = response.data.data.dispensaries;
    } catch (error) {
        console.error("Failed to fetch data", error);
    }
});


const cardsPerPage = 12;

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(cards.value.length / cardsPerPage));

const paginationCard = computed(() => {
    const startIndex = (currentPage.value - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cards.value.slice(startIndex, endIndex);
});

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

</script>

<style scoped>
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