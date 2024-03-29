<template>
    <section class="pb-[15rem]">
        <div class="flex justify-center items-center sm:space-x-4 sm:mt-[2rem] pt-[2rem]">
            <div>
              <img src="../components/icons/oilDrop.svg" alt="">
            </div>
            <div class="font-[Semi-Bold] mt-[1.5rem] sm:text-2xl">
              1000MG, Whole Plant Hemp Extract.
            </div>
          </div>
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
         <div class="flex justify-center px-6 pb-[3rem]">
            <div class="text-center">
                <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">Where's My Plug</h1>
                <h1 class="font-[Jost-ExtraBold] md:text-[50px] text-[30px] text-[#000000]">Current Job Openings</h1>
            </div>
         </div>
         <div class="overflow-hidden">
            <JobsBoardCards />
         </div>
         <div>
            <WecomeToWMPCarouselVue />
        </div>
        <div>
            <LearnGetYourAnswerVue />
        </div>
        </div>
    </section>
</template>

<script setup>
import JobsBoardCards from '@/components/layout/UI/JobsBoardCards.vue';
import WecomeToWMPCarouselVue from '@/components/layout/UI/WecomeToWMPCarousel.vue';
import LearnGetYourAnswerVue from './LearnGetYourAnswer.vue';
</script>