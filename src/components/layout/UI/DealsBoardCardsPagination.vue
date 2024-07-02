<template>
    <section class="">
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center">
            <div v-for="card in paginationCard" :key="card.id" @click="selectCardAndNavigate(card)"
                class="w-[400px] rounded-[35px] p-1.5 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                <div class="relative">
                    <div>
                        <img class="w-full" :src="card.image" alt="">
                    </div>
                    <div
                        class="bg-[#61C1B4] uppercase w-[100px] text-center p-2 rounded-full font-[Extra-Bold] text-white absolute bottom-3 left-3">
                        {{ card.discountFlag }}
                    </div>
                </div>
                <div class="p-6">
                    <div>
                        {{ card.heading }}
                    </div>
                    <div class="py-3 font-[Extra-Bold] text-[18px]">
                        {{ card.subHeading }}
                    </div>
                    <div class="pt-[1rem]">
                        {{ card.availableDeals }}
                    </div>
                    <div class="py-3">
                        {{ card.distance }}
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
import { ref, onMounted, computed, defineProps, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useDealStore } from '@/stores/modules/dealsStore';

const router = useRouter();
const dealStore = useDealStore();

function selectCardAndNavigate(card) {
    scrollToTop();
    dealStore.selectCard(card);
    router.push({ name: 'DealsDetail', params: { id: card.id } })
}

const props = defineProps({
    searchQuery: {
        type: String,
        default: ''
    }
})
const cards = ref([
    {
        id: '1',
        image: import('../../../assets/images/DealsBoardCardImages/Img1.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Flower',
        subHeading: '420 Sales 20% off all Flowers',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '2',
        image: import('../../../assets/images/DealsBoardCardImages/Img2.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Cartridges',
        subHeading: 'CLOUD - Z CARTS $4EA. / 14 FOR $50 / 28 FOR $100',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '3',
        image: import('../../../assets/images/DealsBoardCardImages/Img3.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Pre-rolls',
        subHeading: 'Happy Hour!!!! 6pm - 8pm Every Day!',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '4',
        image: import('../../../assets/images/DealsBoardCardImages/Img4.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Terpenes',
        subHeading: 'Happy Hour!!!! 6pm - 8pm Every Day!',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '5',
        image: import('../../../assets/images/DealsBoardCardImages/Img5.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Cartridges',
        subHeading: 'CLOUD - Z CARTS $4EA. / 14 FOR $50 / 28 FOR $100',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '6',
        image: import('../../../assets/images/DealsBoardCardImages/Img6.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Pre-rolls',
        subHeading: 'Happy Hour!!!! 6pm - 8pm Every Day!',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '7',
        image: import('../../../assets/images/DealsBoardCardImages/Img1.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Terpenes',
        subHeading: 'Happy Hour!!!! 6pm - 8pm Every Day!',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '8',
        image: import('../../../assets/images/DealsBoardCardImages/Img2.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Flower',
        subHeading: 'CLOUD - Z CARTS $4EA. / 14 FOR $50 / 28 FOR $100',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '9',
        image: import('../../../assets/images/DealsBoardCardImages/Img3.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Flower',
        subHeading: 'Happy Hour!!!! 6pm - 8pm Every Day!',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '10',
        image: import('../../../assets/images/DealsBoardCardImages/Img4.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Flower',
        subHeading: 'Happy Hour!!!! 6pm - 8pm Every Day!',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '11',
        image: import('../../../assets/images/DealsBoardCardImages/Img5.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Flower',
        subHeading: 'CLOUD - Z CARTS $4EA. / 14 FOR $50 / 28 FOR $100',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '12',
        image: import('../../../assets/images/DealsBoardCardImages/Img6.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Flower',
        subHeading: 'Happy Hour!!!! 6pm - 8pm Every Day!',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '13',
        image: import('../../../assets/images/DealsBoardCardImages/Img3.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Flower',
        subHeading: 'Happy Hour!!!! 6pm - 8pm Every Day!',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '14',
        image: import('../../../assets/images/DealsBoardCardImages/Img1.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Flower',
        subHeading: 'CLOUD - Z CARTS $4EA. / 14 FOR $50 / 28 FOR $100',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },
    {
        id: '15',
        image: import('../../../assets/images/DealsBoardCardImages/Img6.svg').then((module) => module.default),
        discountFlag: '25% off',
        heading: 'Flower',
        subHeading: 'Happy Hour!!!! 6pm - 8pm Every Day!',
        availableDeals: 'Available daily   -   The Trich Home',
        distance: '26 miles away',
    },

]);


onMounted(async () => {
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
});
// Define number of cards per page
const cardsPerPage = 12;

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(cards.value.length / cardsPerPage));

const paginationCard = computed(() => {
    if (props.searchQuery) {
        return cards.value.filter(card => card.heading.toLowerCase().includes(props.searchQuery.toLowerCase()) || card.subHeading.toLowerCase().includes(props.searchQuery.toLowerCase()))
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
    currentPage.value = 1
})
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