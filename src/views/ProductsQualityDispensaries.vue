<template>
    <section class="sm:pb-[5rem] pb-[1rem] relative">
        <div class="overflow-hidden sm:pt-[5rem] pt-[2rem]">
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
                <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">Quality dispensaries</h1>
                <h1 class="font-[Jost-ExtraBold] md:text-[50px] text-[30px] text-[#000000]">Featured Cannabis Products</h1>
            </div>
         </div>
         <div class="overflow-hidden">
            <QualityDispensariesCarousel />
         </div>
        </div>
    </section>
</template>

<script setup>
import QualityDispensariesCarousel from '@/components/layout/UI/QualityDispensariesCarousel.vue';
</script>