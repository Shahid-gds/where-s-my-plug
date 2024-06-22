<template>
    <section class="pb-[20rem]">
        <div class="bg-covers bg-center bg-[url('@/assets/images/bgs/FooterBg.svg')] w-full p-6">
            <div class="container mx-auto py-[12rem] text-center">
                <div class="text-[#010101]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-ExtraBold]">
                    {{ card.heading }}
                </div>
                <div class="text-[#61c1b4]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-SemiBold] relative">{{
                    card.subHeading }}
                </div>
            </div>
        </div>
        <div class="container mx-auto -mt-[8rem]">
            <div class="flex items-center space-x-6 justify-center w-full p-4 rounded-xl">
                <!-- main image -->
                <div class="border-2 p-2 rounded-2xl flex justify-center w-[20%] bg-[white]">
                    <img class="w-[100%]" v-if="mainImage" :src="mainImage" alt="Product image">
                </div>
                <div>
                    <span class="text-[#010101]  text-[30px] font-[Jost-ExtraBold]">$</span>
                    <span class="text-[#61c1b4]  text-[40px]  font-[Jost-SemiBold]">
                        {{ card.price }}
                    </span>
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
                            <div class="text-[#010101] font-[Jost-ExtraBold">
                                {{ card.rating }}
                            </div>
                            <div class="text-[#61c1b4] font-[Jost-SemiBold]">
                                {{ card.ratingQty }}
                            </div>
                        </div>
                    </div>
                    <div class="text-xl font-[Jost-SemiBold] pb-2">
                        <span>Weight: </span> {{ card.weight }}
                    </div>
                    <div class="flex items-center space-x-6">
                        <div class="rounded-xl p-2 w-[20%]" :style="{ backgroundColor: card.backgroundColor }">
                            <img class="" v-if="card.leaf" :src="card.leaf" alt="">
                        </div>
                        <div>
                            <p class="text-[#61c1b4]">Type</p>
                            <div class="font-[Bold]">{{ card.type }}</div>
                        </div>
                        <div class="w-0.5 h-14 bg-[#61c1b4]"></div>
                        <div>
                            <p class="text-[#61c1b4]">THC</p>
                            <div class="font-[Bold]">{{ card.thc }}</div>
                        </div>
                        <div class="w-0.5 h-14 bg-[#61c1b4]"></div>
                        <div>
                            <p class="text-[#61c1b4]">CBC</p>
                            <div class="font-[Bold]">{{ card.cbc }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center space-x-4 pt-8">
                <!-- related images -->
                <div :class="['border-2 cursor-pointer p-2 rounded-2xl flex justify-center w-[20%] ', mainImage === card.img1 ? 'border-[black]' : 'border-[#61c1b4]']"
                    @click="updateMainImage(card.img1)">
                    <img class="w-[100%]" v-if="card.img1" :src="card.img1" alt="Product image">
                </div>
                <div :class="['border-2 p-2 cursor-pointer rounded-2xl flex justify-center w-[20%]', mainImage === card.img2 ? 'border-[black]' : 'border-[#61c1b4]']"
                    @click="updateMainImage(card.img2)">
                    <img class="w-[100%]" v-if="card.img2" :src="card.img2" alt="Product image">
                </div>
                <div :class="['border-2 p-2 cursor-pointer rounded-2xl flex justify-center w-[20%]', mainImage === card.img3 ? 'border-[black]' : 'border-[#61c1b4]']"
                    @click="updateMainImage(card.img3)">
                    <img class="w-[100%]" v-if="card.img3" :src="card.img3" alt="Product image">
                </div>
                <div :class="['border-2 p-2 cursor-pointer rounded-2xl flex justify-center w-[20%]', mainImage === card.img4 ? 'border-[black]' : 'border-[#61c1b4]']"
                    @click="updateMainImage(card.img4)">
                    <img class="w-[100%]" v-if="card.img4" :src="card.img4" alt="Product image">
                </div>
            </div>
            <div class="pt-[2rem] text-[#61c1b4] px-[8rem]">
                {{ card.paragraph }}
            </div>
            <div class="px-[8rem] pt-8">
                <div class="pb-5">
                    <h1 class="font-[Bold] text-xl">Shop Local</h1>
                    <p>{{ card.shopLocal }}</p>
                </div>
                <div class="pb-5">
                    <h1 class="font-[Bold] text-xl">Order It Up</h1>
                    <p>{{ card.shopLocal }}</p>
                </div>
                <div class="pb-5">
                    <h1 class="font-[Bold] text-xl">Keep an eye Out</h1>
                    <p>{{ card.shopLocal }}</p>
                </div>
                <div class="pb-5">
                    <h1 class="font-[Bold] text-xl">Note</h1>
                    <p>{{ card.note }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const card = ref({});
const mainImage = ref(null);
const route = useRoute();

const fetchCardDetails = async () => {
    const cardId = route.params.id;
    const cardData = await getCardById(cardId);
    card.value = {
        ...cardData,
        img1: await cardData.img1,
        img2: await cardData.img2,
        img3: await cardData.img3,
        img4: await cardData.img4,
        stars: await cardData.stars,
        leaf: await cardData.leaf,
    };
    mainImage.value = card.value.img1;
};

const getCardById = async (id) => {
    const cards = [
        {
            id: '1',
            img1: import('@/assets/images/ProductsCategories/Img1.svg').then(module => module.default),
            img2: import('@/assets/images/ProductsCategories/Img2.svg').then(module => module.default),
            img3: import('@/assets/images/ProductsCategories/Img3.svg').then(module => module.default),
            img4: import('@/assets/images/ProductsCategories/Img4.svg').then(module => module.default),
            heading: 'Flower',
            stars: import('../components/icons/star.svg').then(module => module.default),
            leaf: import('../components/icons/drugLeaf.svg').then(module => module.default),
            backgroundColor: '#61c1b4',
            subHeading: 'Yoda Candy THCa Flower',
            price: '25.99',
            rating: '5.0',
            ratingQty: '(120)',
            weight: '7g',
            type: 'Hybrid',
            thc: '22%',
            cbc: '1%',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            shopLocal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
        },
        {
            id: '2',
            img1: import('@/assets/images/ProductsCategories/Img2.svg').then(module => module.default),
            img2: import('@/assets/images/ProductsCategories/Img1.svg').then(module => module.default),
            img3: import('@/assets/images/ProductsCategories/Img3.svg').then(module => module.default),
            img4: import('@/assets/images/ProductsCategories/Img4.svg').then(module => module.default),
            heading: 'Cartridges',
            stars: import('../components/icons/star.svg').then(module => module.default),
            leaf: import('../components/icons/drugLeaf.svg').then(module => module.default),
            backgroundColor: '#ebb22d',
            subHeading: 'Cookie Milk D8+THCP Vape Cart',
            price: '25.99',
            rating: '5.0',
            ratingQty: '(120)',
            weight: '7g',
            type: 'Hybrid',
            thc: '22%',
            cbc: '1%',
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            shopLocal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
        }
    ];
    return cards.find(card => card.id === id);
};

const updateMainImage = (image) => {
    mainImage.value = image;
};

onMounted(() => {
    fetchCardDetails();
});
</script>
