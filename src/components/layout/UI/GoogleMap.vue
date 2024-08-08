<template>
    <div class="map-container">
        <div id="map" class="map"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const svgIconUrl = 'data:image/svg+xml;base64,' + btoa(`
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
</svg>
`);
const customIcon = L.icon({
    iconUrl: svgIconUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const extractCoordinatesAndNames = (dispensaries) => {
    let data = [];
    dispensaries.forEach(dispensary => {
        // console.log('Processing dispensary:', dispensary.name);
        // data.push({
        //     coordinates: dispensary.startLocation.coordinates,
        //     name: dispensary.name,
        // });
        dispensary.locations.forEach(location => {
            // console.log('Processing location for dispensary:', dispensary.name);
            data.push({
                coordinates: location.coordinates,
                name: dispensary.name,
            });
        });
    });
    console.log('Extracted data:', data);
    return data;
};


// Reactive variable for all coordinates and names
const allData = ref([]);

// Fetch data and update coordinates and names
const fetchData = async () => {
    try {
        const response = await axios.get('https://wmp-api-shahid-gds-projects.vercel.app/api/v1/dispensaries/getAllDispensaries');
        const data = response.data.data.dispensaries;
        allData.value = extractCoordinatesAndNames(data);
        initMap();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Initialize the Leaflet map
const initMap = () => {
    const map = L.map('map').setView([40.7585862, -73.9883951], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    allData.value.forEach(dataItem => {
        L.marker([dataItem.coordinates[0], dataItem.coordinates[1]], { icon: customIcon })
            .addTo(map)
            .bindPopup(dataItem.name);
    });
};

onMounted(fetchData);
</script>

<style scoped>
.map-container {
    position: relative;
    width: 100%;
    height: 100vh;
    z-index: 1;
}

.map {
    height: 100%;
    width: 100%;
    border: 1px solid #ddd;
}
</style>
