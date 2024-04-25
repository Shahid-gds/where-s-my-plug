<template>
    <section class="h-screen">
        <div class="2xl:pt-[4rem] pt-[2rem] text-center container mx-auto 2xl:px-[30rem] xl:px-[20rem] lg:px-[10rem] px-6">
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
                <div class="pb-8">
                    <div class="pb-1">
                        <label for="">Email Address</label>
                    </div>
                    <div>
                        <input type="text" class="border-2 w-full p-4 px-4 rounded-xl shadow-xl"
                            placeholder="Email Address">
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
                <div class="w-full sm:pb-8 pb-4">
                    <button class="hover-btn bg-[#61C1B4] w-full p-4 rounded-full text-white text-xl">Create Account</button>
                </div>
                <div class="text-center text-[#818181] pb-8">
                    <p>By using Where's My Plug, I agree to the <br>
                        <a href="/terms-of-use" target="_blank" class="font-[Bold] text-[#3D3D3D] underline">Terms of Use</a>
                        and
                        <a href="/privacy-policy" target="_blank" class="font-[Bold] text-[#3D3D3D] underline">Privacy Policy.</a>
                    </p>
                </div>
                <div class="sm:flex items-center sm:space-x-4 sm:pb-8 pb-4">
                    <div class="w-full pb-2">
                      <button class="flex justify-center items-center px-10 space-x-2 border-2 p-3 border-[#28B446] rounded-full w-full">
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
                    </div>
                  <div class="w-full pb-2">
                    <button class="flex justify-center items-center px-6 space-x-2 border-2 p-3 border-[#3D6AD6] rounded-full w-full">
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