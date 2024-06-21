<template>
    <section class="">
        <div class="p-2 bg-[#FFFFFF] w-[480px] xl:block hidden">
            <div class="p-4 pt-2">
                <h1 class="font-[Bold] py-2 text-xl">Find weed dispensaries near you</h1>
                <div>
                    <textarea type="text" class="w-full rounded-2xl p-4 px-6  bg-[#F6F6F6]"
                        placeholder="Recreational    |    Medical    |    Open now    |    Pre-order    |    CBD & Delta    |    Deals"></textarea>
                </div>
                <div class="flex justify-between items-center">
                    <div>
                        <h1><span class="text-[#A8A8A8]">Showing Results</span> {{ (currentPage - 1) * cardsPerPage + 1
                            }} - {{ Math.min(currentPage * cardsPerPage, cards.length) }}</h1>
                    </div>
                    <div>
                        <label for="sortBy" class="">Sort By:</label>
                        <select id="sortBy" v-model="sortBy" @change="sortCards" class="rounded-lg outline-none">
                            <!-- <option value="price">Price</option>
                            <option value="rating">Rating</option> -->
                        </select>
                    </div>
                </div>
            </div>
            <div class="px-4 text-[#61C1B4]">
                <h1>ALL DISPENSARY RESULTS</h1>
            </div>
            <transition-group name="nested" tag="div" class="overflow-y-auto h-[1000px]">
                <div v-for="card in paginationCard" :key="card.id" @click="navigateToDetails(card.id)"
                    :class="{ 'border-b-2': index !== cards.length - 1 }"
                    class="rounded-2xl p-3 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                    <div class="flex space-x-4">
                        <div class="border-2 h-[80px] p-3 rounded-xl">
                            <img class="w-full" :src="card.src" alt="">
                        </div>
                        <div class="w-full">
                            <div class="flex items-center space-x-3">
                                <div class="flex">
                                    <div class="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex space-x-2">
                                    <div class="text-[#444444] font-[poppin-bold]">
                                        {{ card.rating }}
                                    </div>
                                    <div class="text-[#76c9be] font-[poppin-bold]">
                                        {{ card.ratingQty }}
                                    </div>
                                </div>
                            </div>
                            <div class="py-2 font-[Bold]">
                                {{ card.heading }}
                            </div>
                            <div class="text-[#A5A5A5] flex space-x-3 items-center">
                                <div>{{ card.optionsOne }}</div>
                                <div class="w-2 h-2 bg-[#A5A5A5] rounded-full"></div>
                                <div>{{ card.optionsTwo }}</div>
                            </div>
                            <div>
                                {{ card.paragraph }}
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="2" stroke="#61C1B4" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64" />
                                        </svg>
                                    </div>
                                    <div class="font-bold">
                                        {{ card.distence }}
                                    </div>
                                </div>
                                <div class="rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="#61C1B4" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>

        <TransitionGroup name="list" tag="ul" class="xl:hidden relative">
            <div v-if="isSideMenuOpen" @click="closeSideMenuOutside" class="fixed inset-0 -z-10 opacity-25">
            </div>
            <div class="bg-[#FFFFFF] p-2  sm:w-[480px]" v-if="isSideMenuOpen">

                <div class="p-4 pt-2 bg-[#FFFFFF]">
                    <div class="flex items-center justify-between">
                        <div>
                            <h1 class="font-[Bold] py-2">Find weed dispensaries near you</h1>
                        </div>
                        <div class="bg-[#F6F6F6] p-1 rounded-lg" @click="toggleSideMenu">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <textarea type="text" class="w-full rounded-2xl p-4 px-6  bg-[#F6F6F6]"
                            placeholder="Recreational    |    Medical    |    Open now    |    Pre-order    |    CBD & Delta    |    Deals"></textarea>
                    </div>
                    <div class="flex justify-between items-center">
                        <div>
                            <h1><span class="text-[#A8A8A8]">Showing Results</span> {{ (currentPage - 1) * cardsPerPage
                            + 1
                                }} - {{ Math.min(currentPage * cardsPerPage, cards.length) }}</h1>
                        </div>
                        <div>
                            <label for="sortBy" class="">Sort By:</label>
                            <select id="sortBy" v-model="sortBy" @change="sortCards" class="rounded-lg outline-none">
                                <!-- <option value="price"></option>
                      <option value="rating"></option> -->
                            </select>
                        </div>
                    </div>
                </div>
                <div class="px-4 text-[#61C1B4]">
                    <h1>ALL DISPENSARY RESULTS</h1>
                </div>
                <transition-group name="nested" tag="div" class=" overflow-y-scroll h-[775px] pb-[10rem]">
                    <div v-for="card in paginationCard" :key="card.image"
                        class="rounded-2xl p-3 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                        <div class="flex space-x-4">
                            <div class="border-2 h-[80px] p-3 rounded-xl">
                                <img class="w-full" :src="card.src" alt="">
                            </div>
                            <div class="w-full">
                                <div class="flex items-center space-x-3">
                                    <div class="flex">
                                        <div class="">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="#F1A026" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="#F1A026" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="#F1A026" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="#F1A026" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                                stroke-width="1.5" stroke="#F1A026" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="flex space-x-2">
                                        <div class="text-[#444444] font-[poppin-bold]">
                                            {{ card.rating }}
                                        </div>
                                        <div class="text-[#76c9be] font-[poppin-bold]">
                                            {{ card.ratingQty }}
                                        </div>
                                    </div>
                                </div>
                                <div class="sm:py-2 font-[Bold]">
                                    {{ card.heading }}
                                </div>
                                <div class="text-[#A5A5A5] flex space-x-3 items-center">
                                    <div>{{ card.optionsOne }}</div>
                                    <div class="w-2 h-2 bg-[#A5A5A5] rounded-full"></div>
                                    <div>{{ card.optionsTwo }}</div>
                                </div>
                                <div>
                                    {{ card.paragraph }}
                                </div>
                                <div class="py-2 uppercase text-[#61C1B4] font-[Bold]">
                                    {{ card.button }}
                                </div>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </div>
            <div class="absolute -z-10 top-0 p-6 cursor-pointer 2xl:hidden">
                <div class="w-full">
                    <button @click="toggleSideMenu" class="block 2xl:hidden" transition="slide-fade">
                        <!-- Show menu icon or cancel icon based on isMobileMenuOpen -->
                        <svg v-if="!isSideMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                        </svg>
                    </button>
                </div>
            </div>
        </TransitionGroup>
    </section>
