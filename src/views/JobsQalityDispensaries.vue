<template>
    <section class="pb-[5rem] relative">
        <div class="container mx-auto px-10 flex justify-center items-center h-full] absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div class="relative lg:block hidden">
                <div class="xl:w-[1280px]">
                    <img class="" src="../assets/images/qualityProductsLabel.svg" alt="">
                </div>
                <div class="absolute top-0 xl:p-10 px-6 w-full lg:flex justify-between">
                   <div class="w-full flex items-center space-x-4">
                    <div class="bg-white rounded-full lg:p-6 p-2 border-4">
                        <img src="../components/icons/WMPicon.svg" alt="">
                    </div>
                    <div class="text-white">
                        <h1 class="xl:text-[40px] font-[Extra-Bold] leading-6">Shop No.1 Dispensaries Near You</h1>
                        <h2 class="xl:text-[30px] text-[#c6fff7] font-[Semi-Bold]">Showing you stores near Newyork, USA</h2>
                        <p class="lg:mr-[15rem]"><a href="#" class="underline font-[Semi-Bold] xl:text-xl">Check out our dispensaries map</a>
                        to find the nearest dispensary outside of your area.</p>
                    </div>
                   </div>
                   <div class="xl:w-[20%] w-[40%] text-white text-right">
                    <h1 class="font-[Bold]">Rated 4.9 / 5</h1>
                    <div class="flex justify-end">
                        <div class="w-[24px]">
                            <img src="../components/icons/star.svg" alt="">
                        </div>
                        <div class="w-[24px]">
                            <img src="../components/icons/star.svg" alt="">
                        </div>
                        <div class="w-[24px]">
                            <img src="../components/icons/star.svg" alt="">
                        </div>
                        <div class="w-[24px]">
                            <img src="../components/icons/star.svg" alt="">
                        </div>
                        <div class="w-[24px]">
                            <img src="../components/icons/star.svg" alt="">
                        </div>
                    </div>
                    <div class="">
                        <p class="text-[13px]">Based on 848 reviews</p>
                    </div>
                    <div class="pt-[3rem]">
                        <button class="uppercase font-[Bold]">See all dispensaries</button>
                    </div>
                   </div>
                </div>
            </div>
            <div class="lg:hidden pb-20">
                    <div class="bg-gradient-to-r from-[#61c1b4] bg-[#468f85] w-full p-10 px-6 rounded-[30px] shadow-xl">
                        <div class="">
                            <div class="w-full sm:flex items-center sm:space-x-4">
                             <div class="sm:bg-white rounded-full lg:p-6 p-2 sm:border-4">
                                 <img src="../components/icons/WMPicon.svg" alt="">
                             </div>
                             <div class=" text-white">
                                 <h1 class="xl:text-[40px] font-[Extra-Bold] leading-6">Shop No.1 Dispensaries Near You</h1>
                                 <h2 class="xl:text-[30px] text-[#c6fff7] font-[Semi-Bold]">Showing you stores near Newyork, USA</h2>
                                 <p class="lg:mr-[15rem]"><a href="#" class="underline font-[Semi-Bold] xl:text-xl">Check out our dispensaries map</a>
                                 to find the nearest dispensary outside of your area.</p>
                             </div>
                            </div>
                            <div class="text-white text-right">
                             <h1 class="font-[Bold]">Rated 4.9 / 5</h1>
                             <div class="flex justify-end">
                                 <div class="w-[24px]">
                                     <img src="../components/icons/star.svg" alt="">
                                 </div>
                                 <div class="w-[24px]">
                                     <img src="../components/icons/star.svg" alt="">
                                 </div>
                                 <div class="w-[24px]">
                                     <img src="../components/icons/star.svg" alt="">
                                 </div>
                                 <div class="w-[24px]">
                                     <img src="../components/icons/star.svg" alt="">
                                 </div>
                                 <div class="w-[24px]">
                                     <img src="../components/icons/star.svg" alt="">
                                 </div>
                             </div>
                             <div class="">
                                 <p class="text-[13px]">Based on 848 reviews</p>
                             </div>
                             <div class="pt-[3rem]">
                                 <button class="uppercase font-[Bold]">See all dispensaries</button>
                             </div>
                            </div>
                         </div>
                    </div>
            </div>
        </div>
        <div class="overflow-hidden pt-[15rem]">
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
                <h1 class="font-[Jost-ExtraBold] md:text-[50px] text-[30px] text-[#000000]">Dispensaries Jobs Near You</h1>
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