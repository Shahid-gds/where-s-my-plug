<template>
    <section class="pb-[20rem] -mt-[5rem] container mx-auto xl:flex xl:space-x-5 px-6">
        <div class="w-full">
            <transition-group name="nested" tag="div" class="w-full rounded-xl shadow-xl bg-[white] px-6 p-6">
                <div v-if="cards.length === 0" class="text-center text-lg text-gray-600">
                    <div class="container mx-auto border-2 md:p-10 p-6 rounded-xl bg-white -mt-[10rem]">
                        <div class="flex justify-center">
                            <img src="../components/icons/cart.svg" alt="">
                        </div>
                        <div class="text-center pt-4">
                            <h1 class="uppercase sm:text-[30px] text-[20px]">empty orders</h1>
                            <p class="sm:text-[20px] pb-4">Don't wait to bake. Add items to your cart and enjoy your weed today.</p>
                            <router-link :to="{name : 'Products'}" class="p-3 bg-[#61C1B4] rounded-full px-16 font-[Bold] uppercase text-white">Shop Now</router-link>
                        </div>
                    </div>
                </div>
                <div v-else class="cursor-pointer" v-for="(card, index) in cards" :key="card._id"
                    @click="navigateToDetails(card._id)" :class="{ 'border-b-2': index !== cards.length - 1 }">
                    <div class="lg:flex items-center py-4">
                        <div class="w-full md:flex items-center md:space-x-6">
                            <div class="md:w-[140px] h-[140px] border-2 rounded-xl">
                                <img class="w-full rounded-xl"
                                    :src="card.items[0]?.images[0] || 'default-image-url'" alt="">
                            </div>
                            <div>
                                <div class="flex justify-between pt-2">
                                    <div class="text-[#61C1B4] font-[Bold] text-[18px]">
                                        {{ card.orderNumber }}
                                    </div>
                                    <div class="text-[#7D7D7D] font-[Semi-Bold] xl:hidden md:hidden">
                                        <span>Qty:</span> {{ card.items.reduce((total, item) => total + item.quantity, 0) }}
                                    </div>
                                </div>
                                <div class="font-[Semi-Bold] text-[20px] pb-4">
                                    {{ card.items[0]?.name }}
                                </div>
                                <div>
                                    {{ card.billingDetails?.streetAddress }},
                                    {{ card.billingDetails?.city }}
                                    {{ card.billingDetails?.state }}
                                </div>
                                <div class="xl:w-1/2 md:flex items-center md:space-x-24">
                                    <div class="text-[#7D7D7D] font-[Semi-Bold] xl:hidden md:block hidden">
                                        <span>Qty:</span>{{ card.items.reduce((total, item) => total + item.quantity, 0)
                                        }}
                                    </div>
                                    <div class="py-2">
                                        <div
                                            class="bg-[#E4E4E4] text-center p-2 px-6 rounded-full text-[#929292] uppercase xl:hidden">
                                            {{ card.orderStatus }}
                                        </div>
                                    </div>
                                    <div class="lg:hidden">
                                        <div
                                            class="flex justify-center items-center space-x-2 bg-[#DEF8F4] p-2 px-8 rounded-full">
                                            <div class="">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="11.311" height="12"
                                                    viewBox="0 0 11.311 12">
                                                    <path id="Path_7350" data-name="Path 7350"
                                                        d="M11.623-6.6a.532.532,0,0,1-.148.577L10.46-5.1a4.535,4.535,0,0,1,.04.6,4.535,4.535,0,0,1-.04.6l1.015.923a.532.532,0,0,1,.148.577,5.95,5.95,0,0,1-.368.8l-.11.19a6.175,6.175,0,0,1-.518.734.536.536,0,0,1-.574.159L8.747-.935a5.128,5.128,0,0,1-1.031.6L7.423,1A.562.562,0,0,1,7,1.418,6.124,6.124,0,0,1,5.979,1.5,5.994,5.994,0,0,1,5,1.418.562.562,0,0,1,4.577,1L4.284-.337a4.607,4.607,0,0,1-1.031-.6l-1.3.417a.535.535,0,0,1-.574-.159,6.15,6.15,0,0,1-.518-.734L.746-1.6a5.846,5.846,0,0,1-.37-.8.532.532,0,0,1,.149-.577L1.539-3.9A4.535,4.535,0,0,1,1.5-4.5a4.535,4.535,0,0,1,.039-.6L.525-6.019A.531.531,0,0,1,.376-6.6a5.874,5.874,0,0,1,.37-.8l.109-.19a6.071,6.071,0,0,1,.518-.732.532.532,0,0,1,.574-.16l1.3.416a4.507,4.507,0,0,1,1.031-.6L4.577-10A.532.532,0,0,1,5-10.418,6.033,6.033,0,0,1,6-10.5a6.033,6.033,0,0,1,1,.082A.532.532,0,0,1,7.423-10l.293,1.338a5,5,0,0,1,1.031.6l1.305-.416a.533.533,0,0,1,.574.16,6.068,6.068,0,0,1,.518.732l.11.19A5.95,5.95,0,0,1,11.623-6.6ZM6-2.625a1.879,1.879,0,0,0,1.875-1.9A1.888,1.888,0,0,0,6-6.4,1.888,1.888,0,0,0,4.125-4.521,1.879,1.879,0,0,0,6-2.625Z"
                                                        transform="translate(-0.345 10.5)" fill="#358177" />
                                                </svg>
                                            </div>
                                            <div class="text-[#358177] uppercase mt-1">
                                                Manage
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="xl:w-1/2 flex items-center justify-center space-x-24">
                            <div class="text-[#7D7D7D] font-[Semi-Bold] xl:block hidden">
                                <span>Qty: </span>{{ card.items.reduce((total, item) => total + item.quantity, 0) }}
                            </div>
                            <div class="bg-[#E4E4E4] p-2 px-6 rounded-full text-[#929292] uppercase xl:block hidden">
                                {{ card.orderStatus }}
                            </div>
                        </div>
                        <div class="lg:w-1/2 flex justify-end items-center relative">
                            <div class="flex items-center space-x-2 lg:bg-[#DEF8F4] p-2 px-8 rounded-full">
                                <div class="lg:block hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11.311" height="12"
                                        viewBox="0 0 11.311 12">
                                        <path id="Path_7350" data-name="Path 7350"
                                            d="M11.623-6.6a.532.532,0,0,1-.148.577L10.46-5.1a4.535,4.535,0,0,1,.04.6,4.535,4.535,0,0,1-.04.6l1.015.923a.532.532,0,0,1,.148.577,5.95,5.95,0,0,1-.368.8l-.11.19a6.175,6.175,0,0,1-.518.734.536.536,0,0,1-.574.159L8.747-.935a5.128,5.128,0,0,1-1.031.6L7.423,1A.562.562,0,0,1,7,1.418,6.124,6.124,0,0,1,5.979,1.5,5.994,5.994,0,0,1,5,1.418.562.562,0,0,1,4.577,1L4.284-.337a4.607,4.607,0,0,1-1.031-.6l-1.3.417a.535.535,0,0,1-.574-.159,6.15,6.15,0,0,1-.518-.734L.746-1.6a5.846,5.846,0,0,1-.37-.8.532.532,0,0,1,.149-.577L1.539-3.9A4.535,4.535,0,0,1,1.5-4.5a4.535,4.535,0,0,1,.039-.6L.525-6.019A.531.531,0,0,1,.376-6.6a5.874,5.874,0,0,1,.37-.8l.109-.19a6.071,6.071,0,0,1,.518-.732.532.532,0,0,1,.574-.16l1.3.416a4.507,4.507,0,0,1,1.031-.6L4.577-10A.532.532,0,0,1,5-10.418,6.033,6.033,0,0,1,6-10.5a6.033,6.033,0,0,1,1,.082A.532.532,0,0,1,7.423-10l.293,1.338a5,5,0,0,1,1.031.6l1.305-.416a.533.533,0,0,1,.574.16,6.068,6.068,0,0,1,.518.732l.11.19A5.95,5.95,0,0,1,11.623-6.6ZM6-2.625a1.879,1.879,0,0,0,1.875-1.9A1.888,1.888,0,0,0,6-6.4,1.888,1.888,0,0,0,4.125-4.521,1.879,1.879,0,0,0,6-2.625Z"
                                            transform="translate(-0.345 10.5)" fill="#358177" />
                                    </svg>
                                </div>
                                <div class="text-[#358177] uppercase mt-1 lg:block hidden relative">
                                    Manage
                                </div>
                                <div class="text-[#7D7D7D] flex space-x-1 text-[14px] font-[Semi-Bold] absolute top-12 right-0">
                                    <div>Delivered on</div>
                                    <div>{{ new Date(card.createdAt).toLocaleDateString() }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition-group>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useApi } from '@/components/api/useApi';
const router = useRouter();
const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const navigateToDetails = (id) => {
    scrollToTop();
    router.push({ name: 'MyOrderDetails', params: { id } });
};

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}


const cards = ref([]);

onMounted(async () => {
    const userId = getCookie("userId");
    try {
        const response = await fetch(`${apiUrl}/checkout/getMe`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'user-id': userId
            }
        })
        const data = await response.json()
        cards.value = data.data.orders
    } catch (error) {
        console.error('Error fetching order data:', error)
    }
});
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<style scoped>
.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateX(30px);
    opacity: 0;
}

::-webkit-scrollbar {
    width: 5px;
    border-radius: 10px;
}


::-webkit-scrollbar-thumb {
    background-color: #DBF1EE;
    border-radius: 5px;
}
</style>