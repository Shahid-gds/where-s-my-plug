<template>
    <section>
        <div>
            <StrainProductDetail />
        </div>
    </section>
    <section class="container mx-auto flex relative pb-[10rem]">
        <div class="2xl:w-[20%] w-1/2 md:block hidden mt-4 pb-[10rem]">
            <!-- <h1 class="font-bold">Search Strains</h1> -->
            <div class="relative">
                <input type="text" class="w-full border-2 border-[#CCE3E0] bg-[#FBFBFB]  p-2 rounded-[15px] px-4"
                    placeholder="Search Strains Here..." v-model="searchQuery">
                <div class="absolute top-2.5 right-3 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
            <div class="border-2 p-4 mt-[1rem] rounded-[15px] bg-[#FBFBFB]">
                <div class="flex justify-between border-b-2">
                    <div>
                        <h1 class="font-[Bold]">Strains</h1>
                    </div>
                    <div @click="toggleStrainType" class="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                <transition name="fade" class="">
                    <div class="p-2" v-if="showStrainTypeCheckboxArea">
                        <div v-for="(strainType, index) in strainTypes" :key="index"
                            class="checkbox-wrapper-45 flex items-center space-x-3 pb-3 mt-2">
                            <div>
                                <input :id="'cbx-' + index" type="checkbox" :value="strainType"
                                    v-model="selectedStrainTypes" @change="handleCheckboxClick">
                                <label class="cbx" :for="'cbx-' + index">
                                    <div class="flip">
                                        <div class="front"></div>
                                        <div class="back">
                                            <svg width="16" height="14" viewBox="0 0 16 14">
                                                <path d="M2 8.5L6 12.5L14 1.5"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <div>
                                <label :for="'cbx-' + index">{{ strainType }}</label>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

        </div>
        <div class="w-full">
            <div class="md:hidden flex items-center space-x-3 px-4">
                <div class="w-full">
                    <!-- <h1 class="font-bold">Search Strains</h1> -->
                    <div class="relative">
                        <input type="text"
                            class="w-full border-2 border-[#CCE3E0] bg-[#FBFBFB]  p-2 rounded-[15px] px-4"
                            placeholder="Search Strains Here..." v-model="searchQuery">
                        <div class="absolute top-2.5 right-3 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#61C1B4" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="mt-[1rem]" @click="toggleSideMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                    </svg>
                </div>
            </div>
            <transition-group name="nested" tag="div" class="flex flex-wrap 2xl:justify-center justify-center">
                <div v-for="card in filteredCards" :key="card.id" @click="navigateToDetails(card.id)"
                    class="md:w-[385px] relative w-full rounded-2xl p-6 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                    <div class="w-full p-4 rounded-xl flex justify-center relative">
                        <img class="w-1/2" :src="card.image" alt="">
                        <div class="absolute bottom-0 right-0 text-lg font-bold border-2 p-1 px-6 rounded-full">
                            {{card.category}}
                        </div>
                    </div>
                    <div class="w-full pt-3">
                        <div class="border-2 text-white rounded-tl-xl p-2 text-center absolute top-0 left-0"
                            :style="{ backgroundColor: card.backgroundColor }">
                            {{ card.type }}
                        </div>
                        <div v-if="card.thc" class="border-2 p-2 w-[150px] text-center rounded-xl">
                            {{ card.thc }}
                        </div>
                        <div class="text-xl py-2">
                            {{ card.name }}
                        </div>
                        <div>
                            {{ card.heading }}
                        </div>
                        <div class="py-2 pb-6">
                            <span>Weight:</span> <span class="font-bold">{{ card.weight }}</span>
                        </div>
                    
                        <div class="w-[80%] flex items-center justify-between absolute bottom-3">
                            <div class="font-[Extra-Bold] text-[20px]">
                                <span>$</span>{{ card.price }}
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>
                     </div>
                    </div>
                </div>
            </transition-group>
            <div class="container mx-auto flex justify-end mt-5 px-[3rem]">
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
        </div>
        <div v-if="isSideMenuOpen" @click="closeSideMenuOutside" class="fixed inset-0 bg-black z-10 opacity-25">
        </div>
        <TransitionGroup name="list" tag="ul" class="md:hidden">
            <div class="w-[80%] shadow-lg bg-[#FBFBFB] p-6 rounded-tl-2xl rounded-bl-2xl absolute right-0 z-20"
                v-if="isSideMenuOpen">
                <div class="border-2 p-4 mt-[1rem] rounded-[15px] bg-[#FBFBFB]">
                    <div class="flex justify-between border-b-2">
                        <div>
                            <h1 class="font-[Bold]">Strain</h1>
                        </div>
                        <div @click="toggleStrainType" class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#61C1B4" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    <transition name="fade" class="h-[160px]">
                        <div class="p-2" v-if="showStrainTypeCheckboxArea">
                            <div v-for="(strainType, index) in strainTypes" :key="index"
                                class="checkbox-wrapper-45 flex items-center space-x-3 pb-3 mt-2">
                                <div>
                                    <input :id="'cbx-' + index" type="checkbox" :value="strainType"
                                        v-model="selectedStrainTypes" @change="handleCheckboxClick">
                                    <label class="cbx" :for="'cbx-' + index">
                                        <div class="flip">
                                            <div class="front"></div>
                                            <div class="back">
                                                <svg width="16" height="14" viewBox="0 0 16 14">
                                                    <path d="M2 8.5L6 12.5L14 1.5"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label :for="'cbx-' + index">{{ strainType }}</label>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </TransitionGroup>
    </section>
   
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import StrainProductDetail from '@/pages/StrainProductDetail.vue';
import { useRoute, useRouter } from 'vue-router';
import { useApi } from '@/components/api/useApi';
import axios from 'axios';


