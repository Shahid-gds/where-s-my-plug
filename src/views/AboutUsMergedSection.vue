<template>
    <section class="">
        <div class="overflow-hidden sm:pt-[10rem] pt-[5rem]">
            <div class="xl:flex flex-row-reverse items-center pt-[5rem]">
                <div class="w-full">
                    <div class="">
                        <img src="../assets/images/AboutUsImg2.svg" alt="">
                    </div>
                </div>
                <div class="w-full">
                    <div class="ml-[15rem]">
                        <h1
                            class="font-[Jost-ExtraBold] pb-[2rem] md:text-[50px] sm:text-[30px] text-[25px] text-[#000000] sm:leading-[3.5rem] xl:text-left text-center">
                            For Business</h1>
                        <p class="pb-6">The SaaS solutions making cannabis happen, integrated with a marketplace of 16M+
                            consumers
                            and a vast network of trusted retailers.</p>
                        <p class="pb-6">Our Weed Business product suite includes omnichannel advertising, marketing,
                            operations, and
                            your own branded ecommerce in one easy-to-navigate place. We enable clients to scale their
                            businesses while complying with the complex and disparate regulations applicable to the
                            cannabis industry.*</p>
                        <p>*Not all products available in all markets</p>
                    </div>

                </div>
            </div>
            <div class="container mx-auto xl:flex  items-center pt-[5rem] pb-[5rem]">
                <div class="w-full">
                    <div class="">
                        <img src="../assets/images/AboutUsImg3.svg" alt="">
                    </div>
                </div>
                <div class="w-full">
                    <div class="mr-[10rem]">
                        <h1
                            class="font-[Jost-ExtraBold] pb-[2rem] md:text-[50px] sm:text-[30px] text-[25px] text-[#000000] sm:leading-[3.5rem] xl:text-left text-center">
                            Consumer <br>
                            Marketplace
                        </h1>
                        <p>Our signature consumer-facing platform (available on the web at where'smyplug.com, and
                            through native Android and iOS apps), provides consumers with information regarding cannabis
                            products, including online ordering, local retailer and brand listings, product discovery,
                            and consumer education on cannabis and its history, uses, and legal status.</p>
                    </div>

                </div>
            </div>

        </div>
        <div class="pb-[15rem]">
            <WecomeToWMPCarousel />
        </div>
    </section>
</template>

<script setup>
import WecomeToWMPCarousel from '@/components/layout/UI/WecomeToWMPCarousel.vue';

</script>

<style scoped></style>