<template>
    <section class="md:py-[5rem] py-[1rem]">
        <div class="container mx-auto py-6 w-[182px] relative">
            <div class="bg-[#61c1b4] w-[182px] mr-auto ml-auto h-0.5">
                <div class="w-full absolute top-0 ">
                    <img class="mr-auto ml-auto" src="@/components/icons/drugLeaf.svg" alt="">
                </div>
            </div>
        </div>
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center">
            <div v-for="card in cards" :key="card.id" @click="navigateToDetails(card.id)"
                class="cursor-pointer 2xl:w-[420px] w-[400px] border-2 border-[#CCE3E0] m-2 p-6 py-8 rounded-2xl hover:shadow-xl hover:border-[#61C1B4] duration-300 transition-all">
                <div class="flex justify-center pb-6">
                    <div>
                        <img :src="card.image">
                    </div>
                </div>
                <div>
                    {{ card.heading }}
                </div>
                <div class="py-2 font-[Extra-Bold]">
                    {{ card.subHeading }}
                </div>
                <div class="flex items-center space-x-5 pb-4">
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
                    <div class="flex space-x-2">
                        <div class="text-[#444444] font-[poppin-bold] sm:text-xl">
                            {{ card.rating }}
                        </div>
                        <div class="text-[#76c9be] font-[poppin-bold] sm:text-xl">
                            {{ card.ratingQty }}
                        </div>
                    </div>
                </div>
                <div>
                    {{ card.paragraph }}
                </div>

            </div>
        </transition-group>
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToDetails = (id) => {
    scrollToTop();
    router.push({ name: 'ProductDetail', params: { id } });
}


const cards = ref([
    {
        id: '1', image: import('@/assets/images/ProductsCategories/Img1.svg').then((module) => module.default),
        heading: 'Flower', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Yoda Candy THCa Flower',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '2', image: import('@/assets/images/ProductsCategories/Img2.svg').then((module) => module.default),
        heading: 'Cartridges', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Cookie Milk D8+THCP Vape Cart ',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '3', image: import('@/assets/images/ProductsCategories/Img3.svg').then((module) => module.default),
        heading: 'Pre-rolls', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Delta 8 THC Pre Roll Sativa Sour Candy',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '4', image: import('@/assets/images/ProductsCategories/Img4.svg').then((module) => module.default),
        heading: 'Terpenes', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Sour Haze Live Resin Terpene',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '5', image: import('@/assets/images/ProductsCategories/Img5.svg').then((module) => module.default),
        heading: 'Vape Pens', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'MAC 2ml THCa Sauce Vape Pen',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '6', image: import('@/assets/images/ProductsCategories/Img6.svg').then((module) => module.default),
        heading: 'Cartridges', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Mimosa Live Resin Delta-8 | 1ml',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '6', image: import('@/assets/images/ProductsCategories/Img1.svg').then((module) => module.default),
        heading: 'Flower', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Yoda Candy THCa Flower',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '7', image: import('@/assets/images/ProductsCategories/Img2.svg').then((module) => module.default),
        heading: 'Cartridges', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Cookie Milk D8+THCP Vape Cart ',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    },
    {
        id: '8', image: import('@/assets/images/ProductsCategories/Img3.svg').then((module) => module.default),
        heading: 'Pre-rolls', stars: import('../../icons/star.svg').then((module) => module.default),
        subHeading: 'Delta 8 THC Pre Roll Sativa Sour Candy',
        rating: '5.0',
        ratingQty: '(120)',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
    }
]);


onMounted(async () => {
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            stars: await card.stars,
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

.pagination {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    background: #F5F5F5;
    padding: 10px;
    border-radius: 50px;
}

.pagination li {
    margin: 0 5px;
}

.pagination-btn {
    padding: 0.5rem 1rem;
    color: #000101;
    font-weight: bold;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background: white;
    border-radius: 50%;
    font-size: 15px;
}

.pagination-btn:hover {
    background: rgb(197, 196, 198);
}

.pageNumber {
    padding: 0.5rem 1rem;
    color: #6b5c7d;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.pagination .pageNumber.active {
    color: #000101;
}

.pagination .pageNumber:hover {
    color: black;
}

.pagination-btn:hover {
    color: black;
}

/*.pagination-btn[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
}*/

.pagination-btn.active {
    color: black;
    font-weight: bolder;
}
</style>