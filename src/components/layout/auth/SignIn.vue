<template>
    <section class="h-screen relative">
        <router-link :to="{name: 'Home'}" class="bg-[#707070] p-4 rounded-2xl absolute left-4 top-4 font-[Extra-Bold] text-white hover:text-[#f3e7e7] hover:bg-[#ada7a7] duration-300 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>              
        </router-link>
        <div class="2xl:pt-[4rem] pt-[2rem] text-center container mx-auto 2xl:px-[30rem] xl:px-[20rem] lg:px-[10rem] px-6">
            <div class="flex justify-center sm:pb-6">
                <img src="@/assets/images/footerLogo.svg" alt="">
            </div>
            <div class="font-extrabold sm:leading-[2.5rem]">
                <span
                    class="text-[#010101]  md:text-[40px] text-[30px] font-[Jost-ExtraBold] uppercase">Sign-</span><span
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
                        <input type="text" class="border-2 w-full p-4 px-4 rounded-xl shadow-xl"
                            placeholder="Email or Username">
                    </div>
                </div>
                <div class="pb-8">
                    <div class="pb-1">
                        <label for="">Password</label>
                    </div>
                    <div>
                        <input type="text" class="border-2 w-full p-4 px-4 rounded-xl shadow-xl" placeholder="Password">
                    </div>
                </div>
                <div class="checkbox-wrapper-45 pb-8 flex items-center space-x-2">
                    <div>
                        <input id="cbx-45" type="checkbox"/>
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
                    <div><label for="cbx-45">Remember Me. <span class="text-[#818181]">I confirm this is not a shared device.</span></label></div>
                  </div>
                <div class="w-full pb-8">
                    <button class="hover-btn bg-[#61C1B4] w-full p-4 rounded-full text-white text-xl">Sign-In</button>
                </div>
                <div class="text-center underline pb-8">
                    <router-link :to="{name: 'ForgetPassword'}" class="font-[Bold]">Forgot Password?</router-link>
                </div>
               
                <div class="text-center">
                    <span class="text-[#818181]">New to Where's My Plug? <router-link to="/sign-up" class="text-[#61C1B4] uppercase">create an account</router-link></span>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

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
  .checkbox-wrapper-45 input[type="checkbox"]:checked + .cbx {
    border-color: #61C1B4;
  }
  .checkbox-wrapper-45 input[type="checkbox"]:checked + .cbx .flip {
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