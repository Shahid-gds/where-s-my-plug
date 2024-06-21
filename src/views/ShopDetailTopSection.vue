<template>
    <section class="py-[20rem] pb-[25rem]">
        <div class="container mx-auto">
            <div class="sm:flex justify-between bg-white p-6 shadow-xl rounded-xl">
                <div class="w-full flex space-x-6 items-center">
                    <div class="w-[20%]">
                        <img class="w-full border-2 p-4 rounded-xl" :src="card.src" alt="Card Image" />
                    </div>
                    <div class="">
                        <h1 class="text-4xl font-bold">{{ card.heading }}</h1>
                        <div class="">
                            <div class="flex items-center space-x-3 py-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-bold uppercase">{{ card.time }}</p>
                                </div>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div
                                    class="flex items-center space-x-3 bg-[#61C1B4] p-2 px-4 rounded-xl cursor-pointer">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="white" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                                        </svg>
                                    </div>
                                    <div class="text-white">Phone</div>
                                </div>
                                <div
                                    class="flex items-center space-x-3 bg-[#61C1B4] p-2 px-4 rounded-xl cursor-pointer">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="white" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div class="text-white">Email</div>
                                </div>
                                <div
                                    class="flex items-center space-x-3 bg-[#61C1B4] p-2 px-4 rounded-xl cursor-pointer">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="white" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                        </svg>
                                    </div>
                                    <div class="text-white">Details</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div class="w-full sm:block hidden relative">
                        <div class="w-full flex justify-center mt-[2.5rem] absolute">
                            <div class="relative w-full">
                                <div class="w-full relative">
                                    <input class="border-2 shadow-xl w-full p-6 px-[4.5rem] rounded-2xl" type="text"
                                        placeholder="What’s your address?">
                                    <div class="absolute top-3 left-4">
                                        <img src="../components/icons/locationIcon.svg" alt="">
                                    </div>
                                </div>
                                <div
                                    class="flex items-center justify-center space-x-3 bg-[#61c1b4] w-[5rem] p-4 absolute top-1.5 right-1.5 rounded-2xl cursor-pointer">
                                    <div>
                                        <img src="../components/icons/searchIcon.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sm:hidden">
                        <div class="w-full flex justify-center mt-[2rem] relative">
                            <div class="w-full flex justify-center mt-[2.5rem] absolute px-8">
                                <div class="relative xl:w-1/2 w-full">
                                    <div class="relative">
                                        <input class="border-2 shadow-xl w-full p-6 px-[4.5rem] rounded-2xl" type="text"
                                            placeholder="What’s your address?">
                                        <div class="absolute top-3 left-4">
                                            <img src="../components/icons/locationIcon.svg" alt="">
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center justify-center space-x-3 bg-[#61c1b4] w-[5rem] p-4 absolute top-1.5 right-1.5 rounded-2xl cursor-pointer">
                                        <div>
                                            <img src="../components/icons/searchIcon.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import img1 from '@/assets/images/DispensariesSlidebarImages/Img1.svg';
import img2 from '@/assets/images/DispensariesSlidebarImages/Img2.svg';
import img3 from '@/assets/images/DispensariesSlidebarImages/Img3.svg';
import img4 from '@/assets/images/DispensariesSlidebarImages/Img4.svg';

const card = ref({});
const route = useRoute();

onMounted(() => {
    fetchCardDetails();
});

const fetchCardDetails = () => {
    const cardId = route.params.id;
    card.value = getCardById(cardId);
};

const getCardById = (id) => {
    const cards = [
        {
            id: '1',
            src: img1,
            heading: 'Dreadlock & Jetset',
            time: '10:00 am - 8:00 pm',
            phoneBtn: 'Phone',
            emailBtn: 'Email',
            detailBtn: 'Detail'
        },
        {
            id: '2',
            src: img2,
            heading: 'Coffeeshop The Stud',
            time: '10:00 am - 8:00 pm',
            phoneBtn: 'Phone',
            emailBtn: 'Email',
            detailBtn: 'Detail'
        },
        {
            id: '3',
            src: img3,
            heading: 'Het Ballonnetje Coffeeshop - Amst...',
            time: '10:00 am - 8:00 pm',
            phoneBtn: 'Phone',
            emailBtn: 'Email',
            detailBtn: 'Detail'
        },
        {
            id: '4',
            src: img4,
            heading: 'Dreadlock & Jetset',
            time: '10:00 am - 8:00 pm',
            phoneBtn: 'Phone',
            emailBtn: 'Email',
            detailBtn: 'Detail'
        }
    ];
    return cards.find(card => card.id === id);
};
</script>

<style scoped>
/* Add styles for your card details page */
</style>