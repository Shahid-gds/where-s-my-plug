<template>
    <section class="">
        <transition-group name="nested" tag="div" class="container mx-auto flex items-center flex-wrap">
            <div v-for="card in paginationCard" :key="card._id" @click="navigateToDetails(card._id)"
                class="2xl:w-[420px] w-[400px]  rounded-2xl 2xl:p-6 p-4 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                <div class="flex space-x-4">
                    <div class="w-1/2">
                        <img class="w-full" :src="card.image" alt="">
                    </div>
                    <div class="w-full">
                        <div class="py-2 font-[Extra-Bold]">
                            {{ card.name }}
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
import { ref, onMounted, computed, defineProps, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const router = useRouter();

const navigateToDetails = (id) => {
    scrollToTop();
    localStorage.setItem('brandId', id);
    router.push({ name: 'BrandsDetail', params: { id } });
}

const props = defineProps({
    state: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    searchQuery: {
        type: String,
        default: ''
    }
});

const state = ref('');
const city = ref('');
const cards = ref([]);


onMounted(async () => {
    const selectedLocation = localStorage.getItem('selectedLocation');
    if (selectedLocation) {
        try {
            const locationData = JSON.parse(selectedLocation);
            state.value = locationData.state || '';
            city.value = locationData.city || ''; 
        } catch (error) {
            console.error('Error parsing selectedLocation from localStorage:', error);
        }
    }

    try {
        const response = await axios.get(`${apiUrl}/brands/getMeByLocation`, {
            params: {
                state: state.value,
                city: city.value
            }
        });
        cards.value = response.data.data.brands;
    } catch (error) {
        console.error("Failed to fetch data", error);
    }
});

// Define number of cards per page
const cardsPerPage = 21;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(cards.value.length / cardsPerPage));

const paginationCard = computed(() => {
    if (props.searchQuery) {
        return cards.value.filter(card => card.name.toLowerCase().includes(props.searchQuery.toLowerCase()));
    }
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

watch(() => props.searchQuery, () => {
    currentPage.value = 1;
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