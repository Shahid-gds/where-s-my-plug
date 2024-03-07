<template>
    <section class="pb-[5rem]">
        <div class="overflow-hidden">
         <div class="flex justify-center">
            <div class="py-6 relative">
                <div class="bg-[#61c1b4] w-[182px] h-0.5">
                    <div class="w-full absolute top-0 ">
                        <img class="mr-auto ml-auto" src="../components/icons/drugLeaf.svg" alt="">
                    </div>
                </div>
              </div>
         </div>
         <div class="flex justify-center">
            <div class="text-center">
                <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">browse By category</h1>
                <h1 class="font-[Jost-ExtraBold] md:text-[50px] text-[30px] text-[#000000]">Pick Your Product Type</h1>
            </div>
         </div>
         <div class="overflow-hidden">
            <HomeCarousel />
         </div>
        </div>
    </section>
</template>

<script setup>
import HomeCarousel from '@/components/layout/UI/HomeCarousel.vue';
</script>