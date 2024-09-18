<template>
    <div class="mt-[3rem]">
        <carousel-3d class="" :key="carouselKey" :autoplay="true" :disable3d="true" :space="500" :clickable="false">
            <slide class="" v-for="(slide, i) in slides" :index="i" :key="i">
                <div
                    class="rounded-2xl relative sm:h-[430px] p-10 border-2 border-white hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer m-4 bg-[white] shadow-xl">
                    <div class="flex justify-center py-6">
                        <div class="rounded-xl">
                            <img :src="(slide.images && slide.images.length > 0) ? slide.images[0] : 'default-image-url'" alt="Product Image" class="w-full h-[200px] rounded-xl" loading="lazy">
                        </div>
                    </div>
                            <div class="text-lg font-bold">
                                {{ slide.name }}
                            </div>
                            <div class="text-lg font-bold absolute top-0 right-0 p-3 rounded-tr-xl bg-[#CCE3E0]">
                                {{ slide.category }}
                            </div>
                            <div class="py-2 font-[Extra-Bold]">
                                ${{ slide.price }}
                            </div>
                            <div class="flex items-center justify-between pb-4">
                                <div class="flex">
                                    <div v-for="n in 5" :key="n" class="w-[24px]">
                                        <svg v-if="n <= Math.round(slide.ratingsAverage)" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24" fill="#FFD700" class="w-5 h-5">
                                            <path
                                                d="M12 .587l3.668 7.425 8.172 1.186-5.912 5.76 1.394 8.13-7.322-3.856-7.322 3.856 1.394-8.13-5.912-5.76 8.172-1.186L12 .587z" />
                                        </svg>
                                        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                            stroke="#FFD700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                            class="w-5 h-5">
                                            <path
                                                d="M12 .587l3.668 7.425 8.172 1.186-5.912 5.76 1.394 8.13-7.322-3.856-7.322 3.856 1.394-8.13-5.912-5.76 8.172-1.186L12 .587z" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex space-x-2">
                                    <div class="text-[#444444] font-[poppin-bold] sm:text-xl">
                                        {{ slide.ratingsAverage }}
                                    </div>
                                    <div class="text-[#76c9be] font-[poppin-bold] sm:text-xl">
                                        ({{ slide.ratingsQuantity }})
                                    </div>
                                </div>
                                <div>
                                    <button class="border-2 p-3 rounded-xl"  @click.stop="navigateToDetails(slide._id)">Add to Cart</button>
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
import { useApi } from "@/components/api/useApi";
import axios from "axios";


const slides = [{}]

export default {
    name: 'App',
    components: {
        Carousel3d,
        Slide
    },
    data() {
        return {
            slides: [],
            currentIndex: 0,
            slideCount: 10,
            carouselKey: 0
        }
    },
    mounted() {
        this.fetchSlides();
    }, 
    methods: {
        async fetchSlides() {
            try {
                const { getApiUrl } = useApi();
                const apiUrl = getApiUrl();
                const response = await axios.get(`${apiUrl}/products/getAllProducts`);
                this.slides = response.data.data.products;
                this.carouselKey += 1;
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        navigateToDetails(id) {
            this.scrollToTop();
            localStorage.setItem('productId', id);
            this.$router.push({ name: 'ProductDetail', params: { id } });
        },
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