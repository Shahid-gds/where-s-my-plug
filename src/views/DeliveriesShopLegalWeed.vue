<template>
    <section class="pb-[15rem]">
        <div class="overflow-hidden pt-[5rem]">
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
                <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">Shop Leafly for local, legal weed, anywhere you are.</h1>
                <h1 class="font-[Jost-ExtraBold] md:text-[50px] text-[30px] text-[#000000]">Going Somewhere?</h1>
            </div>
         </div>
         <div class="overflow-hidden">
            <ShopLegalWeedCarousel />
         </div>
        </div>
    </section>
</template>

<script setup>
import ShopLegalWeedCarousel from '@/components/layout/UI/ShopLegalWeedCarousel.vue';
</script>