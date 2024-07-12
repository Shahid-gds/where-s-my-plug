<template>
    <section class="">
        <transition-group name="nested" tag="div" class="container mx-auto px-[10rem] mt-[2rem]">
            <div v-for="card in cards" :key="card.image" @click="selectCardAndNavigate(card)"
                class="pb-6 cursor-pointer">
                <div v-if="card.id === '1'" class="flex space-x-10 border-[3px] border-[#61c1b4] rounded-xl">
                    <div class="bg-[#61c1b4] w-full flex justify-center rounded-l-lg">
                        <img class="object-cover" :src="card.image" alt="">
                    </div>
                    <div class="w-[70%] p-6 relative">
                        <div class="text-2xl font-[Bold] pb-4">
                            {{ card.heading }}
                        </div>
                        <div>
                            {{ card.paragraph }}
                        </div>
                        <div class="more-btn absolute bottom-8 flex space-x-4 items-center">
                            <button class="font-bold">Learn More</button>
                            <div class="border-2 p-1 rounded-full border-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="black" class="size-3">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex space-x-6 pb-8 cursor-pointer">
                <div v-for="card in gridRightcards" :key="card.image" @click="selectCardAndNavigate(card)"
                    :class="cardWidthClass(card.id)">
                    <div :class="['border-[3px] border-[#61c1b4] rounded-xl h-full', { 'flex': card.id !== '3' }]">
                        <div :class="['bg-[#61c1b4] w-full flex justify-center', { '': card.id !== '2' }]">
                            <img class="object-cover" :src="card.image" alt="">
                        </div>
                        <div class="w-full p-6 relative">
                            <div class="text-2xl font-[Bold] pb-4">
                                {{ card.heading }}
                            </div>
                            <div class="pb-16">
                                {{ card.paragraph }}
                            </div>
                            <button class="absolute bottom-8 font-bold">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex space-x-6 pb-6 cursor-pointer">
                <div v-for="card in gridLeftcards" :key="card.image" @click="selectCardAndNavigate(card)"
                    :class="cardWidthClass(card.id)">
                    <div :class="['border-[3px] border-[#61c1b4] rounded-xl h-full', { 'flex': card.id !== '4' }]">
                        <div :class="['bg-[#61c1b4] w-full flex justify-center', { '': card.id !== '5' }]">
                            <img class="object-cover" :src="card.image" alt="">
                        </div>
                        <div class="w-full p-6 relative">
                            <div class="text-2xl font-[Bold] pb-4">
                                {{ card.heading }}
                            </div>
                            <div class="pb-16">
                                {{ card.paragraph }}
                            </div>
                            <button class="absolute bottom-8 font-bold">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-for="card in cards" :key="card.image" @click="selectCardAndNavigate(card)"
                class="pb-6 cursor-pointer">
                <div v-if="card.id === '6'" class="flex space-x-10 border-[3px] border-[#61c1b4] rounded-xl">
                    <div class="bg-[#61c1b4] w-full flex justify-center rounded-l-lg">
                        <img class="object-cover" :src="card.image" alt="">
                    </div>
                    <div class="w-[70%] p-6 relative">
                        <div class="text-2xl font-[Bold] pb-4">
                            {{ card.heading }}
                        </div>
                        <div>
                            {{ card.paragraph }}
                        </div>
                        <button class="absolute bottom-8 font-bold">Learn More</button>
                    </div>
                </div>
            </div>
        </transition-group>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useLearnStore } from '@/stores/modules/learnStore';

const router = useRouter();
const learnStore = useLearnStore();

function selectCardAndNavigate(card) {
    scrollToTop();
    learnStore.selectCard(card);
    router.push({ name: 'LearnDetail', params: { url: card.url } });
}

const cards = ref([
    {
        id: '1',
        url: 'what-is-710',
        image: import('../../../assets/images/Learn/grid-img1.png').then((module) => module.default),
        heading: 'What is 710?',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        id: '6',
        image: import('../../../assets/images/Learn/grid-img6.png').then((module) => module.default),
        heading: 'What Are Terpenes and Why Do They Matter?',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },

]);
const gridRightcards = ref([
    {
        id: '2',
        image: import('../../../assets/images/Learn/grid-img2.png').then((module) => module.default),
        heading: 'Pride Shines Brighter at Where is my plug',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        id: '3',
        image: import('../../../assets/images/Learn/grid-img3.png').then((module) => module.default),
        heading: 'What is Live Resin?',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
]);
const gridLeftcards = ref([
    {
        id: '4',
        image: import('../../../assets/images/Learn/grid-img4.png').then((module) => module.default),
        heading: 'Live Resin vs Rosin',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        id: '5',
        image: import('../../../assets/images/Learn/grid-img5.png').then((module) => module.default),
        heading: 'CBG vs CBD',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
]);

onMounted(async () => {
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
    gridRightcards.value = await Promise.all(
        gridRightcards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
    gridLeftcards.value = await Promise.all(
        gridLeftcards.value.map(async (card) => ({
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

const cardWidthClass = (id) => {
    if (id === '2') {
        return 'w-[60%]';
    } else if (id === '3') {
        return 'w-[40%]';
    }
    return '';
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
</style>
