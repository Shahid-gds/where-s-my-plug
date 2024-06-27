<template>
    <section class="py-[15rem] h-screen">
        <div class=" text-center container mx-auto px-6">
            <div class="flex justify-center pb-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="size-28">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>

            </div>
            <div class="font-extrabold sm:leading-[2.5rem]">
                <span class="text-[#010101] md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-ExtraBold]">Not </span>
                <span class="text-[#61c1b4] md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-SemiBold]"> Found</span>
                <h1 class="sm:text-[25px]">If you want to buy a specific product, <br> please go back
                    <router-link class="underline uppercase" :to="{ name: 'Products' }">product</router-link>
                </h1>
            </div>

        </div>
    </section>
</template>

<script setup>

</script>