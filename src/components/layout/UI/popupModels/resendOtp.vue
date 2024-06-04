<template>
    <div>
        <div v-if="!showVerifyOTPScreen">
            <div class="backdrop"></div>
            <div class="w-[500px] popup p-10 rounded-xl space-y-4">
                <div class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red"
                        class="w-16 h-16">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>
                <p class="text-[red] text-center">Too many incorrect attempts <br> <span class="italic">or</span> <br>
                    Verification has expired</p>
                <div class="pb-4 w-full">
                    <div class="pb-1">
                        <label for="">Email Address</label>
                    </div>
                    <div>
                        <input type="email" class="border-2 w-full p-4 px-4 rounded-xl  outline-none"
                            placeholder="Email Address" v-model="email" required>
                    </div>
                </div>
                <div class="border-2 text-center text-[#61C1B4] border-[#61C1B4] px-6 p-1.5 rounded-lg" :disabled="processing"
                    @click.prevent="resendOTP">
                    {{ processing ? 'Sending...' : 'Resend' }}
                </div>
                <div class="h-8 mt-2">
                    <p class="text-lg text-red-500 text-center">{{ responseMessage }}</p>
                </div>
            </div>
        </div>
        <verifyOTP v-else />
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import verifyOTP from '../../auth/verifyOTP.vue';

const email = ref('');
const responseMessage = ref('');
const processing = ref(false);
const showVerifyOTPScreen = ref(false);
const baseUrl = 'http://127.0.0.1:3000/api/v1/users';

const resendOTP = async () => {
    if (!email.value) {
        responseMessage.value = 'Email not found';
        return;
    }

    try {
        processing.value = true;
        const response = await axios.post(`${baseUrl}/resendOTP`, {
            email: email.value
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        responseMessage.value = "OTP sent to your email. Please check your email";
        console.log('Email sent', response.data);
        showVerifyOTPScreen.value = true;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            responseMessage.value = "Email not found";
        } else {
            responseMessage.value = 'Something went wrong. Please try again later!';
        }
    } finally {
        processing.value = false;
    }
}
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    paint-order: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}
</style>
