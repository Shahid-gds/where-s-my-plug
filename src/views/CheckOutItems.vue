<template>
    <section class="pb-[15rem] -mt-[10rem] container mx-auto xl:flex gap-x-5 flex-row-reverse px-6">
        <div class="w-full">
            <div class="pb-6">
                <transition-group name="nested" tag="div" class="w-full rounded-xl shadow-xl bg-[white] px-6">
                    <!-- Display cart items dynamically -->
                    <div v-for="(item, index) in cartItems" :key="item._id" class="py-4"
                        :class="{ 'border-b-2': index !== item.length - 1 }">
                        <div class="md:flex justify-center md:space-x-4 py-4">
                            <div class="md:w-[137px] h-[137px] flex justify-center border-2 p-2 rounded-xl">
                                <img :src="item.images[0]" alt="">
                            </div>
                            <div class="w-full">
                                <div class="sm:hidden flex justify-between items-center pt-3">
                                    <div class="w-full text-[#61C1B4] font-[Bold]">
                                        {{ item.weight }}
                                    </div>
                                    <!-- <div class="w-full text-right">
                                        ${{ item.price.toFixed(2) }}
                                    </div> -->
                                </div>
                                <div class="text-[#61C1B4] font-[Bold] sm:block hidden">
                                    {{ item.weight }}
                                </div>
                                <div class="flex justify-between py-2">
                                    <div class="w-full font-[Extra-Bold]">
                                        {{ item.name }}
                                    </div>
                                    <div class="w-full text-right">
                                        ${{ (item.price * item.quantity).toFixed(2) }}
                                    </div>
                                </div>
                                <div class="flex justify-between items-start">
                                    <div>
                                        {{ item.category }}
                                    </div>
                                    <button class="text-[#FF3B3B] uppercase flex justify-end items-center"
                                        @click="removeFromCart(index)">
                                        <div class="font-[Bold] sm:block hidden">&#128473;</div>
                                        <div class="font-[Bold] sm:block hidden">
                                            {{ isRemoving === index ? 'Removing...' : 'Remove item' }}
                                        </div>
                                    </button>
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <div>
                                        <button class="text-2xl" @click="debouncedIncrement(index)">&#65291;</button>
                                        <span
                                            class="border-2 border-[#61C1B4] text-[#61C1B4] rounded-lg p-2 px-3 shadow-lg">
                                            {{ item.quantity }}
                                        </span>
                                        <button class="text-2xl" @click="debouncedDecrement(index)">&#8722;</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </div>
            <div class="sm:h-[700px] w-full border-2 border-[#61C1B4] p-6 rounded-xl bg-white">
                <h1 class="font-[Extra-Bold] uppercase text-xl py-2">Order Summary</h1>
                <div class="text-lg pb-4">
                    <span class="text-[#61C1B4] font-[600]">Pickup</span> <span class="font-[600]">Available Until
                        6:30pm
                        CT</span>
                </div>
                <div class="border-t-2 border-b-2 py-4">
                    <div class="relative">
                        <input type="text" class="border-2 w-full p-3 px-4 rounded-lg"
                            placeholder="Enter Your Promo Code">
                        <button class="absolute right-3 top-4 text-[#61C1B4] uppercase">Apply</button>
                    </div>
                </div>
                <div class="flex justify-between py-8">
                    <div class="w-full">
                        <h1 class="pb-2 sm:text-lg font-[Bold]">Subtotal ({{ cartItems.reduce((total, item) => total +
                        item.quantity, 0) }} Items)</h1>
                        <h1 class="pb-2 sm:text-lg">Est. Taxes</h1>
                        <h1 class="font-[Bold]">Estimated Total</h1>
                    </div>
                    <div class="w-full text-right">
                        <h1 class="pb-2 text-lg font-[Bold]">${{ totalPrice ? totalPrice.toFixed(2) : '0.00' }}</h1>
                        <h1 class="pb-2 text-lg">${{ totalPrice ? (totalPrice * 0.09).toFixed(2) : '0.00' }}</h1>
                        <h1 class="font-[Bold]">${{ totalPrice ? (totalPrice * 1.09).toFixed(2) : '0.00' }}</h1>
                    </div>
                </div>
                <div class="w-full pb-16">
                    <div @click="placeOrder"
                        class="hover-btn cursor-pointer w-full text-center p-4 rounded-full bg-[#61C1B4] text-white font-[Bold]">
                        Place
                        Order
                    </div>
                </div>
                <div class="w-full text-center">
                    <router-link to="/dispensaries-detail:id" class="underline font-[Bold]">Continue
                        Shopping</router-link>
                    <p class="text-[#B7B7B7] pt-2 md:px-10 text-[14px]">Estimated total may not reflect actual taxes
                        owed
                        or
                        other promotions. Payment is made directly to
                        the dispensary at time of pickup/delivery. Pickup/delivery orders that exceed local limits or
                        that
                        include items no longer available may be modified. A dispensary agent may reach out to you if
                        modifications must be made.</p>
                </div>
            </div>
            <div class="flex sm:w-1/2 items-strat space-x-2 pt-6 pb-6">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FFD764" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                </div>
                <div class="text-[#B1B1B1]">
                    <span class="font-[Bold]">WARNING:</span> <span>Cancer and Reproductive Harm -</span>
                    <a href="https://www.p65warnings.ca.gov/" target="_blank">www.P65Warnings.ca.gov</a>
                </div>
            </div>
        </div>
        <div class="w-full bg-white p-6 shadow-lg rounded-xl">
            <form class="pt-[3rem]">
                <!-- Contact Information Section -->
                <div class="pb-10">
                    <h1 class="text-2xl uppercase">Billing details</h1>
                    <p class="text-[#ACACAC] pb-4">Lorem Ipsum is simply dummy text of the printing</p>
                    <div class="pb-4">
                        <div>
                            <label for="">First Name <span class="text-[30px] font-bold text-[red]">*</span></label>
                        </div>
                        <input v-model="orderData.billingDetails.firstName" type="text" @input="clearError('firstName')"
                            class="border-2 p-3 rounded-lg w-full" placeholder="Enter Your First Name">
                        <p v-if="errors.firstName" class="text-red-500 text-sm">{{ errors.firstName }}</p>
                    </div>
                    <div class="pb-4">
                        <div>
                            <label for="">Last Name <span class="text-[30px] font-bold text-[red]">*</span></label>
                        </div>
                        <input v-model="orderData.billingDetails.lastName" type="text" @input="clearError('lastName')"
                            class="border-2 p-3 rounded-lg w-full" placeholder="Enter Your Last Name">
                        <p v-if="errors.lastName" class="text-red-500 text-sm">{{ errors.lastName }}</p>
                    </div>
                    <div class="pb-4">
                        <div>
                            <label for="">Company Name (Optional)</label>
                        </div>
                        <input v-model="orderData.billingDetails.companyName" type="text"
                            class="border-2 p-3 rounded-lg w-full" placeholder="Enter Your Company Name">
                    </div>
                    <div class="pb-4">
                        <div>
                            <label for="">Country / Region <span
                                    class="text-[30px] font-bold text-[red]">*</span></label>
                        </div>
                        <input v-model="orderData.billingDetails.country" type="text" @input="clearError('country')"
                            class="border-2 p-3 rounded-lg w-full" placeholder="Country Name">
                        <p v-if="errors.country" class="text-red-500 text-sm">{{ errors.country }}</p>
                    </div>
                    <div class="pb-4">
                        <div>
                            <label for="">Street Address <span class="text-[30px] font-bold text-[red]">*</span></label>
                        </div>
                        <input v-model="orderData.billingDetails.streetAddress" type="text"
                            @input="clearError('streetAddress')" class="border-2 p-3 rounded-lg w-full"
                            placeholder="House Number and Street Name">
                        <p v-if="errors.streetAddress" class="text-red-500 text-sm">{{ errors.streetAddress }}</p>
                    </div>
                    <div class="pb-4">
                        <input type="text" class="border-2 p-3 rounded-lg w-full"
                            placeholder="Appartment, Suit, Unit etc">
                    </div>
                    <div class="pb-4">
                        <div>
                            <label for="">Town / City <span class="text-[30px] font-bold text-[red]">*</span></label>
                        </div>
                        <input v-model="orderData.billingDetails.city" type="text" @input="clearError('city')"
                            class="border-2 p-3 rounded-lg w-full" placeholder="Enter Town / City">
                        <p v-if="errors.city" class="text-red-500 text-sm">{{ errors.city }}</p>
                    </div>
                    <div class="pb-4">
                        <div>
                            <label for="">State <span class="text-[30px] font-bold text-[red]">*</span></label>
                        </div>
                        <input v-model="orderData.billingDetails.state" type="text" @input="clearError('state')"
                            class="border-2 p-3 rounded-lg w-full" placeholder="Enter Your State">
                        <p v-if="errors.state" class="text-red-500 text-sm">{{ errors.state }}</p>
                    </div>
                    <div class="pb-4">
                        <div>
                            <label for="">ZIP Code <span class="text-[30px] font-bold text-[red]">*</span></label>
                        </div>
                        <input v-model="orderData.billingDetails.zipCode" type="text" @input="clearError('zipCode')"
                            class="border-2 p-3 rounded-lg w-full" placeholder="Enter Your ZIP Code">
                        <p v-if="errors.zipCode" class="text-red-500 text-sm">{{ errors.zipCode }}</p>
                    </div>
                    <div class="pb-4">
                        <div>
                            <label for="">Phone Number <span class="text-[30px] font-bold text-[red]">*</span></label>
                        </div>
                        <input v-model="orderData.billingDetails.phoneNumber" type="text"
                            @input="clearError('phoneNumber')" class="border-2 p-3 rounded-lg w-full"
                            placeholder="Enter Your Phone Number">
                        <p v-if="errors.phoneNumber" class="text-red-500 text-sm">{{ errors.phoneNumber }}</p>
                    </div>
                    <div class="pb-4">
                        <div>
                            <label for="">Email Address <span class="text-[30px] font-bold text-[red]">*</span></label>
                        </div>
                        <input v-model="orderData.billingDetails.email" type="email" @input="clearError('email')"
                            class="border-2 p-3 rounded-lg w-full" placeholder="Enter Your Email Address">
                        <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
                    </div>
                    <div class="checkbox-wrapper-45 pt-6 flex items-center space-x-2">
                        <div>
                            <input id="cbx-45" type="checkbox" />
                            <label class="cbx" for="cbx-45">
                                <div class="flip">
                                    <div class="front"></div>
                                    <div class="back">
                                        <svg width="16" height="14" viewBox="0 0 16 14">
                                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                                        </svg>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div><label for="cbx-45" class="text-[#343434]">Ship to a different address?</label></div>
                    </div>
                    <div class="pt-6">
                        <label for="">Order Notes <span class=" text-[#B8B8B8]">(Optional)</span></label>
                        <textarea class="border-2 border-[#61C1B4] w-full rounded-xl p-6" name="" id="" cols="30"
                            rows="5" placeholder="write Order Notes Here ..."></textarea>
                    </div>
                </div>

            </form>
        </div>

    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useCartStore } from '../stores/modules/cart';
