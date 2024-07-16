<template>
    <section class="sm:pb-[20rem] pb-[15rem]">
        <div class="bg-covers bg-center bg-[url('@/assets/images/bgs/FooterBg.svg')] w-full p-6 pb-[5rem]">
            <div class="container mx-auto py-[12rem] text-center">
            </div>

        <div class="container mx-auto sm:-mt-[15rem] -mt-[10rem] px-[8rem]">
            <div class="sm:flex items-center sm:space-x-16 justify-center w-full p-4 rounded-xl">
                <!-- main image -->
                <div class="w-full border-2 p-2 rounded-2xl  bg-[white] relative">
                    <!-- previous button -->
                    <div  v-if="card.heading === 'Flower' || card.heading === 'Cartridges' || card.heading === 'Terpenes'" class="bg-[#61c1b4] p-3 rounded-r-full text-white absolute left-0 top-[10rem] cursor-pointer hover:bg-[#998a8a] transition-all duration-150" :style="{ backgroundColor: card.backgroundColor }"
                        @click="prevImage">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div class="">
                        <img class="w-full" v-if="mainImage" :src="mainImage" alt="Product image">
                    </div>
                    <!-- next button -->
                    <div v-if="card.heading === 'Flower' || card.heading === 'Cartridges' || card.heading === 'Terpenes'" class="bg-[#61c1b4] p-3 rounded-l-full text-white absolute right-0 top-[10rem] cursor-pointer hover:bg-[#998a8a] transition-all duration-150" :style="{ backgroundColor: card.backgroundColor }"
                        @click="nextImage">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div class="w-full">
                    <div class="flex justify-between items-center pb-1">
                        <div class="text-[#010101] text-[30px] font-[Jost-ExtraBold]">
                            {{ card.heading }}
                        </div>
                        <div class="p-2 text-white rounded-full px-6"
                            :style="{ backgroundColor: card.backgroundColor }">
                            {{ card.type }}
                        </div>
                    </div>
                    <div class="text-[#61c1b4]  text-[25px] font-[Jost-SemiBold] relative">{{
                            card.subHeading }}
                    </div>
                    <div class="py-6">
                        <span class="text-[#010101]  text-[20px]font-[Jost-ExtraBold]">$</span>
                        <span class="text-[#61c1b4]  text-[25px] font-[Jost-SemiBold]">
                            {{ card.price }}
                        </span>
                    </div>
                    <div class="font-[Jost-SemiBold] pb-2">
                        <span>Size: </span>
                        <div class="text-2xl font-bold">
                            {{ card.weight }}
                        </div>
                    </div>

                    <div class="py-4">
                        <button @click="addToCart" :disabled="!isLoggedIn"
                            class="bg-[#61c1b4] p-3 rounded-lg px-16 text-white font-[Bold]" :style="{ backgroundColor: card.backgroundColor }">Add to
                            cart</button>
                    </div>
                    <div v-if="!isLoggedIn">
                        To place an order online, you'll need to <router-link :to="{ name: 'Sign-In' }"
                            class="text-red-500 font-bold">Login</router-link> or
                        <router-link :to="{ name: 'Sign-Up' }" class="text-red-500 font-bold">Create an
                            account.</router-link>
                    </div>
                </div>
                <div class="w-full">
                    <div class="">
                        <div class="pb-5">
                            <h1 class="text-xl">THC</h1>
                            <p class="text-2xl font-[Bold]">{{ card.thc }}</p>
                        </div>
                        <div class="pb-5">
                            <h1 class="text-xl">CBN</h1>
                            <p class="font-[Bold] text-2xl">{{ card.cbn }}</p>
                        </div>
                        <div class="pb-5 h-[250px] relative">
                            <div class="flex justify-between">
                                <div>
                                    <h1 class="font-[Bold] text-xl">Product Detail</h1>
                                </div>
                                <div class="cursor-pointer border-2 p-1 rounded-full" @click="toggleNote" :style="{ borderColor: card.borderColor }">
                                    <svg v-if="!isNoteVisible" xmlns="http://www.w3.org/2000/svg" fill="none" 
                                        viewBox="0 0 24 24" stroke-width="1.5" :stroke="card.borderColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" :stroke="card.borderColor" class="size-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                            <transition-group name="nested" tag="div">
                                <p v-if="isNoteVisible">{{ card.note }}</p>
                            </transition-group>

                        </div>
                    </div>
                </div>
            </div>
            <div class="flex space-x-4">
                <!-- Related images -->
                <div v-if="card.heading === 'Flower' || card.heading === 'Cartridges' || card.heading === 'Terpenes'" v-for="(image, index) in card.relatedImages" :key="index"
                    :class="['border-2 p-2 cursor-pointer rounded-2xl flex justify-center w-[10%] h-[10%]', mainImage === image ? 'border-[black]' : 'border-[#61c1b4]']"
                    @click="updateMainImage(image)">
                    <img class="w-[100%]" :src="image" alt="Product image">
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useCartStore } from '@/stores/modules/cart';
import { useRoute, useRouter } from 'vue-router';


const cartStore = useCartStore();

const isLoggedIn = ref(false);
const userEmail = ref('');
const userId = ref('');

