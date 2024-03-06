<template>
    <section class="">
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center">
            <div v-for="card in paginationCard" :key="card.image"
                class="rounded-2xl p-6 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                <div class="flex space-x-4">
                    <div class="">
                        <img class="w-full" :src="card.image" alt="">
                    </div>
                    <div class="">
                        <div class="py-2 font-[Extra-Bold]">
                            {{ card.heading }}
                        </div>
                        <div>
                            {{ card.paragraph }}
                        </div>
                       <div class="">
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
                            :class="{ 'pageNumber': true, 'active': pageNumber === currentPage }">{{ pageNumber }}</button>
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

const cards = ref([
    {
        id: '1',
        image: import('../../../assets/images/BrandBoardCardImages/Img1.svg').then((module) => module.default),
        heading: 'Cartel Oil Co',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '2',
        image: import('../../../assets/images/BrandBoardCardImages/Img2.svg').then((module) => module.default),
        heading: 'DRiP',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '3',
        image: import('../../../assets/images/BrandBoardCardImages/Img3.svg').then((module) => module.default),
        heading: 'Dime Industries',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '4',
        image: import('../../../assets/images/BrandBoardCardImages/Img4.svg').then((module) => module.default),
        heading: 'DRiP',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '5',
        image: import('../../../assets/images/BrandBoardCardImages/Img5.svg').then((module) => module.default),
        heading: 'Dixie Brands',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '6',
        image: import('../../../assets/images/BrandBoardCardImages/Img6.svg').then((module) => module.default),
        heading: 'Element',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '7',
        image: import('../../../assets/images/BrandBoardCardImages/Img1.svg').then((module) => module.default),
        heading: 'Cartel Oil Co',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '8',
        image: import('../../../assets/images/BrandBoardCardImages/Img2.svg').then((module) => module.default),
        heading: 'DRiP',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '9',
        image: import('../../../assets/images/BrandBoardCardImages/Img3.svg').then((module) => module.default),
        heading: 'Dime Industries',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '10',
        image: import('../../../assets/images/BrandBoardCardImages/Img4.svg').then((module) => module.default),
        heading: 'DRiP',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '11',
        image: import('../../../assets/images/BrandBoardCardImages/Img5.svg').then((module) => module.default),
        heading: 'Dixie Brands',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '12',
        image: import('../../../assets/images/BrandBoardCardImages/Img6.svg').then((module) => module.default),
        heading: 'Element',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '13',
        image: import('../../../assets/images/BrandBoardCardImages/Img1.svg').then((module) => module.default),
        heading: 'Dixie Brands',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '14',
        image: import('../../../assets/images/BrandBoardCardImages/Img2.svg').then((module) => module.default),
        heading: 'Dime Industries',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '15',
        image: import('../../../assets/images/BrandBoardCardImages/Img3.svg').then((module) => module.default),
        heading: 'Cartel Oil Co',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '16',
        image: import('../../../assets/images/BrandBoardCardImages/Img4.svg').then((module) => module.default),
        heading: 'Element',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '17',
        image: import('../../../assets/images/BrandBoardCardImages/Img5.svg').then((module) => module.default),
        heading: 'Cartel Oil Co',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '18',
        image: import('../../../assets/images/BrandBoardCardImages/Img6.svg').then((module) => module.default),
        heading: 'DRiP',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '19',
        image: import('../../../assets/images/BrandBoardCardImages/Img1.svg').then((module) => module.default),
        heading: 'Dixie Brands',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '20',
        image: import('../../../assets/images/BrandBoardCardImages/Img2.svg').then((module) => module.default),
        heading: 'Element',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '21',
        image: import('../../../assets/images/BrandBoardCardImages/Img3.svg').then((module) => module.default),
        heading: 'Dime Industries',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '22',
        image: import('../../../assets/images/BrandBoardCardImages/Img4.svg').then((module) => module.default),
        heading: 'Element',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '23',
        image: import('../../../assets/images/BrandBoardCardImages/Img5.svg').then((module) => module.default),
        heading: 'Dime Industries',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '24',
        image: import('../../../assets/images/BrandBoardCardImages/Img6.svg').then((module) => module.default),
        heading: 'Dixie Brands',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '25',
        image: import('../../../assets/images/BrandBoardCardImages/Img1.svg').then((module) => module.default),
        heading: 'DRiP',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '26',
        image: import('../../../assets/images/BrandBoardCardImages/Img3.svg').then((module) => module.default),
        heading: 'Cartel Oil Co',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
    },
    {
        id: '27',
        image: import('../../../assets/images/BrandBoardCardImages/Img2.svg').then((module) => module.default),
        heading: 'Element',
        paragraph: 'Lorem ipsum dolor sit amet,',
        rating: '5.0',
        ratingQty: '(120)',
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
const cardsPerPage = 21;

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
    color:#000101;
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
  