<template>
    <section class="sm:pb-[20rem] pb-[15rem]">
        <div class="bg-covers bg-center bg-[url('@/assets/images/bgs/FooterBg.svg')] w-full p-6">
            <div class="container mx-auto py-[12rem] text-center">
                <div class="text-[#010101]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-ExtraBold]">
                    {{ card.heading }}
                </div>
                <div class="text-[#61c1b4]  md:text-[70px] sm:text-[50px] text-[20px] font-[Jost-SemiBold] relative">{{
                    card.subHeading }}
                </div>
            </div>
        </div>
        <div class="container mx-auto sm:-mt-[8rem] -mt-[10rem]">
            <div class="sm:flex sm:space-x-6 items-center justify-center w-full p-4 rounded-xl">
                <!-- main image -->
                <div class="w-full border-2 p-2 rounded-2xl flex justify-center bg-[white]">
                    <img class="w-full" v-if="mainImage" :src="mainImage" alt="Product image">
                </div>
                <div class="w-full">
                    <span class="text-[#010101]  sm:text-[30px] text-[25px] font-[Jost-ExtraBold]">$</span>
                    <span class="text-[#61c1b4]  sm:text-[40px] text-[30px]  font-[Jost-SemiBold]">
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
                        <div class="rounded-xl p-2" :style="{ backgroundColor: card.backgroundColor }">
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
                    <div class="py-4">
                        <button @click="addToCart" :disabled="!isLoggedIn" class="bg-[#61c1b4] p-3 rounded-lg px-16 text-white font-[Bold]">Add to
                            cart</button>
                    </div>
                    <div v-if="!isLoggedIn">
                        To place an order online, you'll need to <router-link :to="{name : 'Sign-In'}" class="text-red-500 font-bold">Login</router-link>  or 
                        <router-link :to="{name: 'Sign-Up'}" class="text-red-500 font-bold">Create an account.</router-link>
                    </div>
                </div>
              <div class="flex justify-center">
                <div class="">
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
            </div>
            <div class="flex space-x-4 pt-8">
                <!-- related images -->
                <div :class="['border-2 cursor-pointer p-2 rounded-2xl flex justify-center w-[20%] ', mainImage === card.img1 ? 'border-[black]' : 'border-[#61c1b4]']"
                    @click="updateMainImage(card.img1)">
                    <img class="w-[100%]" v-if="card.img1" :src="card.img1" alt="Product image">
                </div>
                <div :class="['border-2 p-2 cursor-pointer rounded-2xl flex justify-center w-[20%]', mainImage === card.img2 ? 'border-[black]' : 'border-[#61c1b4]']"
                    @click="updateMainImage(card.img2)">
                    <img class="w-[100%]" v-if="card.img2" :src="card.img2" alt="Product image">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useCartStore } from '@/stores/modules/cart';
import { ref, onMounted } from 'vue';
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
            card.value = {
                ...cardData,
                img1: await cardData.img1,
                img2: await cardData.img2,
                stars: await cardData.stars,
                leaf: await cardData.leaf,
            };
            mainImage.value = card.value.img1;
        } else {
            scrollToTop();
            router.push({ name: 'NotFoundProduct' });
        }
    } catch (error) {
        console.error('Error fetching card details:', error);
    }
};

const getCardById = async (id) => {
    const cards = [
        {
            id: '1',
            img1: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then(module => module.default),
            img2: import('../assets/images/CannabisStrainCarousel/ImgOne.svg').then(module => module.default),
            heading: 'Banana Cream Cake',
            stars: import('../components/icons/star.svg').then(module => module.default),
            leaf: import('../components/icons/drugLeaf.svg').then(module => module.default),
            backgroundColor: '#61c1b4',
            price: '25',
            rating: '5.0',
            ratingQty: '(120)',
            weight: '3.5g',
            type: 'Hybrid',
            thc: '22%',
            cbc: '1%',
            effect: {
                header: 'Effects',
                effectOne: 'Energetic',
                effectTwo: 'Uplifting',
                effectThree: 'Focused',
                effectFour: 'Creative'
            },
            flavour: {
                header: 'Flavour',
                flavourOne: 'Citrus',
                flavourTwo: 'Diesel',
                flavourThree: 'Earthy',
            },
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            shopLocal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
        },
        {
            id: '2',
            img1: import('../assets/images/CannabisStrainCarousel/ImgOne.svg').then(module => module.default),
            img2: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then(module => module.default),
            heading: 'Platinum Kush Breath',
            stars: import('../components/icons/star.svg').then(module => module.default),
            leaf: import('../components/icons/drugLeaf.svg').then(module => module.default),
            backgroundColor: '#61c1b4',
            price: '25',
            rating: '5.0',
            ratingQty: '(120)',
            weight: '3.5g',
            type: 'Hybrid',
            thc: '22%',
            cbc: '1%',
            effect: {
                header: 'Effects',
                effectOne: 'Energetic',
                effectTwo: 'Uplifting',
                effectThree: 'Focused',
                effectFour: 'Creative'
            },
            flavour: {
                header: 'Flavour',
                flavourOne: 'Citrus',
                flavourTwo: 'Diesel',
                flavourThree: 'Earthy',
            },
            paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            shopLocal: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            note: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing'
        },
    ];
    return cards.find(card => card.id === id);
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
button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}
</style>