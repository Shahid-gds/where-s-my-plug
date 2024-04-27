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
                    <div class="" v-for="(card, index) in cards" :key="card.id"
                        :class="{ 'border-b-2': index !== cards.length - 1 }">
                        <div class="py-4">
                            <div class="md:flex justify-center md:space-x-4 py-4">
                                <div class="md:w-[137px] h-[137px] flex justify-center border-2 p-2 rounded-xl">
                                    <img class="" :src="card.image" alt="">
                                </div>
                                <div class="w-full relative">
                                    <button class="w-1/2 text-[#FF3B3B] uppercase  flex justify-end items-center absolute sm:top-0 top-3 right-0"
                                        @click="removeItem(index)">
                                        <div class="font-[Bold] ">&#128473;</div>
                                    </button>
                                    <div class="text-[#61C1B4] font-[Bold] pt-3">
                                        {{ card.weight }}
                                    </div>
                                    <div class="flex justify-between py-2">
                                        <div class="w-full font-[Extra-Bold]">
                                            {{ card.heading }}
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-start">
                                        <div class="w-full">
                                            <button class="text-2xl" @click="increment(index)">&#65291;</button>
                                            <span
                                                class="border-2 border-[#61C1B4] text-[#61C1B4] rounded-lg p-2 px-3 shadow-lg">
                                                {{ cardCounts[index] }} </span>
                                            <button class="text-2xl" @click="decrement(index)">&#8722;</button>
                                        </div>
                                        <div class="w-full text-right">
                                            {{ card.price }}
                                        </div>
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
                        <h1 class="pb-2 text-lg font-[Bold]">Subtotal (4 Items)</h1>
                        <h1 class="pb-2 text-lg">Est. Taxes</h1>
                        <h1 class="font-[Bold]">Estimated Total</h1>
                    </div>
                    <div class="w-full text-right">
                        <h1 class="pb-2 text-lg font-[Bold]">$58.00</h1>
                        <h1 class="pb-2 text-lg">$5.27</h1>
                        <h1 class="font-[Bold]">$63.27</h1>
                    </div>
                </div>
                <div class="w-full pb-16">
                    <router-link :to="{ name: 'CheckOutThankYou' }" @click="scrollToTop"
                        class="hover-btn w-full text-center p-4 rounded-full bg-[#61C1B4] text-white font-[Bold]">Place Order</router-link>
                </div>
                <div class="w-full text-center">
                    <a href="#" class="underline font-[Bold]">Continue Shopping</a>
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
import { ref, onMounted } from 'vue';
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
const cards = ref([
    {
        id: '1',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Red Dirt Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        price: '$24.00',
        removeButton: 'Remove item'
    },
    {
        id: '2',
        image: import('../assets/images/CannabisStrainCarousel/ImgOne.svg').then((module) => module.default),
        weight: '1 g',
        heading: 'Urban AG Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        price: '$10.00',
        removeButton: 'Remove item'
    },
    {
        id: '3',
        image: import('../assets/images/CannabisStrainCarousel/ImgTwo.svg').then((module) => module.default),
        weight: '3.0 g',
        heading: 'Red Dirt Flower - Wedding Cake',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur....',
        price: '$24.00',
        removeButton: 'Remove item'
    },
]);

const cardCounts = ref([]);

const increment = (index) => {
    cardCounts.value[index]++;
};

const decrement = (index) => {
    if (cardCounts.value[index] > 0) {
        cardCounts.value[index]--;
    }
};

const removeItem = (index) => {
    cards.value.splice(index, 1);
    cardCounts.value.splice(index, 1);
};

onMounted(() => {
    cardCounts.value = new Array(cards.value.length).fill(0);
});

onMounted(async () => {
    cards.value = await Promise.all(
        cards.value.map(async (card) => ({
            ...card,
            image: await card.image,
        }))
    );
});
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