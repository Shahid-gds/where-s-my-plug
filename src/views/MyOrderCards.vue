<template>
    <section class="pb-[20rem] -mt-[5rem] container mx-auto xl:flex xl:space-x-5 px-6">
        <div class="w-full">
            <transition-group name="nested" tag="div" class="w-full rounded-xl shadow-xl bg-[white] px-6 p-6">
                <div class="cursor-pointer" v-for="(card, index) in cards" :key="card.id"
                    @click="navigateToDetails(card.id)" :class="{ 'border-b-2': index !== cards.length - 1 }">
                    <div class="lg:flex  items-center py-4">
                        <div class="w-full md:flex items-center md:space-x-6">
                            <div class="md:w-[140px] h-[140px] border-2 p-4 rounded-xl">
                                <img class="w-[80px] mr-auto ml-auto" :src="card.image" alt="">
                            </div>
                            <div>
                                <div class="flex justify-between pt-2">
                                    <div class="text-[#61C1B4] font-[Bold] text-[18px] ">
                                        {{ card.weight }}
                                    </div>
                                    <div class="text-[#7D7D7D] font-[Semi-Bold] xl:hidden md:hidden">
                                        {{ card.qty }}
                                    </div>
                                </div>
                                <div class="font-[Semi-Bold] text-[20px] pb-4">
                                    {{ card.heading }}
                                </div>
                                <div>
                                    {{ card.paragraph }}
                                </div>
                                <div class="xl:w-1/2 md:flex items-center md:space-x-24">
                                    <div class="text-[#7D7D7D] font-[Semi-Bold] xl:hidden md:block hidden">
                                        {{ card.qty }}
                                    </div>
                                   <div class="py-2">
                                    <div class="bg-[#E4E4E4] text-center p-2 px-6 rounded-full text-[#929292] uppercase xl:hidden">
                                        {{ card.status }}
                                    </div>
                                   </div>
                                   <div class="lg:hidden">
                                    <div class="flex justify-center items-center space-x-2 bg-[#DEF8F4] p-2 px-8 rounded-full">
                                        <div class="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11.311" height="12" viewBox="0 0 11.311 12">
                                                <path id="Path_7350" data-name="Path 7350" d="M11.623-6.6a.532.532,0,0,1-.148.577L10.46-5.1a4.535,4.535,0,0,1,.04.6,4.535,4.535,0,0,1-.04.6l1.015.923a.532.532,0,0,1,.148.577,5.95,5.95,0,0,1-.368.8l-.11.19a6.175,6.175,0,0,1-.518.734.536.536,0,0,1-.574.159L8.747-.935a5.128,5.128,0,0,1-1.031.6L7.423,1A.562.562,0,0,1,7,1.418,6.124,6.124,0,0,1,5.979,1.5,5.994,5.994,0,0,1,5,1.418.562.562,0,0,1,4.577,1L4.284-.337a4.607,4.607,0,0,1-1.031-.6l-1.3.417a.535.535,0,0,1-.574-.159,6.15,6.15,0,0,1-.518-.734L.746-1.6a5.846,5.846,0,0,1-.37-.8.532.532,0,0,1,.149-.577L1.539-3.9A4.535,4.535,0,0,1,1.5-4.5a4.535,4.535,0,0,1,.039-.6L.525-6.019A.531.531,0,0,1,.376-6.6a5.874,5.874,0,0,1,.37-.8l.109-.19a6.071,6.071,0,0,1,.518-.732.532.532,0,0,1,.574-.16l1.3.416a4.507,4.507,0,0,1,1.031-.6L4.577-10A.532.532,0,0,1,5-10.418,6.033,6.033,0,0,1,6-10.5a6.033,6.033,0,0,1,1,.082A.532.532,0,0,1,7.423-10l.293,1.338a5,5,0,0,1,1.031.6l1.305-.416a.533.533,0,0,1,.574.16,6.068,6.068,0,0,1,.518.732l.11.19A5.95,5.95,0,0,1,11.623-6.6ZM6-2.625a1.879,1.879,0,0,0,1.875-1.9A1.888,1.888,0,0,0,6-6.4,1.888,1.888,0,0,0,4.125-4.521,1.879,1.879,0,0,0,6-2.625Z" transform="translate(-0.345 10.5)" fill="#358177"/>
                                              </svg>                              
                                        </div>
                                        <div class="text-[#358177] uppercase mt-1">
                                            {{ card.manage }}
                                        </div>
                                    </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="xl:w-1/2 flex items-center justify-center space-x-24">
                            <div class="text-[#7D7D7D] font-[Semi-Bold] xl:block hidden">
                                {{ card.qty }}
                            </div>
                            <div class="bg-[#E4E4E4] p-2 px-6 rounded-full text-[#929292] uppercase xl:block hidden">
                                {{ card.status }}
                            </div>
                        </div>
                        <div class="lg:w-1/2 flex justify-end items-center relative">
                            <div class="flex items-center space-x-2 lg:bg-[#DEF8F4] p-2 px-8 rounded-full">
                                <div class="lg:block hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.311" height="12"
                                        viewBox="0 0 11.311 12">
                                        <path id="Path_7350" data-name="Path 7350"
                                            d="M11.623-6.6a.532.532,0,0,1-.148.577L10.46-5.1a4.535,4.535,0,0,1,.04.6,4.535,4.535,0,0,1-.04.6l1.015.923a.532.532,0,0,1,.148.577,5.95,5.95,0,0,1-.368.8l-.11.19a6.175,6.175,0,0,1-.518.734.536.536,0,0,1-.574.159L8.747-.935a5.128,5.128,0,0,1-1.031.6L7.423,1A.562.562,0,0,1,7,1.418,6.124,6.124,0,0,1,5.979,1.5,5.994,5.994,0,0,1,5,1.418.562.562,0,0,1,4.577,1L4.284-.337a4.607,4.607,0,0,1-1.031-.6l-1.3.417a.535.535,0,0,1-.574-.159,6.15,6.15,0,0,1-.518-.734L.746-1.6a5.846,5.846,0,0,1-.37-.8.532.532,0,0,1,.149-.577L1.539-3.9A4.535,4.535,0,0,1,1.5-4.5a4.535,4.535,0,0,1,.039-.6L.525-6.019A.531.531,0,0,1,.376-6.6a5.874,5.874,0,0,1,.37-.8l.109-.19a6.071,6.071,0,0,1,.518-.732.532.532,0,0,1,.574-.16l1.3.416a4.507,4.507,0,0,1,1.031-.6L4.577-10A.532.532,0,0,1,5-10.418,6.033,6.033,0,0,1,6-10.5a6.033,6.033,0,0,1,1,.082A.532.532,0,0,1,7.423-10l.293,1.338a5,5,0,0,1,1.031.6l1.305-.416a.533.533,0,0,1,.574.16,6.068,6.068,0,0,1,.518.732l.11.19A5.95,5.95,0,0,1,11.623-6.6ZM6-2.625a1.879,1.879,0,0,0,1.875-1.9A1.888,1.888,0,0,0,6-6.4,1.888,1.888,0,0,0,4.125-4.521,1.879,1.879,0,0,0,6-2.625Z"
                                            transform="translate(-0.345 10.5)" fill="#358177" />
                                    </svg>
                                </div>
                                <div class="text-[#358177] uppercase mt-1 lg:block hidden">
                                    {{ card.manage }}
                                </div>
                            </div>
                            <div class="absolute lg:top-[3rem] top-2 lg:right-0 right-6 text-[#AEAEAE]">
                                {{ card.statusDate }}
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateToDetails = (id) => {
    scrollToTop();
    router.push({ name: 'MyOrderDetails', params: { id } });
};


const cards = ref([
    {
        id: '1',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Red Dirt Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        qty: 'Qty: 1',
        status: 'Delivered',
        manage: 'Manage',
        statusDate: 'Delivered on 18 March, 2024'
    },
    {
        id: '2',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '1.0 g',
        heading: 'Lorem Ipsum is simply dummy text',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        qty: 'Qty: 1',
        status: 'On the way',
        manage: 'Manage',
        statusDate: 'Delivered on 18 March, 2024'
    },
    {
        id: '3',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Red Dirt Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        qty: 'Qty: 1',
        status: 'Cancelled',
        manage: 'Manage',
        statusDate: 'Delivered on 18 March, 2024'
    },
    {
        id: '4',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '1.0 g',
        heading: 'Lorem Ipsum is simply dummy text',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        qty: 'Qty: 1',
        status: 'Pending',
        manage: 'Manage',
        statusDate: 'Delivered on 18 March, 2024'
    },
    {
        id: '5',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Red Dirt Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        qty: 'Qty: 1',
        status: 'Delivered',
        manage: 'Manage',
        statusDate: 'Delivered on 18 March, 2024'
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