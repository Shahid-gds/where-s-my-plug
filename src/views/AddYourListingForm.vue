<template>
    <section class="container mx-auto pb-[15rem] xl:px-20 px-6">
        <div class="px-4">
            <form class="pt-[3rem]">
                <!-- Contact Information Section -->
                <div class="pb-10">
                    <h1 class="text-2xl">Contact Information</h1>
                    <div class="flex flex-wrap">
                        <div v-for="(inputGroup, index) in contactInfoInputGroup" :key="index"
                            class="lg:flex lg:space-x-4 w-full">
                            <div v-for="(input, inputIndex) in inputGroup" :key="inputIndex" class="w-full"
                                :class="{ 'lg:w-1/2': input.type === 'tel' }">
                                <div class="text-[#343434]"
                                    :class="{ 'pb-2 mt-3': input.id === 'addressLine1' || input.id === 'addressLine2' }">
                                    <label :for="input.id">
                                        {{ input.label }}
                                        <span v-if="isRequired(input.label)"
                                            class="text-[30px] font-[Bold] text-[#EC1818]">*</span>
                                    </label>
                                </div>
                                <div v-if="input.type === 'select'" class="select w-full pb-6">
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
                </div>
                <!-- Business Information Section -->
                <div class="pb-10">
                    <h1 class="text-2xl">Business Information</h1>
                    <div class="flex flex-wrap">
                        <div v-for="(inputGroup, index) in businessInfoInputGroup" :key="index"
                            class="lg:flex lg:space-x-4 w-full">
                            <div v-for="(input, inputIndex) in inputGroup" :key="inputIndex" class="w-full">
                                <div class="text-[#343434]"
                                    :class="{ 'pb-2 mt-3': input.id === 'city' || input.id === 'state' || input.id === 'webUrl' }">
                                    <label :for="input.id">
                                        {{ input.label }}
                                        <span v-if="isRequired(input.label)"
                                            class="text-[30px] font-[Bold] text-[#EC1818]">*</span>
                                    </label>
                                </div>
                                <div v-if="input.type === 'select'" class="select w-full pb-6">
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
                </div>
                <!-- Point of Sale -->
                <div class="pb-10">
                    <h1 class="text-2xl">Point of Sale</h1>
                    <div class="flex flex-wrap">
                        <div v-for="(inputGroup, index) in saleInfoInputGroup" :key="index"
                            class="flex space-x-4 w-full">
                            <div v-for="(input, inputIndex) in inputGroup" :key="inputIndex" class="w-full"
                            :class="{ 'lg:w-1/2': input.type === 'select' }">
                                <div class="text-[#343434]" :class="{ 'pb-2 mt-3': input.id === 'saleSystem' }">
                                    <label :for="input.id">
                                        {{ input.label }}
                                        <span v-if="isRequired(input.label)"
                                            class="text-[30px] font-[Bold] text-[#EC1818]">*</span>
                                    </label>
                                </div>
                                <div v-if="input.type === 'select'" class="select w-full">
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
                        <div><label for="cbx-45" class="text-[#343434]">Send me more information about Point of Sale
                                options at Weedmaps</label></div>
                    </div>
                </div>
                <!-- License -->
                <div class="pb-10">
                    <h1 class="text-2xl">License</h1>
                    <div class="flex flex-wrap">
                        <div v-for="(inputGroup, index) in licenseInfoInputGroup" :key="index"
                            class="lg:flex lg:space-x-4 w-full">
                            <div v-for="(input, inputIndex) in inputGroup" :key="inputIndex" class="w-full">
                                <div class="text-[#343434]"
                                    :class="{ 'pb-2 mt-3': input.id === 'licenseNumber' || input.id === 'expiration' }">
                                    <label :for="input.id">
                                        {{ input.label }}
                                        <span v-if="isRequired(input.label)"
                                            class="text-[30px] font-[Bold] text-[#EC1818]">*</span>
                                    </label>
                                </div>
                                <div v-if="input.type === 'select'" class="select w-full pb-6">
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
                    <div class="pt-[3rem] text-center text-[18px]">
                        <p>By completing this form, you agree that Weedmaps may process your information in accordance
                            with our <br> <a class="text-[#6AC4B8]" href="#">Privacy Policy</a>.</p>
                        <p class="xl:px-[15rem] pt-8">You acknowledge that all use of the Weedmaps platform for business is
                            subject to the <a class="text-[#6AC4B8]" href="#">Weedmaps
                                Commercial Terms of Use</a> and the <a class="text-[#6AC4B8]" href="#">Weedmaps Privacy
                                Policy</a>, and you agree to be bound
                            by these
                            Terms and any applicable additional terms. You agree to receive all communications
                            electronically and agree that Weedmaps may contact you through the use of automated text
                            messages.</p>
                    </div>
                    <div class="checkbox-wrapper-45 pt-16 pb-8 flex justify-center items-center space-x-2">
                        <div>
                            <input id="cbx-46" type="checkbox" />
                            <label class="cbx" for="cbx-46">
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
                        <div><label for="cbx-45" class="text-[#343434]">I have read and agree to the above terms and
                                conditions.</label></div>
                    </div>
                    <div class="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="302"
                            height="76" viewBox="0 0 302 76">
                            <image id="Image_11" data-name="Image 11" width="302" height="76"
                                xlink:href="data:image/png;base64,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" />
                        </svg>
                    </div>
                </div>
                <!-- Submit Button -->
                <div class="flex justify-center">
                    <button class="hover-btn bg-[#61C1B4] p-3 px-16 rounded-full text-white">Add Your Listings</button>
                </div>
            </form>
        </div>
    </section>
