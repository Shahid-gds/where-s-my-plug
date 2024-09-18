<template>
    <div class="">
        <carousel-3d class="" :autoplay="true"  :disable3d="true" :space="270" :clickable="false">
            <slide  class="p-4" v-for="(slide, i) in slides" :index="i" :key="i">
               <div class="w-[240px] h-[220px] rounded-full relative" :style="{ backgroundColor: slide.backgroundColor }">
                <div class="ml-4">
                    <img class="" :src="slide.src">
                </div>
               </div>
               <div class="text-center mt-[2rem] font-[Jost-Bold] text-2xl pb-6">
                {{ slide.heading }}
               </div>
               <div class="hover-btn flex justify-center w-full text-center font-bold cursor-pointer p-3 rounded-xl border-2" @click="navigateToCategory(slide.heading)">
                  {{ slide.desc }}
               </div>
              </slide>
        </carousel-3d>
      </div>
  </template>
  
  <script>
  import Carousel3d from "@/carousel-3d/HomeCarousel3d.vue";
  import { useRouter } from 'vue-router';
  import Slide from "@/carousel-3d/HomeSlide.vue";
  import img1 from '../../../assets/images/HomeCarousel/flower.png';
  import img2 from '../../../assets/images/HomeCarousel/pre-roll.png';
  import img3 from '../../../assets/images/HomeCarousel/edibles.png';
  import img4 from '../../../assets/images/HomeCarousel/concentrates.png';
  import img5 from '../../../assets/images/HomeCarousel/vapes.png';
  import img6 from '../../../assets/images/HomeCarousel/tinctures.png';
  import img7 from '../../../assets/images/HomeCarousel/tropicals.png';
  import img8 from '../../../assets/images/HomeCarousel/capsules.png';
  import img9 from '../../../assets/images/HomeCarousel/drinks.png';
  import img10 from '../../../assets/images/HomeCarousel/hash.png';
  import img11 from '../../../assets/images/HomeCarousel/kief.png';
 
  const slides = [
    {
      heading:'Flower',
      desc:'View More..',
      src: img1,
    },
    {
      heading:'Pre-roll',
      desc:'View More..',
      src: img2,
    },
    {
      heading:'Edibles',
      desc:'View More..',
      src: img3,
    },
    {
      heading:'Concentrates',
      desc:'View More..',
      src: img4,
    },
    {
      heading:'Vapes',
      desc:'View More..',
      src: img5,
    }, 
    {
      heading:'Tinctures',
      desc:'View More..',
      src: img6,
    },
    {
      heading:'Tropicals',
      desc:'View More..',
      src: img7,
    },
    {
      heading:'Capsules',
      desc:'View More..',
      src: img8,
    },
    {
      heading:'Drinks',
      desc:'View More..',
      src: img9,
    },
    {
      heading:'Hash',
      desc:'View More..',
      src: img10,
    }, 
    {
      heading:'Kief',
      desc:'View More..',
      src: img11,
    }, 
  
  ]
  
  export default {
    name: 'App',
    components: {
      Carousel3d,
      Slide
    },
    data () {
      return {
        slides: slides,
        slideCount: 11
      }
    },
    
    methods: {
      navigateToCategory() {
      this.$router.push({ name: 'Products'});
    },
      onSlideChanged (index) {
        console.log('onSlideChanged Callback Triggered', 'Slide Index ' + index)
      },
      onLastSlide (index) {
        console.log('onLastSlide Callback Triggered', 'Slide Index ' + index)
      },
      onMainSlideClick () {
        console.log('onMainSlideClick Callback Triggered')
      },
      onAfterSlideChanged (index) {
        console.log('@after-slide-changed Callback Triggered', 'Slide Index ' + index)
      },
      onSlideChange (index) {
        console.log('@before-slide-change Callback Triggered', 'Slide Index ' + index)
      },
      addSlide () {
        this.slideCount++
      },
      removeSlide () {
        if (this.slideCount > 1) {
          this.slideCount--
        }
      },
    }
  }
  </script>
  
  <style>
  
  </style>
  