<template>
    <div class="">
        <carousel-3d class="" :autoplay="true"  :disable3d="true" :space="270" :clickable="false">
            <slide  class="p-4" v-for="(slide, i) in slides" :index="i" :key="i">
               <div class="w-[240px] h-[240px] rounded-xl p-6 relative" :style="{ backgroundColor: slide.backgroundColor }">
                <div class="ml-4">
                    <img class="" :src="slide.src">
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
  import Carousel3d from "../../../carousel-3d/exclusiveOfferCarousel3d.vue";
  import Slide from "../../../carousel-3d/exlusiveOfficerSlide.vue";
  import img1 from '@/assets/images/HomeCarousel/HomeCarouselImg1.svg';
  import img2 from '@/assets/images/HomeCarousel/HomeCarouselImg2.svg';
  import img3 from '@/assets/images/HomeCarousel/HomeCarouselImg3.svg';
  import img4 from '@/assets/images/HomeCarousel/HomeCarouselImg4.svg';
  import img5 from '@/assets/images/HomeCarousel/HomeCarouselImg5.svg';
 
  const slides = [
    {
      title: 'Slide 1',
      heading:'CBD Oil',
      desc: '76 Dispensaries',
      src: img1,
      backgroundColor: '#61c1b4'
    },
    {
      title: 'Slide 2',
      heading:'CBD Gummies',
      desc: '112 Dispensaries',
      src: img2,
      backgroundColor: '#61c1b4'
    },
    {
      title: 'Slide 3',
      heading:'CBD Kits',
      desc: '223 Dispensaries',
      src: img3,
      backgroundColor: '#61c1b4'
    },
    {
      title: 'Slide 4',
      heading:'CBD Capsules',
      desc: '47 Dispensaries',
      src: img4,
      backgroundColor: '#61c1b4'
    },
    {
      title: 'Slide 5',
      heading:'CBD Cosmetics',
      desc: '98 Dispensaries',
      src: img5,
      backgroundColor: '#61c1b4'
    }, 
    {
      title: 'Slide 1',
      heading:'CBD Oil',
      desc: '76 Dispensaries',
      src: img1,
      backgroundColor: '#61c1b4'
    },
    {
      title: 'Slide 2',
      heading:'CBD Gummies',
      desc: '112 Dispensaries',
      src: img2,
      backgroundColor: '#61c1b4'
    },
    {
      title: 'Slide 3',
      heading:'CBD Kits',
      desc: '223 Dispensaries',
      src: img3,
      backgroundColor: '#61c1b4'
    },
    {
      title: 'Slide 4',
      heading:'CBD Capsules',
      desc: '47 Dispensaries',
      src: img4,
      backgroundColor: '#61c1b4'
    },
    {
      title: 'Slide 5',
      heading:'CBD Cosmetics',
      desc: '98 Dispensaries',
      src: img5,
      backgroundColor: '#61c1b4'
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