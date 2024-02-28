<template>
    <header class="w-full">
        <!-- Top Header -->
        <div class="lg:block hidden p-3 px-16">
            <div class="flex items-start justify-between">
                <div class="flex items-center space-x-2">
                    <div class="">
                        <img src="../icons/free-delivery.svg" alt="">
                    </div>
                    <div>
                        <span class="text-[#010101] font-bold">Free next day delivery when you</span> <a
                            class="text-[#61c1b4] font-[Bold] underline" href="#">spend over $40</a>
                    </div>
                </div>
                <div class="flex items-center space-x-9">
                    <div class="flex items-center space-x-10">
                        <div>
                            <a href="#"><img src="../icons/facebook.svg" alt=""></a>
                        </div>
                        <div>
                            <a href="#"><img src="../icons/googlePlus.svg" alt=""></a>
                        </div>
                        <div>
                            <a href="#"><img src="../icons/twitter.svg" alt=""></a>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <div>
                            <img src="../icons/helpLineHeadphone.svg" alt="">
                        </div>
                        <div class="font-bold">
                            Need Help?
                        </div>
                        <div>
                            +01 234 567 8910
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute header w-full px-16 p-3 xl:block hidden">
            <nav class="flex items-center justify-between ">
                <div>
                    <a href="#">
                        <img src="../../assets/images/Logo.svg" alt="">
                    </a>
                </div>
                <div>
                    <ul class="flex space-x-10">
                        <li
                            class="text-[#bec3c2] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold">
                            <a href="#">Dispensaries</a>
                        </li>
                        <li
                            class="text-[#bec3c2] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold">
                            <a href="#">Deliveries</a>
                        </li>
                        <li
                            class="text-[#bec3c2] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold">
                            <a href="#">Brands</a>
                        </li>
                        <li class="text-[#bec3c2] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold">
                            <div class="relative">
                              <div class="product-btn cursor-pointer">Product</div>
                            </div>
                          
                          </li>
                        <li
                            class="text-[#bec3c2] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold">
                            <a href="#">Deals</a>
                        </li>
                        <li
                            class="text-[#bec3c2] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold">
                            <a href="#">Learn</a>
                        </li>
                        <li
                            class="text-[#bec3c2] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold">
                            <a href="#">Strains</a>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center space-x-4 relative">
                    <div class="flex space-x-3 cursor-pointer" @click="toggleSearchInput">
                        <div class="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <div class="font-bold">
                            Search
                        </div>
                    </div>
                    <div class="bg-[#61c1b4] w-[56px] h-[56px] p-4 rounded-full">
                        <img src="../icons/user.svg" alt="">
                    </div>
                    <div class="bg-[#61c1b4] w-[56px] h-[56px] p-4 rounded-full relative">
                        <div>
                            <img src="../icons/shop.svg" alt="">
                        </div>
                        <div
                            class="bg-[black] top-0 right-0 absolute text-white text-center rounded-full w-[22px] h-[22px]">
                            <h1>1</h1>
                        </div>
                    </div>
                    
                    <div :class="{'show-search': isSearchVisible, 'hide-search': !isSearchVisible}" class="absolute right-[9rem] flex space-x-3" v-if="isSearchVisible">
                        <input type="search" placeholder="Search..." class="border border-gray-300 p-3 px-6 rounded-xl relative">
                        <button  @click="hideSearchInput" class="bg-[#61c1b4] rounded-full py-0.5 w-6 h-6 absolute -right-2 -top-2 text-white font-bold">&#x2715</button>
                    </div>                    
                </div>
               
            </nav>
        </div>
        <div class="flex items-center justify-between p-6 cursor-pointer xl:hidden">
            <div class="w-full">
                <button @click="toggleMobileMenu" class="block 2xl:hidden" transition="slide-fade">
                    <!-- Show menu icon or cancel icon based on isMobileMenuOpen -->
                    <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div class="w-full">
                <a href="#">
                    <img src="../../assets/images/Logo.svg" alt="">
                </a>
            </div>
            <div class="w-full flex space-x-3 justify-end">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div class="font-bold">
                    Search
                </div>
            </div>
        </div>
        <transition name="fade">
            <div v-if="isMobileMenuOpen" class="absolute z-50 w-full xl:hidden">
                <nav class="flex flex-col py-4 px-6 bg-[#150528] text-[#917bab]">
                    <ul class="">
                        <li class="text-[#bec3c2]">
                            <a href="#">Dispensaries</a>
                        </li>
                        <li class="text-[#bec3c2]">
                            <a href="#">Deliveries</a>
                        </li>
                        <li class="text-[#bec3c2]">
                            <a href="#">Brands</a>
                        </li>
                        <li class="text-[#bec3c2] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold">
                            <div class="relative">
                              <div class="product-btn cursor-pointer">Product</div>
                            </div>
                          </li>
                        <li class="text-[#bec3c2]">
                            <a href="#">Deals</a>
                        </li>
                        <li class="text-[#bec3c2]">
                            <a href="#">Learn</a>
                        </li>
                        <li class="text-[#bec3c2]">
                            <a href="#">Strains</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </transition>
    </header>
</template>
<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false);
const isSearchVisible = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const toggleSearchInput = () => {
    isSearchVisible.value = !isSearchVisible.value;
};

const hideSearchInput = () => {
    isSearchVisible.value = false;
};
</script>


<style scoped>

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@media(max-width:1900px) {
    .header {
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .lg-logo img {
        width: 60%;
        margin-right: auto;
        margin-left: auto;
    }
}
.submenu-enter-active,
.submenu-leave-active {
  opacity: 1;
}

.submenu-enter-to,
.submenu-leave-to {
  opacity: 0;
}
.submenu::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 35px;
    width: 20px;
    height: 20px;
    background: #848484;
    transform: rotate(45deg);
    z-index: -2;
    box-shadow: rgba(0, 0, 0, 0.7);
  }
.product-btn::after{
    content: '\f107';
    font-family: FontAwesome;
    position: absolute;
    left: 4.1rem;
}
.show-search {
    animation: slideIn 0.3s ease forwards;
    transition: opacity 0.5s ease; /* Add transition property */
}

.hide-search {
    animation: slideOut 0.3s ease forwards;
    transition: opacity 0.5s ease; /* Add transition property */
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideOut {
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
}

</style>