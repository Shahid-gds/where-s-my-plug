<template>
    <section class="-mt-[10rem]">
        <div class="container mx-auto border-2 p-10 rounded-xl bg-white">
            <div class="flex justify-center">
                <img src="../components/icons/cart.svg" alt="">
            </div>
            <div class="text-center pt-4">
                <h1 class="uppercase text-[30px]">Your cart is empty</h1>
                <p class="text-[20px] pb-4">Don't wait to bake. Add items to your cart and enjoy your weed today.</p>
                <router-link :to="{name : 'Dispensaries'}" class="p-3 bg-[#61C1B4] rounded-full px-16 font-[Bold] uppercase text-white">Shop Now</router-link>
            </div>
        </div>
    </section>
</template>