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
                            <!-- <option value="price"></option>
                      <option value="rating"></option> -->
                        </select>
                    </div>
                </div>
            </div>
            <div class="px-4 text-[#61C1B4]">
                <h1>ALL DISPENSARY RESULTS</h1>
            </div>
            <transition-group name="nested" tag="div" class=" overflow-y-auto h-[1000px]">
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
                            <div class="py-2 uppercase text-[#61C1B4] font-[Bold]">
                                {{ card.button }}
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
        title: 'Slide 1',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },
    {
        title: 'Slide 2',
        src: img2,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Coffeeshop The Stud',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },
    {
        title: 'Slide 3',
        src: img3,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Het Ballonnetje Coffeeshop - Amst...',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },
    {
        title: 'Slide 4',
        src: img4,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },
    {
        title: 'Slide 5',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Coffeeshop The Stud',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },
    {
        title: 'Slide 6',
        src: img2,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },
    {
        title: 'Slide 1',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },
    {
        title: 'Slide 2',
        src: img2,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Coffeeshop The Stud',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },
    {
        title: 'Slide 3',
        src: img3,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Het Ballonnetje Coffeeshop - Amst...',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },
    {
        title: 'Slide 4',
        src: img4,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },
    {
        title: 'Slide 5',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Coffeeshop The Stud',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },
    {
        title: 'Slide 6',
        src: img2,
        rating: '5.0',
        ratingQty: '(120)',
        heading: 'Dreadlock & Jetset',
        optionsOne: 'Dispensary',
        optionsTwo: 'Recreational',
        paragraph: 'Lorem ipsum dolor sit amet,',
        button: 'order Now'
    },

]);
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
</style>