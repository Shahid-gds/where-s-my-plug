<template>
    <section class="container mx-auto lg:pb-[20rem] pb-[15rem] -mt-[8rem] lg:px-20 px-6">
        <div class="xl:hidden w-full pb-6">
            <div class="w-full h-[193px] bg-white flex items-center space-x-5 border-2 p-4 rounded-2xl">
                <div class="bg-[#F6F9F9] p-2 rounded-xl border-2 border-[#61C1B4] relative">
                    <div class="border-2 rounded-full">
                        <div v-if="userData.profilePhotoUrl" class="relative w-full h-full rounded-full">
                            <img class="w-[150px] h-[150px] rounded-full object-cover" :src="userData.profilePhotoUrl"
                                alt="">
                            <!-- <div v-if="loading" class="absolute inset-0 flex items-center justify-center z-50">
                                <div class="animate-spin rounded-full h-16 w-16 object-cover border-t-2 border-b-2 border-[blue]"></div>
                            </div> -->
                        </div>
                        <div v-else class="w-full h-full rounded-full">
                            <img class="w-[150px] h-[150px] rounded-full object-cover"
                                src="../assets/images/default.jpg" alt="">
                            <!-- <div v-if="loading" class="absolute inset-0 flex items-center justify-center z-50">
                                <div class="animate-spin rounded-full h-16 w-16 object-cover border-t-2 border-b-2 border-[blue]"></div>
                            </div> -->
                        </div>
                    </div>
                    <div v-if="isEditing.profilePhotoUrl"
                        class="bg-[#61C1B4] absolute right-0 bottom-0 rounded-br-lg rounded-tl-xl p-2 cursor-pointer"
                        @click="openFileInput">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                        </svg>
                    </div>
                    <input type="file" ref="fileInput" class="hidden" @change="handleFileChange" accept="image/*">
                </div>
                <div class="text-[#818181] mt-4">
                    <div v-if="userData.profilePhotoUrl" class="mt-6">
                        <div>Change Photo</div>
                    </div>
                    <div v-if="!userData.profilePhotoUrl" class="">
                        <div>Profile Photo</div>
                        <div>Add a profile photo</div>
                    </div>
                    <div class="cursor-pointer" @click="toggleEdit('profilePhotoUrl')">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="xl:flex items-end xl:space-x-4">
            <div class="w-full pb-6">
                <div class="w-full bg-white flex items-center border-2 p-6 rounded-2xl relative">
                    <div class="w-full">
                        <label for="" class="text-[#161616] font-[Bold]">First Name</label>
                        <input type="text" class="w-full text-[#818181] outline-none"
                            :class="{ 'border-2 p-2.5 rounded-xl': isEditing.fname, 'read-only': isEditing.fname }"
                            :readonly="!isEditing.fname" v-model="userData.fname" />
                    </div>
                    <div class="cursor-pointer" @click="toggleEdit('fname')">
                        <svg v-if="!isEditing.fname" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="xl:block hidden w-full pb-6">
                <div class="w-full h-[193px] bg-white flex items-center space-x-5 border-2 p-4 rounded-2xl">
                    <div class="bg-[#F6F9F9] p-2 rounded-xl border-2 border-[#61C1B4] relative">
                        <div class="border-2 rounded-full">
                            <div v-if="userData.profilePhotoUrl" class="relative w-full h-full rounded-full">
                                <img class="w-[150px] h-[150px] rounded-full object-cover"
                                    :src="userData.profilePhotoUrl" alt="">
                                <!-- <div v-if="loading" class="absolute inset-0 flex items-center justify-center z-50">
                                    <div class="animate-spin rounded-full h-16 w-16 object-cover border-t-2 border-b-2 border-[blue]"></div>
                                </div> -->
                            </div>
                            <div v-else class="w-full h-full rounded-full">
                                <img class="w-[150px] h-[150px] rounded-full object-cover"
                                    src="../assets/images/default.jpg" alt="">
                                <!-- <div v-if="loading" class="absolute inset-0 flex items-center justify-center z-50">
                                    <div class="animate-spin rounded-full h-16 w-16 object-cover border-t-2 border-b-2 border-[blue]"></div>
                                </div> -->
                            </div>
                        </div>
                        <div v-if="isEditing.profilePhotoUrl"
                            class="bg-[#61C1B4] absolute right-0 bottom-0 rounded-br-lg rounded-tl-xl p-2 cursor-pointer"
                            @click="openFileInput">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="white" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                            </svg>
                        </div>
                        <input type="file" ref="fileInput" class="hidden" @change="handleFileChange" accept="image/*">
                    </div>
                    <div class="text-[#818181] mt-4">
                        <div v-if="userData.profilePhotoUrl" class="mt-6">
                            <div>Change Photo</div>
                        </div>
                        <div v-if="!userData.profilePhotoUrl" class="">
                            <div>Profile Photo</div>
                            <div>Add a profile photo</div>
                        </div>
                        <div class="cursor-pointer" @click="toggleEdit('profilePhotoUrl')">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="#61C1B4" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full pb-6">
                <div class="w-full bg-white flex items-center border-2 p-6 rounded-2xl relative">
                    <div class="w-full">
                        <label for="" class="text-[#161616] font-[Bold]">Last Name</label>
                        <input type="text" class="w-full text-[#818181] outline-none"
                            :class="{ 'border-2 p-2.5 rounded-xl': isEditing.lname, 'read-only': isEditing.fname }"
                            :readonly="!isEditing.lname" v-model="userData.lname" />
                    </div>
                    <div class="cursor-pointer" @click="toggleEdit('lname')">
                        <svg v-if="!isEditing.lname" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="xl:flex items-end xl:space-x-4">
            <div class="w-full pb-6">
                <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                    <div class="w-full">
                        <label for="" class="text-[#161616] font-[Bold]">Email Address</label>
                        <input type="text" class="w-full text-[#818181] outline-none" readonly v-model="userData.email">
                    </div>
                </div>
            </div>
            <div class="w-full pb-6">
                <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                    <div class="w-full">
                        <label for="" class="text-[#161616] font-[Bold]">Birthday</label>
                        <input type="text" class="w-full text-[#818181] outline-none"
                            :class="{ 'border-2 p-2.5 rounded-xl': isEditing.bday, 'read-only': isEditing.bday }"
                            :readonly="!isEditing.bday" v-model="userData.bday">
                    </div>
                    <div class="cursor-pointer" @click="toggleEdit('bday')">
                        <svg v-if="!isEditing.bday" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="w-full pb-6">
                <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                    <div class="w-full">
                        <label for="" class="text-[#161616] font-[Bold]">Password</label>
                        <input type="text" class="w-full text-[#818181] outline-none text-2xl"
                            :class="{ 'border-2 p-2.5 rounded-xl': isEditing.pass, 'read-only': isEditing.pass }"
                            :readonly="!isEditing.pass" v-model="userData.pass">
                        <div class="pt-2 flex space-x-2" v-if="isEditing.pass">
                            <router-link :to="{ name: 'ForgetPassword' }" class="p-2 px-6 border-2 rounded-xl">Reset
                                ?</router-link>
                            <button class="p-2 px-6 border-2 rounded-xl" @click="cancelEdit('pass')">Cancel</button>
                        </div>
                    </div>

                    <div class="cursor-pointer" @click="toggleEdit('pass')">
                        <svg v-if="!isEditing.pass" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-6">
            <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                <div class="w-full">
                    <label for="" class="text-[#161616] font-[Bold]">About</label>
                    <textarea type="text" class="w-full text-[#818181] outline-none"
                        :class="{ 'border-2 p-2.5 rounded-xl': isEditing.about, 'read-only': isEditing.about }"
                        :readonly="!isEditing.about" v-model="userData.about"></textarea>
                </div>
                <div class="cursor-pointer" @click="toggleEdit('about')">
                    <svg v-if="!isEditing.about" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="xl:flex items-end xl:space-x-4">
            <div class="w-full pb-6">
                <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                    <div class="w-full">
                        <label for="" class="text-[#161616] font-[Bold]">Phone</label>
                        <input type="text" class="w-full text-[#818181] outline-none"
                            :class="{ 'border-2 p-2.5 rounded-xl': isEditing.phone, 'read-only': isEditing.phone }"
                            :readonly="!isEditing.phone" v-model="userData.phone">
                    </div>
                    <div class="cursor-pointer" @click="toggleEdit('phone')">
                        <svg v-if="!isEditing.phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="w-full pb-6">
                <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                    <div class="w-full">
                        <label for="" class="text-[#161616] font-[Bold]">Mobile</label>
                        <input type="text" class="w-full text-[#818181] outline-none"
                            :class="{ 'border-2 p-2.5 rounded-xl': isEditing.mobile, 'read-only': isEditing.mobile }"
                            :readonly="!isEditing.mobile" v-model="userData.mobile">
                    </div>
                    <div class="cursor-pointer" @click="toggleEdit('mobile')">
                        <svg v-if="!isEditing.mobile" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="#61C1B4" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-10">
            <div class="w-full h-[140px] bg-white flex items-center border-2 p-6 rounded-2xl">
                <div class="w-full">
                    <label for="" class="text-[#161616] font-[Bold]">Addresses</label>
                    <input type="text" class="w-full text-[#818181] outline-none"
                        :class="{ 'border-2 p-2.5 rounded-xl': isEditing.address, 'read-only': isEditing.address }"
                        :readonly="!isEditing.address" v-model="userData.address">
                </div>
                <div class="cursor-pointer" @click="toggleEdit('address')">
                    <svg v-if="!isEditing.address" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="#61C1B4" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            </div>
        </div>
        <div v-if="isEditing.fname || isEditing.lname || isEditing.bday || isEditing.about || isEditing.phone || isEditing.mobile || isEditing.address"
            class="flex justify-center">
            <button @click.prevent="updateUser"
                class="hover-btn uppercase bg-[#61C1B4] p-3 px-10 rounded-full text-white text-xl">
                {{ processing ? 'Please Wait...' : 'Update Account' }}
            </button>
        </div>
        <div class="pb-16">
            <h1 class="pb-8 font-[Bold]">Preferences</h1>
            <div class="xl:flex xl:space-x-6">
                <div class="w-full pb-6">
                    <div class="w-full border-2 p-6 shadow-lg rounded-2xl">
                        <h1 class="font-[Semi-bold]">Interests</h1>
                        <p>Select your interests like delivery or pickup</p>
                        <div class="w-full">
                            <div v-for="(interest, index) in interests" :key="index"
                                class="flex items-center space-x-4">
                                <div class="w-cl-toggle-switch py-4">
                                    <label class="cl-switch">
                                        <input type="checkbox" v-model="interest.checked">
                                        <span></span>
                                    </label>
                                </div>
                                <div
                                    :class="{ 'text-[#818181]': !interest.checked, 'text-[#61C1B4]': interest.checked }">
                                    {{ interest.label }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full pb-6">
                    <div class="w-full border-2 p-6 shadow-lg rounded-2xl">
                        <h1 class="font-[Semi-bold]">Product preferences</h1>
                        <p>Select your category preferences like flower, edibles, etc.</p>
                        <div class="sm:flex">
                            <div class="w-full">
                                <div v-for="(product, index) in products" :key="index"
                                    class="flex items-center space-x-4">
                                    <div class="w-cl-toggle-switch py-4">
                                        <label class="cl-switch">
                                            <input type="checkbox" v-model="product.checked">
                                            <span></span>
                                        </label>
                                    </div>
                                    <div
                                        :class="{ 'text-[#818181]': !product.checked, 'text-[#61C1B4]': product.checked }">
                                        {{ product.label }}
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <div v-for="(pro, index) in pros" :key="index" class="flex items-center space-x-4">
                                    <div class="w-cl-toggle-switch py-4">
                                        <label class="cl-switch">
                                            <input type="checkbox" v-model="pro.checked">
                                            <span></span>
                                        </label>
                                    </div>
                                    <div :class="{ 'text-[#818181]': !pro.checked, 'text-[#61C1B4]': pro.checked }">
                                        {{ pro.label }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <h1 class="pb-8 font-[Bold]">Notifications</h1>
            <div class="flex space-x-6">
                <div class="w-full border-2 p-6 shadow-lg rounded-2xl">
                    <h1 class="font-[Semi-bold]">Interests</h1>
                    <p class="pb-6">Select your interests like delivery or pickup</p>
                    <div class="lg:flex lg:space-x-24">
                        <div class="w-full">
                            <div v-for="(note, index) in notes" :key="index" class="flex items-start space-x-4 pb-10">
                                <div class="w-cl-toggle-switch">
                                    <label class="cl-switch">
                                        <input type="checkbox" v-model="note.checked">
                                        <span></span>
                                    </label>
                                </div>
                                <div>
                                    <div :class="{ 'text-[black]': !note.checked, 'text-[#61C1B4]': note.checked }">
                                        {{ note.label }}
                                    </div>
                                    <div class="text-[#818181]">
                                        {{ note.para }}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="w-full">
                            <div v-for="(note, index) in notes2" :key="index" class="flex items-start space-x-4 pb-10">
                                <div class="w-cl-toggle-switch">
                                    <label class="cl-switch">
                                        <input type="checkbox" v-model="note.checked">
                                        <span></span>
                                    </label>
                                </div>
                                <div>
                                    <div :class="{ 'text-[black]': !note.checked, 'text-[#61C1B4]': note.checked }">
                                        {{ note.label }}
                                    </div>
                                    <div class="text-[#818181]">
                                        {{ note.para }}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref, reactive, computed } from 'vue';

const isEditing = reactive({
    fname: false,
    lname: false,
    profilePhotoUrl: false,
    email: false,
    bday: false,
    pass: false,
    about: false,
    phone: false,
    mobile: false,
    address: false,
});

const userData = reactive({
    fname: '',
    lname: '',
    profilePhotoUrl: '',
    email: '',
    bday: '',
    pass: '**************',
    about: '',
    phone: '',
    mobile: '',
    address: ''
});


// Function to get cookie by name
const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
};
const baseUrl = 'https://wmp-api-shahid-gds-projects.vercel.app/api/v1/users';
// const baseUrl = 'http://127.0.0.1:3000/api/v1/users';
const userId = getCookie('userId');

