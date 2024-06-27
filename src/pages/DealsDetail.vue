<template>
    <section class="pt-[15rem] bg-covers bg-center bg-[url('@/assets/images/bgs/FooterBg.svg')] w-full p-6">
        <div v-if="selectedCard" class="container mx-auto lg:flex lg:space-x-10 items-center">

            <div class="w-full relative">
                <img class="w-full" :src="selectedCard.image" alt="">
                <div
                    class="bg-[#61C1B4] absolute bottom-0.5 text-[35px] rounded-br-3xl rounded-bl-3xl uppercase w-full text-center p-2 font-[Extra-Bold] text-white">
                    {{ selectedCard.discountFlag }}
                </div>
            </div>
            <div class="w-full">
                <h1 class="text-[#010101]  xl:text-[70px] sm:text-[40px] text-[30px] font-[Jost-ExtraBold]">{{
            selectedCard.heading }}</h1>
                <p class="text-[#61c1b4] xl:text-[40px] text-[30px] font-[Jost-SemiBold]">{{ selectedCard.subHeading }}</p>
                <p class="text-[#010101]  xl:text-[30px] text-[20px] font-[Jost-SemiBold]">{{ selectedCard.availableDeals }}</p>
                <p class="xl:text-[25px] font-[Bold] text-[#61c1b4]">{{ selectedCard.distance }}</p>
                <div v-for="(contentConfig, index) in contentConfigs" :key="index">
                    <div v-if="isSelectedCardMatch(contentConfig)">
                        <p class="text-[#61c1b4] xl:text-[20px]">{{ contentConfig.content }}</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <section class="pb-[15rem]">
        <div class="overflow-hidden pt-[10rem]">
            <div class="flex justify-center pb-6">
                <div class="py-6 relative">
                    <div class="bg-[#61c1b4] w-[182px] h-0.5">
                        <div class="w-full absolute top-0 ">
                            <img class="mr-auto ml-auto" src="../components/icons/drugLeaf.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center px-6 text-center pb-[5rem]">
                <div class="font-extrabold sm:leading-[2.5rem]">
                    <span
                        class="text-[#010101]  xl:text-[70px] sm:text-[50px] text-[30px] font-[Jost-ExtraBold]">Shop</span><span
                        class="text-[#61c1b4]  xl:text-[70px] sm:text-[50px] text-[30px] font-[Jost-SemiBold] relative">
                        Products</span>
                    <h1 class="xl:text-[36px] sm:text-[20px] text-[18px] font-[Jost-ExtraBold]">Shop Cannabis Products &
                        Accessories Online</h1>
                </div>
            </div>
            <div>
                <ProdutsCategoriesCards />
            </div>
            <div>
                <WecomeToWMPCarousel />
            </div>
        </div>
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center">
            <div v-for="card in cards" :key="card.index" @click="navigateToDetails(card.id)"
                class="2xl:w-[420px] w-[400px] cursor-pointer border-2 border-[#CCE3E0] m-2 p-6 py-8 rounded-2xl hover:shadow-xl hover:border-[#61C1B4] duration-300 transition-all">
                <div class="flex justify-center pb-6">
                    <div>
                        <img :src="card.image">
                    </div>
                </div>
                <div>
                    {{ card.heading }}
                </div>
                <div class="py-2 font-[Extra-Bold]">
                    {{ card.subHeading }}
                </div>
                <div class="flex items-center space-x-5 pb-4">
                    <div class="flex">
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
                    <div class="flex space-x-2">
                        <div class="text-[#444444] font-[poppin-bold] sm:text-xl">
                            {{ card.rating }}
                        </div>
                        <div class="text-[#76c9be] font-[poppin-bold] sm:text-xl">
                            {{ card.ratingQty }}
                        </div>
                    </div>
                </div>
                <div>
                    {{ card.paragraph }}
                </div>

            </div>
        </transition-group>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useDealStore } from '@/stores/modules/dealsStore';
import { useRoute, useRouter } from 'vue-router';

const dealsStore = useDealStore();
const route = useRoute();
const router = useRouter();

const selectedCard = computed(() => {
    const id = route.params.id;
    return dealsStore.selectedCard && dealsStore.selectedCard.id === id ? dealsStore.selectedCard : null;
});

const contentConfigs = [
    {
        id: '1',
        content: 'Celebrate with a special discount on our premium cannibis flowers',
        discount: '15 % Off',
        valid: 'Valid Until 24-06-2026'
    },
    {
        id: '2',
        content: 'Get your favorite vape cartridges at discouted price this weekend',
        discount: '15 % Off',
        valid: 'Valid Until 24-06-2026'
    },
    {
        id: '3',
        content: 'Celebrate with a special discount on our premium cannibis flowers',
        discount: '15 % Off',
        valid: 'Valid Until 24-06-2026'
    },

];

function isSelectedCardMatch(contentConfig) {
    return selectedCard.value && selectedCard.value.id === contentConfig.id;
}

const navigateToDetails = (id) => {
    scrollToTop();
    router.push({ name: 'ProductDetail', params: { id } });
}
const cards = ref([
    {
        id: '1',
        image: import('@/assets/images/ProductsCategories/Img1.svg').then((module) => module.default),
        heading: 'Flower', stars: import('../components/icons/star.svg').then((module) => module.default),
        subHeading: 'Yoda Candy THCa Flower',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '2',
        image: import('@/assets/images/ProductsCategories/Img2.svg').then((module) => module.default),
        heading: 'Cartridges', stars: import('../components/icons/star.svg').then((module) => module.default),
        subHeading: 'Cookie Milk D8+THCP Vape Cart ',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '3',
        image: import('@/assets/images/ProductsCategories/Img3.svg').then((module) => module.default),
        heading: 'Pre-rolls', stars: import('../components/icons/star.svg').then((module) => module.default),
        subHeading: 'Delta 8 THC Pre Roll Sativa Sour Candy',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
]);
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
}
</script>

<style scoped>
/* Your styles */
</style>