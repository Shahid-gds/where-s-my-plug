<template>
    <transition-group name="nested" tag="div" class="">
        <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
            <div @click="close" class="backdrop"></div>
            <div class="popup lg:w-[800px] w-full h-[600px]  bg-white lg:p-10 p-6 shadow-lg text-center rounded-xl">
                <h1 class="text-4xl font-[Semi-Bold] text-[#61c1b4]">Where are you?</h1>
                <p>For the most relevant products and content, please enter your address.</p>
                <div class="w-full relative">
                    <input v-model="searchQuery" type="text" placeholder="Enter your delivery address"
                        class="border-2 w-full p-4 px-14 text-xl rounded-xl" @input="filterLocations" />
                    <div class="absolute top-2 left-3">
                        <!-- Search Icon SVG -->
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                </div>
                <div v-if="isLoggedIn" class="relative">
                    <!-- Show the filtered locations if there is a search query -->
                    <div v-if="searchQuery && filteredLocations.length"
                        class="absolute mt-4  text-left bg-white w-full h-[300px] overflow-y-auto">
                        <table class="w-full border-collapse">
                            <tbody>
                                <tr v-for="state in filteredLocations" :key="state.state">
                                    <td @click="selectLocation(state.state)"
                                        class="cursor-pointer border-b border-gray-200 p-2 flex space-x-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <strong>{{ state.state }}</strong>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <!-- Show message if no locations are found and there is a search query -->
                    <div v-if="searchQuery && !filteredLocations.length" class="text-gray-500 mt-4">
                        No matching locations found.
                    </div>
                </div>

                <div v-if="!isLoggedIn" class="text-2xl py-[5rem]">
                    No Data <router-link :to="{ name: 'Sign-In' }" class="text-red-500 font-bold">Login</router-link> or
                    <router-link :to="{ name: 'Sign-Up' }" class="text-red-500 font-bold">Create an
                        account.</router-link>
                </div>

                <div v-if="selectedLocations.length > 0" class="mt-4 h-[300px] overflow-y-auto">
                    <h2 class="text-2xl font-bold">Selected Locations</h2>
                    <table class="w-full border-collapse mt-2 text-left">
                        <thead>
                            <tr>
                                <th class="border-b-2 border-gray-300 p-2">State</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(loc, index) in selectedLocations" :key="index"
                                @click="selectLocation(loc.state)">
                                <td class="border-b cursor-pointer border-gray-200 p-2 flex space-x-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <div>
                                        {{ loc.state }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useApi } from '@/components/api/useApi';
import { useRouter } from 'vue-router';
import { useLocationStore } from '@/stores/modules/locationStore';

const router = useRouter();
const locationStore = useLocationStore();

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();
const isLoggedIn = ref(false);
const userEmail = ref('');
const userId = ref('');
const searchQuery = ref('');
const locations = ref([]);
const selectedLocations = ref([]);
const showSearchList = ref(true);

const LoggedInStatus = () => {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === 'userEmail') {
            userEmail.value = decodeURIComponent(value);
        } else if (name === 'userId') {
            userId.value = decodeURIComponent(value);
        }
    }
    isLoggedIn.value = userEmail.value !== '' && userId.value !== '';
};

const props = defineProps({
    show: Boolean,
    onClose: Function,
});

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
};

const fetchLocations = async () => {
    try {
        const userId = getCookie('userId');
        const response = await fetch(`${apiUrl}/users/myAddress`, {
            headers: {
                'user-id': userId,
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        locations.value = data.data.myAddress;
    } catch (error) {
        console.error('Error fetching locations:', error);
    }
};

const filterLocations = () => {
    searchQuery.value = searchQuery.value.toLowerCase();
};

const uniqueLocations = new Set();

const selectLocation = (state, city) => {
    const locationKey = `${state}-${city}`;

    if (!uniqueLocations.has(locationKey)) {
        selectedLocations.value.push({ state, city });
        uniqueLocations.add(locationKey);
        localStorage.setItem('selectedLocation', JSON.stringify({ state, city }));
        locationStore.setLocation(state, city);
    }

    searchQuery.value = '';
    showSearchList.value = false;
    router.push({ name: 'Menu', query: { state, city } });
    props.onClose();
};


const filteredLocations = computed(() => {

    return locations.value.filter(state =>
        state.state.toLowerCase().includes(searchQuery.value) ||
        state.cities.some(city => city.toLowerCase().includes(searchQuery.value))
    );
});

onMounted(() => {
    fetchLocations();
    LoggedInStatus();
});

const close = () => {
    props.onClose();
};
</script>

<style scoped>
.backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(-30px);
    opacity: 0;
}

::-webkit-scrollbar {
    width: 5px;
    background-color: #61c1b4;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: rgb(31, 20, 20);
    border-radius: 5px;
}
</style>