import axios from 'axios';
import { useApi } from '@/components/api/useApi';
import { useRoute, useRouter } from 'vue-router';


const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const store = useCartStore();


const route = useRoute();
const router = useRouter();

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
}

const orderData = ref({
    items: [],
    billingDetails: {
        firstName: '',
        lastName: '',
        companyName: '',
        country: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',
        email: ''
    },
    paymentMethod: {
        name: '',
        cardNumber: '',
        expiryData: '',
        cvv: ''
    },
    orderStatus: '',
    summary: {
        subtotal: 0,
        taxes: 0,
        total: 0
    }
});

const orderNote = ref('');
const calculateSummary = () => {
    const subtotal = cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0);
    const taxes = subtotal * 0.09;
    const total = subtotal + taxes;

    orderData.value.summary = {
        subtotal: subtotal.toFixed(2),
        taxes: taxes.toFixed(2),
        total: total.toFixed(2)
    };
};

onMounted(async () => {
    await store.fetchCartItems();
    orderData.value.items = store.cartItems.map(item => ({
        product: item._id,
        quantity: item.quantity.toString()
    }));
    calculateSummary();
})

const cartItems = computed(() => store.cartItems);
const totalPrice = computed(() => store.totalPrice);
const errors = ref({
    firstName: '',
    lastName: '',
    country: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: ''
});

