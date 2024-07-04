<template>
    <div class="w-full">
       <div v-if="showPopup">
        <resendOtp />
       </div>
       <div v-if="successfullOtp">
        <successOtp />
       </div>
        <div class="main-container flex relative">
            <div class="sm:mt-[10%] w-full flex justify-center">
                <div class="px-6">
                   <div class="mt-10">
                    <div class="flex justify-center pb-5">
                        <svg width="50" height="40" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.287 0.436752L24.521 16.27C24.1088 16.6375 23.5759 16.8406 23.0236 16.8406C22.4714 16.8406 21.9384 16.6375 21.5263 16.27L3.686 0.445752C4.1119 0.315851 4.55473 0.249883 5 0.250002H41C41.4358 0.249607 41.8693 0.312514 42.287 0.436752ZM45.338 3.553C45.4438 3.9355 45.5 4.336 45.5 4.75V27.25C45.5 28.4435 45.0259 29.5881 44.182 30.432C43.3381 31.2759 42.1935 31.75 41 31.75H5C3.80653 31.75 2.66193 31.2759 1.81802 30.432C0.974106 29.5881 0.5 28.4435 0.5 27.25V4.75C0.5 4.33375 0.55625 3.931 0.662 3.5485L18.5315 19.6315C19.7679 20.7334 21.3663 21.3423 23.0225 21.3423C24.6787 21.3423 26.2771 20.7334 27.5135 19.6315L45.338 3.553Z" fill="#61C1B4"/>
                        </svg>                            
                    </div>
                   </div>
                    <div class="">
                        <h1 class="font-[Bold] uppercase xl:text-[64px] sm:text-[45px] text-[25px] text-center font-[700] text-[#61C1B4] md:text-center">Verify Your Email!</h1>
                    </div>
                    <div class="text-[#666] sm:text-center sm:text-lg">
                        <p>Enter the 4-digit code you received in your email</p>
                    </div>
                    <div class="mt-5 px-6 lg:block hidden">
                        <div class="pb-2 w-full flex justify-center">
                            <div v-for="(digit, index) in codeDigits" :key="index" class="mx-3 inline-block sm:w-[60px] w-[35px]  sm:h-[70px] text-center">
                                <input v-model="codeDigits[index]" type="text"
                                    class="border-2 w-full outline-none p-2 text-center h-[70px]"
                                    :class="{ 'border-red-500': emptyFields.includes('otp') }"
                                    maxlength="1" @paste="handlePaste($event, index)"  
                                    @input="handleInput($event, index)"
                                    @keydown="handleKeyDown($event, index)">
                                    <span v-if="index < codeDigits.length - 1" class="absolute ml-1.5 mt-[2rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="2" viewBox="0 0 11 2" fill="#9F9F9F">
                                            <path d="M0 1H10.5" stroke="#9F9F9F"/>
                                          </svg>
                                    </span>
                            </div>
                        </div>
                        <div class="text-[#BEBEBE] text-center">
                            {{ attemptMessage }}
                        </div>
                    </div>
                    <div class="mt-5 lg:hidden">
                        <div class="py-28 flex justify-center">
                            <div v-for="(digit, index) in codeDigits" :key="index" class="mx-2 inline-block  h-[35px] w-[37px] text-center">
                                <input v-model="codeDigits[index]" type="text"
                                    class="border-2 w-full outline-none text-center rounded-md h-[49px]"
                                    :class="{ 'border-red-500': emptyFields.includes('otp') }"
                                    maxlength="1" @paste="handlePaste($event, index)"  
                                    @input="handleInput($event, index)"
                                    @keydown="handleKeyDown($event, index)">
                                    <span v-if="index < codeDigits.length - 1" class="absolute sm:ml-1.5 ml-0.5 sm:mt-[2rem] mt-[1.5rem]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="2" viewBox="0 0 11 2" fill="#9F9F9F">
                                            <path d="M0 1H10.5" stroke="#9F9F9F"/>
                                          </svg>
                                    </span>
                            </div>
                        </div>
                        <div class="text-[#BEBEBE] text-center">
                            {{ attemptMessage }}
                        </div>
                    </div>
                    <div class="lg:hidden">
                        <div class="flex space-x-2 text-[40px] py-6 text-[#61C1B4] justify-center">
                            <div> {{ formattedTime }} </div>
                        </div>
                       </div>
                      
                    <div class="flex space-x-6 items-center justify-center py-6">
                        <div class="text-center bg-[#61C1B4] px-16 p-4 rounded-lg cursor-pointer"
                            :class="{ 'cursor-not-allowed': !showVerify }" :disabled="!showVerify"
                            :style="{ borderColor: showVerify ? '#666668' : '#BEBEBE', color: showVerify ? '#fff'  : '#BEBEBE' }" @click="verifyOTP">
                            <button :class="{ 'cursor-not-allowed': !showVerify }">Confirm</button>
                        </div>
                    </div>
                   <div class="lg:block hidden">
                    <div class="flex space-x-2 text-[48px] text-[#20184E] justify-center">
                        <div> {{ formattedTime }} </div>
                    </div>
                   </div>
                  
                </div>
            </div>
            <div v-if="responseMessage" class="absolute w-[500px] text-center translate-x-[150%] top-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
                <p class="text-lg">{{ responseMessage }}</p>
            </div>
        </div>
      
        <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-white opacity-80 z-50">
            <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, computed, onUnmounted, watch } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';
