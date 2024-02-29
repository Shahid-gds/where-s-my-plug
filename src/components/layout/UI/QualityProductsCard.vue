<template>
    <section class="">
        <transition-group name="nested" tag="div" class="flex flex-wrap justify-center container mx-auto py-[2rem]">
            <div v-for="card in cards"
                class="w-[300px] border-2 border-white hover:border-2  hover:border-[#61c1b4]  hover:shadow-2xl transition-all duration-300 cursor-pointer p-5 m-4 rounded-[30px] bg-[white] shadow-xl py-[2rem]">
                <div class="text-left ">
                    <div class="">
                        <h1 class="text-[25px] font-[Extra-Bold]">{{ card.heading }}</h1>
                    </div>
                    <div>
                        {{ card.options }}
                    </div>
                    <div class="flex items-center space-x-2 py-4">
                        <div class="flex">
                            <div class="w-[24px]">
                                <img :src="card.stars">
                            </div>
                            <div class="w-[24px]">
                                <img :src="card.stars">
                            </div>
                            <div class="w-[24px]">
                                <img :src="card.stars">
                            </div>
                            <div class="w-[24px]">
                                <img :src="card.stars">
                            </div>
                            <div class="w-[24px]">
                                <img :src="card.stars">
                            </div>
                        </div>
                        <div class="">
                            <div class="text-[#444444] font-[poppin-bold] text-xl">{{ card.rating }}</div>
                        </div>
                        <div class="">
                            <div class="text-[#76c9be] font-[poppin-bold] text-xl">{{ card.ratingQty }}</div>
                        </div>

                    </div>
                    <div class="font-[Jost-Bold] text-xl">
                        {{ card.bottomHeading }}
                    </div>
                </div>

            </div>
        </transition-group>
        <div class="flex justify-center pt-[2rem]">
            <button class="hover-btn bg-[#61c1b4] p-4 px-6 rounded-full text-white font-[Jost-Bold]">View All Dispensaries</button>
        </div>
    </section>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';

const cards = ref([
    {
        heading: 'Lorem Ipsume', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle Cookies'
    },
    {
        heading: 'Lorem Ipsume', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Gelato 42, Larry Bird, Zelato'
    },
    {
        heading: 'Simply Dummy', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Milk, Cereal Milk, Larry Milk #2'
    },
    {
        heading: 'Lorem Ipsume', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Tangerine Dream, Larry Bird, Zelato'
    },
    {
        heading: 'MAC', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle Cookies'
    },
    {
        heading: 'Gelato', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle Cookies'
    },
    {
        heading: 'Cereal Milk', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle Cookies'
    },
    {
        heading: 'Cereal Milk', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle Cookies'
    },
    {
        heading: 'Lorem Ipsume', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle Cookies'
    },
    {
        heading: 'Lorem Ipsume', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Gelato 42, Larry Bird, Zelato'
    },
    {
        heading: 'Simply Dummy', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Milk, Cereal Milk, Larry Milk #2'
    },
    {
        heading: 'Lorem Ipsume', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Tangerine Dream, Larry Bird, Zelato'
    },
    {
        heading: 'MAC', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle Cookies'
    },
    {
        heading: 'Gelato', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle Cookies'
    },
    {
        heading: 'Cereal Milk', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle Cookies'
    },
    {
        heading: 'Cereal Milk', stars: import('../../icons/star.svg').then((module) => module.default),
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle Cookies'
    },
]);

onMounted(async () => {
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            stars: await card.stars,
        }))
    );
});

</script>
  
<style scoped>
.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateX(30px);
    opacity: 0;
}
</style>
  