<template>
    <footer class="bg-[#ffffff] relative">
        <div class="top-footer w-full">
            <div class="container mx-auto text-left pb-[5rem] pt-[15rem] 2xl:px-[5rem]">
                <div class="w-full 2xl:flex">
                    <div class="px-6">
                        <div class="w-full">
                            <img src="../../assets/images/footerLogo.svg" alt="">
                        </div>
                        <div class="text-[#000000] mt-[2rem] font-bold">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry'sstandard dummy text ever since the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div class="flex items-center space-x-4 py-6">
                            <div class="w-[50px] h-[50px] border-2 p-4 rounded-full shadow-xl">
                                <img src="../icons/facebook.svg" alt="">
                            </div>
                            <div class="w-[50px] h-[50px] border-2 p-4 rounded-full shadow-xl">
                                <img src="../icons/googlePlus.svg" alt="">
                            </div>
                            <div class="w-[50px] h-[50px] border-2 p-4 rounded-full shadow-xl">
                                <img src="../icons/twitter.svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 px-6 pb-6 2xl:block hidden">
                        <h1 class="text-[20px] text-black font-[Extra-Bold] pb-8">Quick Links</h1>
                        <ul class="text-[18px] text-[#444444]">
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#0000] font-[600]'"> About us</a></li>
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> Careers</a></li>
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> Contact us</a></li>
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> FAQs</a></li>
                        </ul>
                    </div>
                    <div class="w-1/2 px-6 pb-6 2xl:block hidden">
                        <h1 class="text-[20px] text-black font-[Extra-Bold] pb-8">Dispensaries In</h1>
                        <ul class="text-[18px] text-[#444444]">
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#0000] font-[600]'"> Los Angeles </a></li>
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> Seattle</a></li>
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> Portland</a></li>
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> San Francisco</a></li>
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> Toronto</a></li>
                            <li>><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> Detroit</a></li>
                        </ul>
                    </div>
                    <div class="w-[60%] px-6 2xl:block hidden">
                        <h1 class="text-[20px] text-black font-[Extra-Bold] pb-8">Privacy & Terms</h1>
                        <ul class="text-[18px] text-[#444444]">
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#0000] font-[600]'"> Los Angeles </a></li>
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> Terms of use</a></li>
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> Commercial Terms <br> <span class="text-transparent">></span>  Of Use</a></li>
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> Privacy policy</a></li>
                            <li class="pb-4">><a href="#"
                                    class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                    :active-class="'active-route text-[#ac69fc] font-[600]'"> Do not sell my personal  <span class="text-transparent">></span> information</a></li>
                        </ul>
                    </div>
                    <div class="flex pt-[5rem] justify-between 2xl:hidden">
                        <div class="w-full pb-6 md:block hidden">
                            <h1 class="text-[20px] text-black font-[Extra-Bold] pb-8">Quick Links</h1>
                            <ul class="text-[18px] text-[#444444]">
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#0000] font-[600]'"> About us</a></li>
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> Careers</a></li>
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> Contact us</a></li>
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> FAQs</a></li>
                            </ul>
                        </div>
                        <div class="w-full pb-6 md:block hidden">
                            <h1 class="text-[20px] text-black font-[Extra-Bold] pb-8">Dispensaries In</h1>
                            <ul class="text-[18px] text-[#444444]">
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#0000] font-[600]'"> Los Angeles </a></li>
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> Seattle</a></li>
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> Portland</a></li>
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> San Francisco</a></li>
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> Toronto</a></li>
                                <li>><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> Detroit</a></li>
                            </ul>
                        </div>
                        <div class="w-full md:hidden px-6">
                           <div class="flex justify-between">
                            <div class="w-full pb-6">
                                <h1 class="text-[20px] text-black font-[Extra-Bold] pb-8">Quick Links</h1>
                                <ul class="text-[18px] text-[#444444]">
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#0000] font-[600]'"> About us</a></li>
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> Careers</a></li>
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> Contact us</a></li>
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> FAQs</a></li>
                                </ul>
                            </div>
                            <div class="w-full pb-6">
                                <h1 class="text-[20px] text-black font-[Extra-Bold] pb-8">Dispensaries In</h1>
                                <ul class="text-[18px] text-[#444444]">
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#0000] font-[600]'"> Los Angeles </a></li>
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> Seattle</a></li>
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> Portland</a></li>
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> San Francisco</a></li>
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> Toronto</a></li>
                                    <li>><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> Detroit</a></li>
                                </ul>
                            </div>
                           </div>
                            <div class="w-full">
                                <h1 class="text-[20px] text-black font-[Extra-Bold] pb-8">Privacy & Terms</h1>
                                <ul class="text-[18px] text-[#444444]">
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#0000] font-[600]'"> Los Angeles </a></li>
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> Terms of use</a></li>
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> Commercial Terms <br> <span class="text-transparent">></span>  Of Use</a></li>
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> Privacy policy</a></li>
                                    <li class="pb-4">><a href="#"
                                            class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                            :active-class="'active-route text-[#ac69fc] font-[600]'"> Do not sell my personal <br> <span class="text-transparent">></span> information</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full md:block hidden">
                            <h1 class="text-[20px] text-black font-[Extra-Bold] pb-8">Privacy & Terms</h1>
                            <ul class="text-[18px] text-[#444444]">
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#0000] font-[600]'"> Los Angeles </a></li>
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> Terms of use</a></li>
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> Commercial Terms <br> <span class="text-transparent">></span>  Of Use</a></li>
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> Privacy policy</a></li>
                                <li class="pb-4">><a href="#"
                                        class="active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                        :active-class="'active-route text-[#ac69fc] font-[600]'"> Do not sell my personal <br> <span class="text-transparent">></span> information</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="middle-footer container mx-auto lg:flex justify-between items-center xl:space-x-20 py-10 2xl:px-[5rem] px-6">
            <div class="flex items-center space-x-4 pb-6">
                <div>
                    <img src="../icons/airpaper.svg" alt="">
                </div>
                <div>
                    <h1 class="text-2xl font-[Extra-Bold]">Stay in Touch</h1>
                    <p class="text-[#505050]">Receive updates on new products, special offers, 
                        and industry news</p>
                </div>
            </div>
          <div class="w-full sm:block hidden">
            <div class="w-full flex items-center space-x-4">
                <div class="w-full flex justify-end">
                    <input class="xl:w-[80%] w-full border-2 border-[#c1c1c1] p-4 px-10 rounded-full" type="email" placeholder="Enter You Email">
                </div>
                <div>
                    <button class="bg-[#61c1b4] border-2 border-[#61c1b4] p-4 px-10 rounded-full text-white font-[Extra-Bold] text-xl">Subscribe</button>
                </div>
            </div>
          </div>
          <div class="w-full sm:hidden">
            <div class="w-full flex items-center space-x-4 relative">
                <div class="w-full flex justify-end">
                    <input class="xl:w-[80%] w-full border-2 border-[#c1c1c1] p-4 px-10 rounded-xl" type="email" placeholder="Enter You Email">
                </div>
                <div class="absolute right-0">
                    <button class="bg-[#61c1b4] border-2 border-[#61c1b4] p-4 rounded-xl text-white font-[Extra-Bold] sm:text-xl">Subscribe</button>
                </div>
            </div>
          </div>
          
        </div>
        <div class="buttom-footer w-full py-16 lg:block hidden">
           <div class="container mx-auto flex justify-between items-center 2xl:px-[5rem] px-6">
            <div class="">
                Copyright <span class="font-[Extra-Bold]">© 2024 - Where’s My Plug </span>. All rights reserved.
            </div>
            <div>
                <a href="#">Terms and Conditions</a> | <a href="#"> Privacy Policy</a>
            </div>
           </div>
        </div>
        <div class="buttom-footer w-full py-16 lg:hidden">
           <div class="container mx-auto text-center 2xl:px-[5rem] px-6">
            <div class="pb-4">
                Copyright <span class="font-[Extra-Bold]">© 2024 - Where’s My Plug </span>. <br> All rights reserved.
            </div>
            <div>
                <a href="#">Terms and Conditions</a> | <a href="#"> Privacy Policy</a>
            </div>
           </div>
        </div>
       <div class="container mx-auto h-full] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="flex justify-center items-center space-x-3">
            <div>
                <img src="../icons/instagram.svg" alt="">
            </div>
            <div class="sm:text-[36px] text-[20px] mt-2">
                <span class="text-black font-[Bold]">Follow</span> <span class="text-[#61c1b4] font-[Bold]">@Where’sMyPlug</span>
            </div>
        </div>
        <div class="w-full">
            <FooterCarousel />
        </div>
       </div>
    </footer>
</template>

<script setup>
import FooterCarousel from './UI/FooterCarousel.vue';
</script>

<style scoped>
.top-footer, .buttom-footer {
    background-image: url('../../assets/images/bgs/FooterBg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}</style>