<template>
    <section class="md:py-[5rem] py-[1rem]">
        <div class="md:flex flex-wrap justify-center px-6 text-left pb-[5rem]">
            <div class="pb-2 m-2">
                <div @click="setActiveCategory('Concentrates')"
                    :class="{ 'active border-2 border-[#837e7e] text-[#707070] shadow-xl font-[Bold]': activeCategory === 'Concentrates' }"
                    class="lg:w-[220px] w-full border-2 bg-[white] border-[#CCE3E0] hover:border-[#707070] hover:shadow-xl transition-all duration-300 p-4 text-center rounded-xl uppercase text-[#959595] cursor-pointer">
                    Concentrates
                </div>
            </div>
            <div class="pb-2 m-2">
                <div @click="setActiveCategory('Flower')"
                    :class="{ 'active border-2 text-[#707070] border-[#837e7e] shadow-xl font-[Bold]': activeCategory === 'Flower' }"
                    class="lg:w-[220px] w-full border-2 bg-[white] border-[#CCE3E0] hover:border-[#707070] hover:shadow-xl transition-all duration-300 p-4 text-center rounded-xl uppercase text-[#959595] cursor-pointer">
                    Flower
                </div>
            </div>
            <div class="pb-2 m-2">
                <div @click="setActiveCategory('Cartridges')"
                    :class="{ 'active border-2 text-[#707070] border-[#837e7e] shadow-xl font-[Bold]': activeCategory === 'Cartridges' }"
                    class="lg:w-[220px] w-full border-2 bg-[white] border-[#CCE3E0] hover:border-[#707070] hover:shadow-xl transition-all duration-300 p-4 text-center rounded-xl uppercase text-[#959595] cursor-pointer">
                    Cartridges
                </div>
            </div>
            <div class="pb-2 m-2">
                <div @click="setActiveCategory('Vaping')"
                    :class="{ 'active border-2 text-[#707070] border-[#837e7e] shadow-xl font-[Bold]': activeCategory === 'Vaping' }"
                    class="lg:w-[220px] w-full border-2 bg-[white] border-[#CCE3E0] hover:border-[#707070] hover:shadow-xl transition-all duration-300 p-4 text-center rounded-xl uppercase text-[#959595] cursor-pointer">
                    Vaping
                </div>
            </div>
            <div class="pb-2 m-2">
                <div @click="setActiveCategory('Edibles')"
                    :class="{ 'active border-2 text-[#707070] border-[#837e7e] shadow-xl font-[Bold]': activeCategory === 'Edibles' }"
                    class="lg:w-[220px] w-full border-2 bg-[white] border-[#CCE3E0] hover:border-[#707070] hover:shadow-xl transition-all duration-300 p-4 text-center rounded-xl uppercase text-[#959595] cursor-pointer">
                    Edibles
                </div>
            </div>
            <div class="pb-2 m-2">
                <div @click="setActiveCategory('Pre-rolls')"
                    :class="{ 'active border-2 text-[#707070] border-[#837e7e] shadow-xl font-[Bold]': activeCategory === 'Pre-rolls' }"
                    class="lg:w-[220px] w-full border-2 bg-[white] border-[#CCE3E0] hover:border-[#707070] hover:shadow-xl transition-all duration-300 p-4 text-center rounded-xl uppercase text-[#959595] cursor-pointer">
                    Pre-rolls
                </div>
            </div>
            <div class="pb-2 m-2">
                <div @click="setActiveCategory('Hemp CBD')"
                    :class="{ 'active border-2 text-[#707070] border-[#837e7e] shadow-xl font-[Bold]': activeCategory === 'Hemp CBD' }"
                    class="lg:w-[220px] w-full border-2 bg-[white] border-[#CCE3E0] hover:border-[#707070] hover:shadow-xl transition-all duration-300 p-4 text-center rounded-xl uppercase text-[#959595] cursor-pointer">
                    Hemp CBD
                </div>
            </div>
        </div>
        <div class="container mx-auto py-6 w-[182px] relative">
            <div class="bg-[#61c1b4] w-[182px] mr-auto ml-auto h-0.5">
                <div class="w-full absolute top-0 ">
                    <img class="mr-auto ml-auto" src="@/components/icons/drugLeaf.svg" alt="">
                </div>
            </div>
        </div>
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center">
            <div v-for="card in paginationCard" :key="card.index" @click="navigateToDetails(card.id)"
                class="2xl:w-[420px] w-[400px] cursor-pointer border-2 border-[#CCE3E0] m-2 p-6 py-8 rounded-2xl hover:shadow-xl hover:border-[#61C1B4] duration-300 transition-all">
                <div class="flex justify-center pb-6">
                    <div>
                        <img :src="card.image">
                    </div>
                </div>
                <div>
                    {{ card.heading }}
                </div>
                <div class="py-2 font-[Extra-Bold]">
                    {{ card.subHeading }}
                </div>
                <div class="flex items-center space-x-5 pb-4">
                    <div class="flex">
                        <div class="w-[24px]">
                            <img :src="card.stars">
                        </div>
                        <div class="w-[24px]">
                            <img :src="card.stars">
                        </div>
                        <div class="w-[24px]">
                            <img :src="card.stars">
                        </div>
                        <div class="w-[24px]">
                            <img :src="card.stars">
                        </div>
                        <div class="w-[24px]">
                            <img :src="card.stars">
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
                <div>
                    {{ card.paragraph }}
                </div>

            </div>
        </transition-group>
        <div class="container mx-auto flex justify-end mt-5 px-[7.8rem]">
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
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToDetails = (id) => {
    scrollToTop();
    router.push({ name: 'ProductDetail', params: { id } });
}

