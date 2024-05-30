<template>
    <section class="h-screen">
        <div
            class=" 2xl:pt-[4rem] pt-[2rem] text-center container mx-auto 2xl:px-[15rem] xl:px-[10rem] lg:px-[5rem] px-6 pb-5">
            <div class="flex justify-center sm:pb-6">
                <img src="@/assets/images/footerLogo.svg" alt="">
            </div>
            <div class="font-extrabold sm:leading-[2.5rem]">
                <span
                    class="text-[#010101]  md:text-[40px] text-[30px] font-[Jost-ExtraBold] uppercase">Sign-</span><span
                    class="text-[#61c1b4]  md:text-[40px] text-[30px] font-[Jost-SemiBold] uppercase">Up</span>
                <h1 class="md:text-[20px]  text-[18px] font-[Jost-ExtraBold]">Create An Account</h1>
            </div>
            <div class="text-left sm:pt-6">
                <div class="lg:flex lg:space-x-4">
                    <div class="pb-8 w-full">
                        <div class="pb-1">
                            <label for="">Full Name</label>
                        </div>
                        <div>
                            <input type="text" class="border-2 w-full p-4 px-4 rounded-xl shadow-xl"
                                :class="{ 'border-red-500': emptyFields.includes('fname') }"
                                placeholder="Enter your Full Name" v-model="fname" required>
                        </div>
                    </div>
                    <div class="pb-8 w-full">
                        <div class="pb-1">
                            <label for="">Email Address</label>
                        </div>
                        <div>
                            <input type="email" class="border-2 w-full p-4 px-4 rounded-xl shadow-xl"
                                :class="{ 'border-red-500': emptyFields.includes('email') }" placeholder="Email Address"
                                v-model="email" required>
                        </div>
                    </div>
                </div>
                <div class="lg:flex lg:space-x-4">
                    <div class="pb-8 w-full relative">
                        <div class="pb-1">
                            <label for="">Password</label>
                        </div>
                        <div>
                            <input class="border-2 w-full p-4 px-4 rounded-xl shadow-xl"
                                :class="{ 'border-red-500': emptyFields.includes('password') }"
                                placeholder="Enter Password" :type="passwordVisible ? 'text' : 'password'"
                                v-model="password" required>
                        </div>
                        <div class="absolute right-4 top-8 mt-4 mr-2 cursor-pointer" @click="togglePasswordVisibility">
                            <svg v-if="passwordVisible" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="20"
                                viewBox="0 0 25 16.093">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093"
                                            fill="#818181" />
                                    </clipPath>
                                </defs>
                                <g id="Group_60" data-name="Group 60" transform="translate(0 0)">
                                    <g id="Group_59" data-name="Group 59" transform="translate(0 0)"
                                        clip-path="url(#clip-path)">
                                        <path id="Path_185" data-name="Path 185"
                                            d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                                            transform="translate(-147.939 -70.217)" fill="#818181" />
                                        <path id="Path_186" data-name="Path 186"
                                            d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                                            transform="translate(0)" fill="#818181" />
                                    </g>
                                </g>
                            </svg>
                            <svg v-if="!passwordVisible" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="19.509"
                                viewBox="0 0 25 19.509">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093"
                                            fill="#818181" />
                                    </clipPath>
                                </defs>
                                <g id="Group_1719" data-name="Group 1719" transform="translate(-451.156 -19.661)">
                                    <g id="Group_60" data-name="Group 60" transform="translate(451.156 21.804)">
                                        <g id="Group_59" data-name="Group 59" transform="translate(0 0)"
                                            clip-path="url(#clip-path)">
                                            <path id="Path_185" data-name="Path 185"
                                                d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                                                transform="translate(-147.939 -70.217)" fill="#818181" />
                                            <path id="Path_186" data-name="Path 186"
                                                d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                                                transform="translate(0)" fill="#818181" />
                                        </g>
                                    </g>
                                    <path id="Path_14789" data-name="Path 14789" d="M3.71,2.673,22.259,20.749"
                                        transform="translate(450.5 17.705)" fill="none" stroke="#818181"
                                        stroke-width="2" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div class="pb-8 w-full relative">
                        <div class="pb-1">
                            <label for="">Confirm Password</label>
                        </div>
                        <div>
                            <input :type="passwordConfirmVisible ? 'text' : 'password'"
                                class="border-2 w-full p-4 px-4 rounded-xl shadow-xl"
                                :class="{ 'border-red-500': emptyFields.includes('passwordConfirm') }"
                                placeholder="Confirm Password" v-model="passwordConfirm" required>
                        </div>
                        <div class="absolute right-4 top-8 mt-4 mr-2 cursor-pointer"
                            @click="togglePasswordConfirmVisibility">
                            <svg v-if="passwordConfirmVisible" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="20"
                                viewBox="0 0 25 16.093">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093"
                                            fill="#818181" />
                                    </clipPath>
                                </defs>
                                <g id="Group_60" data-name="Group 60" transform="translate(0 0)">
                                    <g id="Group_59" data-name="Group 59" transform="translate(0 0)"
                                        clip-path="url(#clip-path)">
                                        <path id="Path_185" data-name="Path 185"
                                            d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                                            transform="translate(-147.939 -70.217)" fill="#818181" />
                                        <path id="Path_186" data-name="Path 186"
                                            d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                                            transform="translate(0)" fill="#818181" />
                                    </g>
                                </g>
                            </svg>
                            <svg v-if="!passwordConfirmVisible" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="19.509"
                                viewBox="0 0 25 19.509">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Rectangle_119" data-name="Rectangle 119" width="25" height="16.093"
                                            fill="#818181" />
                                    </clipPath>
                                </defs>
                                <g id="Group_1719" data-name="Group 1719" transform="translate(-451.156 -19.661)">
                                    <g id="Group_60" data-name="Group 60" transform="translate(451.156 21.804)">
                                        <g id="Group_59" data-name="Group 59" transform="translate(0 0)"
                                            clip-path="url(#clip-path)">
                                            <path id="Path_185" data-name="Path 185"
                                                d="M160.439,74.24a4.023,4.023,0,1,0,4.023,4.023,4.026,4.026,0,0,0-4.023-4.023m-.305,2.83a.924.924,0,0,0-.916.916h-1.332a2.274,2.274,0,0,1,2.248-2.248Z"
                                                transform="translate(-147.939 -70.217)" fill="#818181" />
                                            <path id="Path_186" data-name="Path 186"
                                                d="M24.709,7.214C23.349,5.522,18.494,0,12.5,0S1.651,5.522.291,7.214a1.335,1.335,0,0,0,0,1.665c1.36,1.693,6.215,7.214,12.209,7.214s10.849-5.522,12.209-7.214a1.335,1.335,0,0,0,0-1.665M12.5,13.874a5.827,5.827,0,1,1,5.827-5.827A5.826,5.826,0,0,1,12.5,13.874"
                                                transform="translate(0)" fill="#818181" />
                                        </g>
                                    </g>
                                    <path id="Path_14789" data-name="Path 14789" d="M3.71,2.673,22.259,20.749"
                                        transform="translate(450.5 17.705)" fill="none" stroke="#818181"
                                        stroke-width="2" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="sm:flex sm:space-x-6 relative">
                    <div :class="{ 'border-red-500': emptyFields.includes('checkbox') }"
                        class="checkbox-wrapper-45 pb-8 flex items-center space-x-2 w-full">
                        <div>
                            <input v-model="chckboxChecked" id="cbx-45" type="checkbox" />
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
                        <div class="leading-4">
                            <label for="cbx-45"><span class="text-[#818181] text-[14px]">I affirm that I am <br>
                                    21 years of age or older</span></label>
                        </div>
                    </div>

                    <div class="checkbox-wrapper-45 pb-8 flex items-center space-x-2 w-full">
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
                        <div class="leading-4">
                            <label for="cbx-46">
                                <span class="text-[#818181] text-[14px]">
                                    I’d like to receive exclusive <br>
                                    deals, promotions, and news
                                </span>
                            </label>
                        </div>
                    </div>
                    <div v-if="!chckboxChecked" class="absolute text-lg w-full top-10 right-0 text-center text-red-500">
                        {{ responseMessageCheck }}
                    </div>
                </div>

                <div class="w-full flex justify-center sm:pb-8 pb-4">
                    <button @click.prevent="signup" v-if="processing"
                        class="hover-btn bg-[#61C1B4] w-1/2 p-4 rounded-full text-white text-xl">Create
                        Account</button>
                    <div class="bg-[#61C1B4] w-1/2 p-4 rounded-full text-white text-xl text-center" v-if="!processing">
                        Please Wait...</div>
                </div>
                <div class="text-center text-[#818181] pb-8">
                    <p>By using Where's My Plug, I agree to the <br>
                        <a href="/terms-of-use" target="_blank" class="font-[Bold] text-[#3D3D3D] underline">Terms of
                            Use</a>
                        and
                        <a href="/privacy-policy" target="_blank" class="font-[Bold] text-[#3D3D3D] underline">Privacy
                            Policy.</a>
                    </p>
                </div>
                <div class="text-center text-[#818181] pb-8">
                    <p>Where's My Plug will never post without your permission.</p>
                </div>
                <div class="text-center">
                    <span class="text-[#818181]">Already have an account?<router-link to="/sign-in"
                            class="text-[#61C1B4] uppercase"> sign in</router-link></span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const fname = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const passwordVisible = ref(false)
