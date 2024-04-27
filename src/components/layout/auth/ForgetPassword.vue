<template>
    <section class="h-screen relative sm:pt-0 pt-[12rem]">
        <router-link :to="{ name: 'Sign-In' }"
            class="bg-[#707070] p-4 rounded-2xl absolute left-4 top-4 font-[Extra-Bold] text-white hover:text-[#f3e7e7] hover:bg-[#ada7a7] duration-300 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
        </router-link>
        <div
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
                        <input type="text" class="border-2 w-full p-4 px-4 rounded-xl shadow-xl"
                            placeholder="Email Address">
                    </div>
                </div>
                <div class="w-full pb-8">
                    <button class="hover-btn bg-[#61C1B4] w-full p-4 rounded-full text-white text-xl">Reset
                        Password</button>
                </div>
                <div class="text-center">
                    <span class="text-[#818181]">By using Where's My Plug, I agree to the <br> <a
                            href="/terms-of-use" target="_blank" class="text-[black] underline">Terms of Use</a> and
                        <a href="/privacy-policy" target="_blank" class="text-[black] underline">Privacy Policy</a>.</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>


<style scoped></style>