<template>
    <section class="-mt-[10rem] px-6">
        <div class="container mx-auto border-2 md:p-10 p-6 rounded-xl bg-white">
            <div class="flex justify-center">
                <img src="../components/icons/cart.svg" alt="">
            </div>
            <div class="text-center pt-4">
                <h1 class="uppercase sm:text-[30px] text-[20px]">Your cart is empty</h1>
                <p class="sm:text-[20px] pb-4">Don't wait to bake. Add items to your cart and enjoy your weed today.</p>
                <router-link :to="{name : 'Dispensaries'}" class="p-3 bg-[#61C1B4] rounded-full px-16 font-[Bold] uppercase text-white">Shop Now</router-link>
            </div>
        </div>
    </section>
</template>