<template>
  <section class="h-[600px] relative overflow-hidden mt-[8rem]">
    <div class="w-full h-full flex transition-transform duration-300"  @mouseenter="stopAutoSlide"
           @mouseleave="startAutoSlide"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(slide, index) in slides" :key="slide.id" class="w-full flex-shrink-0"
        :style="{ backgroundColor: slide.backgroundColor }">
        <div class="flex items-center p-6 px-20">
          <div class="w-full">
            <div class="font-bold text-white text-[35px]">
              {{ slide.heading }}
            </div>
            <div class="text-white text-[25px]">
              {{ slide.paragraphHero }}
            </div>
            <div class="mt-[3rem] bg-white p-4 w-[200px] text-center cursor-pointer rounded-xl font-bold">
              {{ slide.button }}
            </div>
          </div>
          <div class="w-1/2 h-[500px] mt-[2rem]">
            <img class="h-[500px]" :src="slide.image" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- Previous and Next Buttons -->
    <button @click="prevSlide"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-4 rounded-r-full shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button @click="nextSlide"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-4 rounded-l-full shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
      
    </button>
    <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span v-for="(slide, index) in slides" :key="slide.id"
            class="h-1 w-6 rounded-full cursor-pointer"
            :class="{ 'bg-white': currentIndex === index, 'bg-gray-500': currentIndex !== index }"
            @click="goToSlide(index)">
      </span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const slides = ref([
  {
    id: '1',
    image: import('../assets/images/Learn/grid-img1.png').then((module) => module.default),
    heading: 'Bundle and save​',
    paragraphHero: 'Float on with our finest flower, vapes, and more.​',
    backgroundColor: '#61c1b4',
    button: 'Shop Now'
  },
  {
    id: '2',
    image: import('../assets/images/Learn/grid-img4.png').then((module) => module.default),
    heading: 'Bundle and save​',
    paragraphHero: 'Float on with our finest flower, vapes, and more.​',
    backgroundColor: '#61c1b4',
    button: 'Shop Now'
  },
  {
    id: '3',
    image: import('../assets/images/Learn/grid-img1.png').then((module) => module.default),
    heading: 'Bundle and save​',
    paragraphHero: 'Float on with our finest flower, vapes, and more.​',
    backgroundColor: '#61c1b4',
    button: 'Shop Now'
  },

]);

let currentIndex = ref(0);
let intervalId = null;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const startAutoSlide = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  }, 5000);
};

const stopAutoSlide = () => {
  clearInterval(intervalId);
};
const goToSlide = (index) => {
  currentIndex.value = index;
};
onMounted(async () => {
  slides.value = await Promise.all(
    slides.value.map(async (slide) => ({
      ...slide,
      image: await slide.image,
    }))
  );

  startAutoSlide();
});
onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
