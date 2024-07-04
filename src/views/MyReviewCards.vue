<template>
    <section class="pb-[20rem] -mt-[5rem] container mx-auto xl:flex xl:space-x-5 px-6">
        <div class="w-full">
            <transition-group name="nested" tag="div" class="w-full rounded-xl shadow-xl bg-[white] px-6 p-6">
                <div class="cursor-pointer" v-for="(card, index) in cards" :key="card.id" 
                    :class="{ 'border-b-2': index !== cards.length - 1 }">
                 <div class="lg:flex  items-center py-4" >
                    <div class="w-full lg:flex items-center lg:space-x-6">
                        <div class="lg:w-[140px] h-[140px] border-2 p-4 rounded-xl">
                            <img class="w-[80px] mr-auto ml-auto" :src="card.image" alt="">
                        </div>
                        <div class="pt-2">
                            <div class="text-[#61C1B4] font-[Bold] text-[18px]">
                                {{ card.weight }}
                            </div>
                            <div class="font-[Semi-Bold] text-[20px] pb-4">
                                {{ card.heading }}
                            </div>
                            <div>
                                {{ card.paragraph }}
                            </div>
                        </div>
                       </div>
                       <div class="lg:w-1/2 pt-4">
                        <div class="text-[#00000] font-[Semi-Bold]">
                            {{ card.rate }}
                        </div>
                        <div class="">
                            {{ card.status }}
                        </div>
                        <div class="flex pb-4">
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
                        <div class="lg:hidden">
                            <div class="flex justify-center items-center space-x-2 bg-[#DEF8F4] p-2 px-8 rounded-full">
                                <div class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#358177" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                      </svg>                                                              
                                </div>
                                <div class="text-[#358177] uppercase mt-1 lg:hidden">
                                    {{ card.editReview }}
                                </div>
                            </div>
                        </div>
                       </div>
                       <div class="lg:w-1/2 flex justify-end items-center relative">
                        <div class="flex items-center space-x-2 lg:bg-[#DEF8F4] p-2 px-8 rounded-full">
                            <div class="lg:block hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#358177" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                  </svg>                                                              
                            </div>
                            <div @click="openReviewModal(selectedCard)" class="text-[#358177] uppercase mt-1 lg:block hidden">
                                {{ card.editReview }}
                            </div>
                        </div>
                        <div class="absolute lg:top-[3.5rem] top-2 text-[#AEAEAE]">
                            {{ card.statusDate }}
                        </div>
                       </div>
                 </div>
                </div>
            </transition-group>
        </div>
        <reviewModal  :show="showReviewModal" :onClose="colseReviewModal" :onSubmit="submitReview" />
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import reviewModal from '../components/layout/UI/popupModels/reviewModal.vue'
// import { useRouter } from 'vue-router';
// const router = useRouter();

// const navigateToDetails = (id) => {
//     scrollToTop();
//     router.push({ name: 'MyOrderDetails', params: { id } });
// };


const cards = ref([
    {
        id: '1',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Lorem Ipsum is simply',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        rate: 'Rated 4.9 / 5',
        status: 'Based on 848 reviews',
        stars: import('../components/icons/star.svg').then((module) => module.default),
        editReview: 'Edit Reviews',
        statusDate: 'Posted on 18 March, 2024',
        reviews: [],
        rating: [],
    },
    {
        id: '2',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Lorem Ipsum is simply',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        rate: 'Rated 4.9 / 5',
        status: 'Based on 848 reviews',
        stars: import('../components/icons/star.svg').then((module) => module.default),
        editReview: 'Edit Reviews',
        statusDate: 'Posted on 18 March, 2024'
    },
    {
        id: '3',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Lorem Ipsum is simply',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        rate: 'Rated 4.9 / 5',
        status: 'Based on 848 reviews',
        stars: import('../components/icons/star.svg').then((module) => module.default),
        editReview: 'Edit Reviews',
        statusDate: 'Posted on 18 March, 2024'
    },
    {
        id: '4',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Lorem Ipsum is simply',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        rate: 'Rated 4.9 / 5',
        status: 'Based on 848 reviews',
        stars: import('../components/icons/star.svg').then((module) => module.default),
        editReview: 'Edit Reviews',
        statusDate: 'Posted on 18 March, 2024'
    },
    {
        id: '5',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Lorem Ipsum is simply',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        rate: 'Rated 4.9 / 5',
        status: 'Based on 848 reviews',
        stars: import('../components/icons/star.svg').then((module) => module.default),
        editReview: 'Edit Reviews',
        statusDate: 'Posted on 18 March, 2024'
    },
 
  
]);
const selectedCard = ref(null);

const showReviewModal = ref(false);
const openReviewModal = (card) => {
    selectedCard.value = card;
    showReviewModal.value = true;
};
const colseReviewModal = () => {
    showReviewModal.value = false;
}
const submitReview = (review, rating) => {
    if (selectedCard.value){
        selectedCard.value.reviews = [review, rating];
    }
}
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
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
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

::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
}


::-webkit-scrollbar-thumb {
    background-color: #DBF1EE;
    border-radius: 5px;
}
</style>