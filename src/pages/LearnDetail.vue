<template>
    <section class="pt-[15rem] bg-covers bg-center bg-[url('@/assets/images/bgs/FooterBg.svg')] w-full p-6">
        <div v-if="selectedCard" class="container mx-auto xl:flex xl:space-x-10 items-center">
            <div class="w-full">
                <div
                    class="rounded-[30px] p-1.5 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                    <div>
                        <img class="w-full" :src="selectedCard.image" alt="">
                    </div>
                    <div class="p-4 pt-6 font-[Bold]">
                        {{ selectedCard.paragraph }}
                    </div>
                </div>
            </div>
            <div class="w-full">
                <div v-for="(contentConfig, index) in contentConfigs" :key="index">
                    <div v-if="isSelectedCardMatch(contentConfig)">
                        <p class="text-[#010101]  text-[20px] font-[Jost-SemiBold]">{{ contentConfig.subHeading }}</p>
                        <p class="text-[#61c1b4] text-[30px] font-[Jost-SemiBold]">{{ contentConfig.heading }}</p>
                        <div class="sm:flex sm:space-x-6 py-4">
                            <div class="flex items-center space-x-3 bg-[#61c1b4] text-[white] rounded-lg p-1.5 px-3">
                                <p class="text-[20px]">{{ contentConfig.tag }}</p>
                                <p class="text-[20px]">{{ contentConfig.thcPercent }}</p>
                            </div>
                            <div class="border-2 flex space-x-3 p-1.5 px-3 text-center rounded-lg bg-white">
                                <p class="text-[#61c1b4] text-[20px]">{{ contentConfig.terpenes }}</p>
                            </div>
                            <div class="border-2 flex space-x-3 p-1.5 px-3  text-center rounded-lg bg-white">
                                <p class="text-[#61c1b4] text-[20px]">{{ contentConfig.weight }}</p>
                                <p class="text-[#61c1b4] text-[20px]">${{ contentConfig.price }}</p>
                            </div>
                        </div>
                        <div class="py-5">
                            <p>{{ contentConfig.content }}</p>
                        </div>
                        <div class="flex justify-center">
                            <button @click="navigateToDetails(contentConfig.id)" class="bg-[#61c1b4] p-4 rounded-full px-16 text-white font-[Bold]">Add to
                                cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    <section class="pb-[15rem]">
        <div class="overflow-hidden pt-[10rem]">
            <div class="flex justify-center">
                <div class="py-6 relative">
                    <div class="bg-[#61c1b4] w-[182px] h-0.5">
                        <div class="w-full absolute top-0 ">
                            <img class="mr-auto ml-auto" src="../components/icons/drugLeaf.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center px-6 text-center pb-[5rem] pt-[1rem]">
                <div class="font-extrabold sm:leading-[2.5rem]">
                    <span class="text-[#010101]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-ExtraBold]">You
                        might </span><span
                        class="text-[#61c1b4]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-SemiBold] relative">
                        also like</span>
                </div>
            </div>
        </div>
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center">
            <div v-for="card in cards" :key="card.index" @click="navigateToDetails(card.id)"
                class="2xl:w-[420px] w-[400px] relative cursor-pointer border-2 border-[#CCE3E0] m-2 p-6 py-8 rounded-2xl hover:shadow-xl hover:border-[#61C1B4] duration-300 transition-all">
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
                <div class="flex space-x-3 text-[18px] font-bold">
                    <div>
                        <span>$</span><span>{{ card.price }}</span>
                    </div>
                    <div>:</div>
                    <div>
                        {{ card.wight }}
                    </div>
                </div>
                <div>
                    {{ card.paragraph }}
                </div>
                <div class="flex space-x-2 items-center pt-2">
                    <div class="bg-[black] text-white p-1">
                        {{ card.tag }}
                    </div>
                    <div>
                        {{ card.thcPercent }}
                    </div>
                </div>
                <div class="absolute top-0 right-0 bg-[#76c9be] p-3 rounded-tr-xl font-bold text-white">Add to Cart
                </div>
            </div>
        </transition-group>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useLearnStore } from '@/stores/modules/learnStore';
import { useRoute, useRouter } from 'vue-router';

const learnStore = useLearnStore();
const route = useRoute();
const router = useRouter();


const selectedCard = computed(() => {
    const id = route.params.id;
    return learnStore.selectedCard && learnStore.selectedCard.id === id ? learnStore.selectedCard : null;
});

