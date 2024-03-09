<template>
    <section class="container mx-auto flex">
        <div class="w-[20%]">
            <div>
                <h1 class="font-bold">Search Strains</h1>
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
                            <h1 class="font-[Bold]">Strain Types</h1>
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
                <!-- Effects Section -->
                <div class="border-2 p-4 mt-[1rem] rounded-[15px] bg-[#FBFBFB]">
                    <div class="flex justify-between border-b-2">
                        <div>
                            <h1 class="font-[Bold]">Effects</h1>
                        </div>
                        <div @click="toggleEffects" class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#61C1B4" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    <transition name="fade" class="h-[200px] overflow-y-scroll mt-4">
                        <div class="px-2" v-if="showEffectsCheckboxArea">
                            <div v-for="(effect, index) in effects" :key="'effect' + index"
                                class="checkbox-wrapper-45 flex items-center space-x-3 pb-3">
                                <div>
                                    <input :id="'cbx-' + (index + 48)" type="checkbox" :value="effect"
                                        v-model="selectedEffects" @change="handleCheckboxClick">
                                    <label class="cbx" :for="'cbx-' + (index + 48)">
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
                                    <label :for="'cbx-' + (index + 48)">{{ effect }}</label>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>

                <!-- Flavors Section -->
                <div class="border-2 p-4 mt-[1rem] rounded-[15px] bg-[#FBFBFB]">
                    <div class="flex justify-between border-b-2">
                        <div>
                            <h1 class="font-[Bold]">Flavors</h1>
                        </div>
                        <div @click="toggleFlavors" class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#61C1B4" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    <transition name="fade" class="h-[380px] overflow-y-scroll mt-4">
                        <div class="px-2" v-if="showFlavorsCheckboxArea">
                            <div v-for="(flavor, index) in flavors" :key="'flavor' + index"
                                class="checkbox-wrapper-45 flex items-center space-x-3 pb-3">
                                <div>
                                    <input :id="'cbx-' + (index + 60)" type="checkbox" :value="flavor"
                                        v-model="selectedFlavors" @change="handleCheckboxClick">
                                    <label class="cbx" :for="'cbx-' + (index + 60)">
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
                                    <label :for="'cbx-' + (index + 60)">{{ flavor }}</label>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>

            </div>
        </div>
        <div class="w-full">
            <transition-group name="nested" tag="div" class="flex flex-wrap">
                <div v-for="card in filteredCards" :key="card.image"
                    class="w-[385px] rounded-2xl p-6 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                    <div class="flex space-x-4">
                        <div class="">
                            <img class="w-full" :src="card.src" alt="">
                        </div>
                        <div class="w-full">
                            <div class="border-2 w-1/2 p-2 rounded-full text-[#B4B4B4] text-center">
                                {{ card.button }}
                            </div>
                            <div class="py-2">
                                {{ card.options }}
                            </div>
                            <div class="flex justify-between space-x-3">
                                <div class="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex space-x-2">
                                    <div class="text-[#444444] font-[poppin-bold] sm:text-xl">
                                        {{ card.rating }}
                                    </div>
                                    <div class="text-[#76c9be] font-[poppin-bold] sm:text-xl">
                                        {{ card.ratingQty }}
                                    </div>
                                </div>
                            </div>
                            <div class="py-2 font-[Extra-Bold]">
                                {{ card.heading }}
                            </div>
                            <div>
                                {{ card.paragraph }}
                            </div>
                            <div>
                                {{ card.startingAt }}
                            </div>
                            <div class="pt-4 font-[Extra-Bold] text-[20px]">
                                {{ card.price }}
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
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import img1 from '@/assets/images/CannabisStrainCarousel/ImgOne.svg';
import img2 from '@/assets/images/CannabisStrainCarousel/ImgTwo.svg';
const strainTypes = ref(['Hybrid Strains', 'Indica Strains', 'Sativa Strains']);
const selectedStrainTypes = ref([strainTypes.value[0]]);

const showStrainTypeCheckboxArea = ref(true);
function toggleStrainType() {
    showStrainTypeCheckboxArea.value = !showStrainTypeCheckboxArea.value;
}
const effects = ref(['Aroused', 'Creative', 'Energetic', 'Focused', 'Giggly', 'Happy', 'Hungry', 'Relaxed', 'Sleepy', 'Talkative', 'Tingly', 'Uplifted']);
const selectedEffects = ref([effects.value[0]]);

const flavors = ref(['Ammonia', 'Apple', 'Apricot', 'Berry', 'Blue Cheese', 'Blackberry', 'Cheese', 'Chemical', 'Chestnut', 'Citrus', 'Coffee', 'Diesel', 'Earthy', 'Flowery', 'Grape', 'Grapefruit', 'Honey', 'Lavender', 'Lemon', 'Lime', 'Mango', 'Mint', 'Nutty', 'Orange', 'Peach', 'Pear', 'Pepper', 'Pine', 'Pineapple', 'Plum', 'Pungent', 'Rose', 'Sage', 'Skunk', 'Spicy/Herbal', 'Strawberry', 'Sweet', 'Tar', 'Tea', 'Tobacco', 'Tree Fruit', 'Tropical', 'Vanilla', 'Woody']);
const selectedFlavors = ref([flavors.value[0]]);

const showEffectsCheckboxArea = ref(true);
const showFlavorsCheckboxArea = ref(true);

function toggleEffects() {
    showEffectsCheckboxArea.value = !showEffectsCheckboxArea.value;
}

function toggleFlavors() {
    showFlavorsCheckboxArea.value = !showFlavorsCheckboxArea.value;
}
const checkedCheckbox = ref(null);
function handleCheckboxClick(event) {
    const targetCheckbox = event.target;

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        if (checkbox !== targetCheckbox) {
            checkbox.checked = false;
        }
    });

    checkedCheckbox.value = targetCheckbox;
}


const cards = ref([
    {
        title: 'Slide 1',
        src: img2,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Banana Cream Cake',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 2',
        src: img1,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Platinum Kush Breath',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 3',
        src: img2,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Oreoz',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 4',
        src: img2,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Banana Cream Cake',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 5',
        src: img1,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Platinum Kush Breath',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 6',
        src: img2,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Oreoz',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 7',
        src: img2,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Banana Cream Cake',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 8',
        src: img1,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Platinum Kush Breath',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 9',
        src: img2,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Oreoz',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 10',
        src: img2,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Banana Cream Cake',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 11',
        src: img1,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Platinum Kush Breath',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 12',
        src: img2,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Oreoz',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 13',
        src: img2,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Banana Cream Cake',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 14',
        src: img1,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Platinum Kush Breath',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
    {
        title: 'Slide 15',
        src: img2,
        button: 'Hybrid',
        options: 'THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Oreoz',
        paragraph: 'Lorem ipsum dolor sit amet...',
        startingAt: ' 1/8 oz. starting at',
        price: '$35.00'
    },
]);

const searchQuery = ref('');

const filteredCards = computed(() => {
    if (!searchQuery.value) return paginationCard.value;
    const query = searchQuery.value.toLowerCase();
    return paginationCard.value.filter(card => card.heading.toLowerCase().includes(query));
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

</script>

<style scoped>
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

::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
}


::-webkit-scrollbar-thumb {
    background-color: #DBF1EE;
    border-radius: 5px;
}
</style>