// stores/locationStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLocationStore = defineStore('location', () => {
    const selectedLocation = ref(loadLocationFromStorage());

    const setLocation = (state, city) => {
        selectedLocation.value = { state, city };
        saveLocationToStorage(state, city);
    };

    return {
        selectedLocation,
        setLocation,
    };
});

function loadLocationFromStorage() {
    const location = localStorage.getItem('selectedLocation');
    return location ? JSON.parse(location) : { state: '', city: '' };
}

function saveLocationToStorage(state, city) {
    localStorage.setItem('selectedLocation', JSON.stringify({ state, city }));
}