const getUserData = async () => {

    const headers = {
        'user-id': userId,
        'Content-Type': 'application/json'
    };
    try {
        const response = await axios.get(`${baseUrl}/me`,
            { headers });

        const getUser = response.data.data.data;
        if (getUser) {
            const { name } = getUser
            const [fname, lname] = name.split(' ')
            userData.fname = fname || '';
            userData.lname = lname || '';
            userData.profilePhotoUrl = getUser.photo || '';
            userData.email = getUser.email || '';
            userData.bday = getUser.birth || '';
            userData.about = getUser.about || '';
            userData.phone = getUser.phone || '';
            userData.mobile = getUser.mobile || '';
            userData.address = getUser.address || '';
        }

    } catch (error) {
        console.error(error);
    }
}
const processing = ref(false);
const updateUser = async () => {
    processing.value = true;
    const headers = {
        'user-id': userId,
        'Content-Type': 'multipart/form-data'
    };
    try {
        const updatedData = {
            name: `${userData.fname} ${userData.lname}`,
            photo: userData.profilePhotoUrl,
            email: userData.email,
            birth: userData.bday,
            about: userData.about,
            phone: userData.phone,
            mobile: userData.mobile,
            address: userData.address
        };

        const response = await axios.patch(`${baseUrl}/updateMe`, updatedData, { headers });
        console.log('User updated:', response.data);

        // Hide editing fields after successful update
        Object.keys(isEditing).forEach(field => isEditing[field] = false);

    } catch (error) {
        console.error('Error updating user:', error);
    } finally {
        processing.value = false;
    }
};


