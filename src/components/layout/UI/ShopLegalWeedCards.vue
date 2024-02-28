<template>
    <section class="">
        <transition-group name="nested" tag="div" class="flex flex-wrap justify-center container mx-auto py-[2rem]">
            <div v-for="card in cards"
                class="w-[350px] border-2 border-white hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer p-8 m-4 rounded-[30px] bg-[#f9f9f9] py-[2rem]">
                <div class="text-left ">
                    <div class="">
                        <h1 class="text-[25px] font-[Bold]">{{ card.heading }}</h1>
                    </div>
                                 
                    <div class="flex items-center justify-between">
                        <div class="text-[#747474] text-xl font-[Medium]">
                            {{ card.bottomHeading }}
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="text-[#444444] font-[Medium] text-xl">
                                {{ card.rating }}
                            </div>
                            <div class="text-[#6bc5b9] font-[Medium] text-xl">
                                {{ card.ratingQty }}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </transition-group>
     
    </section>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';

const cards = ref([
    {
        heading: 'Las Vegas',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        heading: 'Denver',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '312 dispensaries'
    },
    {
        heading: 'Chicago',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '44 dispensaries'
    },
    {
        heading: 'San Diego',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        heading: 'Las Vegas',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        heading: 'Denver',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '312 dispensaries'
    },
    {
        heading: 'Chicago',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '44 dispensaries'
    },
    {
        heading: 'San Diego',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        heading: 'Las Vegas',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        heading: 'Denver',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '312 dispensaries'
    },
    {
        heading: 'Chicago',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '44 dispensaries'
    },
    {
        heading: 'San Diego',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        heading: 'Las Vegas',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        heading: 'Denver',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '312 dispensaries'
    },
    {
        heading: 'Chicago',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '44 dispensaries'
    },
    {
        heading: 'San Diego',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        heading: 'Las Vegas',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        heading: 'Denver',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '312 dispensaries'
    },
    {
        heading: 'Chicago',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '44 dispensaries'
    },
    {
        heading: 'San Diego',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },

]);


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
  