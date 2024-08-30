<template>
    <section class="pb-[20rem] -mt-[5rem] container mx-auto xl:flex xl:space-x-5 px-6">
        <div class="w-full">
            <transition-group name="nested" tag="div" class="w-full rounded-xl shadow-xl bg-[white] px-6 p-6">

                <div v-if="selectedCard && selectedCard.items && selectedCard.items.length" v-for="(item, index) in selectedCard.items" :key="index"
                class="lg:flex items-center py-4">
                <div class="w-full sm:flex items-center sm:space-x-6">
                    <!-- Display item image -->
                    <div class="sm:w-[140px] border-2 rounded-xl">
                        <img class="rounded-xl" :src="item.images?.[0]" alt="Product Image">
                    </div>
                    <!-- Display item details -->
                    <div class="sm:text-left text-center">
                        <!-- Use item-specific details if needed -->
                        <div class="font-semibold sm:text-[20px] text-[16px] xl:pb-4 pb-2">
                            {{ item.heading }}
                        </div>
                        <div>
                            {{ selectedCard.weight }}
                        </div>
                        <div class="text-[#AEAEAE] py-2">
                            Delivered on {{ item.statusDate }}
                        </div>
                        <div class="xl:w-1/2 flex items-center justify-between space-x-24">
                            <div class="text-[#7D7D7D] font-semibold xl:hidden">
                                Price: ${{ item.price }}
                            </div>
                            <div class="text-[#7D7D7D] font-semibold xl:hidden">
                                Qty: {{ item.qty }}
                            </div>
                        </div>
                        <!-- Reviews and ratings can be item-specific or overall -->
                        <div>
                            <div v-if="item.reviews && item.reviews.length > 0">
                                <div v-for="(review, index) in item.reviews" :key="index">
                                    <div class="text-xl">{{ review.text }}</div>
                                    <div class="flex items-center space-x-2">
                                        <span v-for="star in review.rating" :key="star" class="text-yellow-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="text-gray-400">No reviews yet.</div>
                        </div>
                        <div v-if="item.ratings && item.ratings.length > 0" class="text-[#61C1B4] text-sm mt-2">
                            <div v-for="(rating, index) in item.ratings" :key="index" class="text-lg">
                                Rated {{ rating }} / 5
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lg:hidden pt-2">
                    <div class="flex items-center justify-center space-x-2 bg-[#DEF8F4] p-2 px-8 rounded-xl">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.985" height="13.984"
                                viewBox="0 0 13.985 13.984">
                                <path id="Path_7351" data-name="Path 7351"
                                    d="M11.531-6.226,5.154.148,4.227-.779l.1-.1H3.063a.439.439,0,0,1-.437-.437V-2.573l-.1.1a1.11,1.11,0,0,0-.276.465L1.625.126,3.762-.5a1.3,1.3,0,0,0,.465-.276l.927.927A2.4,2.4,0,0,1,4.132.755l-3.29.968a.617.617,0,0,1-.649-.189A.6.6,0,0,1,.027.908L.994-2.382A2.411,2.411,0,0,1,1.6-3.4L7.976-9.78Zm1.941-4.417a1.751,1.751,0,0,1,0,2.476L12.149-6.844,8.594-10.4l1.323-1.323a1.753,1.753,0,0,1,2.477,0Z"
                                    transform="translate(0 12.234)" fill="#358177" />
                            </svg>
                        </div>
                        <div @click="openReviewModal(item)" class="text-[#358177] uppercase mt-1">
                            {{ item.button }}
                        </div>
                    </div>
                </div>
                <div class="xl:w-1/2 flex items-center justify-center space-x-24">
                    <div class="text-[#7D7D7D] font-semibold xl:block hidden">
                        Price: ${{ item.price.toFixed(2) }}
                    </div>
                    <div class="text-[#7D7D7D] font-semibold xl:block hidden">
                        Qty: {{ item.qty }}
                    </div>
                </div>
                <div class="lg:w-1/2 flex justify-end items-center relative">
                    <div class="flex items-center space-x-2 lg:bg-[#DEF8F4] p-2 px-8 rounded-full">
                        <div class="lg:block hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.985" height="13.984"
                                viewBox="0 0 13.985 13.984">
                                <path id="Path_7351" data-name="Path 7351"
                                    d="M11.531-6.226,5.154.148,4.227-.779l.1-.1H3.063a.439.439,0,0,1-.437-.437V-2.573l-.1.1a1.11,1.11,0,0,0-.276.465L1.625.126,3.762-.5a1.3,1.3,0,0,0,.465-.276l.927.927A2.4,2.4,0,0,1,4.132.755l-3.29.968a.617.617,0,0,1-.649-.189A.6.6,0,0,1,.027.908L.994-2.382A2.411,2.411,0,0,1,1.6-3.4L7.976-9.78Zm1.941-4.417a1.751,1.751,0,0,1,0,2.476L12.149-6.844,8.594-10.4l1.323-1.323a1.753,1.753,0,0,1,2.477,0Z"
                                    transform="translate(0 12.234)" fill="#358177" />
                            </svg>
                        </div>
                        <div @click="openReviewModal(item)" class="text-[#358177] uppercase mt-1 lg:block hidden">
                            Write a review
                        </div>
                    </div>
                </div>
            </div>
                <div class="md:flex md:space-x-6 pt-4">
                    <div class="w-full pb-4">
                        <div class="">
                            <div class="border-2 rounded-2xl p-6">
                                <div class="font-[Bold] pb-4">
                                    {{ selectedCard?.shippingAddress }}
                                </div>
                                <div class="flex items-center space-x-6">
                                    <div>
                                        {{ selectedCard?.userName }}
                                    </div>
                                    <div class="bg-[#DDE8F8] p-1 px-4 rounded-full text-[#4C6DDC]">
                                        {{ selectedCard?.button }}
                                    </div>
                                </div>
                                <div class="text-[#A5A5A5] py-2">
                                    {{ selectedCard?.detailPara }}
                                </div>
                                <div>
                                    {{ selectedCard?.phone }}
                                </div>
                            </div>
                        </div>
                        <div class="pt-4">
                            <div class="border-2 rounded-2xl p-6">
                                <div class="font-[Bold] pb-4">
                                    {{ selectedCard?.shippingAddress }}
                                </div>
                                <div class="flex items-center space-x-6">
                                    <div>
                                        {{ selectedCard?.userName }}
                                    </div>
                                    <div class="bg-[#DDE8F8] p-1 px-4 rounded-full text-[#4C6DDC]">
                                        {{ selectedCard?.button }}
                                    </div>
                                </div>
                                <div class="text-[#A5A5A5] py-2">
                                    {{ selectedCard?.detailPara }}
                                </div>
                                <div>
                                    {{ selectedCard?.phone }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full h-[300px] border-2 rounded-2xl p-6">
                        <div class="font-[Bold] pb-6">
                            {{ selectedCard?.totalSummary }}
                        </div>
                        <div class="border-b-2">
                            <div class="flex justify-between items-center pb-4">
                                <div class=" text-[#393939]">Sub Total</div>
                                <div>
                                    {{ selectedCard?.subTotal }}
                                </div>
                            </div>
                            <div class="flex justify-between items-center pb-4">
                                <div class=" text-[#393939]">Delivery Fee</div>
                                <div>
                                    {{ selectedCard?.deliveryFee }}
                                </div>
                            </div>
                            <div class="flex justify-between items-center pb-4">
                                <div class=" text-[#393939]">Cash Payment Fee</div>
                                <div>
                                    {{ selectedCard?.paymentFee }}
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center pt-6">
                            <div class=" text-[#393939] font-[Bold]">Total</div>
                            <div class="font-[Bold]">
                                {{ selectedCard?.subTotal }}
                            </div>
                        </div>
                        <div class="text-[#A5A5A5]">
                            Paid by Cash on Delivery
                        </div>
                    </div>
                </div>

            </transition-group>
        </div>
        <reviewModal :show="showReviewModal" :onClose="colseReviewModal" :onSubmit="submitReview" />
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import reviewModal from '../components/layout/UI/popupModels/reviewModal.vue'
import { useApi } from '@/components/api/useApi';
import axios from 'axios';
const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const route = useRoute();
const selectedCard = ref({
    items: [],
    shippingAddress: '',
    userName: '',
    button: 'Home',
    detailPara: 'Order details go here',
    phone: '',
    weight: '',
    heading: '',
    paragraph: '',
    statusDate: '',
    reviews: [],
    ratings: [],
    price: 0,
    qty: '',
    totalSummary: 'Order Summary',
    subTotal: 0,
    deliveryFee: 0,
    paymentFee: 0,
    total: 0
});
const orderId = route.params.id;

const showReviewModal = ref(false);
const openReviewModal = (card) => {
    selectedCard.value = card;
    showReviewModal.value = true;
};
const colseReviewModal = () => {
    showReviewModal.value = false;
}
const submitReview = (review, rating) => {
    if (selectedCard.value) {
        selectedCard.value.reviews = [review];
        selectedCard.value.ratings = [rating];
    }
}
const fetchOrderData = async () => {
    try {
        const response = await axios.get(`${apiUrl}/checkout/getMeById`, {
            headers: {
                'order-id': orderId
            }
        });
        const orderData = response.data.data.order;
        selectedCard.value = {
            shippingAddress: `${orderData.billingDetails.streetAddress}, ${orderData.billingDetails.city}`,
            userName: `${orderData.billingDetails.firstName} ${orderData.billingDetails.lastName}`,
            button: 'Home',
            detailPara: 'Order details go here',
            phone: orderData.billingDetails.phoneNumber,
            weight: orderData.orderNumber,
            totalSummary: 'Order Summary',
            subTotal: orderData.items.reduce((acc, item) => acc + item.totalPrice, 0),
            deliveryFee: 0,
            paymentFee: 0,
            total: orderData.estimatedTotal,
            items: orderData.items.map(item => ({
                heading: item.name,
                statusDate: new Date(orderData.createdAt).toLocaleDateString(),
                reviews: item.reviews || [],
                ratings: item.ratings || [],
                price: item.price,
                qty: item.quantity,
                images: item.images || []
            }))
        };
    } catch (error) {
        console.error('Error fetching order data:', error);
    }
};

onMounted(() => {
    fetchOrderData();
});
</script>

<style scoped>
.bg {
    background: url("../assets/images/bgs/TermsHeroBg.svg#svgView(preserveAspectRatio(none))") center center no-repeat;
    background-size: cover;
}
</style>