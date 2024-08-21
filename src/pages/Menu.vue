<template>
    <div class="relative text-center bg-covers bg-center bg-[url('@/assets/images/bgs/PostAJobHeroBg.svg')] w-full p-6 py-[5rem]">
        <div class="font-extrabold sm:leading-[2.5rem] pt-[10rem]">
            <span
                class="text-[#010101]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-ExtraBold]">Menu</span><span
                class="text-[#61c1b4]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-SemiBold] relative">
                for</span>
            <h1 class="md:text-[36px] sm:text-[25px] text-[18px] font-[Jost-ExtraBold]">{{ state }}
            </h1>
        </div>
    </div>
    <div class="pb-[15rem] container mx-auto px-6">
        <div v-if="loading" class="flex items-center justify-center h-screen">
            <div class="flex items-center space-x-2">
                <svg class="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                <span class="text-gray-600">Loading...</span>
            </div>
        </div>
        <div v-else class="">
            <div class="overflow-hidden sm:pt-[5rem] pt-[2rem]" v-if="products.length > 0">
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
                        <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">Quality
                            Products</h1>
                    </div>
                </div>
            </div>
            <ul v-if="products.length > 0" class="container mx-auto flex flex-wrap justify-center px-6">
                <li v-for="product in products" :key="product._id"
                    class="md:w-[385px] relative w-full rounded-2xl p-6 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]"
                    @click="viewProductDetails(product._id)">
                    <div class="flex justify-center pb-6">
                        <div class="w-[150px] h-[150px]">
                            <img :src="product.images[0]" alt="Product Image" class="w-full h-[150px]" loading="lazy">
                        </div>
                    </div>
                    <div class="text-lg font-bold">
                        {{ product.name }}
                    </div>
                    <div class="py-2 font-[Extra-Bold]">
                        ${{ product.price }}
                    </div>
                    <div class="flex items-center space-x-5 pb-4">
                        <div class="flex">
                            <div v-for="n in 5" :key="n" class="w-[24px]">
                                <svg v-if="n <= Math.round(product.ratingsAverage)" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24" fill="#FFD700" class="w-5 h-5">
                                    <path
                                        d="M12 .587l3.668 7.425 8.172 1.186-5.912 5.76 1.394 8.13-7.322-3.856-7.322 3.856 1.394-8.13-5.912-5.76 8.172-1.186L12 .587z" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="w-5 h-5">
                                    <path
                                        d="M12 .587l3.668 7.425 8.172 1.186-5.912 5.76 1.394 8.13-7.322-3.856-7.322 3.856 1.394-8.13-5.912-5.76 8.172-1.186L12 .587z" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex space-x-2">
                            <div class="text-[#444444] font-[poppin-bold] sm:text-xl">
                                {{ product.ratingsAverage }}
                            </div>
                            <div class="text-[#76c9be] font-[poppin-bold] sm:text-xl">
                                ({{ product.ratingsQuantity }})
                            </div>
                        </div>
                    </div>
                    <div class="description-container">
                        <p :class="{ 'expanded': product.expanded, 'collapsed': !product.expanded }">
                            {{ product.description }}
                        </p>
                        <button @click="toggleDescription(product._id)" class="float-right pt-6 font-bold">
                            {{ product.expanded ? '' : 'Read More...' }}
                        </button>
                    </div>
                </li>
            </ul>
            <div v-else class="py-6 w-full flex justify-center">
                <div class="w-[450px] border-2 p-6 rounded-xl">
                    <div class="text-center text-[30px] font-bold">Products Not In Service </div>
                    <div class="text-center text-[20px]">
                        WMP is not currently available in your area.
                    </div>
                </div>
            </div>

            <div class="overflow-hidden sm:pt-[5rem] pt-[2rem]" v-if="dispensaries.length > 0">
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
                        <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">Quality
                            Dispensaries</h1>
                    </div>
                </div>
            </div>
            <ul v-if="dispensaries.length > 0" class="container mx-auto flex flex-wrap justify-center px-6">
                <li v-for="dispensary in dispensaries" :key="dispensary._id"
                    class="2xl:w-[420px] w-[400px]  rounded-2xl 2xl:p-6 p-4 border-2 border-[#CCE3E0] hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white]">
                    <div class="flex space-x-4">
                        <div class="w-1/2 border-2 rounded-xl">
                            <img class="w-full" :src="dispensary.image" alt="">
                        </div>
                        <div class="w-full">
                            <div class="py-2 font-[Bold]">
                                {{ dispensary.name }}
                            </div>
                            <div class="text-[#A5A5A5] flex space-x-3 items-center">
                                <div>{{ dispensary.type }}</div>
                                <div class="w-2 h-2 bg-[#A5A5A5] rounded-full"></div>
                                <div>{{ dispensary.optionsTwo }}</div>
                            </div>
                            <div class="flex items-center space-x-5 pb-4">
                                <div class="flex">
                                    <div v-for="n in 5" :key="n" class="w-[24px]">
                                        <svg v-if="n <= Math.round(dispensary.ratingsAverage)"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700"
                                            class="w-5 h-5">
                                            <path
                                                d="M12 .587l3.668 7.425 8.172 1.186-5.912 5.76 1.394 8.13-7.322-3.856-7.322 3.856 1.394-8.13-5.912-5.76 8.172-1.186L12 .587z" />
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="#FFD700" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="w-5 h-5">
                                            <path
                                                d="M12 .587l3.668 7.425 8.172 1.186-5.912 5.76 1.394 8.13-7.322-3.856-7.322 3.856 1.394-8.13-5.912-5.76 8.172-1.186L12 .587z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex space-x-2">
                                    <div class="text-[#444444] font-[poppin-bold] sm:text-xl">
                                        {{ dispensary.ratingsAverage }}
                                    </div>
                                    <div class="text-[#76c9be] font-[poppin-bold] sm:text-xl">
                                        ({{ dispensary.ratingsQuantity }})
                                    </div>
                                </div>
                            </div>
                            <div>
                                {{ dispensary.paragraph }}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div v-else class="py-6 w-full flex justify-center">
                <div class="w-[450px] border-2 p-6 rounded-xl">
                    <div class="text-center text-[30px] font-bold">Dispensaries Not In Service </div>
                    <div class="text-center text-[20px]">
                        WMP is not currently available in your area.
                    </div>
                </div>
            </div>

            <div class="overflow-hidden sm:pt-[5rem] pt-[2rem]" v-if="strains.length > 0">
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
                        <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">Quality
                            Dispensaries</h1>
                    </div>
                </div>
            </div>
            <!-- <ul v-if="strains.length > 0">
                <li v-for="strain in strains" :key="strain._id">{{ strain.name }}</li>
            </ul> -->
            <!-- <div v-else class="py-6 w-full flex justify-center">
                <div class="w-[450px] border-2 p-6 rounded-xl">
                    <div class="text-center text-[30px] font-bold">Strains Not In Service </div>
                    <div class="text-center text-[20px]">
                        WMP is not currently available in your area.
                    </div>
                </div>
               </div> -->
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();
const route = useRoute();
const router = useRouter();

