<template>
    <section class="-mt-[15rem] pb-[10rem]">
        <div>
            <div class="text-center container mx-auto px-6">
                <div class="font-extrabold sm:leading-[2.5rem]">
                  <span class="text-[#010101]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-ExtraBold]">Exlusive</span><span class="text-[#61c1b4]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-SemiBold] relative"> Offers</span>
                  <h1 class="md:text-[36px] sm:text-[25px] text-[18px] font-[Jost-ExtraBold]">Top Products Near You</h1>
                </div>     
              </div>
            <exclusiveOfferCarousel />
            <div>
                <shopDetailProductsCard />
            </div>
        </div>
    </section>
</template>

<script setup>
import exclusiveOfferCarousel from '../components/layout/UI/ExlusiveOfferCarousel.vue'
import shopDetailProductsCard from '@/components/layout/UI/shopDetailProductsCard.vue'
</script>