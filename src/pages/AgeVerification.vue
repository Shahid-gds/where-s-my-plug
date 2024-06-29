<template>
    <div v-if="showModal" class="">
      <div
        class="bg-covers bg-center bg-[url('@/assets/images/bgs/HomeHeroSectionBg.svg')] w-full h-screen flex items-center justify-center">
        <div class="sm:w-[40%] container mx-auto px-6">
          <div class="flex justify-center sm:pb-6">
            <img class="w-[30%]" src="@/assets/images/footerLogo.svg" alt="">
          </div>
          <div class="font-extrabold sm:leading-[2.5rem] text-center">
            <span class="text-[#010101] md:text-[40px] text-[30px] font-[Jost-ExtraBold] uppercase">Are you at
            </span><span class="text-[#61c1b4]  md:text-[40px] text-[30px] font-[Jost-SemiBold] uppercase">least
              21?</span>
            <h1 class="md:text-[20px]  text-[18px] font-[Jost-ExtraBold]">You must be 21 years old to access this site.
            </h1>
          </div>
          <div class="mb-4 pt-6">
            <div class="checkbox-wrapper-45 pb-8 flex justify-center items-center space-x-2">
              <div>
                <input id="cbx-45" type="checkbox" v-model="isChecked" />
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
              <div><label for="cbx-45"><span class="text-[#818181]">Yes, I am at least 21 years of age or am otherwise a
                    qualified patient.</span></label></div>
            </div>
          </div>
          <div class="flex justify-center">
            <button @click="confirmAge" :disabled="!isChecked"
              class="btn hover-btn bg-[#61C1B4] w-1/2 p-4 rounded-full text-white text-xl">Enter Site</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const showModal = ref(true);
  const isChecked = ref(false);
  
  const confirmAge = () => {
    if (isChecked.value) {
      localStorage.setItem('ageVerified', 'true');
      showModal.value = false;
      router.push({ name: 'Home' })
    }
  };
  </script>
  
  <style scoped>
  .btn:disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }
  
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