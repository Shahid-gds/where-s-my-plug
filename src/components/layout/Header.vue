<template>
    <header class="w-full">
        <!-- Top Header -->
        <div class="xl:block hidden w-full p-3 px-16 top-header">
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
        <div class="absolute header w-full px-16 p-3 xl:block hidden z-50">
            <nav class="flex items-center justify-between ">
                <div>
                    <router-link :to="{ name: 'Home' }" @click="handleClick">
                        <img src="../../assets/images/Logo.svg" alt="">
                    </router-link>
                </div>
                <div>
                    <ul class="flex space-x-10">
                        <li class="">
                            <router-link :to="{ name: 'Dispensaries' }" @click="handleClick"
                                class="text-[#929493] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'">Dispensaries</router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'Deliveries' }" @click="handleClick"
                                class="text-[#929493] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'">Deliveries</router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'Brands' }" @click="handleClick"
                                class="text-[#929493] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'">Brands</router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'Products' }" @click="handleClick"
                                class="text-[#929493] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'">Product</router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'Deals' }" @click="handleClick"
                                class="text-[#929493] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'">Deals</router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'Learn' }" @click="handleClick"
                                class="text-[#929493] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'">Learn</router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'Strains' }" @click="handleClick"
                                class="text-[#929493] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'">Strains</router-link>
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
                    <TransitionGroup name="bounce" tag="ul" class="relative">
                        <!-- <div v-if="isAccountToggleShow" @click="accontToggleShow" class="fixed inset-0 z-10 opacity-25">
                        </div> -->
                        <div @click="accontToggleShow"
                            class="hover-btn bg-[#61c1b4] w-[56px] h-[56px] p-4 mt-2 rounded-full cursor-pointer">
                            <img src="../icons/user.svg" alt="">
                        </div>
                        <div v-if="isAccountToggleShow"
                            class="submenu w-[312px] absolute right-0 top-20 z-20 bg-[#FFFFFF] shadow-xl p-4 rounded-xl transition-opacity 0.5 ease-in pointer-events-auto">
                            <div class="flex items-center space-x-4 pb-4">
                                <div class="bg-[#61c1b4] p-4 rounded-full">
                                    <img src="../icons/user.svg" alt="">
                                </div>
                                <div class="w-full text-[#9B9B9B] font-[Bold]">
                                    {{ greeting }}
                                    <router-link v-if="!isBusinessAccount" :to="{ name: 'AccountSetting' }" @click="handleClick" class="font-[Semi-bold] uppercase text-[#61C1B4]">
                                        {{ accountText }}
                                      </router-link>
                                
                                      <!-- Router link for Business Account -->
                                      <router-link v-if="isBusinessAccount" :to="{ name: 'BusinessAccount' }" @click="handleClick" class="font-[Semi-bold] uppercase text-[#61C1B4]">
                                        {{ accountText }}
                                      </router-link>
                                  </div>
                            </div>
                            <div class="px-4 border-t-2 border-[#CBCBCB] pt-6">
                                <div class="w-full flex items-center space-x-4 pb-6">
                                    <img class="w-[12%]" src="../icons/myOrderList.svg" alt="">
                                    <router-link :to="{name: 'MyOrder'}" @click="handleClick" class="text-[#636363]">My Order</router-link>
                                </div>
                                <div class="w-full flex items-center space-x-4 pb-6">
                                    <img class="w-[12%]" src="../icons/heart.svg" alt="">
                                    <router-link :to="{name: 'AddYourListings'}" @click="handleClick" class="text-[#636363]">Add Your Listings</router-link>
                                </div>
                                <div class="w-full flex items-center space-x-4 pb-6">
                                    <img class="w-[12%]" src="../icons/review.svg" alt="">
                                    <router-link :to="{name : 'MyReview'}" @click="handleClick" class="text-[#636363]">My Reviews</router-link>
                                </div>
                                <div class="w-full flex items-center space-x-4 pb-6">
                                    <img class="w-[12%]" src="../icons/help.svg" alt="">
                                    <router-link :to="{name: 'Help'}" @click="handleClick" class="text-[#636363]">Help</router-link>
                                </div>
                            </div>
                            <div class="flex items-center space-x-4 border-t-2 border-b-2 border-[#CBCBCB]">
                                <div class="cl-toggle-switch py-4">
                                    <label class="cl-switch">
                                      <input type="checkbox" v-model="isBusinessAccount">
                                      <span></span>
                                    </label>
                                </div>
                                  <div class="text-[#636363]">
                                    Switch to Business
                                  </div>
                            </div>
                            <div class="w-full flex items-center space-x-4 py-6 px-4">
                                <img class="w-[12%]" src="../icons/sign-out.svg" alt="">
                                <button @click="signOut" class="text-[#9B9B9B]">Sign-Out</button>
                            </div>
                        </div>
                    </TransitionGroup>
                    <router-link :to="{ name: 'YourCart' }" @click="handleClick"
                        class="hover-btn bg-[#61c1b4] w-[56px] h-[56px] p-4 rounded-full relative">
                        <div>
                            <img src="../icons/shop.svg" alt="">
                        </div>
                        <!-- <div
                            class="bg-[black] top-0 right-0 absolute text-white text-center rounded-full w-[22px] h-[22px]">
                            <h1>1</h1>
                        </div> -->
                    </router-link>

                    <div :class="{ 'show-search': isSearchVisible, 'hide-search': !isSearchVisible }"
                        class="absolute right-[9rem] flex space-x-3" v-if="isSearchVisible">
                        <input type="search" placeholder="Search..."
                            class="border border-gray-300 p-3 px-6 rounded-xl relative">
                        <button @click="hideSearchInput"
                            class="bg-[#61c1b4] rounded-full py-0.5 w-6 h-6 absolute -right-2 -top-2 text-white font-bold">&#x2715;</button>
                    </div>
                </div>

            </nav>
        </div>
        <div
            class="fixed z-50 w-full bg-[#EFFBF9] shadow-lg flex items-center justify-between p-6 cursor-pointer xl:hidden">
            <div class="w-full">
                <button @click="toggleMobileMenu" class="block 2xl:hidden" transition="slide-fade">
                    <!-- Show menu icon or cancel icon based on isMobileMenuOpen -->
                    <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="black" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </button>
            </div>
            <div class="w-full">
                <router-link :to="{ name: 'Home' }" @click="closeSideMenuOutside">
                    <img src="../../assets/images/Logo.svg" alt="">
                </router-link>
            </div>
            <div class="w-full flex justify-end" @click="accontToggleShow">
                <div class="bg-[#61c1b4] w-[56px] h-[56px] p-4 rounded-full">
                    <img src="../icons/user.svg" alt="">
                </div>
            </div>
            <TransitionGroup name="bounce" tag="ul" class="relative">
                <div v-if="isAccountToggleShow" @click="accontToggleShow" class="fixed inset-0 z-10 opacity-25">
                </div>               
                <div v-if="isAccountToggleShow"
                    class="submenu w-[312px] absolute right-0 sm:top-20 top-12 z-20 bg-[#FFFFFF] shadow-xl p-4 rounded-xl transition-opacity 0.5 ease-in pointer-events-auto">
                    <div class="flex items-center space-x-4 pb-4">
                        <div class="bg-[#61c1b4] p-4 rounded-full">
                            <img src="../icons/user.svg" alt="">
                        </div>
                        <div class="w-full text-[#9B9B9B] font-[Bold]">
                            {{ greeting }}
                            <router-link v-if="!isBusinessAccount" :to="{ name: 'AccountSetting' }" @click="handleClick" class="font-[Semi-bold] uppercase text-[#61C1B4]">
                                {{ accountText }}
                              </router-link>
                        
                              <!-- Router link for Business Account -->
                              <router-link v-if="isBusinessAccount" :to="{ name: 'BusinessAccount' }" @click="handleClick" class="font-[Semi-bold] uppercase text-[#61C1B4]">
                                {{ accountText }}
                              </router-link>
                          </div>
                    </div>
                    <div class="px-4 border-t-2 border-[#CBCBCB] pt-6">
                        <div class="w-full flex items-center space-x-4 pb-6">
                            <img class="w-[12%]" src="../icons/myOrderList.svg" alt="">
                            <router-link :to="{name: 'MyOrder'}" @click="handleClick" class="text-[#636363]">My Order</router-link>
                        </div>
                        <div class="w-full flex items-center space-x-4 pb-6">
                            <img class="w-[12%]" src="../icons/heart.svg" alt="">
                            <router-link :to="{name: 'AddYourListings'}" @click="handleClick" class="text-[#636363]">Add Your Listings</router-link>
                        </div>
                        <div class="w-full flex items-center space-x-4 pb-6">
                            <img class="w-[12%]" src="../icons/review.svg" alt="">
                            <router-link :to="{name : 'MyReview'}" @click="handleClick" class="text-[#636363]">My Reviews</router-link>
                        </div>
                        <div class="w-full flex items-center space-x-4 pb-6">
                            <img class="w-[12%]" src="../icons/help.svg" alt="">
                            <router-link :to="{name: 'Help'}" @click="handleClick" class="text-[#636363]">Help</router-link>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4 border-t-2 border-b-2 border-[#CBCBCB]">
                        <div class="cl-toggle-switch py-4">
                            <label class="cl-switch">
                              <input type="checkbox" v-model="isBusinessAccount">
                              <span></span>
                            </label>
                        </div>
                          <div class="text-[#636363]">
                            Switch to Business
                          </div>
                    </div>
                    <div class="w-full flex items-center space-x-4 py-6 px-4">
                        <img class="w-[12%]" src="../icons/sign-out.svg" alt="">
                        <router-link :to="{name: 'Sign-In'}" class="text-[#9B9B9B]">Sign-Out</router-link>
                    </div>
                </div>
            </TransitionGroup>
        </div>

        <TransitionGroup name="list" tag="ul" class="relative">
            <div v-if="isMobileMenuOpen" @click="closeSideMenuOutside" class="fixed inset-0 z-10 opacity-25">
            </div>
            <div v-if="isMobileMenuOpen" class="fixed z-50 w-1/2 xl:hidden">
                <nav class="flex flex-col h-screen py-4 px-6 bg-gradient-to-t from-[#468f85] bg-[#61c1b4] relative">
                    <div class="absolute p-2 rounded-lg top-3 bg-[#EFFBF9] right-3" @click="toggleMobileMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="black" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <ul class="pt-10">
                        <li class="py-4">
                            <router-link :to="{ name: 'Dispensaries' }"
                                class="text-[#ffff] font-[Bold] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'"
                                @click="toggleMobileMenu">Dispensaries</router-link>
                        </li>
                        <li class="pb-4">
                            <router-link :to="{ name: 'Deliveries' }"
                                class="text-[#ffff] font-[Bold] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'"
                                @click="toggleMobileMenu">Deliveries</router-link>
                        </li>
                        <li class="pb-4">
                            <router-link :to="{ name: 'Brands' }"
                                class="text-[#ffff] font-[Bold] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'"
                                @click="toggleMobileMenu">Brands</router-link>
                        </li>
                        <li class="pb-4">
                            <router-link :to="{ name: 'Products' }"
                                class="text-[#ffff] font-[Bold] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'"
                                @click="toggleMobileMenu">Product</router-link>
                        </li>
                        <li class="pb-4">
                            <router-link :to="{ name: 'Deals' }"
                                class="text-[#ffff] font-[Bold] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'"
                                @click="toggleMobileMenu">Deals</router-link>
                        </li>
                        <li class="pb-4">
                            <router-link :to="{ name: 'Learn' }"
                                class="text-[#ffff] font-[Bold] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'"
                                @click="toggleMobileMenu">Learn</router-link>
                        </li>
                        <li class="">
                            <router-link :to="{ name: 'Strains' }"
                                class="text-[#ffff] font-[Bold] active-route-link hover:text-black transition-all ease-in duration-300 hover:font-extrabold"
                                :active-class="'active-route text-[black] font-[600]'"
                                @click="toggleMobileMenu">Strains</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </TransitionGroup>
    </header>
</template>

<script setup>
import router from '@/router';
import { ref, computed } from 'vue'

const closeSideMenuOutside = () => {
    isMobileMenuOpen.value = false;
};
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
const isAccountToggleShow = ref(false);
const accontToggleShow = () => {
    const userEmail = localStorage.getItem('userEmail:');
    if (userEmail) {
        isAccountToggleShow.value = !isAccountToggleShow.value
    } else {
        router.push('/sign-in');
    }   
}

const signOut = () => {
    localStorage.removeItem('userEmail:');
    router.push('/sign-in');
}
const isBusinessAccount = ref(false);
const greeting = computed(() => {
  return isBusinessAccount.value ? 'Hi, Business User' : 'Hi', localStorage.getItem('userEmail:');
});
const accountText = computed(() => {
  return isBusinessAccount.value ? 'Business Account' : 'View Account';
});
const handleClick = () => {
    scrollToTop();
    isAccountToggleShow.value = false;
    isSearchVisible.value = false;
};
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(-400px);
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    50% {
        transform: scale(1);
    }
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

.show-search {
    animation: slideIn 0.3s ease forwards;
    transition: opacity 0.5s ease;
    /* Add transition property */
}

.hide-search {
    animation: slideOut 0.3s ease forwards;
    transition: opacity 0.5s ease;
    /* Add transition property */
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

.submenu::before {
    content: '';
    position: absolute;
    top: -10px;
    right: 20px;
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    transform: rotate(45deg);
    z-index: -2;
}
.cl-toggle-switch {
    position: relative;
   }
   
   .cl-switch {
    position: relative;
    display: inline-block;
   }
   /* Input */
   .cl-switch > input {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    z-index: -1;
    position: absolute;
    right: 6px;
    top: -8px;
    display: block;
    margin: 0;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    outline: none;
    opacity: 0;
    transform: scale(1);
    pointer-events: none;
    transition: opacity 0.3s 0.1s, transform 0.2s 0.1s;
   }
   /* Track */
   .cl-switch > span::before {
    content: "";
    float: right;
    display: inline-block;
    margin: 5px 0 5px 10px;
    border-radius: 20px;
    width: 44px;
    height: 21px;
    background-color: transparent;
    border: 2px solid #61C1B4;
    vertical-align: top;
    transition: background-color 0.2s, opacity 0.2s;
   }
   /* Thumb */
   .cl-switch > span::after {
    content: "";
    position: absolute;
    top: 2.5px;
    right: 20px;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    border: 2px solid #61C1B4;
    background: white;
    transition: background-color 0.2s, transform 0.2s;
   }
   /* Checked */
   .cl-switch > input:checked {
    right: -10px;
    background-color: #85b8b7;
   }
   
   .cl-switch > input:checked + span::before {
    background-color: #61C1B4;
   }
   
   .cl-switch > input:checked + span::after {
   
    transform: translateX(20px);
   }
   /* Hover, Focus */
   .cl-switch:hover > input {
    opacity: 0.04;
   }
   
     
@media(max-width:1900px) {
    .top-header {
        padding-right: 2rem;
        padding-left: 2rem;
    }
}
</style>