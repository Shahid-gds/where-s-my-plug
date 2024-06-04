<template>
    <section class="h-screen relative sm:pt-0 pt-[12rem]">
        <div v-if="!emailVerification"
            class="2xl:pt-[15rem] pt-[2rem] text-center container mx-auto 2xl:px-[30rem] xl:px-[20rem] lg:px-[10rem] px-6">
            <div class="flex justify-center sm:pb-6">
                <img src="@/assets/images/footerLogo.svg" alt="">
            </div>
            <div class="font-extrabold sm:leading-[2.5rem]">
                <span class="text-[#010101]  md:text-[40px] text-[30px] font-[Jost-ExtraBold] uppercase">Forgot
                </span><span
                    class="text-[#61c1b4]  md:text-[40px] text-[30px] font-[Jost-SemiBold] uppercase">Password</span>
                <h1 class="md:text-[20px]  text-[18px] font-[Jost-ExtraBold]">Reset Your Password</h1>
            </div>
            <div class="text-left pt-6">
                <div class="pb-8">
                    <div class="pb-1">
                        <label for="">Email Address</label>
                    </div>
                    <div>
                        <input type="email" class="border-2 outline-none w-full p-4 px-4 rounded-xl shadow-xl"
                            :class="{ 'border-red-500': emptyFields.includes('email') }" placeholder="Email Address"
                            v-model="email" required @input="removeEmptyField('email')" @keypress.enter="triggerButton">
                    </div>
                </div>
                <div class="w-full">
                    <button ref="enterButton" class="hover-btn bg-[#61C1B4] w-full p-4 rounded-full text-white text-xl"
                        @click.prevent="forgotPassword">
                        {{ processing ? 'Please Wait...' : 'Forgot Password' }}
                    </button>
                </div>
                <div class="h-8">
                    <p class="text-lg text-red-500 text-center">{{ responseMessage }}</p>
                </div>
                <div class="text-center">
                    <span class="text-[#818181]">By using Where's My Plug, I agree to the <br> <a href="/terms-of-use"
                            target="_blank" class="text-[black] underline">Terms of Use</a> and
                        <a href="/privacy-policy" target="_blank" class="text-[black] underline">Privacy
                            Policy</a>.</span>
                </div>
            </div>
        </div>
        <div v-else-if="emailVerification">
            <verifyResetPassOTP />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import verifyResetPassOTP from './verifyResetPassOTP.vue';
const email = ref('');
const responseMessage = ref('');
const processing = ref(false);
const emailVerification = ref(false);
const emptyFields = ref([]);
const baseUrl = 'http://127.0.0.1:3000/api/v1/users';

const enterButton = ref(null);

const triggerButton = () => {
    if (enterButton.value) {
        enterButton.value.click();
    }
}

emptyFields.value = [];

const removeEmptyField = (fieldName) => {
    const index = emptyFields.value.indexOf(fieldName);
    if (index !== -1 && fieldName === 'email' && email.value.trim() !== '') {
        emptyFields.value.splice(index, 1);
    }
}
const forgotPassword = async () => {
    if (!email.value) {
        responseMessage.value = "Please fill in the required field";
        if (!email.value) emptyFields.value.push('email');
        return;
    }

    if (!email.value.includes('@')) {
        responseMessage.value = "Please enter a valid email address! '@'";
        emptyFields.value.push('email');
        return;
    }

    if (!email.value) {
        responseMessage.value = 'Email not found!';
        return;
    }
    try {
        processing.value = true;
        const response = await axios.post(`${baseUrl}/forgotPassword`, {
            email: email.value
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        responseMessage.value = 'OTP sent to your email. Please check your email!';
        console.log('Email sent', response.data);
        emailVerification.value = true;
    } catch (error) {
        if (error.response && error.response.status === 500) {
            responseMessage.value = "Too many attempts. Please try again after 1 hour.";
        } else if (error.response && error.response.status === 404) {
            responseMessage.value = 'There is no user with that email address';
        } else {
            responseMessage.value = "Something went wrong. Please try again later!";
        }
    } finally {
        processing.value = false;
    }
}



</script>


<style scoped></style>