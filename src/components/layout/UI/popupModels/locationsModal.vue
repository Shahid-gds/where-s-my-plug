<template>
    <transition-group name="nested" tag="div">
        <div v-if="show" class="fixed inset-0 flex items-center justify-center z-50">
            <div @click="close" class="backdrop"></div>
            <div class="popup w-[800px] bg-white p-10 shadow-lg text-center rounded-xl">
                <h1 class="text-4xl font-[Semi-Bold] text-[#61c1b4]">Where are you?</h1>
                <p>For the most relevant products and content, please enter your address.</p>
                <div class="w-full relative">
                    <input type="text" placeholder="Enter your delivery address"
                        class="border-2 w-full p-4 px-14 text-xl rounded-xl">
                    <div class="absolute top-2 left-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </div>
                </div>
                <div class="mt-4 overflow-y-scroll overflow-x-hidden h-[500px] text-left">
                    <table class="w-full border-collapse">
                      <thead class="">
                        <tr>
                          <th class="border-b-2 border-gray-300 p-2">State</th>
                          <th class="border-b-2 border-gray-300 p-2">Cities</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="state in locations" :key="state.state">
                          <td class="border-b border-gray-200 p-2"><strong>{{ state.state }}</strong></td>
                          <td class="border-b border-gray-200 p-2">
                            <ul class="list-disc pl-4">
                              <li v-for="city in state.cities" :key="city">{{ city }}</li>
                            </ul>
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
import { ref, onMounted } from 'vue';

const baseUrl = 'https://wmp-api-shahid-gds-projects.vercel.app/api/v1/users';

const props = defineProps({
    show: Boolean,
    onClose: Function,
    onSubmit: Function,
});

const locations = ref([]);

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const fetchLocations = async () => {
    try {
        const userId = getCookie('userId');
        const response = await fetch(`${baseUrl}/myAddress`, {
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

onMounted(() => {
    fetchLocations();
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
    width: 10px;
    background-color: #61c1b4;
    border-radius: 10px;
  }
  
 
  ::-webkit-scrollbar-thumb {
    background-color: rgb(31, 20, 20);
    border-radius: 5px;
  }
</style>