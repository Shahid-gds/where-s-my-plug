<template>
    <section class="sm:pt-[5rem] pb-[15rem]">
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
            <div class="container mx-auto xl:px-[15rem] flex justify-center px-6 md:pb-[5rem] pb-[2rem]">
                <div class="text-center">
                    <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">Welcome to
                        Learn</h1>
                    <h1 class="md:text-[36px] sm:text-[25px] text-[18px] font-[Jost-ExtraBold]">Understanding The
                        Essential Topics</h1>
                    <p class="pt-[1rem]">Welcome to Learn, your guide to understanding the essential topics and laws relating to cannabis.
                        We created Learn to offer reliable educational resources for novice and connoisseur consumers
                        alike. Like the plant we know and love, this section will grow, so stay tuned for updates.</p>
                    <h1></h1>
                </div>
            </div>
            <div>
                <WecomeToWMPCarousel />
            </div>
        </div>
    </section>
</template>

<script setup>
import WecomeToWMPCarousel from '@/components/layout/UI/WecomeToWMPCarousel.vue';
</script>