const LoggedInStatus = () => {
    // Check if user is logged in based on cookies or other authentication state
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'userEmail') {
            userEmail.value = decodeURIComponent(value);
        } else if (name === 'userId') {
            userId.value = decodeURIComponent(value);
        }
    }
    isLoggedIn.value = userEmail.value !== '' && userId.value !== '';
};



const addToCart = () => {
    scrollToTop();
    console.log('Adding to cart:', card.value);
    cartStore.addToCart(card.value);
}

const card = ref({});
const mainImage = ref(null);
const route = useRoute();
const router = useRouter();

const fetchCardDetails = async () => {
    const cardId = route.params.id;
    try {
        const cardData = await getCardById(cardId);
        if (cardData) {
            // Resolve promises for images
            const img1 = await cardData.img1;
            const img2 = await cardData.img2;
            const img3 = await cardData.img3;
            const img4 = await cardData.img4;

            // Assign resolved image URLs to card.value
            card.value = {
                ...cardData,
                relatedImages: [
                    img1,
                    img2,
                    img3,
                    img4,
                ].filter(img => img),
            };
            mainImage.value = card.value.relatedImages[0];
        } else {
            scrollToTop();
            router.push({ name: 'NotFoundProduct' });
        }
    } catch (error) {
        console.error('Error fetching card details:', error);
    }
};


const isNoteVisible = ref(false);

const toggleNote = () => {
    isNoteVisible.value = !isNoteVisible.value;
};

const getCardById = async (id) => {
    const cards = [
        {
            id: '1',
            img1: import('@/assets/images/ProductsCategories/Img1.svg').then(module => module.default),
            img2: import('@/assets/images/ProductsCategories/Img2.svg').then(module => module.default),
            img3: import('@/assets/images/ProductsCategories/Img3.svg').then(module => module.default),
            heading: 'Flower',
            backgroundColor: '#61c1b4',
            borderColor: '#61c1b4',
            subHeading: 'Yoda Candy THCa Flower',
            price: '25.99',
            weight: '20ct',
            type: 'Hybrid',
            thc: '100mg (5mg each)',
            cbn: '20mg (1mg each)',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
        },
        {
            id: '2',
            img1: import('@/assets/images/ProductsCategories/Img2.svg').then(module => module.default),
            img2: import('@/assets/images/ProductsCategories/Img1.svg').then(module => module.default),
            heading: 'Cartridges',
            backgroundColor: '#ebb22d',
            borderColor: '#ebb22d',
            subHeading: 'Cookie Milk D8+THCP Vape Cart',
            price: '25.99',
            weight: '20ct',
            type: 'CBD',
            thc: '100mg (5mg each)',
            cbn: '20mg (1mg each)',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
        },
        {
            id: '3',
            img1: import('@/assets/images/ProductsCategories/Img3.svg').then(module => module.default),
            heading: 'Pre-rolls',
            backgroundColor: '#61c1b4',
            subHeading: 'Delta 8 THC Pre Roll Sativa Sour Candy',
            price: '25.99',
            weight: '20ct',
            type: 'Hybrid',
            thc: '100mg (5mg each)',
            cbn: '20mg (1mg each)',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
        },
        {
            id: '4',
            img1: import('@/assets/images/ProductsCategories/Img4.svg').then(module => module.default),
            img2: import('@/assets/images/ProductsCategories/Img3.svg').then(module => module.default),
            heading: 'Terpenes',
            backgroundColor: '#61c1b4',
            subHeading: 'Sour Haze Live Resin Terpene',
            price: '25.99',
            weight: '20ct',
            type: 'Hybrid',
            thc: '100mg (5mg each)',
            cbn: '20mg (1mg each)',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
        },
        {
            id: '5',
            img1: import('@/assets/images/ProductsCategories/Img5.svg').then(module => module.default),
            heading: 'Vape Pens',
            backgroundColor: '#ebb22d',
            subHeading: 'MAC 2ml THCa Sauce Vape Pen',
            price: '25.99',
            weight: '20ct',
            type: 'Indica',
            thc: '100mg (5mg each)',
            cbn: '20mg (1mg each)',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
        },
        {
            id: '6',
            img1: import('@/assets/images/ProductsCategories/Img6.svg').then(module => module.default),
            img2: import('@/assets/images/ProductsCategories/Img1.svg').then(module => module.default),
            heading: 'Cartridges',
            backgroundColor: '#61c1b4',
            subHeading: 'Yoda Candy THCa Flower',
            price: '25.99',
            weight: '20ct',
            type: 'Hybrid',
            thc: '100mg (5mg each)',
            cbn: '20mg (1mg each)',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
        },
    ];
    return cards.find(card => card.id === id);
};

let currentImageIndex = ref(0);

const nextImage = () => {
    const imageCount = card.value.relatedImages.length;
    currentImageIndex.value = (currentImageIndex.value + 1) % imageCount;
    mainImage.value = card.value.relatedImages[currentImageIndex.value];
};

const prevImage = () => {
    const imageCount = card.value.relatedImages.length;
    currentImageIndex.value = (currentImageIndex.value - 1 + imageCount) % imageCount;
    mainImage.value = card.value.relatedImages[currentImageIndex.value];
};

const updateMainImage = (image) => {
    mainImage.value = image;
};

onMounted(() => {
    fetchCardDetails();
    LoggedInStatus();
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
    transform: translateY(-30px);
    opacity: 0;
}

button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>
