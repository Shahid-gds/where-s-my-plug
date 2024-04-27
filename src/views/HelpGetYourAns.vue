<template>
    <section class="sm:pb-[5rem]">
        <div class="container mx-auto overflow-hidden pt-[10rem]">
            <div class="flex justify-center">
                <div class="py-6 relative">
                    <div class="bg-[#61c1b4] w-[182px] h-0.5">
                        <div class="w-full absolute top-0 ">
                            <img class="mr-auto ml-auto" src="../components/icons/drugLeaf.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center px-6">
                <div class="text-center">
                    <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">GET YOUR
                        ANSWER</h1>
                    <h1 class="font-[Jost-ExtraBold] md:text-[50px] text-[30px] text-[#000000]">Frequent Ask Questions
                    </h1>
                </div>
            </div>
            <div class="flex justify-center px-6">
                <div class="lg:w-1/2 w-full relative">
                    <input type="text" class="border-2 w-full p-3 rounded-full px-8" placeholder="Find Queries">
                    <button
                        class="flex space-x-2 items-center bg-[#707070] p-3 absolute top-0.5 right-0.5 rounded-full px-[2rem] text-white">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <div class="">Search</div>
                    </button>
                </div>
            </div>
            <div class="pt-[5rem] lg:px-[10rem] px-6">
                <div v-for="(item, index) in items" :key="index">
                    <div @click="toggleAccordion(index)" class="accordion-item">
                        <div
                            class="accordion-header text-[#010101] sm:font-[Extra-Bold] rounded-full flex items-center space-x-4">
                            <div
                                class="border-2 w-[30px] h-[30px] border-[#61C1B4] bg-white p-2 px-2.5 rounded-full mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="11" viewBox="0 0 5 11">
                                    <path id="Triangle_612" data-name="Triangle 612" d="M362,1812.5l-5,5.5v-11Z"
                                        transform="translate(-357 -1807)" fill="#61c1b4" />
                                </svg>
                            </div>
                            {{ item.title }}
                        </div>
                        <transition name="list">
                            <div v-if="activeIndex === index" class="accordion-content">
                                <div class="text-[#444444] py-6">
                                    {{ item.content }}
                                </div>
                                <div class="py-6">
                                    <ul class="">
                                        <li class="flex items-center sm:space-x-6 space-x-3 pb-6">
                                            <div class="sm:w-4 sm:h-4 p-1.5 rounded-full bg-[#61C1B4]"></div>
                                            <div class="mt-1.5 text-[#010101] text-[18px]">{{ item.listOne }}</div>
                                        </li>
                                        <li class="flex items-center sm:space-x-6 space-x-3 pb-6">
                                            <div class="sm:w-4 sm:h-4 p-1.5 rounded-full bg-[#61C1B4]"></div>
                                            <div class="mt-1.5 text-[#010101] text-[18px]">{{ item.listTwo }}</div>
                                        </li>
                                        <li class="flex items-center sm:space-x-6 space-x-3 pb-6">
                                            <div class="sm:w-4 sm:h-4 p-1.5 rounded-full bg-[#61C1B4]"></div>
                                            <div class="mt-1.5 text-[#010101] text-[18px]">{{ item.listThree }}</div>
                                        </li>
                                        <li class="flex items-center sm:space-x-6 space-x-3">
                                            <div class="sm:w-4 sm:h-4 p-1.5 rounded-full bg-[#61C1B4]"></div>
                                            <div class="mt-1.5 text-[#010101] text-[18px]">{{ item.listFourth }}</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
            <div class="pt-[3rem] text-center pb-[15rem] relative">
                <h1 class="text-[#D9D8D8] font-[Bold] text-[30px]">--- OR ---</h1>
                <h1 class="text-[40px] uppercase py-[1rem]">Contact Now!</h1>
                <div class="md:flex justify-center space-x-7 sm:pb-6 pb-16">
                    <div>
                        <span class="text-[#61C1B4] text-xl font-[Semi-Bold]">Email Us:</span><a class="text-xl" href="#">
                            contact@wheresmyplug.com</a>
                    </div>
                    <div>
                        <span class="text-[#61C1B4] text-xl font-[Semi-Bold]">Call Us:</span><a class="text-xl" href="#"> +1 234 5678
                            9101</a>
                    </div>
                </div>
              
            </div>
            
        </div>
    </section>
 <section class="relative pb-[15rem]">
    <div class="container mx-auto px-10 flex justify-center items-center h-full] absolute -top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="relative lg:block hidden">
            <div class="xl:w-[1280px]">
                <img class="" src="../assets/images/qualityProductsLabel.svg" alt="">
            </div>
            <div class="absolute top-0 xl:p-10 px-6 w-full lg:flex justify-between">
               <div class="w-full flex items-center space-x-4">
                <div class="bg-white rounded-full lg:p-6 p-2 border-4">
                    <img src="../components/icons/WMPicon.svg" alt="">
                </div>
                <div class="text-white">
                    <h1 class="xl:text-[40px] font-[Extra-Bold] leading-6">Shop No.1 Dispensaries Near You</h1>
                    <h2 class="xl:text-[30px] text-[#c6fff7] font-[Semi-Bold]">Showing you stores near Newyork, USA</h2>
                    <p class="lg:mr-[15rem]"><a href="#" class="underline font-[Semi-Bold] xl:text-xl">Check out our dispensaries map</a>
                    to find the nearest dispensary outside of your area.</p>
                </div>
               </div>
               <div class="xl:w-[20%] w-[40%] text-white text-right">
                <h1 class="font-[Bold]">Rated 4.9 / 5</h1>
                <div class="flex justify-end">
                    <div class="w-[24px]">
                        <img src="../components/icons/star.svg" alt="">
                    </div>
                    <div class="w-[24px]">
                        <img src="../components/icons/star.svg" alt="">
                    </div>
                    <div class="w-[24px]">
                        <img src="../components/icons/star.svg" alt="">
                    </div>
                    <div class="w-[24px]">
                        <img src="../components/icons/star.svg" alt="">
                    </div>
                    <div class="w-[24px]">
                        <img src="../components/icons/star.svg" alt="">
                    </div>
                </div>
                <div class="">
                    <p class="text-[13px]">Based on 848 reviews</p>
                </div>
                <div class="pt-[3rem]">
                    <button class="uppercase font-[Bold]">See all dispensaries</button>
                </div>
               </div>
            </div>
        </div>
        <div class="lg:hidden">
                <div class="bg-gradient-to-r from-[#61c1b4] bg-[#468f85] w-full p-10 px-6 rounded-[30px] shadow-xl">
                    <div class="">
                        <div class="w-full sm:flex items-center sm:space-x-4">
                         <div class="sm:bg-white rounded-full lg:p-6 p-2 sm:border-4">
                             <img src="../components/icons/WMPicon.svg" alt="">
                         </div>
                         <div class=" text-white">
                             <h1 class="xl:text-[40px] font-[Extra-Bold] leading-6">Shop No.1 Dispensaries Near You</h1>
                             <h2 class="xl:text-[30px] text-[#c6fff7] font-[Semi-Bold]">Showing you stores near Newyork, USA</h2>
                             <p class="lg:mr-[15rem]"><a href="#" class="underline font-[Semi-Bold] xl:text-xl">Check out our dispensaries map</a>
                             to find the nearest dispensary outside of your area.</p>
                         </div>
                        </div>
                        <div class="text-white text-right">
                         <h1 class="font-[Bold]">Rated 4.9 / 5</h1>
                         <div class="flex justify-end">
                             <div class="w-[24px]">
                                 <img src="../components/icons/star.svg" alt="">
                             </div>
                             <div class="w-[24px]">
                                 <img src="../components/icons/star.svg" alt="">
                             </div>
                             <div class="w-[24px]">
                                 <img src="../components/icons/star.svg" alt="">
                             </div>
                             <div class="w-[24px]">
                                 <img src="../components/icons/star.svg" alt="">
                             </div>
                             <div class="w-[24px]">
                                 <img src="../components/icons/star.svg" alt="">
                             </div>
                         </div>
                         <div class="">
                             <p class="text-[13px]">Based on 848 reviews</p>
                         </div>
                         <div class="pt-[3rem]">
                             <button class="uppercase font-[Bold]">See all dispensaries</button>
                         </div>
                        </div>
                     </div>
                </div>
        </div>
    </div>
    <div class="sm:pt-[10rem] pt-[13rem]">
        <WecomeToWMPCarouselVue />
    </div>
 </section>
</template>

<script setup>
import { ref } from 'vue';
import WecomeToWMPCarouselVue from '@/components/layout/UI/WecomeToWMPCarousel.vue';

const items = ref([
    {
        title: 'Lorem Ipsum is simply dummy text?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Simply dummy text of the printing and typesetting industry?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Ipsum is simply dummy text of the printing and typesetting industry?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Dummy text of the printing and typesetting industry?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Printing and typesetting industry?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Ipsum is simply dummy text of the printing and typesetting industry?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Dummy text of the printing and typesetting industry?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Printing and typesetting industry?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Ipsum is simply dummy text of the printing and typesetting industry?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
]);

const activeIndex = ref(null);


const toggleAccordion = (index) => {
    activeIndex.value = (activeIndex.value === index) ? null : index;
};
</script>


<style scoped>
.accordion-item {
    margin-bottom: 15px;
}

.accordion-header {
    background: #F5F5F5;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.accordion-header:hover {
    background: #61C1B4;
    color: white;
}

.accordion-content {
    padding: 10px;
    padding-left: 5rem;
    padding-right: 5rem;
    transition: max-height 0.3s ease-out;
    overflow: hidden;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

@media(max-width:768px) {
    .accordion-content {
        padding: 5px;
    }
}
</style>