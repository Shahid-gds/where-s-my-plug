<template>
    <section class="h-screen relative">
        <router-link :to="{name: 'Home'}" class="bg-[#707070] p-4 rounded-2xl absolute left-4 top-4 font-[Extra-Bold] text-white hover:text-[#f3e7e7] hover:bg-[#ada7a7] duration-300 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>              
        </router-link>
        <div class="pt-[4rem] text-center container mx-auto pb-[6rem] md:px-[30rem] px-6">
            <div class="flex justify-center pb-6">
                <img src="../../../assets/images/FooterLogo.svg" alt="">
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
                    <button class="bg-[#61C1B4] w-full p-4 rounded-full text-white text-xl">Sign-In</button>
                </div>
                <div class="text-center underline pb-8">
                    <a href="#" class="font-[Bold]">Forgot Password?</a>
                </div>
                <div class="flex items-center space-x-4 pb-8">
                    <button class="flex items-center px-12 space-x-2 border-2 p-3 border-[#28B446] rounded-full w-full">
                        <div><svg id="search" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 32 32">
                                <path id="Path_7282" data-name="Path 7282"
                                    d="M7.092,148.964l-1.114,4.158-4.071.086a16.028,16.028,0,0,1-.118-14.941h0l3.625.665L7,142.535a9.549,9.549,0,0,0,.09,6.429Z"
                                    transform="translate(0 -129.626)" fill="#fbbb00" />
                                <path id="Path_7283" data-name="Path 7283"
                                    d="M277,208.176a15.994,15.994,0,0,1-5.7,15.466h0l-4.565-.233-.646-4.033a9.536,9.536,0,0,0,4.1-4.869h-8.556v-6.33H277Z"
                                    transform="translate(-245.276 -195.165)" fill="#518ef8" />
                                <path id="Path_7284" data-name="Path 7284"
                                    d="M54.618,318.547h0a16.005,16.005,0,0,1-24.11-4.895l5.185-4.244a9.516,9.516,0,0,0,13.713,4.872Z"
                                    transform="translate(-28.602 -290.071)" fill="#28b446" />
                                <path id="Path_7285" data-name="Path 7285"
                                    d="M53.048,3.684,47.864,7.927a9.515,9.515,0,0,0-14.027,4.982L28.625,8.642h0A16,16,0,0,1,53.048,3.684Z"
                                    transform="translate(-26.835)" fill="#f14336" />
                            </svg>
                        </div>
                        <div class="mt-1 text-[#28B446]">Sign In With Google</div>
                    </button>
                    <button class="flex items-center px-6 space-x-2 border-2 p-3 border-[#3D6AD6] rounded-full w-full">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15.584" height="28.825"
                                viewBox="0 0 15.584 28.825">
                                <g id="_x30_1._Facebook" transform="translate(-28.374 -9.999)">
                                    <path id="Icon_11_"
                                        d="M32.721,26.273H29.139c-.564,0-.765-.2-.765-.77q0-2.185,0-4.37c0-.56.213-.774.769-.774h3.576c0-.1,0-2.2,0-3.171A7.908,7.908,0,0,1,33.7,13.13a5.973,5.973,0,0,1,3.218-2.673A7.954,7.954,0,0,1,39.679,10q1.772,0,3.544,0c.508,0,.733.225.734.736q0,2.055,0,4.11c0,.517-.217.724-.736.73-.968.01-1.937,0-2.9.043a1.316,1.316,0,0,0-1.491,1.488c-.023,1.069-.01,2.14-.01,3.248h4.171c.59,0,.792.2.792.8q0,2.173,0,4.347c0,.585-.19.771-.784.772H38.8V38c0,.625-.2.824-.814.824H33.479c-.545,0-.758-.212-.758-.757,0-3.819,0-11.66,0-11.794Z"
                                        fill="#3d6ad6" />
                                </g>
                                </svg>
                        </div>
                        <div class="mt-1 text-[#3D6AD6]">Continue with Facebook</div>
                    </button>
                </div>
                <div class="text-center">
                    <span class="text-[#818181]">New to Where's My Plug? <a href="/sign-up" class="text-[#61C1B4] uppercase">create an account</a></span>
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