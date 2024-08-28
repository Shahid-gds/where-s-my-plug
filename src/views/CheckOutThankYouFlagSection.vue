<template>
    <section class="pb-[20rem] -mt-[8rem] container mx-auto px-6">
        <div class="w-full bg-white sm:p-16 p-6 shadow-lg rounded-xl text-center">
            <h1 class="uppercase sm:text-[25px] pb-3 font-[Semi-Bold]">Your Order Number is {{ orderNumber }}</h1>
            <p class="text-[#ACACAC] sm:text-[18px] uppercase pb-6">We'll email you an order confirmation with details
                and tracking info</p>
            <div class="w-full">
                <router-link :to="{ name: 'Products' }" @click="scrollToTop"
                    class="hover-btn lg:w-[30%] w-full text-center p-4 rounded-full bg-[#61C1B4] text-white font-[Bold]">Continue
                    Shopping</router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const orderNumber = ref('');


const savedOrderNumber = localStorage.getItem('orderNumber');
if (savedOrderNumber) {
    orderNumber.value = savedOrderNumber;
}

onMounted(() => {
    if (!sessionStorage.getItem('reloaded')) {
        sessionStorage.setItem('reloaded', 'true');
        window.location.reload();
    } else {
        sessionStorage.removeItem('reloaded');
    }
});

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<style scoped>
/* Add your styles here */
</style>
