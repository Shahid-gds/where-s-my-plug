<template>
    <div class="">
        <carousel-3d class="" :autoplay="true"  :disable3d="true" :space="250" :clickable="false">
            <slide  class="p-4" v-for="(slide, i) in slides" :index="i" :key="i">
               <div class="relative" :style="{ backgroundColor: slide.backgroundColor }">
                <div class="">
                    <img class="w-[285px]" :src="slide.src">
                </div>
               </div>
               <div class="text-center mt-[2rem] font-[Jost-Bold] text-2xl">
                {{ slide.heading }}
               </div>
               <div class="text-center font-bold">
                {{ slide.desc }}
               </div>
              </slide>
        </carousel-3d>
      </div>
  </template>
  
  <script>
  import Carousel3d from "@/carousel-3d/FooterCarousel3d.vue";
  import Slide from "@/carousel-3d/FooterSlide.vue";
  import img1 from '@/assets/images/FooterCarousel/footerCarouselImg1.svg';
  import img2 from '@/assets/images/FooterCarousel/footerCarouselImg2.svg';
  import img3 from '@/assets/images/FooterCarousel/footerCarouselImg3.svg';
  import img4 from '@/assets/images/FooterCarousel/footerCarouselImg4.svg';
  import img5 from '@/assets/images/FooterCarousel/footerCarouselImg5.svg';
  import img6 from '@/assets/images/FooterCarousel/footerCarouselImg6.svg';
 
  const slides = [
    {
      title: 'Slide 1',
      src: img1,
    },
  
    {
      title: 'Slide 2',
      src: img2,
    },
    {
      title: 'Slide 3',
      src: img3,
    },
    {
      title: 'Slide 4',
      src: img4,
    },
    {
      title: 'Slide 5',
      src: img5,
    },
    {
      title: 'Slide 6',
      src: img6,
    },
    {
      title: 'Slide 7',
      src: img3,
    },
    {
      title: 'Slide 8',
      src: img5,
    },
    {
      title: 'Slide 9',
      src: img6,
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
        slideCount: 10
      }
    },
    methods: {
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
  