const { getApiUrl } = useApi();
const apiUrl = getApiUrl();


const route = useRoute();
const router = useRouter();

const strainTypes = ref(['Flowers', 'Cartridge', 'Preroll', 'Edible', 'Beverage', 'Extract', 'Tincture', 'Topical', 'Pill', 'Merch', 'Plant']);
const selectedStrainTypes = ref([]);

const closeSideMenuOutside = () => {
    isSideMenuOpen.value = false;
};
const isSideMenuOpen = ref(false);
const toggleSideMenu = () => {
    isSideMenuOpen.value = !isSideMenuOpen.value;
};
const showStrainTypeCheckboxArea = ref(true);
function toggleStrainType() {
    showStrainTypeCheckboxArea.value = !showStrainTypeCheckboxArea.value;
}

const checkedCheckbox = ref(null);
function handleCheckboxClick(event) {
    const targetCheckbox = event.target;

    // document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    //     if (checkbox !== targetCheckbox) {
    //         checkbox.checked = false;
    //     }
    // });

    checkedCheckbox.value = targetCheckbox;
}

const navigateToDetails = (id) => {
    scrollToTop();
    router.push({ name: 'StrainsDetail', params: { id } });
}

const cards = ref([
    {
        id: '1',
        category: 'Flowers',
        image: import('../assets/images/strains/img1.avif').then((module) => module.default),
        name: 'Pacific stone',
        heading: 'PRIVATE RESERVE OG',
        // thc: 'THC: 24.57%',
        type: 'Indica',
        weight: '3.5 grams',
        price: '20',
        backgroundColor: '#126CAB'
    },
    {
        id: '2',
        category: 'Flowers',
        image: import('../assets/images/strains/img2.avif').then((module) => module.default),
        name: 'True classic',
        heading: 'TRUE CLASSIC OG',
        thc: 'THC: 24.57%',
        type: 'Indica',
        weight: '3.5 grams',
        price: '40',
        backgroundColor: '#126CAB'
    },
    {
        id: '3',
        category: 'Flowers',
        image: import('../assets/images/strains/img3.avif').then((module) => module.default),
        name: 'Pacific stone',
        heading: 'BLUE DREAM (1OZ)',
        // thc: 'THC: 24.57%',
        type: 'Sativa',
        weight: '28.0 grams',
        price: '120',
        backgroundColor: '#EBB22D'
    },
    {
        id: '4',
        category: 'Flowers',
        image: import('../assets/images/strains/img3.avif').then((module) => module.default),
        name: 'Pacific stone',
        heading: '805 GLUE',
        // thc: 'THC: 24.57%',
        type: 'Hybird',
        weight: '3.5 grams',
        price: '20',
        backgroundColor: '#42BC97'
    },
    {
        id: '5',
        category: 'Flowers',
        image: import('../assets/images/strains/img4.avif').then((module) => module.default),
        name: 'Thc design',
        heading: 'GELATTI CAKE',
        // thc: 'THC: 24.57%',
        type: 'Hybird',
        weight: '3.5 grams',
        price: '45',
        backgroundColor: '#42BC97'
    },
    {
        id: '6',
        category: 'Flowers',
        image: import('../assets/images/strains/img5.avif').then((module) => module.default),
        name: 'Pacific stone',
        heading: 'BLUE DREAM',
        // thc: 'THC: 24.57%',
        type: 'Sativa',
        weight: '3.5 grams',
        price: '20',
        backgroundColor: '#EBB22D'
    },
    {
        id: '7',
        category: 'Cartridge',
        image: import('../assets/images/strains/img6.avif').then((module) => module.default),
        name: 'Rove',
        heading: 'WAUI CARTRIDGE',
        // thc: 'THC: 24.57%',
        type: 'Sativa',
        weight: '1.0 grams',
        price: '40',
        backgroundColor: '#EBB22D'
    },
    {
        id: '8',
        category: 'Cartridge',
        image: import('../assets/images/strains/img7.avif').then((module) => module.default),
        name: 'Stiiizy',
        heading: 'WATERMELON Z POD',
        thc: 'THC: 91.15%',
        type: 'Indica',
        weight: '0.5 grams',
        price: '18',
        backgroundColor: '#126CAB'
    },
    {
        id: '9',
        category: 'Cartridge',
        image: import('../assets/images/strains/img8.avif').then((module) => module.default),
        name: 'Stiiizy',
        heading: 'WATERMELON Z POD',
        thc: 'THC: 91.47%',
        type: 'Indica',
        weight: '0.5 grams',
        price: '20',
        backgroundColor: '#126CAB'
    },
    {
        id: '10',
        category: 'Preroll',
        image: import('../assets/images/strains/img11.avif').then((module) => module.default),
        name: 'Pacific stone',
        heading: 'WEDDING CAKE PRE-ROLLS (2PK)',
        // thc: 'THC: 100.0%',
        type: 'Indica',
        weight: '1.0 grams',
        price: '8',
        backgroundColor: '#126CAB'
    },
    {
        id: '11',
        category: 'Preroll',
        image: import('../assets/images/strains/img12.avif').then((module) => module.default),
        name: 'Lowell',
        heading: 'THE BEDTIME PRE-ROLLS (6PK)',
        thc: 'THC: 13.5MG',
        type: 'Indica',
        weight: '3.5 grams',
        price: '40',
        backgroundColor: '#126CAB'
    },
    {
        id: '12',
        category: 'Preroll',
        image: import('../assets/images/strains/img11.avif').then((module) => module.default),
        name: 'Pacific stone',
        heading: 'PRIVATE RESERVE OG PRE-ROLL (2PK)',
        // thc: 'THC: 10.0%',
        type: 'Indica',
        weight: '3.5 grams',
        price: '8',
        backgroundColor: '#126CAB'
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
const searchQuery = ref('');

const filteredCards = computed(() => {
    return cards.value.filter(card => {
        const matchesSearch = card.category.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesType = selectedStrainTypes.value.length === 0 || selectedStrainTypes.value.includes(card.category);

        return matchesSearch && matchesType;
    });
});

// Define number of cards per page
const cardsPerPage = 24;

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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.checkbox-wrapper-45 {
    position: relative;
}

.checkbox-wrapper-45 input[type="checkbox"] {
    display: none;
    visibility: hidden;
}

.checkbox-wrapper-45 .cbx {
    -webkit-perspective: 20;
    perspective: 20;
    display: inline-block;
    border: 2px solid #e8e8eb;
    background: #e8e8eb;
    border-radius: 4px;
    transform: translate3d(0, 0, 0);
    cursor: pointer;
    transition: all 0.3s ease;
}

.checkbox-wrapper-45 .cbx:hover {
    border-color: #61C1B4;
}

.checkbox-wrapper-45 .flip {
    display: block;
    transition: all 0.4s ease;
    transform-style: preserve-3d;
    position: relative;
    width: 20px;
    height: 20px;
}

.checkbox-wrapper-45 input[type="checkbox"]:checked+.cbx {
    border-color: #61C1B4;
}

.checkbox-wrapper-45 input[type="checkbox"]:checked+.cbx .flip {
    transform: rotateY(180deg);
}

.checkbox-wrapper-45 .front,
.checkbox-wrapper-45 .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 2px;
}

.checkbox-wrapper-45 .front {
    background: #fff;
    z-index: 1;
}

.checkbox-wrapper-45 .back {
    transform: rotateY(180deg);
    background: #61C1B4;
    text-align: center;
    color: #fff;
    line-height: 20px;
    box-shadow: 0 0 0 1px #61C1B4;
}

.checkbox-wrapper-45 .back svg {
    margin-top: 3px;
    fill: none;
}

.checkbox-wrapper-45 .back svg path {
    stroke: #fff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
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

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(400px);
}

::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
}


::-webkit-scrollbar-thumb {
    background-color: #DBF1EE;
    border-radius: 5px;
}
</style>