const cards = ref([
    {
        id: '1',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img1.svg').then((module) => module.default),
        heading: 'Flower', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Yoda Candy THCa Flower',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '2',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img2.svg').then((module) => module.default),
        heading: 'Cartridges', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Cookie Milk D8+THCP Vape Cart ',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '3',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img3.svg').then((module) => module.default),
        heading: 'Pre-rolls', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Delta 8 THC Pre Roll Sativa Sour Candy',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '4',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img4.svg').then((module) => module.default),
        heading: 'Terpenes', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Sour Haze Live Resin Terpene',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '5',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img5.svg').then((module) => module.default),
        heading: 'Vape Pens', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'MAC 2ml THCa Sauce Vape Pen',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '6',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img6.svg').then((module) => module.default),
        heading: 'Cartridges', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Mimosa Live Resin Delta-8 | 1ml',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '7',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img1.svg').then((module) => module.default),
        heading: 'Flower', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Yoda Candy THCa Flower',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '8',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img2.svg').then((module) => module.default),
        heading: 'Cartridges', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Cookie Milk D8+THCP Vape Cart ',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '9',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img3.svg').then((module) => module.default),
        heading: 'Pre-rolls', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Delta 8 THC Pre Roll Sativa Sour Candy',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '10',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img4.svg').then((module) => module.default),
        heading: 'Terpenes', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Sour Haze Live Resin Terpene',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '11',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img5.svg').then((module) => module.default),
        heading: 'Vape Pens', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'MAC 2ml THCa Sauce Vape Pen',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '12',
        category: 'Concentrates', image: import('../../../assets/images/ProductsCategories/Img6.svg').then((module) => module.default),
        heading: 'Cartridges', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Mimosa Live Resin Delta-8 | 1ml',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },

    // Flower Categories
    {
        id: '13',
        category: 'Flower', image: import('../../../assets/images/ProductsCategories/Img1.svg').then((module) => module.default),
        heading: 'Flower', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Yoda Candy THCa Flower',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '14',
        category: 'Flower', image: import('../../../assets/images/ProductsCategories/Img4.svg').then((module) => module.default),
        heading: 'Terpenes', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Sour Haze Live Resin Terpene',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '15',
        category: 'Flower', image: import('../../../assets/images/ProductsCategories/Img5.svg').then((module) => module.default),
        heading: 'Vape Pens', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'MAC 2ml THCa Sauce Vape Pen',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
]);


const activeCategory = ref('Concentrates');

const setActiveCategory = (category) => {
    activeCategory.value = category;
};

const filteredCards = computed(() => cards.value.filter((card) => card.category === activeCategory.value));


onMounted(async () => {
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            stars: await card.stars,
        }))
    );
});
const cardsPerPage = 12;

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(filteredCards.value.length / cardsPerPage));

const paginationCard = computed(() => {
    const startIndex = (currentPage.value - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return filteredCards.value.slice(startIndex, endIndex);
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