const toggleEdit = (field) => {
    if (isEditing[field] !== undefined) {
        isEditing[field] = !isEditing[field];
    } else {
        console.error(`Field '${field}' is not defined`)
    }

};

const cancelEdit = (field) => {
    if (isEditing[field] !== undefined) {
        isEditing[field] = !isEditing[field];
    } else {
        console.error(`Field '${field}' is not defined`)
    }
};
const generateProfileInitial = (fname, lname) => {
    if (fname && lname) {
        const firstNameInitial = userData.fname[0].toUpperCase();
        const lastNameInitial = userData.lname[0].toUpperCase();
        return `https://via.placeholder.com/150/61c1b4/FFFFFF?text=${firstNameInitial}${lastNameInitial}`;
    } else {
        return '';
    }
}

const openFileInput = () => {
    document.querySelector('input[type="file"]').click();
};

const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('photo', file);

        try {
            const response = await axios.patch(`${baseUrl}/updateMe`, formData, {
                headers: {
                    'user-id': userId,
                    'Content-Type': 'multipart/form-data',
                },
            });
            userData.profilePhotoUrl = response.data.data.user.photo;
            // Hide isEditing field
            Object.keys(isEditing).forEach(field => isEditing[field] = false);
        } catch (error) {
            if (error.response) {
                console.error('Error response:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
            } else {
                console.error('Error message:', error.message);
            }
        }
    }
};

