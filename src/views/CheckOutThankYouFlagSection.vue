<template>
    <section class="pb-[20rem] -mt-[8rem] container mx-auto px-6">
        <div class="w-full bg-white p-16 shadow-lg rounded-xl text-center">
            <h1 class="uppercase text-[25px] pb-3 font-[Semi-Bold]">Your Order Number is #012345678</h1>
            <p class="text-[#ACACAC] text-[18px] uppercase pb-6">We'll email you an order conformation with details and tracking Info</p>
            <div class="w-full">
                <router-link :to="{ name: 'CheckOut' }" @click="scrollToTop"
                    class="hover-btn w-[30%] text-center p-4 rounded-full bg-[#61C1B4] text-white font-[Bold]">Continue Shopping</router-link>
            </div>
        </div>
       
    </section>
</template>

<script setup>
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<style scoped>

</style>