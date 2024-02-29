<template>
    <div class="mt-[3rem]">
        <carousel-3d class="" :autoplay="true" :disable3d="true" :space="500" :clickable="false">
            <slide class="" v-for="(slide, i) in slides" :index="i" :key="i">
                <div class="rounded-2xl p-6 border-2 border-white hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white] shadow-xl">
                    <div class="text-left ">
                        <div class="">
                            <h1 class="sm:text-[25px] text-[18px] font-[Extra-Bold]">{{ slide.heading }}</h1>
                        </div>
                        <div>
                            {{ slide.options }}
                        </div>
                        <div class="flex items-center space-x-2 sm:py-4">
                            <div class="flex">
                                <div class="w-[24px]">
                                    <img class="" :src="slide.src">
                                </div>
                                <div class="w-[24px]">
                                    <img class="" :src="slide.src">
                                </div>
                                <div class="w-[24px]">
                                    <img class="" :src="slide.src">
                                </div>
                                <div class="w-[24px]">
                                    <img class="" :src="slide.src">
                                </div>
                                <div class="w-[24px]">
                                    <img class="" :src="slide.src">
                                </div>
                            </div>
                            <div class="">
                                <div class="text-[#444444] font-[poppin-bold] sm:text-xl">{{ slide.rating }}</div>
                            </div>
                            <div class="">
                                <div class="text-[#76c9be] font-[poppin-bold] sm:text-xl">{{ slide.ratingQty }}</div>
                            </div>
    
                        </div>
                        <div class="font-[Jost-Bold] sm:text-xl">
                            {{ slide.bottomHeading }}
                        </div>
                        <div class="sm:pt-4">
                            {{ slide.desc }}
                        </div>
                    </div>
                </div>

            </slide>
        </carousel-3d>
      
    </div>
</template>
  
<script>
import Carousel3d from "@/carousel-3d/QualityDispensariesCarousel3d.vue";
import Slide from "@/carousel-3d/QualityDispensariesSlide.vue";
import img1 from '../../icons/star.svg';

const slides = [
    {
        title: 'Slide 1',
        heading: 'Lorem Ipsume',
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices'
    },
    {
        title: 'Slide 2',
        heading: 'Lorem Ipsume',
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices'
    },
    {
        title: 'Slide 3',
        heading: 'Lorem Ipsume',
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices'
    },
    {
        title: 'Slide 4',
        heading: 'Lorem Ipsume',
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices'
    },
    {
        title: 'Slide 5',
        heading: 'Lorem Ipsume',
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices'
    },
    {
        title: 'Slide 6',
        heading: 'Lorem Ipsume',
        options: 'Hybrid   |   THC 22%   |   CBG 1%',
        src: img1,
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: 'Aka Miracle Alien Cookies, Miracle',
        desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices'
    },

  

]

export default {
    name: 'App',
    components: {
        Carousel3d,
        Slide
    },
    data() {
        return {
            slides: slides,
            currentIndex: 0,
            slideCount: 10
        }
    },
    
    methods: {
        goToSlide(index) {
                this.currentIndex = index;
            },
    
            // Method triggered after slide changes
            onAfterSlideChanged(index) {
                this.currentIndex = index;
            },
        onSlideChanged(index) {
            console.log('onSlideChanged Callback Triggered', 'Slide Index ' + index)
        },
        onLastSlide(index) {
            console.log('onLastSlide Callback Triggered', 'Slide Index ' + index)
        },
        onMainSlideClick() {
            console.log('onMainSlideClick Callback Triggered')
        },
        onAfterSlideChanged(index) {
            console.log('@after-slide-changed Callback Triggered', 'Slide Index ' + index)
        },
        onSlideChange(index) {
            console.log('@before-slide-change Callback Triggered', 'Slide Index ' + index)
        },
        addSlide() {
            this.slideCount++
        },
        removeSlide() {
            if (this.slideCount > 1) {
                this.slideCount--
            }
        },
    }
}
</script>
  
<style></style>