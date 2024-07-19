<template>
    <section class="relative">
        <div class="overflow-hidden md:pt-[5rem] pt-[2.5rem]">
         <div class="flex justify-center">
            <div class="py-6 relative">
                <div class="bg-[#61c1b4] w-[182px] h-0.5">
                    <div class="w-full absolute top-0 ">
                        <img class="mr-auto ml-auto" src="../components/icons/drugLeaf.svg" alt="">
                    </div>
                </div>
              </div>
         </div>
       
         <div class="overflow-hidden">
            <LearnAboutCards />
         </div>
        </div>
    </section>
</template>

<script setup>
import LearnAboutCards from '@/components/layout/UI/LearnAboutCards.vue'
</script>