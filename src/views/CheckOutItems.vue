<template>
    <section class="pb-[15rem] -mt-[10rem] container mx-auto xl:flex xl:space-x-5 px-6">
        <div class="w-full bg-white p-6 shadow-lg rounded-xl">
            <form class="pt-[3rem]">
                <!-- Contact Information Section -->
                <div class="pb-10">
                    <h1 class="text-2xl uppercase">Billing details</h1>
                    <p class="text-[#ACACAC] pb-4">Lorem Ipsum is simply dummy text of the printing</p>
                    <div class="">
                        <div v-for="(inputGroup, index) in contactInfoInputGroup" :key="index" class="">
                            <div v-for="(input, inputIndex) in inputGroup" :key="inputIndex" class="w-full">
                                <div class="text-[#343434]" :class="{ 'pb-2 mt-3': input.id === 'companyName' }">
                                    <label :for="input.id">
                                        {{ input.label }}
                                        <span v-if="isRequired(input.label)"
                                            class="text-[30px] font-[Bold] text-[#EC1818]">*</span>
                                    </label>
                                </div>
                                <div v-if="input.type === 'select'" class="select w-full pb-10">
                                    <div class="selectBtn border-2 border-[#61C1B4] text-[#818181] p-3 w-full rounded-xl px-6"
                                        :class="{ toggle: dropdownVisible[input.id] }"
                                        @click="toggleDropdown(input.id)">
                                        {{ selectedOption[input.id] }}
                                    </div>
                                    <div class="selectDropdown p-2" :class="{ toggle: dropdownVisible[input.id] }">
                                        <div class="option w-full" v-for="option in input.options" :key="option"
                                            @click="selectOption(option, input.id)" :data-type="option">
                                            {{ option }}
                                        </div>
                                    </div>
                                </div>
                                <div class="text-[#818181] pb-6" v-else>
                                    <input :type="input.type" :id="input.id"
                                        class="border-2 border-[#61C1B4] w-full p-3 rounded-xl px-6"
                                        :placeholder="input.placeholder">
                                </div>
                            </div>
                        </div>
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
        <div class="w-full">
            <div class="pb-6">
                <transition-group name="nested" tag="div" class="w-full rounded-xl shadow-xl bg-[white] px-6">
                    <!-- Display cart items dynamically -->
                    <div v-for="(item, index) in cartItems" :key="index" class="py-4"
                        :class="{ 'border-b-2': index !== item.length - 1 }">
                        <div class="md:flex justify-center md:space-x-4 py-4">
                            <div class="md:w-[137px] h-[137px] flex justify-center border-2 p-2 rounded-xl">
                                <img :src="item.img1" alt="">
                            </div>
                            <div class="w-full">
                                <div class="sm:hidden flex justify-between items-center pt-3">
                                    <div class="w-full text-[#61C1B4] font-[Bold]">
                                        {{ item.weight }}
                                    </div>
                                    <div class="w-full text-right">
                                        ${{ item.price.toFixed(2) }}
                                    </div>
                                </div>
                                <div class="text-[#61C1B4] font-[Bold] sm:block hidden">
                                    {{ item.weight }}
                                </div>
                                <div class="flex justify-between py-2">
                                    <div class="w-full font-[Extra-Bold]">
                                        {{ item.heading }}
                                    </div>
                                    <div class="w-full text-right">
                                        ${{ (item.price * item.quantity).toFixed(2) }}
                                    </div>
                                </div>
                                <div class="flex justify-between items-start">
                                    <div>
                                        {{ item.subHeading }}
                                    </div>
                                    <button class="w-1/2 text-[#FF3B3B] uppercase flex justify-end items-center"
                                        @click="removeFromCart(index)">
                                        <div class="font-[Bold] sm:block hidden">&#128473;</div>
                                        <div class="font-[Bold] sm:block hidden">
                                            Remove item
                                        </div>
                                    </button>
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <div>
                                        <button class="text-2xl" @click="increment(index)">&#65291;</button>
                                        <span
                                            class="border-2 border-[#61C1B4] text-[#61C1B4] rounded-lg p-2 px-3 shadow-lg">
                                            {{ item.quantity }}
                                        </span>
                                        <button class="text-2xl" @click="decrement(index)">&#8722;</button>
                                    </div>
                                    <button class="w-1/2 text-[#FF3B3B] uppercase flex justify-end items-center"
                                        @click="removeFromCart(index)">
                                        <div class="font-[Bold] sm:hidden">&#128473;</div>
                                        <div class="font-[Bold] sm:hidden">
                                            Remove item
                                        </div>
                                    </button>
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
                    <router-link :to="{ name: 'CheckOutThankYou' }" @click="placeOrderAndClearCart"
                        class="hover-btn w-full text-center p-4 rounded-full bg-[#61C1B4] text-white font-[Bold]">Place
                        Order
                    </router-link>
                </div>
                <div class="w-full text-center">
                    <router-link to="/dispensaries-detail:id" class="underline font-[Bold]">Continue Shopping</router-link>
                    <p class="text-[#B7B7B7] pt-2 px-10 text-[14px]">Estimated total may not reflect actual taxes owed
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
    </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useCartStore } from '../stores/modules/cart';
