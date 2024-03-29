<template>
    <section class="">
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center">
            <div v-for="card in paginationCard" :key="card.image"
                class="w-[730px] rounded-2xl 2xl:p-6 p-4 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                <div class="flex space-x-4">
                    <div class="w-[30%]">
                        <img class="w-full" :src="card.image" alt="">
                    </div>
                    <div class="w-full">
                        <div class="flex space-x-10 items-end">
                            <div class="w-full">
                              <div class="flex space-x-3">
                                <div v-if="card.fullTimeButton" class="bg-[#DDE8F8] text-center p-1.5 rounded-full text-[#4C6DDC] w-[30%]">
                                    {{ card.fullTimeButton }}
                                </div>
                                <div v-if="card.partTimeButton" class="bg-[#DDE8F8] text-center p-1.5 rounded-full text-[#4C6DDC] w-[30%]">
                                    {{ card.partTimeButton }}
                                </div>
                                <div v-if="card.privateButton" class="bg-[#E1F2E5] text-center p-1.5 rounded-full text-[#8EB06A] w-[30%]">
                                    {{ card.privateButton }}
                                </div>
                                <div v-if="card.urgentButton" class="bg-[#FEF2D9] text-center p-1.5 rounded-full text-[#FAAB5B] w-[30%]">
                                    {{ card.urgentButton }}
                                </div>
                              </div>
                                <div class="py-2 font-[Extra-Bold]">
                                    {{ card.heading }}
                                </div>
                                <div class="py-2">
                                    <span class="font-[Extra-Bold] text-[#A5A5A5]">Posted by:</span> <span class="">{{ card.postedBy }}</span>
                                 </div>
                                <div class="text-[#A5A5A5]">
                                    {{ card.paragraph }}
                                </div>
                            </div>
                            <div class="w-1/2">
                              <div class="">
                                <div class="hover-btn w-full bg-[#61C1B4] text-center rounded-full p-2 text-white uppercase">
                                    {{ card.applyButton }}
                                   </div>
                              </div>
                                <router-link :to="{name: 'JobDetail'}" class="hover-btn w-full border-2 border-[#61C1B4] p-2 text-center rounded-full text-[#61C1B4]">
                                    {{ card.jobDetailButton }}
                                </router-link>
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
        fullTimeButton:'Full Time',
        partTimeButton:'',
        privateButton:'',
        urgentButton:'',
        heading: 'Product Manager, Studio',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
    },
    {
        id: '2',
        image: import('../../../assets/images/BrandBoardCardImages/Img2.svg').then((module) => module.default),
        fullTimeButton:'',
        partTimeButton:'Part Time',
        privateButton:'',
        urgentButton:'',
        heading: 'Lead Quality Control QA',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
    },
    {
        id: '3',
        image: import('../../../assets/images/BrandBoardCardImages/Img3.svg').then((module) => module.default),
        fullTimeButton:'',
        partTimeButton:'Part Time',
        privateButton:'Private',
        urgentButton:'Urgent',
        heading: 'Senior System Engineer',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
    },
    {
        id: '4',
        image: import('../../../assets/images/BrandBoardCardImages/Img3.svg').then((module) => module.default),
        fullTimeButton:'Full Time',
        partTimeButton:'',
        privateButton:'',
        urgentButton:'',
        heading: 'Product Manager, Studio',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
    },
    {
        id: '5',
        image: import('../../../assets/images/BrandBoardCardImages/Img4.svg').then((module) => module.default),
        fullTimeButton:'Full Time',
        partTimeButton:'',
        privateButton:'Private',
        urgentButton:'',
        heading: 'Product Manager, Studio',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
    },
    {
        id: '6',
        image: import('../../../assets/images/BrandBoardCardImages/Img5.svg').then((module) => module.default),
        fullTimeButton:'Full Time',
        partTimeButton:'',
        privateButton:'Private',
        urgentButton:'',
        heading: 'Product Manager, Studio',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
    },
    {
        id: '7',
        image: import('../../../assets/images/BrandBoardCardImages/Img1.svg').then((module) => module.default),
        fullTimeButton:'Full Time',
        partTimeButton:'',
        privateButton:'',
        urgentButton:'',
        heading: 'Product Manager, Studio',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
    },
    {
        id: '8',
        image: import('../../../assets/images/BrandBoardCardImages/Img2.svg').then((module) => module.default),
        fullTimeButton:'',
        partTimeButton:'Part Time',
        privateButton:'',
        urgentButton:'',
        heading: 'Lead Quality Control QA',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
    },
    {
        id: '9',
        image: import('../../../assets/images/BrandBoardCardImages/Img3.svg').then((module) => module.default),
        fullTimeButton:'',
        partTimeButton:'Part Time',
        privateButton:'Private',
        urgentButton:'Urgent',
        heading: 'Senior System Engineer',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
    },
    {
        id: '10',
        image: import('../../../assets/images/BrandBoardCardImages/Img3.svg').then((module) => module.default),
        fullTimeButton:'Full Time',
        partTimeButton:'',
        privateButton:'',
        urgentButton:'',
        heading: 'Product Manager, Studio',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
    },
    {
        id: '11',
        image: import('../../../assets/images/BrandBoardCardImages/Img4.svg').then((module) => module.default),
        fullTimeButton:'Full Time',
        partTimeButton:'',
        privateButton:'Private',
        urgentButton:'',
        heading: 'Product Manager, Studio',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
    },
    {
        id: '12',
        image: import('../../../assets/images/BrandBoardCardImages/Img5.svg').then((module) => module.default),
        fullTimeButton:'Full Time',
        partTimeButton:'',
        privateButton:'Private',
        urgentButton:'',
        heading: 'Product Manager, Studio',
        postedBy:'15 March, 2024',
        paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply Now',
        jobDetailButton:'Job Detail'
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