const passwordConfirmVisible = ref(false)
const processing = ref(false)
const emptyFields = ref([])
const responseMessage = ref('')
const chckboxChecked = ref(true)
const responseMessageCheck = ref('')

const baseUrl = 'http://127.0.0.1:3000/api/v1/users'
const togglePasswordVisibility = () => {
    passwordVisible.value = !passwordVisible.value
}
const togglePasswordConfirmVisibility = () => {
    passwordConfirmVisible.value = !passwordConfirmVisible.value
}

processing.value = true
emptyFields.value = []

const signup = async () => {
    if (!fname.value || !email.value || !password.value || !passwordConfirm.value) {
        responseMessage.value = "Please fill in the required fields!";
        if (!fname.value) emptyFields.value.push('fname');
        if (!email.value) emptyFields.value.push('email');
        if (!password.value) emptyFields.value.push('password');
        if (!passwordConfirm.value) emptyFields.value.push('passwordConfirm');
        return
    }
    if (!chckboxChecked.value) {
        responseMessageCheck.value = 'You must affirm that you are 21 years of age or older.'
        emptyFields.value.push('checkbox')
        return
    }

    try {
        const response = await axios.post(`${baseUrl}/signup`, {
            fname: fname.value,
            email: email.value,
            password: password.value,
            passwordConfirm: passwordConfirm.value,
            chckboxChecked: chckboxChecked.value
        });
        console.log('User Signed Up successfully:', response.data)
    } catch (error){
        console.error('Error signing up', error.response.data)
    }

}

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
    perspective: 25;
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
    width: 25px;
    height: 25px;
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
    width: 25px;
    height: 25px;
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
    line-height: 25px;
    box-shadow: 0 0 0 1px #61C1B4;
}

.checkbox-wrapper-45 .back svg {
    margin-top: 5px;
    margin-left: 4px;
    fill: none;
}

.checkbox-wrapper-45 .back svg path {
    stroke: #fff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
}
</style>