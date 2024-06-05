<template>
  <section class="h-screen relative">
    <router-link :to="{ name: 'Home' }"
      class="bg-[#707070] p-4 rounded-2xl absolute left-4 top-4 font-[Extra-Bold] text-white hover:text-[#f3e7e7] hover:bg-[#ada7a7] duration-300 transition-all">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
      </svg>
    </router-link>
    <div class="2xl:pt-[4rem] pt-[2rem] text-center container mx-auto 2xl:px-[30rem] xl:px-[20rem] lg:px-[10rem] px-6">
      <div class="flex justify-center sm:pb-6">
        <img src="@/assets/images/footerLogo.svg" alt="">
      </div>
      <div class="font-extrabold sm:leading-[2.5rem]">
        <span class="text-[#010101]  md:text-[40px] text-[30px] font-[Jost-ExtraBold] uppercase">Sign-</span><span
          class="text-[#61c1b4]  md:text-[40px] text-[30px] font-[Jost-SemiBold] uppercase">In</span>
        <h1 class="md:text-[20px]  text-[18px] font-[Jost-ExtraBold]">Welcome Back! To Where's My
          Plug</h1>
      </div>
      <div class="text-left pt-6">
        <div class="pb-8">
          <div class="pb-1">
            <label for="">Email or Username</label>
          </div>
          <div>
            <input v-model="email" type="email" class="border-2 outline-none w-full p-4 px-4 rounded-xl shadow-xl"
              :class="{ 'border-red-500': emptyFields.includes('email') }" placeholder="Email or Username" required
              @input="removeEmptyField('email')" @keypress.enter="triggerEnter">
          </div>
        </div>
        <div class="pb-8 relative">
          <div class="pb-1">
            <label for="">Password</label>
          </div>
          <div>
            <input class="border-2 w-full p-4 px-4 rounded-xl shadow-xl outline-none"
              :class="{ 'border-red-500': emptyFields.includes('password') }" placeholder="Enter Password"
              :type="passwordVisible ? 'text' : 'password'" v-model="password" required
              @input="removeEmptyField('password')" @keypress.enter="triggerEnter">
          </div>
          <div class="absolute right-4 top-8 mt-4 mr-2 cursor-pointer" @click="togglePasswordVisibility">
            <svg v-if="passwordVisible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              width="25" height="20" viewBox="0 0 25 16.093">
              <defs>
                <clipPath id="clip-path">
                  <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#818181" />
                </clipPath>
              </defs>
              <g id="Group_60" data-name="Group 60" transform="translate(0 0)">
                <g id="Group_59" data-name="Group 59" transform="translate(0 0)" clip-path="url(#clip-path)">
                  <path id="Path_185" data-name="Path 185"
                    d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                    transform="translate(-147.939 -70.217)" fill="#818181" />
                  <path id="Path_186" data-name="Path 186"
                    d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                    transform="translate(0)" fill="#818181" />
                </g>
              </g>
            </svg>
            <svg v-if="!passwordVisible" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              width="25" height="19.509" viewBox="0 0 25 19.509">
              <defs>
                <clipPath id="clip-path">
                  <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093" fill="#818181" />
                </clipPath>
              </defs>
              <g id="Group_1719" data-name="Group 1719" transform="translate(-451.156 -19.661)">
                <g id="Group_60" data-name="Group 60" transform="translate(451.156 21.804)">
                  <g id="Group_59" data-name="Group 59" transform="translate(0 0)" clip-path="url(#clip-path)">
                    <path id="Path_185" data-name="Path 185"
                      d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                      transform="translate(-147.939 -70.217)" fill="#818181" />
                    <path id="Path_186" data-name="Path 186"
                      d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                      transform="translate(0)" fill="#818181" />
                  </g>
                </g>
                <path id="Path_14789" data-name="Path 14789" d="M3.71,2.673,22.259,20.749"
                  transform="translate(450.5 17.705)" fill="none" stroke="#818181" stroke-width="2" />
              </g>
            </svg>
          </div>
        </div>
        <div class="checkbox-wrapper-45 pb-8 flex items-center space-x-2">
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
          <div><label for="cbx-45">Remember Me. <span class="text-[#818181]">I confirm this is not a shared
                device.</span></label></div>
        </div>
        <div class="w-full">
          <button ref="triggerEnterButton" @click.prevent="login" :disabled="processing"
            class="hover-btn bg-[#61C1B4] w-full p-4 rounded-full text-white text-xl">
            {{ processing ? 'Please Wait...' :  'Sign-In' }}
          </button>
        </div>
        <div class="h-8 mt-2">
          <p class="text-lg text-red-500 text-center" v-if="responseMessage.includes('OTP not verified')">{{ responseMessage }} 
            <router-link :to="{ name: 'ForgetPassword' }" class="underline">Verify OTP!</router-link>
          </p>
          <p class="text-lg text-red-500 text-center" v-if="!responseMessage.includes('OTP not verified')">{{ responseMessage }}</p>
        </div>
        <div class="text-center underline pb-8">
          <router-link :to="{ name: 'ForgetPassword' }" class="font-[Bold]">Forgot Password?</router-link>
        </div>

        <div class="text-center">
          <span class="text-[#818181]">New to Where's My Plug? <router-link to="/sign-up"
              class="text-[#61C1B4] uppercase">create an account</router-link></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const passwordVisible = ref(false);
const emptyFields = ref([]);
const responseMessage = ref('');
const processing = ref(false);
const router = useRouter();

const baseUrl = 'http://127.0.0.1:3000/api/v1/users';
const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value
}

const triggerEnterButton = ref(null);

const triggerEnter = () => {
  if (triggerEnterButton.value) {
    triggerEnterButton.value.click();
  }
}

emptyFields.value = [];

const removeEmptyField = (fieldName) => {
  const index = emptyFields.value.indexOf(fieldName);

  if (index !== -1 && fieldName === 'email' && email.value.trim() !== '') {
    emptyFields.value.splice(index, 1);
  }
  else if (index !== -1 && fieldName === 'password' && password.value.trim() !== '') {
    emptyFields.value.splice(index, 1);
  }
}

const login = async () => {
  if (!email.value || !password.value) {
    responseMessage.value = "Please fill in the required fields!";
    if (!email.value) emptyFields.value.push('email');
    if (!password.value) emptyFields.value.push('password');
    return
  }
  if (!email.value.includes('@')) {
    responseMessage.value = "Please enter a valid email address!";
    emptyFields.value.push('email');
    return;
  }

  try {
    processing.value = true;
    const response = await axios.post(`${baseUrl}/login`, {
      email: email.value,
      password: password.value,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    responseMessage.value = 'User Logged in successfully!'
    console.log('User Logged successfully:', response.data);
    localStorage.setItem('userEmail:', email.value)
    router.replace('/')
  } catch (error) {
    if (error.response && error.response.status === 401) {
      responseMessage.value = 'Incorrect Email or Password'; 
    } else if (error.response && error.response.status === 403) {
      responseMessage.value = 'OTP not verified, click here for';
    }
    else {
      responseMessage.value = 'Something went wrong. Please try again later !';
    }
  }finally {
        processing.value = false;
    }
}
const responseMessageTimeout = ref(null);

watch(responseMessage, (newValue) => {
  clearTimeout(responseMessageTimeout.value);
  responseMessageTimeout.value = setTimeout(() => {
    responseMessage.value = '';
  }, 9000);
});
onUnmounted(() => {
  clearTimeout(responseMessageTimeout.value);
});
</script>


<style scoped>
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