<template>
    <section class="sm:mt-[5rem] mt-[2.5rem]">
        <div class="overflow-hidden">
            <div class="flex justify-center">
                <div class="py-6 relative">
                    <div class="bg-[#61c1b4] w-[182px] h-0.5">
                        <div class="w-full absolute top-0">
                            <img class="mr-auto ml-auto" src="../components/icons/drugLeaf.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center px-6">
                <div class="text-center">
                    <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">
                        Browse by categories
                    </h1>
                </div>
            </div>
            <div class="md:flex md:space-x-10 items-center container mx-auto sm:px-[7.5rem] px-6">
                <div class="w-full py-6 text-xl md:text-left text-center">
                    {{ itemsFound }} items found
                </div>
                <div class="w-full flex md:justify-end justify-center items-center space-x-8 pb-2">
                    <div>
                        <label class="text-xl" for="">Sort By:</label>
                    </div>
                    <div class="select" ref="dropdown">
                        <div class="selectBtn border-2 p-3 bg rounded-xl"
                            :class="{ toggle: dropdownVisible }" @click="toggleDropdown">{{ selectedOption }}</div>
                        <div class="selectDropdown p-2" :class="{ toggle: dropdownVisible }">
                            <div class="option w-full" v-for="option in options" :key="option"
                                @click="selectOption(option)" :data-type="option">{{ option }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ProdutsCategoriesCards v-if="filteredCards.length > 0" :cards="sortedCards" />
                <div v-else class="text-center text-xl p-[20rem] border-2 container mx-auto rounded-xl">
                    No products found with this category
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import ProdutsCategoriesCards from '../components/layout/UI/ProductsCategoriesCards.vue';
import { useApi } from '@/components/api/useApi';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const cards = ref([]);
const selectedOption = ref('All');
const dropdownVisible = ref(false);
const options = ['All', 'Flower', 'Pre-roll', 'Edibles', 'Concentrates', 'Vapes', 'Tinctures', 'Tropicals', 'Capsules', 'Drinks', 'Hash', 'Kief'];
const dropdown = ref(null);
const router = useRouter();
const route = useRoute();

const handleClickOutside = (event) => {
    if (dropdown.value && !dropdown.value.contains(event.target)) {
        dropdownVisible.value = false;
    }
};

const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
};

const selectOption = (option) => {
    selectedOption.value = option;
    dropdownVisible.value = false;
    router.push({ name: 'Products', query: { category: option } });
};

const filteredCards = computed(() => {
    if (selectedOption.value === 'All') {
        return cards.value;
    }
    return cards.value.filter(card => card.category === selectedOption.value);
});

const sortedCards = computed(() => {
    const sorted = [...filteredCards.value];
    switch (route.query.sortBy || 'Best Match') {
        case 'Top Sales':
            return sorted.sort((a, b) => b.sales - a.sales);
        case 'Newest Arrivals':
        
            return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        case 'Price Low to High':
            return sorted.sort((a, b) => a.price - b.price);
        case 'Price High to Low':
            return sorted.sort((a, b) => b.price - a.price);
        default:
            return sorted;
    }
});

const itemsFound = computed(() => sortedCards.value.length);

onMounted(async () => {
    try {
        const response = await axios.get(`${apiUrl}/products/getAllProducts`);
        cards.value = response.data.data.products;

        if (route.query.category && route.query.category !== 'All') {
            router.push({ name: 'Products', query: { category: 'All' } });
        } else {
            selectedOption.value = route.query.category || 'All';
        }
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});

document.addEventListener('click', handleClickOutside);
</script>

<style scoped>
.select {
    position: relative;
    width: 50%;
}

.select .selectBtn:after {
    content: "";
    position: absolute;
    z-index: 50;
    top: 45%;
    right: 15px;
    width: 10px;
    height: 10px;
    transform: translateY(-50%) rotate(45deg);
    border-right: 2px solid #61C1B4;
    border-bottom: 2px solid #61C1B4;
    cursor: pointer;
    transition: 0.2s ease;
}

.select .selectBtn.toggle {
    border-radius: 15px 15px 0 0;
}

.select .selectBtn.toggle:after {
    transform: translateY(-50%) rotate(-135deg);
}

.select .selectDropdown {
    position: absolute;
    top: 100%;
    width: 100%;
    border-radius: 0 0 15px 15px;
    overflow-y: hidden;
    background: #61C1B4;
    border-top: 1px solid #61C1B4;
    z-index: 1;
    transform: scale(1, 0);
    transform-origin: top center;
    visibility: hidden;
    transition: 0.2s ease;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
}

.select .selectDropdown .option {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease;
}

.select .selectDropdown .option:hover {
    color: white;
}

.select .selectDropdown.toggle {
    visibility: visible;
    transform: scale(1, 1);
}
</style>