</template>

<script setup>
import { ref, onMounted, computed, TransitionGroup } from 'vue';
import img1 from '@/assets/images/DispensariesSlidebarImages/Img1.svg';
import img2 from '@/assets/images/DispensariesSlidebarImages/Img2.svg';
import img3 from '@/assets/images/DispensariesSlidebarImages/Img3.svg';
import img4 from '@/assets/images/DispensariesSlidebarImages/Img4.svg';
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateToDetails = (id) => {
    router.push({ name: 'ShopDetail', params: { id } });
};
const closeSideMenuOutside = () => {
    isSideMenuOpen.value = false;
};
const isSideMenuOpen = ref(false);
const toggleSideMenu = () => {
    isSideMenuOpen.value = !isSideMenuOpen.value;
};
const sortingOptions = {
    price: (a, b) => a.price.localeCompare(b.price),
    rating: (a, b) => b.rating - a.rating,
};
const cards = ref([
    {
        id: '1',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },
    {
        id: '2',
        src: img2,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Coffeeshop The Stud',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },
    {
        id: '3',
        src: img3,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Het Ballonnetje Coffeeshop - Amst...',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },
    {
        id: '4',
        src: img4,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },
    {
        id: '5',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Coffeeshop The Stud',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },
    {
        id: '6',
        src: img2,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },
    {
        id: '7',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },
    {
        id: '8',
        src: img2,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Coffeeshop The Stud',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },
    {
        id: '9',
        src: img3,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Het Ballonnetje Coffeeshop - Amst...',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },
    {
        id: '10',
        src: img4,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },
    {
        id: '11',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Coffeeshop The Stud',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },
    {
        id: '12',
        src: img2,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        distence: '2.4 miles away'
    },

]);
const cardDetial = ref([
    {
        phone: 'Phone',
        email: 'Email',
        detailBtn: 'Detail'
    }
])
const sortBy = ref('price'); // Default sorting option
function sortCards() {
    cards.value.sort(sortingOptions[sortBy.value]);
}


const currentPage = ref(1);

const cardsPerPage = 30;

// Compute pagination for current page
const paginationCard = computed(() => {
    const startIndex = (currentPage.value - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cards.value.slice(startIndex, endIndex);
});

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

textarea {
    resize: none;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(-400px);
}

::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
}


::-webkit-scrollbar-thumb {
    background-color: #DBF1EE;
    border-radius: 5px;
}

.card-list-enter-active,
.card-list-leave-active {
    transition: all 0.5s ease;
}

.card-list-enter-from,
.card-list-leave-to {
    opacity: 0;

}
</style>