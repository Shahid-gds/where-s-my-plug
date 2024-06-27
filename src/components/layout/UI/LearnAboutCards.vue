<template>
    <section class="">
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center">
            <div v-for="card in paginationCard" :key="card.image" @click="selectCardAndNavigate(card)"
                class="w-[400px] rounded-[30px] p-1.5 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                <div class="relative">
                    <div>
                        <img class="w-full" :src="card.image" alt="">
                    </div>
                  <div class="p-4 pt-6 font-[Bold] w-[70%]">
                    {{ card.paragraph }}
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
import { useRouter } from 'vue-router';
import { useLearnStore } from '@/stores/modules/learnStore';

const router = useRouter();
const learnStore = useLearnStore();

function selectCardAndNavigate(card) {
    scrollToTop();
    learnStore.selectCard(card);
    router.push({ name: 'LearnDetail', params: { id: card.id } })
}

const cards = ref([
    {
        id: '1',
        image: import('../../../assets/images/LearnAboutCard/Img1.svg').then((module) => module.default),
        paragraph:'First time smoking weed? Start here',
    },
    {
        id: '2',
        image: import('../../../assets/images/LearnAboutCard/Img2.svg').then((module) => module.default),
        paragraph:'What does it feel like to be high?',
    },
    {
        id: '3',
        image: import('../../../assets/images/LearnAboutCard/Img3.svg').then((module) => module.default),
        paragraph:'A guide to cannabis product types',
    },
    {
        id: '4',
        image: import('../../../assets/images/LearnAboutCard/Img4.svg').then((module) => module.default),
        paragraph:'How much is an eighth of weed?',
    },
    {
        id: '5',
        image: import('../../../assets/images/LearnAboutCard/Img5.svg').then((module) => module.default),
        paragraph:'How much is an eighth of weed?',
    },
    {
        id: '6',
        image: import('../../../assets/images/LearnAboutCard/Img6.svg').then((module) => module.default),
        paragraph:'Lorem Ipsum is simply dum my text of the printing',
    },
    {
        id: '7',
        image: import('../../../assets/images/LearnAboutCard/Img7.svg').then((module) => module.default),
        paragraph:'Ipsum is simply dummy text of the printing',
    },
    {
        id: '8',
        image: import('../../../assets/images/LearnAboutCard/Img8.svg').then((module) => module.default),
        paragraph:'Lorem Ipsum is simply dum my text of the printing',
    },
    {
        id: '9',
        image: import('../../../assets/images/LearnAboutCard/Img9.svg').then((module) => module.default),
        paragraph:'Lorem Ipsum is simply dum my text of the printing',
    },
    {
        id: '10',
        image: import('../../../assets/images/LearnAboutCard/Img4.svg').then((module) => module.default),
        paragraph:'How much is an eighth of weed?',
    },
    {
        id: '11',
        image: import('../../../assets/images/LearnAboutCard/Img5.svg').then((module) => module.default),
        paragraph:'How much is an eighth of weed?',
    },
    {
        id: '12',
        image: import('../../../assets/images/LearnAboutCard/Img6.svg').then((module) => module.default),
        paragraph:'Lorem Ipsum is simply dum my text of the printing',
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
const cardsPerPage = 9;

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