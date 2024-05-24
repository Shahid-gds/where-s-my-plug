<template>
    <section class="h-screen">
        <div class="2xl:pt-[4rem] pt-[2rem] text-center container mx-auto 2xl:px-[15rem] xl:px-[10rem] lg:px-[5rem] px-6 pb-5">
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
                                placeholder="Enter your Full Name" v-model="fname">
                        </div>
                    </div>
                    <div class="pb-8 w-full">
                        <div class="pb-1">
                            <label for="">Email Address</label>
                        </div>
                        <div>
                            <input type="email" class="border-2 w-full p-4 px-4 rounded-xl shadow-xl"
                                placeholder="Email Address" v-model="email">
                        </div>
                    </div>
                </div>
                <div class="lg:flex lg:space-x-4">
                    <div class="pb-8 w-full">
                        <div class="pb-1">
                            <label for="">Password</label>
                        </div>
                        <div>
                            <input type="text" class="border-2 w-full p-4 px-4 rounded-xl shadow-xl"
                                placeholder="Enter Password" v-model="password">
                        </div>
                    </div>
                    <div class="pb-8 w-full">
                        <div class="pb-1">
                            <label for="">Confirm Password</label>
                        </div>
                        <div>
                            <input type="text" class="border-2 w-full p-4 px-4 rounded-xl shadow-xl"
                                placeholder="Confirm Password" v-model="passwordConfirm">
                        </div>
                    </div>
                </div>
                <div class="sm:flex sm:space-x-6">
                    <div class="checkbox-wrapper-45 pb-8 flex items-center space-x-2 w-full">
                        <div>
                            <input id="cbx-45" type="checkbox" checked/>
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
                </div>
                <div class="w-full flex justify-center sm:pb-8 pb-4">
                    <button class="hover-btn bg-[#61C1B4] w-1/2 p-4 rounded-full text-white text-xl">Create Account</button>
                </div>
                <div class="text-center text-[#818181] pb-8">
                    <p>By using Where's My Plug, I agree to the <br>
                        <a href="/terms-of-use" target="_blank" class="font-[Bold] text-[#3D3D3D] underline">Terms of Use</a>
                        and
                        <a href="/privacy-policy" target="_blank" class="font-[Bold] text-[#3D3D3D] underline">Privacy Policy.</a>
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

const fname = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');

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