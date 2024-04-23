<template>
    <section class="pb-[3rem]">
        <div class="container mx-auto overflow-hidden xl:pt-[5rem]">
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
                    <h1 class="font-[Jost-ExtraBold] md:text-[50px] text-[30px] text-[#000000]">Common Queries</h1>
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
                            class="accordion-header text-[#010101] font-[Extra-Bold] rounded-full flex items-center space-x-4">
                            <div class="border-2 w-[30px] h-[30px] border-[#61C1B4] bg-white p-2 px-2.5 rounded-full mr-6">
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
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const items = ref([
    {
        title: 'What is the main benefit of CBD oil?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'CBD Products Winkleman Use?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Does CBD Get you High?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'How do i take CBD oil?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'What is CBD used for in the body?',
        content: 'Facilisis gravida neque convallis acra s semper auctor neque. Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid Facilisis gravida neque convallis acra s semper auctor neque.Sem fringil ut morbi tincid',
        listOne: 'The Cannabis plant has a history of medicinal use dating',
        listTwo: 'Effects of chronic use may include bronchitis',
        listThree: 'These deficits persist while chronically intoxicated. Compared',
        listFourth: 'Natural Anti-Aging Skin Remedies',
    },
    {
        title: 'Is CBD halal or haram?',
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