</template>



<script setup>
import { ref } from 'vue';

const selectedLabels = ['First Name', 'Last Name', 'Email Address', 'Phone Number', 'Business Role', 'Business Name', 'Business Type', 'Country', 'Postal Code', 'License Type'];

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
            id: 'email',
            type: 'email',
            label: 'Email Address',
            placeholder: 'Enter Your Email Address'
        }
    ],
    [
        {
            id: 'phone',
            type: 'tel',
            label: 'Phone Number',
            placeholder: 'Enter Your Phone Number'
        },
        {
            id: 'role',
            type: 'select',
            label: 'Business Role',
            options: ['Admin', 'User', 'Others']
        },
    ],
    [
        {
            id: 'addressLine1',
            type: 'text',
            label: 'Address Line 1',
            placeholder: 'Enter Your Address Line 1'
        },
        {
            id: 'addressLine2',
            type: 'text',
            label: 'Address Line 2',
            placeholder: 'Enter Your Address Line 2'
        },

    ],
]);

const businessInfoInputGroup = ref([
    [
        {
            id: 'businessName',
            type: 'text',
            label: 'Business Name',
            placeholder: 'Enter Your Business Name'
        },
        {
            id: 'businessType',
            type: 'text',
            label: 'Business Type',
            placeholder: 'Enter Your Business Type'
        },
        {
            id: 'country',
            type: 'select',
            label: 'Country',
            options: ['One', 'Two', 'Three']
        }
    ],
    [
        {
            id: 'city',
            type: 'text',
            label: 'City',
            placeholder: 'Enter Your City '
        },
        {
            id: 'state',
            type: 'text',
            label: 'State',
            placeholder: 'Enter Your State'
        },
        {
            id: 'postCode',
            type: 'text',
            label: 'Postal Code',
            placeholder: 'Enter Your Postal Code'
        },

    ],
    [
        {
            id: 'webUrl',
            type: 'text',
            label: 'Website (url)',
            placeholder: 'Enter Your Website (url)'
        },
    ],
]);

const saleInfoInputGroup = ref([
    [

        {
            id: 'saleSystem',
            type: 'select',
            label: 'Point of Sale System',
            options: ['One', 'Two', 'Three']
        },
    ]

]);
const licenseInfoInputGroup = ref([
    [
        {
            id: 'licenseNumber',
            type: 'text',
            label: 'License Number',
            placeholder: 'Enter Your License Number'
        },
        {
            id: 'licenseType',
            type: 'select',
            label: 'License Type',
            options: ['One', 'Two', 'Three']
        },
        {
            id: 'expiration',
            type: 'date',
            label: 'Expiration',
            placeholder: 'Enter Your Expiration'
        },

    ]

]);

let selectedOption = {
    role: 'Select Your Business Role',
    country: 'Select Your Business Role',
    saleSystem: 'Select a Point of Sale System',
    licenseType: 'Select a Point of Sale System',
};

const dropdownVisible = ref({
    role: false,
    country: false,
    saleSystem: false,
    licenseType: false,
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
    top: 45%;
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
    top: 100%;
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
</style>