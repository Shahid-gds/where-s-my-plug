<template>
    <section class="sm:pt-[10rem] pt-[5rem] relative pb-[25rem] container mx-auto px-6">
        <router-link :to="{ name: 'Careers' }" class="flex items-center px-4">
            <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="#61C1B4" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
            </div>

            <div class="mt-1 uppercase font-[Bold]">
                Go Back Careers Page
            </div>
        </router-link>
        <transition-group name="nested" tag="div" class="flex flex-wrap justify-center">
            <div v-for="card in cards" :key="card.image"
                class="w-full rounded-2xl 2xl:p-6 p-4 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                <div class="flex items-center space-x-4">
                    <div class="w-[10%]">
                        <img class="w-full" :src="card.image" alt="">
                    </div>
                    <div class="w-full">
                        <div class="flex space-x-10 items-center">
                            <div class="w-full">
                                <div class="">
                                    <span class="font-[Extra-Bold] text-[#A5A5A5]">Posted by:</span> <span class="">{{
            card.postedBy }}</span>
                                </div>
                                <div class="py-2 font-[Extra-Bold]">
                                    {{ card.heading }}
                                </div>
                                <div class="text-[#A5A5A5]">
                                    {{ card.paragraph }}
                                </div>
                                <div class="flex space-x-3">
                                    <div v-if="card.fullTimeButton"
                                        class="bg-[#DDE8F8] text-center p-1.5 rounded-full text-[#4C6DDC] w-[10%]">
                                        {{ card.fullTimeButton }}
                                    </div>
                                    <div v-if="card.partTimeButton"
                                        class="bg-[#DDE8F8] text-center p-1.5 rounded-full text-[#4C6DDC] w-[10%]">
                                        {{ card.partTimeButton }}
                                    </div>
                                    <div v-if="card.privateButton"
                                        class="bg-[#E1F2E5] text-center p-1.5 rounded-full text-[#8EB06A] w-[10%]">
                                        {{ card.privateButton }}
                                    </div>
                                    <div v-if="card.urgentButton"
                                        class="bg-[#FEF2D9] text-center p-1.5 rounded-full text-[#FAAB5B] w-[10%]">
                                        {{ card.urgentButton }}
                                    </div>
                                </div>
                            </div>
                            <div class="w-[20%]">
                                <div class="">
                                    <div
                                        class="hover-btn w-full bg-[#61C1B4] text-center rounded-full p-2 text-white uppercase">
                                        {{ card.applyButton }}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
        <div class="px-4">
            <div class="border-2 rounded-2xl p-6">
                <h1 class="font-[Bold] text-2xl">
                    Job Description
                </h1>
                <p class="py-2 text-[#A5A5A5]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                </p>
                <p class="py-2 text-[#A5A5A5]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                </p>
                <p class="py-2 text-[#A5A5A5]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
const cards = ref([
    {
        id: '1',
        image: import('../assets/images/BrandBoardCardImages/Img1.svg').then((module) => module.default),
        fullTimeButton: 'Full Time',
        partTimeButton: '',
        privateButton: '',
        urgentButton: '',
        heading: 'Product Manager, Studio',
        postedBy: '15 March, 2024',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply for job',
        jobDetailButton: 'Job Detail'
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

</script>