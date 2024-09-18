<template>
    <section class="">
        <transition-group name="nested" tag="div" class="flex flex-wrap justify-center container mx-auto py-[2rem]">
            <div v-for="card in cards"
                class="w-[350px] border-2 border-white hover:border-2  hover:border-[#61c1b4] transition-all duration-300 cursor-pointer p-8 m-4 rounded-[30px] bg-[#f9f9f9] py-[2rem]">
                <div class="text-left ">
                    <div class="">
                        <h1 class="text-[25px] font-[Bold]">{{ card.locations[0]?.state || card.locations[0]?.city }}</h1>
                    </div>
                                 
                    <div class="flex items-center justify-between">
                        <div class="text-[#747474] text-xl font-[Medium]">
                            {{ getCount(card.locations[0]?.state, card.locations[0]?.city) }}
                            {{ getCount(card.locations[0]?.state, card.locations[0]?.city) === 1 ? 'dispensary' : 'dispensaries' }}
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="text-[#444444] font-[Medium] text-xl">
                                {{ card.ratingsAverage }}
                            </div>
                            <div class="text-[#6bc5b9] font-[Medium] text-xl">
                                ({{ card.ratingsQuantity }})
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </transition-group>
     
    </section>
</template>
  
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useApi } from '@/components/api/useApi';
import axios from 'axios';

const { getApiUrl } = useApi();
const apiUrl = getApiUrl();

const cards = ref([]);
const stateCount = ref({});
const cityCount = ref({});


onMounted(async () => {
  try {
    const response = await axios.get(`${apiUrl}/dispensaries/getAllDispensaries`);
    cards.value = response.data.data.dispensaries;
    updateCounts();
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
});

function updateCounts() {
  const stateMap = {};
  const cityMap = {};
  
  cards.value.forEach(card => {
    card.locations.forEach(location => {
      const state = location.state;
      const city = location.city;

      if (state) {
        stateMap[state] = (stateMap[state] || 0) + 1;
      } else if (city) {
        cityMap[city] = (cityMap[city] || 0) + 1;
      }
    });
  });

  stateCount.value = stateMap;
  cityCount.value = cityMap;
}

const getCount = (state, city) => {
  if (state) {
    return stateCount.value[state] || 0;
  } else if (city) {
    return cityCount.value[city] || 0;
  }
  return 0;
};

</script>
  
<style scoped>
.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateX(30px);
    opacity: 0;
}
</style>
  