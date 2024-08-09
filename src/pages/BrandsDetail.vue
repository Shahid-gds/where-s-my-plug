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
                <div class="w-1/2 border-2 p-2 rounded-2xl flex justify-center sm:w-[20%] bg-[white]">
                    <img class="w-[100%]" :src="card.image" alt="Product image">
                </div>
                <div class="w-full">
                    {{ card.description }}
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
import StoreForSellingBrand from '../views/StoreForSellingBrand.vue';
import { useApi } from '@/components/api/useApi';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();


const card = ref({
    id: '',
    heading: '',
});
const route = useRoute();
const router = useRouter();

const fetchCardDetails = async () => {
    const cardId = route.params.id;
    try {
        const response = await fetch(`${apiUrl}/brands/getMe`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'brand-id': cardId
            }
        });
        const { data } = await response.json();
        if (data && data.brand) {
            const brand = data.brand;
            card.value = {
                id: brand._id,
                heading: brand.name,
                description: brand.description,
                image: brand.image
            }
        }
    } catch (error) {
        console.error('Error fetching card detail', error)
    }
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