const contentConfigs = [
    {
        id: '1',
        heading: 'Regernative | Blueberry crumble | Live sugar',
        subHeading: 'Regernative',
        content: 'Concentrated cannabis products come in a wide variety of consistencies, compositions, and potencies. Cannabinoids are isolated and removed from plant material via extraction, agitation, compression, or other methods to create generally a very potent product. Concentrates have an immediate activation time and are generally used by experienced consumers.',
        tag: 'INDICA',
        thcPercent: 'THC: 87.24%',
        weight: '1kg',
        price: '25',
        terpenes: '5.46% Terpenes'
    },
    {
        id: '2',
        heading: 'Regenerative | Bubba OG | Live Badder',
        subHeading: 'Regernative',
        content: 'Concentrated cannabis products come in a wide variety of consistencies, compositions, and potencies. Cannabinoids are isolated and removed from plant material via extraction, agitation, compression, or other methods to create generally a very potent product. Concentrates have an immediate activation time and are generally used by experienced consumers.',
        tag: 'INDICA HYBRID',
        thcPercent: 'THC: 87.24%',
        weight: '1kg',
        price: '25',
        terpenes: '5.46% Terpenes'
    },
    {
        id: '3',
        heading: '253 | When Doves Cry | Sugar | Baller Jar',
        subHeading: '253 Farmacy',
        content: 'Concentrated cannabis products come in a wide variety of consistencies, compositions, and potencies. Cannabinoids are isolated and removed from plant material via extraction, agitation, compression, or other methods to create generally a very potent product. Concentrates have an immediate activation time and are generally used by experienced consumers.',
        tag: 'HYBRID',
        // thcPercent: 'THC: 87.24%',
        weight: '1kg',
        price: '25',
        terpenes: '5.46% Terpenes'
    },
    {
        id: '4',
        heading: 'Dab FX | Sherb Crasher | Live Sugar',
        subHeading: 'DabFX',
        content: 'Concentrated cannabis products come in a wide variety of consistencies, compositions, and potencies. Cannabinoids are isolated and removed from plant material via extraction, agitation, compression, or other methods to create generally a very potent product. Concentrates have an immediate activation time and are generally used by experienced consumers.',
        tag: 'HYBRID',
        thcPercent: 'THC: 76.6%',
        weight: '1kg',
        price: '25',
        terpenes: '5.46% Terpenes'
    },
    {
        id: '5',
        heading: 'Regenerative | Grease Monkey | Live Resin Sugar & Sauce',
        subHeading: 'Regernative',
        content: 'Concentrated cannabis products come in a wide variety of consistencies, compositions, and potencies. Cannabinoids are isolated and removed from plant material via extraction, agitation, compression, or other methods to create generally a very potent product. Concentrates have an immediate activation time and are generally used by experienced consumers.',
        tag: 'HYBRID',
        thcPercent: 'THC: 89%',
        weight: '1kg',
        price: '35',
        terpenes: '5.46% Terpenes'
    },
    {
        id: '6',
        heading: 'Green Gold | Queen Mother Gogi | Wax',
        subHeading: 'Green Gold Group',
        content: 'Concentrated cannabis products come in a wide variety of consistencies, compositions, and potencies. Cannabinoids are isolated and removed from plant material via extraction, agitation, compression, or other methods to create generally a very potent product. Concentrates have an immediate activation time and are generally used by experienced consumers.',
        tag: 'HYBRID',
        thcPercent: 'THC: 81.9%',
        weight: '1kg',
        price: '50',
        terpenes: '5.46% Terpenes'
    },

];

function isSelectedCardMatch(contentConfig) {
    return selectedCard.value && selectedCard.value.id === contentConfig.id;
}

const navigateToDetails = (id) => {
    scrollToTop();
    router.push({ name: 'LearnProductDetail', params: { id } });
}
const cards = ref([
    {
        id: '1',
        image: import('../assets/images/LearnAboutCard/Img1.svg').then((module) => module.default),
        heading: '253 Farmacy',
        price: '25',
        wight: '1kg',
        subHeading: '253 | When Doves Cry | Sugar | Baller Jar',
        paragraph: 'Regernative',
        tag: 'INDICA',
        thcPercent: 'THC: 87.24%',
    },
    {
        id: '2',
        image: import('../assets/images/LearnAboutCard/Img2.svg').then((module) => module.default),
        heading: '253 Farmacy',
        price: '25',
        wight: '1kg',
        subHeading: '253 | When Doves Cry | Sugar | Baller Jar',
        paragraph: 'Regernative',
        tag: 'INDICA',
        thcPercent: 'THC: 87.24%',
    },
    {
        id: '3',
        image: import('../assets/images/LearnAboutCard/Img3.svg').then((module) => module.default),
        heading: '253 Farmacy',
        price: '25',
        wight: '1kg',
        subHeading: '253 | When Doves Cry | Sugar | Baller Jar',
        paragraph: 'Regernative',
        tag: 'INDICA',
        thcPercent: 'THC: 87.24%',
    },
    {
        id: '4',
        image: import('../assets/images/LearnAboutCard/Img4.svg').then((module) => module.default),
        heading: '253 Farmacy',
        price: '25',
        wight: '1kg',
        subHeading: '253 | When Doves Cry | Sugar | Baller Jar',
        paragraph: 'Regernative',
        tag: 'INDICA',
        thcPercent: 'THC: 87.24%',
    },
    {
        id: '5',
        image: import('../assets/images/LearnAboutCard/Img5.svg').then((module) => module.default),
        heading: '253 Farmacy',
        price: '25',
        wight: '1kg',
        subHeading: '253 | When Doves Cry | Sugar | Baller Jar',
        paragraph: 'Regernative',
        tag: 'INDICA',
        thcPercent: 'THC: 87.24%',
    },
    {
        id: '6',
        image: import('../assets/images/LearnAboutCard/Img6.svg').then((module) => module.default),
        heading: '253 Farmacy',
        price: '25',
        wight: '1kg',
        subHeading: '253 | When Doves Cry | Sugar | Baller Jar',
        paragraph: 'Regernative',
        tag: 'INDICA',
        thcPercent: 'THC: 87.24%',
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
}
</script>

<style scoped>
/* Your styles */
</style>