const state = ref(route.query.state);
const city = ref(route.query.city);
const products = ref([]);
const dispensaries = ref([]);
const strains = ref([]);
const loading = ref(true);

const fetchData = async () => {
    try {
        const [productsRes, dispensariesRes, strainsRes] = await Promise.all([
            fetch(`${apiUrl}/products/getMeByLocations?state=${state.value}`),
            fetch(`${apiUrl}/dispensaries/getDispensariesByCityState?state=${state.value}`),
            // fetch(`${apiUrl}/strains/geMeByLocations?state=${state.value}`)
        ]);

        const productsData = await productsRes.json();
        const dispensariesData = await dispensariesRes.json();
        // const strainsData = await strainsRes.json();

        products.value = productsData?.data?.products || [];
        dispensaries.value = dispensariesData?.data?.dispensaries || [];
        // strains.value = strainsData?.data?.strains || [];
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loading.value = false;
    }
};

const viewProductDetails = (productId) => {
    router.push({ name: 'ProductDetail', params: { id: productId } });
};

onMounted(() => {
    fetchData();
});

// Watch for changes in the route query parameters
watch(() => route.query, (newQuery) => {
    state.value = newQuery.state;
    city.value = newQuery.city;
    loading.value = true;
    fetchData();
}, { deep: true });
</script>

<style scoped>
.description-container {
    position: relative;
}

.description-container p {
    max-height: 3em;
    overflow: hidden;
    transition: max-height 0.5s ease;
}

.description-container p.expanded {
    max-height: 50em;
}
</style>