const interests = ref([
    { label: 'Products', checked: false },
    { label: 'Dispensaries near me', checked: false },
    { label: 'Delivery services', checked: false },
    { label: 'Deals', checked: false },
    { label: 'Brands', checked: false },
]);
const products = ref([
    { label: 'Flower', checked: false },
    { label: 'Vape Pens', checked: false },
    { label: 'Edibles', checked: false },
    { label: 'Concentrates', checked: false },
    { label: 'Pre-rolls', checked: false },
]);
const pros = ref([
    { label: 'Concentrates', checked: false },
    { label: 'Pre-rolls', checked: false },
    { label: 'Topicals', checked: false },
    { label: 'Gear', checked: false },
    { label: 'Tinctures', checked: false },
]);
const notes = ref([
    {
        label: 'Order Updates',
        para: 'Receive timely updates to track your order.',
        checked: false
    },
    {
        label: 'Recommendations',
        para: 'Receive personalized recommendations for stores and products we think you’ll love.',
        checked: false
    },
    {
        label: 'Weekly Newsletter',
        para: 'Weekly newsletter on the hottest topics and trends in the cannabis community.',
        checked: false
    },
    {
        label: 'Weedmaps Tips & Tricks',
        para: 'Information and tips on how you can get the most out of Where My Plug.',
        checked: false
    },
    {
        label: 'Surveys',
        para: 'Short surveys that help us improve your experience.',
        checked: false
    },

]);
const notes2 = ref([
    {
        label: 'Deals',
        para: 'Receive timely updates to track your order.',
        checked: false
    },
    {
        label: 'Reminders',
        para: 'Reminders about actions you’ve taken on Where My Plug including items you have in your cart and reviews on recent orders.',
        checked: false
    },
    {
        label: 'New Features',
        para: 'New feature announcements from Where My Plug.',
        checked: false
    },
    {
        label: 'Policy & Advocacy',
        para: 'Cannabis policy updates and information on how to get involved in advocacy campaigns.',
        checked: false
    },
]);

onMounted(() => {
    getUserData();
})

</script>

<style scoped>
.cl-toggle-switch {
    position: relative;
}

.cl-switch {
    position: relative;
    display: inline-block;
}

/* Input */
.cl-switch>input {
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
.cl-switch>span::before {
    content: "";
    /*float: right;*/
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
.cl-switch>span::after {
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
.cl-switch>input:checked {
    right: -10px;
    background-color: #85b8b7;
}

.cl-switch>input:checked+span::before {
    background-color: #61C1B4;
}

.cl-switch>input:checked+span::after {

    transform: translateX(20px);
}

/* Hover, Focus */
.cl-switch:hover>input {
    opacity: 0.04;
}
</style>