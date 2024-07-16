<template>
    <section class="pb-[5rem] mt-[15rem]">
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
         <div class="w-full">
            <div class="text-center">
               <div>
                <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">Find Deals</h1>
                <h1 class="font-[Jost-ExtraBold] md:text-[50px] text-[30px] text-[#000000]">High Deals Nearby</h1>
               </div>
                <div class="w-full flex justify-center py-6">
                    <div class="relative w-1/2">
                      <div class="relative">
                          <input v-model="searchQuery" class="border-2 shadow-xl w-full p-6 px-6 rounded-2xl" type="text" placeholder="What would you like to learn about?">
                      </div>
                      <div class="flex items-center justify-center space-x-3 bg-[#61c1b4] w-[5rem] p-4 absolute top-1.5 right-1.5 rounded-2xl cursor-pointer">
                        <div>
                          <img src="../components/icons/searchIcon.svg" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
         </div>
         <div class="overflow-hidden">
            <DealsBoardCardsPagination :searchQuery="searchQuery" />
         </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import DealsBoardCardsPagination from '@/components/layout/UI/DealsBoardCardsPagination.vue';
const searchQuery = ref('');
</script>