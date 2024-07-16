<template>
    <transition-group name="nested" tag="div">
        <div v-if="show" class="fixed w-full inset-0 flex items-center justify-center z-50">
            <div @click="close" class="backdrop"></div>
            <div class="popup w-full bg-white shadow-lg ">
                <div class="w-full border-b-2 border-black">
                    <div @click="close" class="cursor-pointer p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <input type="text" placeholder="Search for Products & Categories"
                        class="w-full p-4 px-6 text-xl rounded-xl outline-none">
                </div>
                <div class="md:flex">
                    <div class="w-1/2 bg-[#61c1b4] p-10 border-r-2 border-black text-white">
                        <h1 class="font-bold text-xl uppercase py-6">Popular Categories</h1>
                        <div class="pb-2 cursor-pointer">Flowers</div>
                        <div class="pb-2 cursor-pointer">Vapes</div>
                        <div class="pb-2 cursor-pointer">Edibles</div>
                        <div class="pb-2 cursor-pointer">Prerolls</div>
                        <div class="pb-2 cursor-pointer">Concentrates</div>
                        <div class="pb-2 cursor-pointer">Topicals</div>
                        <div class="pb-2 cursor-pointer">Capsules</div>
                    </div>
                    <div class="w-full p-10">
                        <h1 class="font-bold text-xl uppercase py-6">FEATURED PRODUCTS</h1>
                        <div class="md:flex space-x-6">
                            <div v-for="card in cards" class="w-full">
                                <div class="p-4 cursor-pointer border-2 rounded-xl h-[300px]">
                                    <h1 class="font-bold uppercase text-xl text-center">{{ card.heading }}</h1>
                                    <div class="flex justify-center">
                                        <img :src="card.image" alt="">
                                    </div>
                                    <p>{{ card.subHeading }}</p>
                                    <p class=""><span class="">$</span><span class="text-xl font-bold">{{ card.price }}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
const cards = ref([
    {
        id: '1',
        image: import('@/assets/images/ProductsCategories/Img1.svg').then((module) => module.default),
        heading: 'Flower',
        subHeading: 'Yoda Candy THCa Flower',
        price: '25'
    },
    {
        id: '2',
        image: import('@/assets/images/ProductsCategories/Img2.svg').then((module) => module.default),
        heading: 'Cartridges',
        subHeading: 'Yoda Candy THCa Flower',
        price: '25'
    },
    {
        id: '3',
        image: import('@/assets/images/ProductsCategories/Img5.svg').then((module) => module.default),
        heading: 'Terpenes',
        subHeading: 'Yoda Candy THCa Flower',
        price: '25'
    },
    {
        id: '4',
        image: import('@/assets/images/ProductsCategories/Img4.svg').then((module) => module.default),
        heading: 'Pre-rolls',
        subHeading: 'Yoda Candy THCa Flower',
        price: '25'
    },
]);
onMounted(async () => {
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
});
const props = defineProps({
    show: Boolean,
    onClose: Function,
    onSubmit: Function,
});

const close = () => {
    props.onClose();
};

// Watch for changes in the 'show' prop to add/remove the body class
watch(() => props.show, (newVal) => {
    if (newVal) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
});
</script>

<style>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(-30px);
    opacity: 0;
}

::-webkit-scrollbar {
    width: 10px;
    background-color: #61c1b4;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: rgb(31, 20, 20);
    border-radius: 5px;
}

/* Add this class to disable body scrolling */
.no-scroll {
    overflow: hidden;
}
</style>