import resendOtp from '../UI/popupModels/resendOtp.vue';
import successOtp from '../UI/popupModels/successOtp.vue';
const isLoading = ref(false);
const totalSeconds = ref(60);
const showPopup = ref(false);
const successfullOtp = ref(false);
const showResend = ref(false);
const showVerify = ref(true);
const router = useRouter();
const emptyFields = ref('');
const responseMessage = ref('');
const attemptMessage = ref('');
const codeDigits = ref(['', '', '', '']);
const incorrectCodeAttempts = ref(0);
const invalidCode = ref(false);

const baseUrl = 'https://wmp-api-shahid-gds-projects.vercel.app/api/v1/users';
// const baseUrl = 'http://127.0.0.1:3000/api/v1/users';

const token = localStorage.getItem('token');

const handlePaste = (event, index) => {
    event.preventDefault();
    const pastedText = event.clipboardData.getData('text/plain');
    for (let i = 0; i < pastedText.length && index + i < codeDigits.value.length; i++) {
        codeDigits.value[index + i] = pastedText.charAt(i);
    }
    const lastInputIndex = Math.min(index + pastedText.length, codeDigits.value.length - 1);
    const lastInput = document.querySelectorAll('input[type="text"]')[lastInputIndex];
    if (lastInput) {
        lastInput.focus();
    }
};
const handleInput = (event, index) => {
        const inputElement = event.target;
        const inputLength = inputElement.value.length;
        if (inputLength === 1 && index < codeDigits.value.length - 1) {
            const nextInput = inputElement.parentElement.nextElementSibling.querySelector('input[type="text"]');
            if (nextInput) {
                nextInput.focus();
            }
        }
    };
    const handleKeyDown = (event, index) => {
    if (event.keyCode === 8 || event.key === "Backspace") {
        event.preventDefault();
        codeDigits.value[index] = '';
        if (index > 0) {
            const prevInput = event.target.parentElement.previousElementSibling.querySelector('input[type="text"]');
            if (prevInput) {
                prevInput.focus();
            }
        }
    }
};
const decrementSeconds = () => {
    if (totalSeconds.value > 0) {
        totalSeconds.value--;
    } else {
        showPopup.value = true;
        showResend.value = true;
        showVerify.value = false;
    }
};
const formattedTime = computed(() => {
    const minutes = Math.floor(totalSeconds.value / 60);
    const seconds = totalSeconds.value % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})
// API Integration for OTP Verification
const verifyOTP = async () => {
    emptyFields.value = [];
    invalidCode.value = false;
    const codeValue = codeDigits.value.join('');
    if(!codeValue) {
        responseMessage.value = "Please fill the OTP fields with sent 4 digit on your email!";
        emptyFields.value.push('otp');
        return;
    }

    try {
        const response = await axios.post(`${baseUrl}/verifyOTP`, {
            otp: codeValue,
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        incorrectCodeAttempts.value = 0;
        responseMessage.value = 'OTP verified successfully!'
        console.log('OTP verified successfully:', response.data)
        successfullOtp.value = true;
        setTimeout(() => {
            router.replace('/sign-in')
        }, 1000);
    } catch (error) {
        incorrectCodeAttempts.value++
        if(incorrectCodeAttempts.value === 4) {
            showPopup.value = true;
        }
        if (error.response && error.response.status === 400) {
            responseMessage.value = 'Invalid OTP or Expired',
                emptyFields.value.push('otp')
        } else {
            responseMessage.value = 'Something went wrong. Please try again later !';
        }
    }
}

const responseMessageTimeout = ref(null);

watch(responseMessage, (newValue) => {
    clearTimeout(responseMessageTimeout.value);
    responseMessageTimeout.value = setTimeout(() => {
        responseMessage.value = '';
    }, 3000);
});

onUnmounted(() => {
    clearTimeout(responseMessageTimeout.value);
});

onMounted(() => {
    const timeInterval = setInterval(decrementSeconds, 1000);
    return () => clearInterval(timeInterval);
})
</script>
<style scoped>

</style>