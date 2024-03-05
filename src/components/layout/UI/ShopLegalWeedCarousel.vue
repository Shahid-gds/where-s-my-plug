<template>
    <div class="mt-[3rem]">
        <carousel-3d class="" :autoplay="true" :disable3d="true" :space="500" :clickable="false">
            <slide class="" v-for="(slide, i) in slides" :index="i" :key="i">
                <div
                    class="border-2 border-white hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer p-8 m-4 rounded-[30px] bg-[#f9f9f9] py-[2rem]">
                    <div class="text-left ">
                        <div class="">
                            <h1 class="text-[25px] font-[Bold]">{{ slide.heading }}</h1>
                        </div>
                                     
                        <div class="flex items-center justify-between">
                            <div class="text-[#747474] text-xl font-[Medium]">
                                {{ slide.bottomHeading }}
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="text-[#444444] font-[Medium] text-xl">
                                    {{ slide.rating }}
                                </div>
                                <div class="text-[#6bc5b9] font-[Medium] text-xl">
                                    {{ slide.ratingQty }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </slide>
        </carousel-3d>

    </div>
</template>

<script>
import Carousel3d from "@/carousel-3d/ShopLegalWeedCarousel3d.vue";
import Slide from "@/carousel-3d/ShopLegalWeedSlide.vue";



const slides = [
    {
        title: 'Slide 1',
        heading: 'Las Vegas',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        title: 'Slide 2',
        heading: 'Denver',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        title: 'Slide 3',
        heading: 'Chicago',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        title: 'Slide 4',
        heading: 'San Diego',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        title: 'Slide 5',
        heading: 'Las Vegas',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
    },
    {
        title: 'Slide 6',
        heading: 'Chicago',
        rating: '5.0',
        ratingQty: '(120)',
        bottomHeading: '76 dispensaries'
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