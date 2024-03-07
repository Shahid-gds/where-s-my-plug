<template>
    <section class="-mt-[20rem] pb-[1rem]">
        <div class="overflow-hidden pt-[3rem]">
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
                    <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">Popular strains</h1>
                </div>
            </div>
            <div class="pb-[5rem]">
                <CannabisStrainCarousel />
            </div>
        </div>
    </section>
</template>

<script setup>
import CannabisStrainCarousel from '@/components/layout/UI/CannabisStrainCarousel.vue';
</script>