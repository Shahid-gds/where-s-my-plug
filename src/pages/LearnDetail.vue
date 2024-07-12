<template>
    <section class="py-[8rem] bg-covers bg-center bg-[url('@/assets/images/bgs/LearnHeroSectionBg.svg')] w-full p-6">
        <div v-for="card in cards" :key="card.index" class="container mx-auto px-6 flex items-center">
            <div class="w-full font-extrabold sm:leading-[2.5rem]">
                <span class="text-[#010101] text-[50px] font-[Jost-ExtraBold]">{{ card.heading }}</span>
                <div>{{ card.paragraphHero }}</div>
            </div>
            <div>
                <img :src="card.image">
            </div>
        </div>
    </section>

    <section class="pt-[5rem] pb-[5rem]">
        <div class="flex justify-center">
            <div class="py-6 relative">
                <div class="bg-[#61c1b4] w-[182px] h-0.5">
                    <div class="w-full absolute top-0">
                        <img class="mr-auto ml-auto" src="../components/icons/drugLeaf.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div v-for="card in bodyCards" :key="card.index" class="container mx-auto px-[20rem]">
            <div class="m-6">
                <div v-if="card.id === '1'" class="pt-[5rem] font-bold text-xl">{{ card.bodyParagraph }}</div>
                <div v-if="card.id === '1' || card.id === '5'" class="py-[5rem] text-3xl font-bold text-[#171717]">
                    {{ card.bodyHeading }}
                </div>
                <div class="hover:opacity-75 transition-all duration-150 cursor-pointer border-2 p-6 rounded-xl"
                    @click="navigateToDetails(card.url)">
                    <img class="w-full pb-10" :src="card.image">
                    <div class="">
                        <strong>{{ card.imageParagraphBold }}</strong>{{ card.imageParagraphRest }}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="">
        <div class="container mx-auto pb-[15rem]">
            <div class="p-6">
                <h1>
                    <span class="text-[#010101] text-[30px] font-[Jost-ExtraBold]">VIEW OTHER ARTICLES</span>
                </h1>
            </div>
            <div class="flex space-x-3">
                <div v-for="card in othersArticles" :key="card.image" class="pb-6 cursor-pointer">
                    <div class="h-full relative border-[3px] border-[#61c1b4] rounded-xl">
                        <div class="bg-[#61c1b4] w-full h-1/2 flex justify-center rounded-t-lg">
                            <img class="object-cover" :src="card.image" alt="">
                        </div>
                        <div class="p-6">
                            <div class="text-2xl font-[Bold] pb-4">
                                {{ card.heading }}
                            </div>
                            <div class="pb-20">
                                {{ card.paragraph }}
                            </div>
                        </div>
                        <div class="more-btn absolute bottom-0 flex space-x-4 items-center p-6">
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
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();

const navigateToDetails = (url) => {
    scrollToTop();
    router.push({ name: 'LearnProductDetail', params: { url } });
};
const cards = ref([
    {
        id: '1',
        url: 'what-is-710',
        image: import('../assets/images/Learn/grid-img1.png').then((module) => module.default),
        heading: 'What is 710?',
        paragraphHero: 'Learn the basics & explore our top 10 best products.'
    },
]);
const bodyCards = ref([
    {
        id: '1',
        paragraphHero: 'Learn the basics & explore our top 10 best products.',
        bodyParagraph: 'July 10th (7/10) is the unofficial holiday of all cannabis oil products. The origin stems from inverting the numbers 710 to spell "OIL". Cannabis oil is extracted from the plants and used to make vape cartridges, concentrates, and more.',
        bodyHeading: 'Best for Daily Use',
        image: import('../assets/images/Learn/Img1.svg').then((module) => module.default),
        imageParagraphBold: 'Cresco London Pound Mints Liquid Live Resin Cartridge (500mg):',
        imageParagraphRest: ' We capture the original full-spectrum effects of fresh flower in the convenience of a cartridge. A deep, potent indica experience. Only available in Illinois.'
    },
    {
        id: '2',
        image: import('../assets/images/Learn/Img2.svg').then((module) => module.default),
        imageParagraphBold: 'Dr. Dabber XS:',
        imageParagraphRest: ' Discover the best experience on-the-go with high quality concentrates. It easy to use, easy to clean, and preserves terpenes. Available in all states.'
    },
    {
        id: '3',
        image: import('../assets/images/Learn/Img3.svg').then((module) => module.default),
        imageParagraphBold: 'FloraCal Caped Crusader Live Rosin Badder (.5g):',
        imageParagraphRest: ' A hybrid concentrate made from an innovative, solventless, ice water extraction technique that preserves the unique elements of the strain. Available in Pennsylvania and Massachusetts.'
    },
    {
        id: '4',
        image: import('../assets/images/Learn/Img4.svg').then((module) => module.default),
        imageParagraphBold: 'Dr. Dabber Switch:',
        imageParagraphRest: ' Discover the best experience on-the-go with high quality concentrates. It easy to use, easy to clean, and preserves terpenes. Available in all states.'
    },
    {
        id: '5',
        bodyHeading: 'Best for Beginners',
        image: import('../assets/images/Learn/Img5.svg').then((module) => module.default),
        imageParagraphBold: 'Dr. Dabber Light Vaporizer Kit:',
        imageParagraphRest: ' Big on flavor, small on compromise. Stealthy yet functional, it can go anywhere you need to be. Available in all states.'
    },
    {
        id: '6',
        image: import('../assets/images/Learn/Img6.svg').then((module) => module.default),
        imageParagraphBold: 'Remedi Renew Amnesia Vape Cartridge (500mg):',
        imageParagraphRest: ' Crafted using cannabis terpenes and containing high-potency ranges that may offer fast acting relief. Only available in New York.'
    },
]);
const othersArticles = ref([
    {
        id: '1',
        image: import('../assets/images/Learn/Img7.svg').then((module) => module.default),
        heading: 'Pride Shines Brighter at Where is my plug',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        id: '2',
        image: import('../assets/images/Learn/Img8.svg').then((module) => module.default),
        heading: 'What is Live Resin?',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
        id: '3',
        image: import('../assets/images/Learn/Img9.svg').then((module) => module.default),
        heading: 'Live Resin vs Rosin',
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
    bodyCards.value = await Promise.all(
        bodyCards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
    othersArticles.value = await Promise.all(
        othersArticles.value.map(async (card) => ({
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
/* Your styles */
</style>
