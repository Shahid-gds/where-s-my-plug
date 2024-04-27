<template>
    <section class="-mt-[10rem] container mx-auto xl:flex xl:space-x-5 px-6">
        <div class="w-full">
            <transition-group name="nested" tag="div" class="w-full rounded-xl shadow-xl bg-[white] px-6">
                <div class="" v-for="(card, index) in cards" :key="card.id"
                    :class="{ 'border-b-2': index !== cards.length - 1 }">
                    <div class="py-4">
                        <div class="md:flex justify-center md:space-x-4 py-4">
                            <div class="md:w-[137px] h-[137px] flex justify-center border-2 p-2 rounded-xl">
                                <img class="" :src="card.image" alt="">
                            </div>
                            <div class="w-full">
                                <div class="sm:hidden flex justify-between items-center pt-3">
                                    <div class="w-full text-[#61C1B4] font-[Bold]">
                                        {{ card.weight }}
                                    </div>
                                    <div class="w-full text-right">
                                        {{ card.price }}
                                    </div>
                                </div>
                                <div class="text-[#61C1B4] font-[Bold] sm:block hidden">
                                    {{ card.weight }}
                                </div>
                                
                                <div class="flex justify-between py-2">
                                    <div class="w-full font-[Extra-Bold]">
                                        {{ card.heading }}
                                    </div>
                                    <div class="w-full text-right sm:block hidden">
                                        {{ card.price }}
                                    </div>
                                </div>
                                <div class="flex justify-between items-start">
                                    <div class="">
                                        {{ card.paragraph }}
                                    </div>
                                    <button class="w-1/2 text-[#FF3B3B] uppercase  flex justify-end items-center"
                                        @click="removeItem(index)">
                                        <div class="font-[Bold] sm:block hidden">&#128473;</div>
                                        <div class="font-[Bold] sm:block hidden">
                                            {{ card.removeButton }}
                                        </div>
                                    </button>
                                </div>
                                <div class="mt-4 flex justify-between">
                                  <div>
                                    <button class="text-2xl" @click="increment(index)">&#65291;</button>
                                    <span
                                        class="border-2 border-[#61C1B4] text-[#61C1B4] rounded-lg p-2 px-3 shadow-lg">
                                        {{ cardCounts[index] }} </span>
                                        <button class="text-2xl" @click="decrement(index)">&#8722;</button>
                                  </div>
                                    
                                    <button class="w-1/2 text-[#FF3B3B] uppercase  flex justify-end items-center"
                                    @click="removeItem(index)">
                                    <div class="font-[Bold] sm:hidden">&#128473;</div>
                                    <div class="font-[Bold] sm:hidden">
                                        {{ card.removeButton }}
                                    </div>
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
            <div class="flex w-1/2 items-strat space-x-2 pt-10 pb-6">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD764" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                </div>
                <div class="text-[#B1B1B1]">
                    <span class="font-[Bold]">WARNING:</span> <span>Cancer and Reproductive Harm -</span>
                    <a href="https://www.p65warnings.ca.gov/" target="_blank">www.P65Warnings.ca.gov</a>
                </div>
            </div>
        </div>
        <div class="xl:w-[70%] sm:h-[700px] w-full border-2 border-[#61C1B4] p-6 rounded-xl bg-white">
            <h1 class="font-[Extra-Bold] uppercase text-xl py-2">Order Summary</h1>
            <div class="text-lg pb-4">
                <span class="text-[#61C1B4] font-[600]">Pickup</span> <span class="font-[600]">Available Until 6:30pm
                    CT</span>
            </div>
            <div class="border-t-2 border-b-2 py-4">
                <div class="relative">
                    <input type="text" class="border-2 w-full p-3 px-4 rounded-lg" placeholder="Enter Your Promo Code">
                    <button class="absolute right-3 top-4 text-[#61C1B4] uppercase">Apply</button>
                </div>
            </div>
            <div class="flex justify-between py-8">
                <div class="w-full">
                    <h1 class="pb-2 sm:text-lg font-[Bold]">Subtotal (4 Items)</h1>
                    <h1 class="pb-2 sm:text-lg">Est. Taxes</h1>
                    <h1 class="font-[Bold]">Estimated Total</h1>
                </div>
                <div class="w-full text-right">
                    <h1 class="pb-2 text-lg font-[Bold]">$58.00</h1>
                    <h1 class="pb-2 text-lg">$5.27</h1>
                    <h1 class="font-[Bold]">$63.27</h1>
                </div>
            </div>
            <div class="w-full pb-16">
                <router-link :to="{ name: 'CheckOut' }" @click="scrollToTop"
                    class="hover-btn w-full text-center p-4 rounded-full bg-[#61C1B4] text-white font-[Bold]">Proceed To
                    Checkout</router-link>
            </div>
            <div class="w-full text-center">
                <a href="#" class="underline font-[Bold]">Continue Shopping</a>
                <p class="text-[#B7B7B7] pt-2 px-10 text-[14px]">Estimated total may not reflect actual taxes owed or
                    other promotions. Payment is made directly to
                    the dispensary at time of pickup/delivery. Pickup/delivery orders that exceed local limits or that
                    include items no longer available may be modified. A dispensary agent may reach out to you if
                    modifications must be made.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cards = ref([
    {
        id: '1',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Red Dirt Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        price: '$24.00',
        removeButton: 'Remove item'
    },
    {
        id: '2',
        image: import('../assets/images/CannabisStrainCarousel/ImgOne.svg').then((module) => module.default),
        weight: '1 g',
        heading: 'Urban AG Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        price: '$10.00',
        removeButton: 'Remove item'
    },
    {
        id: '3',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Red Dirt Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        price: '$24.00',
        removeButton: 'Remove item'
    },
]);

const cardCounts = ref([]);

const increment = (index) => {
    cardCounts.value[index]++;
};

const decrement = (index) => {
    if (cardCounts.value[index] > 0) {
        cardCounts.value[index]--;
    }
};

const removeItem = (index) => {
    cards.value.splice(index, 1);
    cardCounts.value.splice(index, 1);
};

onMounted(() => {
    cardCounts.value = new Array(cards.value.length).fill(0);
});

onMounted(async () => {
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
});
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
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

::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
}


::-webkit-scrollbar-thumb {
    background-color: #DBF1EE;
    border-radius: 5px;
}
</style>