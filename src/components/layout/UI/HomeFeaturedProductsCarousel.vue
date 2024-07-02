<template>
    <div class="mt-[3rem]">
        <carousel-3d class="" :autoplay="true" :disable3d="true" :space="500" :clickable="false">
            <slide class="" v-for="(slide, i) in slides" :index="i" :key="i">
                <div
                    class="rounded-2xl sm:h-[430px] p-10 border-2 border-white hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white] shadow-xl">
                    <div class="flex justify-center">
                        <img class="w-[50%]" :src="slide.src" alt="">
                    </div>
                    <div class="flex space-x-4 pb-8">
                        <div class="relative">
                            <div>
                                {{ slide.button }}
                            </div>
                            <div class="sm:py-2 font-[Extra-Bold]">
                                {{ slide.heading }}
                            </div>
                            <div>
                                {{ slide.paragraph }}
                            </div>
                           <div class="absolute">
                            <div class="flex justify-between space-x-3">
                                <div class="flex">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#F1A026" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="#F1A026" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex space-x-2">
                                    <div class="text-[#444444] font-[poppin-bold] sm:text-xl">
                                        {{ slide.rating }}
                                    </div>
                                    <div class="text-[#76c9be] font-[poppin-bold] sm:text-xl">
                                        {{ slide.ratingQty }}
                                    </div>
                                </div>
                            </div>
                            <div class="py-1">
                                {{ slide.options }}
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
import Carousel3d from "@/carousel-3d/FeaturedProductsCarousel3d.vue";
import Slide from "@/carousel-3d/FeaturedProductsSlide.vue";
import img1 from '../../../assets/images/ProductsCategories/Img2.svg';
import img2 from '../../../assets/images/ProductsCategories/Img3.svg';
import img3 from '../../../assets/images/ProductsCategories/Img4.svg';
import img4 from '../../../assets/images/ProductsCategories/Img5.svg';


const slides = [
    {
        id: '1',
        src: img1,
        button: 'Hybrid',
        heading: 'Bio Jesus Flower',
        paragraph: 'Total combined THC/THCa, CBD/CBDa values. Review product labels for exact percentages.',
        rating: '5.0',
        ratingQty: '(120)',
        options: 'THC 22%   |   CBG 1%',
    },
    {
        id: '2',
        src: img2,
        button: 'Hybrid',
        heading: 'Flan Flower',
        paragraph: 'Total combined THC/THCa, CBD/CBDa values. Review product labels for exact percentages.',
        rating: '5.0',
        ratingQty: '(120)',
        options: 'THC 22%   |   CBG 1%',
    },
    {
        id: '3',
        src: img3,
        button: 'Hybrid',
        heading: 'Lemon Bean Flower',
        paragraph: 'Total combined THC/THCa, CBD/CBDa values. Review product labels for exact percentages.',
        rating: '5.0',
        ratingQty: '(120)',
        options: 'THC 22%   |   CBG 1%',
    },
    {
        id: '4',
        src: img4,
        button: 'Hybrid',
        heading: 'Lemon Triangle Kush Flower',
        paragraph: 'Total combined THC/THCa, CBD/CBDa values. Review product labels for exact percentages.',
        rating: '5.0',
        ratingQty: '(120)',
        options: 'THC 22%   |   CBG 1%',
    },
    {
        id: '5',
        src: img3,
        button: 'Hybrid',
        heading: 'Lemon Triangle Kush Flower',
        paragraph: 'Total combined THC/THCa, CBD/CBDa values. Review product labels for exact percentages.',
        rating: '5.0',
        ratingQty: '(120)',
        options: 'THC 22%   |   CBG 1%',
    },
    {
        id: '6',
        src: img3,
        button: 'Hybrid',
        heading: 'Lemon Triangle Kush Flower',
        paragraph: 'Total combined THC/THCa, CBD/CBDa values. Review product labels for exact percentages.',
        rating: '5.0',
        ratingQty: '(120)',
        options: 'THC 22%   |   CBG 1%',
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