const selectedLabels = ['First Name', 'Last Name', 'Country / Region', 'Street Address', 'Town / City', 'State', 'ZIP Code', 'Phone Number', 'Email Address'];

const contactInfoInputGroup = ref([
    [
        {
            id: 'firstName',
            type: 'text',
            label: 'First Name',
            placeholder: 'Enter Your First Name'
        },
        {
            id: 'lastName',
            type: 'text',
            label: 'Last Name',
            placeholder: 'Enter Your Last Name'
        },
        {
            id: 'companyName',
            type: 'text',
            label: 'Company Name (Optional)',
            placeholder: 'Enter Your Company Name'
        },

        {
            id: 'country',
            type: 'select',
            label: 'Country / Region',
            options: ['One', 'Two', 'Three']
        },

        {
            id: 'streetAddress',
            type: 'text',
            label: 'Street Address',
            placeholder: 'House Number and Street Name'
        },
        {
            id: 'streetAddress',
            type: 'text',
            label: '',
            placeholder: 'Apartment, Suite, Unit, etc. (optional)'
        },
        {
            id: 'city',
            type: 'text',
            label: 'Town / City',
            placeholder: 'Enter Your Town / City'
        },
        {
            id: 'state',
            type: 'select',
            label: 'State',
            options: ['One', 'Two', 'Three']
        },
        {
            id: 'zipCode',
            type: 'text',
            label: 'ZIP Code',
            placeholder: 'Enter Your ZIP Code'
        },
        {
            id: 'phoneNumber',
            type: 'text',
            label: 'Phone Number',
            placeholder: 'Enter Your Phone Number'
        },
        {
            id: 'emailAddress',
            type: 'email',
            label: 'Email Address',
            placeholder: 'Enter Your Email Address'
        },
    ],
]);
let selectedOption = {
    country: 'Select Country / Region',
    state: 'Select State',
};

const dropdownVisible = ref({
    country: false,
    state: false,
});

const toggleDropdown = (id) => {
    dropdownVisible.value[id] = !dropdownVisible.value[id];
    for (const key in dropdownVisible.value) {
        if (key !== id) {
            dropdownVisible.value[key] = false;
        }
    }
};

const selectOption = (option, id) => {
    selectedOption[id] = option;
    dropdownVisible.value[id] = false;
};

const isRequired = (label) => {
    return selectedLabels.includes(label);
};

const placeOrderAndClearCart = () => {
    scrollToTop();
    clearCartItems();
};

const clearCartItems = () => {
    store.clearCart(); 
};

const store = useCartStore();

// Computed property to get cart items
const cartItems = computed(() => store.cartItems);

// Computed property to get total price
const totalPrice = computed(() => store.totalPrice);

// Methods to interact with cart
const increment = (index) => {
    store.incrementItemQuantity(index);
};

const decrement = (index) => {
    store.decrementItemQuantity(index);
};

const removeFromCart = (index) => {
    store.removeFromCart(index);
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