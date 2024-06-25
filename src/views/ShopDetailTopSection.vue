<template>
    <section class="py-[20rem] pb-[25rem] relative">
        <div class="container mx-auto">
            <div class="sm:flex justify-between bg-white p-6 shadow-xl rounded-xl">
                <div class="w-full flex space-x-6 items-center">
                    <div class="w-[20%]">
                        <img class="w-full border-2 p-4 rounded-xl" :src="card.src" alt="Card Image" />
                    </div>
                    <div class="">
                        <h1 class="text-4xl font-bold">{{ card.heading }}</h1>
                        <div class="">
                            <div class="flex items-center space-x-3 py-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </div>
                                <div class="flex space-x-5 items-center">
                                    <div>
                                        <p class="font-bold uppercase">{{ card.time }}</p>
                                    </div>
                                    <div class="cursor-pointer relative" @click="toggleDropdown">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24"
                                            stroke-width="0" stroke="black" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                        <transition name="slide-fade">
                                            <div v-if="dropdownOpen"
                                                class="absolute z-40 top-6 right-0  w-[250px] p-2 bg-white border rounded-xl shadow-md">
                                                <ul class="py-1">
                                                    <li v-for="(time, day) in card.daysOfWeek" :key="day"  class="cursor-pointer px-4 py-2 hover:bg-gray-100 flex space-x-4 items-center">
                                                        <div>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                                stroke-width="1.5" stroke="currentColor" class="size-10">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                            </svg>
                                                        </div>
                                                        <div>
                                                            <div class="font-bold">{{ day }}</div>
                                                            {{ time }}
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </transition>
                                    </div>

                                </div>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div
                                    class="flex items-center space-x-3 bg-[#61C1B4] p-2 px-4 rounded-xl cursor-pointer">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="white" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                                        </svg>
                                    </div>
                                    <a :href="'tel:' + card.phone" class="text-white">{{ card.phoneBtn }}</a>
                                </div>
                                <div
                                    class="flex items-center space-x-3 bg-[#61C1B4] p-2 px-4 rounded-xl cursor-pointer">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="white" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <a :href="'mailto:' + card.email" class="text-white">{{ card.emailBtn }}</a>
                                </div>
                                <div @click="openModal"
                                    class="flex items-center space-x-3 bg-[#61C1B4] p-2 px-4 rounded-xl cursor-pointer">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="white" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                        </svg>
                                    </div>
                                    <div class="text-white">{{ card.detailBtn }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div class="w-full sm:block hidden relative">
                        <div class="w-full flex justify-center mt-[2.5rem] absolute">
                            <div class="relative w-full">
                                <div class="w-full relative">
                                    <input class="border-2 shadow-xl w-full p-6 px-[4.5rem] rounded-2xl" type="text"
                                        placeholder="What’s your address?">
                                    <div class="absolute top-3 left-4">
                                        <img src="../components/icons/locationIcon.svg" alt="">
                                    </div>
                                </div>
                                <div
                                    class="flex items-center justify-center space-x-3 bg-[#61c1b4] w-[5rem] p-4 absolute top-1.5 right-1.5 rounded-2xl cursor-pointer">
                                    <div>
                                        <img src="../components/icons/searchIcon.svg" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sm:hidden">
                        <div class="w-full flex justify-center mt-[2rem] relative">
                            <div class="w-full flex justify-center mt-[2.5rem] absolute px-8">
                                <div class="relative xl:w-1/2 w-full">
                                    <div class="relative">
                                        <input class="border-2 shadow-xl w-full p-6 px-[4.5rem] rounded-2xl" type="text"
                                            placeholder="What’s your address?">
                                        <div class="absolute top-3 left-4">
                                            <img src="../components/icons/locationIcon.svg" alt="">
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center justify-center space-x-3 bg-[#61c1b4] w-[5rem] p-4 absolute top-1.5 right-1.5 rounded-2xl cursor-pointer">
                                        <div>
                                            <img src="../components/icons/searchIcon.svg" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <transition name="slide-fade">
        <div v-if="isModalVisible" class="modal-container" @click="closeModalOnOverlayClick">
            <div
                class="modal-content relative bg-white rounded-xl 2xl:w-1/2 md:w-[65%] w-[90%] sm:p-8 p-4 mt-[4.5rem] 2xl:py-10">
                <div @click="closeModal"
                    class="absolute cursor-pointer -right-4 -top-4 w-10 h-10 text-2xl bg-[#61c1b4] px-2.5 py-1.5 rounded-full text-white">
                    &#x2716;
                </div>
                <div class="flex items-center space-x-3 border-b-2 border-[#61c1b4] pb-2">
                    <div class="border-2 border-[#61c1b4] p-2 rounded-xl">
                        <img :src="card.src" alt="">
                    </div>
                    <div class="text-3xl text-[#61c1b4] font-[Jost-ExtraBold]">
                        {{ card.heading }}
                    </div>
                </div>
                <div class="flex justify-between pt-4">
                    <div>
                        <div class="flex space-x-2 items-center pt-[1rem]">
                            <div class="font-[Bold] text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="#61c1b4" class="size-12">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>
                            </div>
                            <div class="">
                                <div class="font-[Jost-SemiBold] text-[#010101]">
                                    Registration #
                                </div>
                                <div class="text-[#61c1b4]">
                                    {{ card.registrationNumber }}
                                </div>
                            </div>
                        </div>
                        <div class="flex space-x-2 items-center pt-[1rem]">
                            <div class="font-[Bold] text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="#61c1b4" class="size-12">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                            </div>
                            <div class="">
                                <div class="font-[Jost-SemiBold] text-[#010101]">
                                    Address
                                </div>
                                <div class="text-[#61c1b4]">
                                    {{ card.address }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-0.5 h-auto bg-[#61c1b4]"></div>
                    <div>
                        <div class="flex space-x-2 items-center pt-[1rem]">
                            <div class="font-[Bold] text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="#61c1b4" class="size-12">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <div class="">
                                <div class="font-[Jost-SemiBold] text-[#010101]">
                                    Website
                                </div>
                                <div class="text-[#61c1b4]">
                                    {{ card.links.website }}
                                </div>
                            </div>
                        </div>
                        <div class="flex space-x-2 items-center pt-[1rem]">
                            <div class="font-[Bold] text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50"
                                    viewBox="0 0 30 30" fill="#61c1b4">
                                    <path
                                        d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z">
                                    </path>
                                </svg>
                            </div>
                            <div class="">
                                <div class="font-[Jost-SemiBold] text-[#010101]">
                                    Facebook
                                </div>
                                <div class="text-[#61c1b4]">
                                    {{ card.links.facebook }}
                                </div>
                            </div>
                        </div>
                        <div class="flex space-x-2 items-center pt-[1rem]">
                            <div class="font-[Bold] text-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50"
                                    viewBox="0 0 50 50" fill="#61c1b4">
                                    <path
                                        d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z">
                                    </path>
                                </svg>
                            </div>
                            <div class="">
                                <div class="font-[Jost-SemiBold] text-[#010101]">
                                    Instagram
                                </div>
                                <div class="text-[#61c1b4]">
                                    {{ card.links.instagram }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import img1 from '@/assets/images/DispensariesSlidebarImages/Img1.svg';
import img2 from '@/assets/images/DispensariesSlidebarImages/Img2.svg';
import img3 from '@/assets/images/DispensariesSlidebarImages/Img3.svg';
import img4 from '@/assets/images/DispensariesSlidebarImages/Img4.svg';


const isModalVisible = ref(false);
const openModal = () => {
    isModalVisible.value = true;
};
const closeModal = () => {
    isModalVisible.value = false;
};

const closeModalOnOverlayClick = (event) => {
    if (event.target.classList.contains('modal-container')) {
        closeModal();
    }
};
const dropdownOpen = ref(false);
const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};
const card = ref({});
const route = useRoute();

onMounted(() => {
    fetchCardDetails();
});

const fetchCardDetails = () => {
    const cardId = route.params.id;
    card.value = getCardById(cardId);
};

const getCardById = (id) => {
    const cards = [
        {
            id: '1',
            src: img1,
            heading: 'Dreadlock & Jetset',
            time: '10:00 am - 8:00 pm',
            phone: '123-456-7890',
            email: 'info@dreadlockandjetset.com',
            phoneBtn: 'Phone',
            emailBtn: 'Email',
            detailBtn: 'Detail',
            registrationNumber: '12345-ABCDE',
            address: '643 Mundy St Watertown, New York(NY), 13601',
            links: {
                website: 'https://www.dreadlockjetset.com',
                facebook: 'https://www.facebook.com/dreadlockandjetset',
                twitter: 'https://twitter.com/dreadlockjetset',
                instagram: 'https://www.instagram.com/dreadlockjetset'
            },
            daysOfWeek: {
                Monday: '10:00 am - 8:00 pm',
                Tuesday: '10:00 am - 8:00 pm',
                Wednesday: '10:00 am - 8:00 pm',
                Thursday: '10:00 am - 8:00 pm',
                Friday: '10:00 am - 8:00 pm',
                Saturday: '10:00 am - 8:00 pm',
                Sunday: '10:00 am - 8:00 pm'
            }
        },
        {
            id: '2',
            src: img2,
            heading: 'Coffeeshop The Stud',
            time: '10:00 am - 8:00 pm',
            phone: '234-567-8901',
            email: 'info@coffeeshopthestud.com',
            phoneBtn: 'Phone',
            emailBtn: 'Email',
            detailBtn: 'Detail',
            registrationNumber: '56789-ABCDE',
            address: '1050 Pittsford Victor Rd Pittsford, New York(NY), 14534',
            links: {
                website: 'https://www.coffeeshopthestud.com',
                facebook: 'https://www.facebook.com/coffeeshopthestud',
                twitter: 'https://twitter.com/coffeeshopthestud',
                instagram: 'https://www.instagram.com/coffeeshopthestud'
            },
            daysOfWeek: {
                Monday: '10:00 am - 8:00 pm',
                Tuesday: '10:00 am - 8:00 pm',
                Wednesday: '10:00 am - 8:00 pm',
                Thursday: '10:00 am - 8:00 pm',
                Friday: '10:00 am - 8:00 pm',
                Saturday: '10:00 am - 8:00 pm',
                Sunday: '10:00 am - 8:00 pm'
            }
        },
        {
            id: '3',
            src: img3,
            heading: 'Het Ballonnetje Coffeeshop - Amst...',
            time: '10:00 am - 8:00 pm',
            phone: '345-678-9012',
            email: 'info@hetballonnetje.com',
            phoneBtn: 'Phone',
            emailBtn: 'Email',
            detailBtn: 'Detail',
            registrationNumber: '901234-ABCDE',
            address: '11 Tulip Ct Albertson, New York(NY), 11507',
            links: {
                website: 'https://www.hetballonnetje.com',
                facebook: 'https://www.facebook.com/hetballonnetje',
                twitter: 'https://twitter.com/hetballonnetje',
                instagram: 'https://www.instagram.com/hetballonnetje'
            },
            daysOfWeek: {
                Monday: '10:00 am - 8:00 pm',
                Tuesday: '10:00 am - 8:00 pm',
                Wednesday: '10:00 am - 8:00 pm',
                Thursday: '10:00 am - 8:00 pm',
                Friday: '10:00 am - 8:00 pm',
                Saturday: '10:00 am - 8:00 pm',
                Sunday: '10:00 am - 8:00 pm'
            }
        },
        {
            id: '4',
            src: img4,
            heading: 'Dreadlock & Jetset',
            time: '10:00 am - 8:00 pm',
            phone: '456-789-0123',
            email: 'info@dreadlockandjetset.com',
            phoneBtn: 'Phone',
            emailBtn: 'Email',
            detailBtn: 'Detail',
            registrationNumber: '12345-ABCDE',
            address: '643 Mundy St Watertown, New York(NY), 13601',
            links: {
                website: 'https://www.dreadlockjetset.com',
                facebook: 'https://www.facebook.com/dreadlockandjetset',
                twitter: 'https://twitter.com/dreadlockjetset',
                instagram: 'https://www.instagram.com/dreadlockjetset'
            },
            daysOfWeek: {
                Monday: '10:00 am - 8:00 pm',
                Tuesday: '10:00 am - 8:00 pm',
                Wednesday: '10:00 am - 8:00 pm',
                Thursday: '10:00 am - 8:00 pm',
                Friday: '10:00 am - 8:00 pm',
                Saturday: '10:00 am - 8:00 pm',
                Sunday: '10:00 am - 8:00 pm'
            }
        }
    ];
    return cards.find(card => card.id === id);
};

</script>

<style scoped>
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>