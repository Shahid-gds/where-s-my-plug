<template>
    <section class="md:-mt-[16rem] -mt-[20rem] pb-[5rem]">
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
                    <h1 class="font-[Jost-ExtraBold] md:text-[30px] text-[20px] text-[#61c1b4] uppercase">Browse by categories</h1>
                </div>
            </div>
            <div>
                <StoresForSellingBrandProducts />
            </div>
        </div>
    </section>
</template>

<script setup>
import StoresForSellingBrandProducts from '../components/layout/UI/StoresSellingBrandProductCard.vue'
</script>