<template>
    <section class="">
        <div class="bg-[url('@/assets/images/bgs/FooterBg.svg')] w-full p-6 pb-[5rem]">
            <div class="container mx-auto py-[12rem] text-center">
            </div>

            <div class="container mx-auto sm:-mt-[15rem] -mt-[10rem] xl:px-[8rem]">
                <div class="lg:flex lg:space-x-16 justify-center w-full p-4 rounded-xl">
                    <!-- main image -->
                    <div class="w-full h-[300px] border-2 p-2 rounded-2xl  bg-[white] relative">
                        <!-- previous button -->
                        <!-- <div class="bg-[#61c1b4] p-3 rounded-r-full text-white absolute left-0 top-[10rem] cursor-pointer hover:bg-[#998a8a] transition-all duration-150"
                            :style="{ backgroundColor: card.backgroundColor }" @click="prevImage">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </div> -->
                        <div class="">
                            <img class="w-full h-[280px] rounded-xl" v-if="mainImage" :src="mainImage" alt="Product image">
                        </div>
                        <!-- next button -->
                        <!-- <div class="bg-[#61c1b4] p-3 rounded-l-full text-white absolute right-0 top-[10rem] cursor-pointer hover:bg-[#998a8a] transition-all duration-150"
                            :style="{ backgroundColor: card.backgroundColor }" @click="nextImage">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div> -->
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
                        <!-- <div class="">
                            <span class="text-[#010101]  text-[20px]font-[Jost-ExtraBold]">$</span>
                            <span class="text-[#61c1b4]  text-[25px] font-[Jost-SemiBold]">
                                {{ card.price }}
                            </span>
                        </div> -->
                        <!-- <div class="font-[Jost-SemiBold] pb-2">
                            <span>Size: </span>
                            <div class="text-2xl font-bold">
                                {{ card.weight }}
                            </div>
                        </div> -->
                        <div class="w-full">
                            <!-- Flavours Section -->
                            <div v-if="card.flavours && card.flavours.length" class="pb-5">
                                <h1 class="sm:text-xl">Flavours</h1>
                                <div class="flex flex-wrap gap-2">
                                    <div :style="{ borderColor: card.borderColor }"
                                        v-for="(flavour, index) in card.flavours" :key="index"
                                        class="border-2 border-gray-300 rounded-lg px-3 py-1 bg-white">
                                        {{ flavour }}
                                    </div>
                                </div>
                            </div>

                            <!-- Effects Section -->
                            <div v-if="card.effects && card.effects.length" class="pb-5">
                                <h1 class="sm:text-xl">Effects</h1>
                                <div class="flex flex-wrap gap-2">
                                    <div :style="{ borderColor: card.borderColor }"
                                        v-for="(effect, index) in card.effects" :key="index"
                                        class="border-2 border-gray-300 rounded-lg px-3 py-1 bg-white">
                                        {{ effect }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                         <!-- Relieved Section -->
                         <div v-if="card.relieved && card.relieved.length" class="pb-5">
                            <h1 class="sm:text-xl">Relieved</h1>
                            <div class="flex flex-wrap gap-2">
                                <div :style="{ borderColor: card.borderColor }"
                                    v-for="(relief, index) in card.relieved" :key="index"
                                    class="border-2 border-gray-300 rounded-lg px-3 py-1 bg-white">
                                    {{ relief }}
                                </div>
                            </div>
                        </div>

                        <!-- Aromas Section -->
                        <div v-if="card.aromas && card.aromas.length" class="pb-5">
                            <h1 class="sm:text-xl">Aromas</h1>
                            <div class="flex flex-wrap gap-2">
                                <div :style="{ borderColor: card.borderColor }"
                                    v-for="(aroma, index) in card.aromas" :key="index"
                                    class="border-2 border-gray-300 rounded-lg px-3 py-1 bg-white">
                                    {{ aroma }}
                                </div>
                            </div>
                        </div>
                         <!-- THC and CBD Section -->
                         <div class="w-full flex justify-between">
                            <div class="pb-5">
                                <h1 class="sm:text-xl">THC</h1>
                                <p class="sm:text-2xl font-[Bold]">{{ card.cannabinoids.THC}}</p>
                            </div>
                            <div class="pb-5" v-if="card.cannabinoids.CBN">
                                <h1 class="sm:text-xl">CBD</h1>
                                <p class="font-[Bold] sm:text-2xl">{{ card.cannabinoids.CBN}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pb-5 relative px-6">
                    <div class="flex space-x-7">
                        <div>
                            <h1 class="font-[Bold] text-xl">Detail</h1>
                        </div>
                        <div class="cursor-pointer border-2 p-1 rounded-full" @click="toggleNote"
                            :style="{ borderColor: card.borderColor }">
                            <svg v-if="!isNoteVisible" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" :stroke="card.borderColor"
                                class="size-4">
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
                </div>
                <transition-group name="nested" tag="div" class="px-6">
                    <p v-if="isNoteVisible">{{ card.note }}</p>
                </transition-group>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useCartStore } from '@/stores/modules/cart';
import { useRoute, useRouter } from 'vue-router';
import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

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



// const addToCart = () => {
//     scrollToTop();
//     console.log('Adding to cart:', card.value);
//     cartStore.addToCart(card.value);
// }

const card = ref({
    id: '',
    heading: '',
    backgroundColor: '',
    borderColor: '',
    subHeading: '',
    price: '',
    weight: '',
    type: '',
    cannabinoids: {},
    note: '',
    relatedImages: [],
    flavours: [],
    effects: [],
});
const mainImage = ref(null);
const route = useRoute();
const router = useRouter();

const typeColorMap = {
    'Indica': '#126CAB',
    'Sativa': '#EBB22D',
    'Hybrid': '#42BC97',
}

const fetchCardDetails = async () => {
    const cardId = route.params.id;
    try {
        const response = await fetch(`${apiUrl}/strains/getMe`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'strain-id': cardId
            }
        });
        const { data } = await response.json();
        if (data && data.strain) {
            const strain = data.strain;
            const backgroundColor = typeColorMap[strain.type]
            const borderColor = typeColorMap[strain.type]
            card.value = {
                id: strain._id,
                heading: strain.name,
                backgroundColor,
                borderColor,
                weight: strain.strain_percentages ? `${strain.strain_percentages.Sativa} Sativa / ${strain.strain_percentages.Indica} Indica` : '',
                type: strain.type,
                cannabinoids: strain.cannabinoids,
                note: strain.description,
                relatedImages: strain.images,
                flavours: strain.flavors || [],
                effects: strain.effects || [],
                relieved: strain.relieved || [],
                aromas: strain.aromas || [],
                note: strain.description,
                relatedImages: strain.images,
            };
            mainImage.value = card.value.relatedImages[0];
        } else {
            router.push({ name: 'NotFoundProduct' });
        }
    } catch (error) {
        console.error('Error fetching details:', error)
    }
};


const isNoteVisible = ref(false);

const toggleNote = () => {
    isNoteVisible.value = !isNoteVisible.value;
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