const validateForm = () => {
    errors.value = {};
    let isValid = true;

    if (!orderData.value.billingDetails.firstName) {
        errors.value.firstName = 'First name is required';
        isValid = false;
    }
    if (!orderData.value.billingDetails.lastName) {
        errors.value.lastName = 'Last name is required';
        isValid = false;
    }
    if (!orderData.value.billingDetails.country) {
        errors.value.country = 'Country / Region is required';
        isValid = false;
    }
    if (!orderData.value.billingDetails.streetAddress) {
        errors.value.streetAddress = 'Street address is required';
        isValid = false;
    }
    if (!orderData.value.billingDetails.city) {
        errors.value.city = 'City is required';
        isValid = false;
    }
    if (!orderData.value.billingDetails.state) {
        errors.value.state = 'State is required';
        isValid = false;
    }
    if (!orderData.value.billingDetails.zipCode) {
        errors.value.zipCode = 'ZIP Code is required';
        isValid = false;
    }
    if (!orderData.value.billingDetails.phoneNumber) {
        errors.value.phoneNumber = 'Phone number is required';
        isValid = false;
    }
    if (!orderData.value.billingDetails.email) {
        errors.value.email = 'Email address is required';
        isValid = false;
    }

    return isValid;
};
const clearError = (field) => {
    errors.value[field] = '';
};

