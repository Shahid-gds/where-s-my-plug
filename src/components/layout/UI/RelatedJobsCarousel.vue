<template>
    <div class="mt-[3rem]">
        <carousel-3d class="" :autoplay="true" :disable3d="true" :space="850" :clickable="false">
            <slide class="" v-for="(slide, i) in slides" :index="i" :key="i">
                <div
                    class="rounded-2xl  sm:p-6 p-2 border-2 hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white] shadow-xl">
                    <div class="flex space-x-4">
                        <div class="w-[20%]">
                            <img class="w-full" :src="slide.src" alt="">
                        </div>
                        <div class="w-full">
                            <div class="flex space-x-10 items-end">
                                <div class="w-full">
                                  <div class="flex space-x-3">
                                    <div v-if="slide.fullTimeButton" class="bg-[#DDE8F8] text-center p-1.5 rounded-full text-[#4C6DDC] w-[30%]">
                                        {{ slide.fullTimeButton }}
                                    </div>
                                    <div v-if="slide.partTimeButton" class="bg-[#DDE8F8] text-center p-1.5 rounded-full text-[#4C6DDC] w-[30%]">
                                        {{ slide.partTimeButton }}
                                    </div>
                                    <div v-if="slide.privateButton" class="bg-[#E1F2E5] text-center p-1.5 rounded-full text-[#8EB06A] w-[30%]">
                                        {{ slide.privateButton }}
                                    </div>
                                    <div v-if="slide.urgentButton" class="bg-[#FEF2D9] text-center p-1.5 rounded-full text-[#FAAB5B] w-[30%]">
                                        {{ slide.urgentButton }}
                                    </div>
                                  </div>
                                    <div class="py-1 font-[Extra-Bold]">
                                        {{ slide.heading }}
                                    </div>
                                    <div class="py-1">
                                        <span class="font-[Extra-Bold] text-[#A5A5A5]">Posted by:</span> <span class="">{{ slide.postedBy }}</span>
                                     </div>
                                    <div class="text-[#A5A5A5]">
                                        {{ slide.paragraph }}
                                    </div>
                                </div>
                                <div class="w-1/2">
                                  <div class="">
                                    <div class="hover-btn w-full bg-[#61C1B4] text-center rounded-full p-2 text-white uppercase">
                                        {{ slide.applyButton }}
                                       </div>
                                  </div>
                                    <router-link :to="{name: 'JobDetail'}" class="hover-btn w-full border-2 border-[#61C1B4] p-2 text-center rounded-full text-[#61C1B4]">
                                        {{ slide.jobDetailButton }}
                                    </router-link>
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
import Carousel3d from "@/carousel-3d/RelatedJobsCarousel3d.vue";
import Slide from "@/carousel-3d/RelatedJobsSlide.vue";
import img1 from '../../../assets/images/FeaturedBrandsCarousel/Img1.svg';
import img2 from '../../../assets/images/FeaturedBrandsCarousel/Img2.svg';
import img3 from '../../../assets/images/FeaturedBrandsCarousel/Img3.svg';
import img4 from '../../../assets/images/FeaturedBrandsCarousel/Img4.svg';

const slides = [
    {
        id: '1',
        src: img1,
        fullTimeButton: 'Full Time',
        partTimeButton: '',
        privateButton: '',
        urgentButton: '',
        heading: 'Product Manager, Studio',
        postedBy: '15 March, 2024',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply for job',
        jobDetailButton: 'Job Detail'
    },
    {
        id: '2',
        src: img2,
        fullTimeButton: 'Full Time',
        partTimeButton: '',
        privateButton: 'Private',
        urgentButton: '',
        heading: 'Product Manager, Studio',
        postedBy: '15 March, 2024',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply for job',
        jobDetailButton: 'Job Detail'
    },
    {
        id: '3',
        src: img3,
        fullTimeButton: 'Full Time',
        partTimeButton: 'Part Time',
        privateButton: '',
        urgentButton: 'Urgent',
        heading: 'Product Manager, Studio',
        postedBy: '15 March, 2024',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply for job',
        jobDetailButton: 'Job Detail'
    },
    {
        id: '4',
        src: img4,
        fullTimeButton: '',
        partTimeButton: 'Part Time',
        privateButton: '',
        urgentButton: 'Urgent',
        heading: 'Product Manager, Studio',
        postedBy: '15 March, 2024',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply for job',
        jobDetailButton: 'Job Detail'
    },
    {
        id: '5',
        src: img1,
        fullTimeButton: 'Full Time',
        partTimeButton: '',
        privateButton: 'Private',
        urgentButton: '',
        heading: 'Product Manager, Studio',
        postedBy: '15 March, 2024',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        applyButton: 'Apply for job',
        jobDetailButton: 'Job Detail'
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