<template>
    <section class="sm:pb-[5rem] px-6">
        <div class="bg-covers bg-center bg-[url('@/assets/images/bgs/FooterBg.svg')] w-full p-6">
            <div class="container mx-auto py-[12rem] text-center">
                <div class="text-[#010101]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-ExtraBold]">
                    {{ card.heading }}
                </div>
            </div>
        </div>
        <div class="container mx-auto -mt-[8rem] xl:px-[5rem] bg-white shadow-xl rounded-xl p-6">
            <div class="lg:flex items-center lg:space-x-6 justify-center w-full p-4 rounded-xl">
                <!-- main image -->
                <div class="border-2 p-2 rounded-2xl flex justify-center sm:w-[20%] bg-[white]">
                    <img class="w-[100%]" v-if="card.img1" :src="card.img1" alt="Product image">
                </div>
                <div class="w-full">
                    <div class="flex space-x-4 items-center pb-2">
                        <div class="flex items-center">
                            <div class="w-5">
                                <img class="w-[100%]" v-if="card.stars" :src="card.stars" alt="">
                            </div>
                            <div class="w-5">
                                <img class="w-[100%]" v-if="card.stars" :src="card.stars" alt="">
                            </div>
                            <div class="w-5">
                                <img class="w-[100%]" v-if="card.stars" :src="card.stars" alt="">
                            </div>
                            <div class="w-5">
                                <img class="w-[100%]" v-if="card.stars" :src="card.stars" alt="">
                            </div>
                        </div>
                        <div class="flex space-x-2 items-center mt-2">
                            <div class="text-[#010101] font-[Jost-ExtraBold]">
                                {{ card.rating }}
                            </div>
                            <div class="text-[#61c1b4] font-[Jost-SemiBold]">
                                {{ card.ratingQty }}
                            </div>
                        </div>
                    </div>
                    <div class="text-[#61c1b4]">
                        {{ card.paragraph }}
                    </div>
                </div>
            </div>
        </div>
        <div>
            <StoreForSellingBrand />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import StoreForSellingBrand from '../views/StoreForSellingBrand.vue'

const card = ref({});
const route = useRoute();
const router = useRouter();

const fetchCardDetails = async () => {
    const cardId = route.params.id;
    try {
        const cardData = await getCardById(cardId);
        if (cardData) {
            card.value = {
                ...cardData,
                img1: await cardData.img1,
                stars: await cardData.stars,
            }
        } else {
            scrollToTop();
            router.push({ name: 'NotFoundProduct' });
        }
    } catch (error) {
        console.error('Error fetching card detail', error)
    }
};

const getCardById = async (id) => {
    const cards = [
        {
            id: '1',
            img1: import('../assets/images/BrandBoardCardImages/Img1.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'Cartel Oil Co',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
        {
            id: '2',
            img1: import('../assets/images/BrandBoardCardImages/Img2.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'DRiP',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
        {
            id: '3',
            img1: import('../assets/images/BrandBoardCardImages/Img3.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'Dime Industries',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
        {
            id: '4',
            img1: import('../assets/images/BrandBoardCardImages/Img4.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'DRiP',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
        {
            id: '5',
            img1: import('../assets/images/BrandBoardCardImages/Img5.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'Dixie Brands',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
        {
            id: '6',
            img1: import('../assets/images/BrandBoardCardImages/Img6.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'Element',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
        {
            id: '7',
            img1: import('../assets/images/BrandBoardCardImages/Img1.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'Cartel Oil Co',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
        {
            id: '8',
            img1: import('../assets/images/BrandBoardCardImages/Img2.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'DRiP',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
        {
            id: '9',
            img1: import('../assets/images/BrandBoardCardImages/Img3.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'Dime Industries',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
        {
            id: '10',
            img1: import('../assets/images/BrandBoardCardImages/Img4.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'DRiP',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
        {
            id: '11',
            img1: import('../assets/images/BrandBoardCardImages/Img5.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'Dixie Brands',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
        {
            id: '12',
            img1: import('../assets/images/BrandBoardCardImages/Img6.svg').then(module => module.default),
            stars: import('../components/icons/star.svg').then(module => module.default),
            heading: 'Element',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            rating: '5.0',
            ratingQty: '(120)',
        },
    ];
    return cards.find(card => card.id === id);
};

onMounted(() => {
    fetchCardDetails();
});
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>