const placeOrder = async () => {
    if (!validateForm()) {
        return
    }
    const userId = getCookie("userId");
    try {
        const response = await fetch(`${apiUrl}/checkout/placeMe`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'user-id': userId
            },
            body: JSON.stringify(orderData.value)
        });

        const result = await response.json();

        if (response.ok) {
            if (result.data && result.data.order && result.data.order.orderNumber) {
                const orderNumber = result.data.order.orderNumber;
                localStorage.setItem('orderNumber', orderNumber);
                router.push({ name: 'CheckOutThankYou' });
            }
        } else {
            console.error('Order placement failed:', result);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};



const clearCartItems = () => {
    store.clearCart();
};
const debounceDelay = 300;
let debounceTimeout = null;
// Methods to interact with cart
const increment = (index) => {
    store.incrementItemQuantity(index);
};

const decrement = (index) => {
    store.decrementItemQuantity(index);
};
const debouncedIncrement = (index) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => increment(index), debounceDelay);
};

const debouncedDecrement = (index) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => decrement(index), debounceDelay);
};
const isRemoving = ref(null);
const removeFromCart = async (index) => {
    isRemoving.value = index;
    await store.removeFromCart(index);
    isRemoving.value = null;
};
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<style scoped>
textarea {
    resize: none;
}

.select {
    position: relative;
    width: 100%;
}

.select .selectBtn:after {
    content: "";
    position: absolute;
    top: 30%;
    right: 15px;
    width: 10px;
    height: 10px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
    border-right: 2px solid #61C1B4;
    border-bottom: 2px solid #61C1B4;
    cursor: pointer;
    transition: 0.2s ease;
}

.select .selectBtn.toggle {
    border-radius: 15px 15px 0 0;
}

.select .selectBtn.toggle:after {
    -webkit-transform: translateY(-50%) rotate(-135deg);
    transform: translateY(-50%) rotate(-135deg);
}

.select .selectDropdown {
    position: absolute;
    top: 57%;
    width: 100%;
    border-radius: 0 0 15px 15px;
    overflow-y: hidden;
    z-index: 1;
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
    -webkit-transform-origin: top center;
    transform-origin: top center;
    visibility: hidden;
    transition: 0.2s ease;
    background: white;
    border-right: 2px solid #61C1B4;
    border-bottom: 2px solid #61C1B4;
    border-left: 2px solid #61C1B4;
}

.select .selectDropdown .option {
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s ease;
}

.select .selectDropdown .option:hover {

    color: #61C1B4;
}

.select .selectDropdown.toggle {
    visibility: visible;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
}

@keyframes rotateAnimation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.checkbox-wrapper-45 {
    position: relative;
}

.checkbox-wrapper-45 input[type="checkbox"] {
    display: none;
    visibility: hidden;
}

.checkbox-wrapper-45 .cbx {
    -webkit-perspective: 20;
    perspective: 20;
    display: inline-block;
    border: 2px solid #61C1B4;
    border-radius: 6px;
    transform: translate3d(0, 0, 0);
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.checkbox-wrapper-45 .cbx:hover {
    border-color: #61C1B4;
}

.checkbox-wrapper-45 .flip {
    display: block;
    transition: all 0.4s ease;
    transform-style: preserve-3d;
    position: relative;
    width: 20px;
    height: 20px;
}

.checkbox-wrapper-45 input[type="checkbox"]:checked+.cbx {
    border-color: #61C1B4;
}

.checkbox-wrapper-45 input[type="checkbox"]:checked+.cbx .flip {
    transform: rotateY(180deg);
}

.checkbox-wrapper-45 .front,
.checkbox-wrapper-45 .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    border-radius: 6px;
}

.checkbox-wrapper-45 .front {
    background: #fff;
    z-index: 1;
}

.checkbox-wrapper-45 .back {
    transform: rotateY(180deg);
    background: #61C1B4;
    text-align: center;
    color: #fff;
    line-height: 20px;
    box-shadow: 0 0 0 1px #61C1B4;
}

.checkbox-wrapper-45 .back svg {
    margin-top: 3px;
    fill: none;
}

.checkbox-wrapper-45 .back svg path {
    stroke: #fff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
}

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