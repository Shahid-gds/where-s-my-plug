<template>
    <section class="">
      <div class="sm:pt-[15rem] pt-[10rem] relative sm:pb-[5rem] text-center container mx-auto px-6">
        <div class="font-extrabold sm:leading-[2.5rem]">
          <span class="text-[#010101]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-ExtraBold]">Learn</span><span class="text-[#61c1b4]  md:text-[70px] sm:text-[50px] text-[30px] font-[Jost-SemiBold] relative"> Resources</span>
          <h1 class="md:text-[36px] sm:text-[25px] text-[18px] font-[Jost-ExtraBold]">Your Trusted Educational Resource</h1>
          <p>Working with a global network of wellbeing enthusiasts and health experts</p>
        </div>
        <div class="flex justify-center items-center sm:space-x-4 sm:mt-[2rem]">
            <div>
              <img src="../components/icons/oilDrop.svg" alt="">
            </div>
            <div class="font-[Semi-Bold] mt-[1.5rem] sm:text-2xl">
              1000MG, Whole Plant Hemp Extract.
            </div>
          </div>
       <div class="sm:block hidden">
        <div class="w-full flex justify-center mt-[2.5rem] absolute">
          <div class="relative xl:w-1/2 w-full">
            <div class="relative">
                <input class="border-2 shadow-xl w-full p-6 px-6 rounded-2xl" type="text" placeholder="What would you like to learn about?">
            </div>
            <div class="flex items-center justify-center space-x-3 bg-[#61c1b4] w-[5rem] p-4 absolute top-1.5 right-1.5 rounded-2xl cursor-pointer">
              <div>
                <img src="../components/icons/searchIcon.svg" alt="">
              </div>
            </div>
          </div>
        </div>
       </div>
       <div class="sm:hidden">
        <div class="w-full flex justify-center mt-[2rem]">
          <div class="w-full flex">
            <input class="border-l-2 border-t-2 border-b-2 shadow-xl w-full p-6 rounded-l-2xl" type="text" placeholder="What would you like to learn about?">
            <div class="flex items-center justify-center space-x-3 bg-[#61c1b4] w-[10rem] p-4 rounded-r-xl cursor-pointer">
              <div class="font-[jost-SemiBold] text-xl text-white uppercase">Find</div>
              <div class="w-full">
                <img src="../components/icons/searchIcon.svg" alt="">
              </div>
            </div>
          </div>
        </div>
       </div>
      
      </div>
    </section>
  </template>
  <script setup>

  </script>