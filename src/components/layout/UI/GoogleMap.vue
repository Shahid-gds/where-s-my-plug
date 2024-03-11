
<template>
    <div class="">
        <MapboxMap class="fixed" height="100vh" :center="center" :zoom="3" :accessToken="accessToken" :mapStyle="mapStyle">
            <MapboxMarker>
                <template #icon>
                   <!-- The icon will here -->
                </template>
            </MapboxMarker>
        </MapboxMap>
    </div>
</template>


<script setup>
import { MapboxMap, MapboxMarker } from 'vue-mapbox-ts'
import { ref, computed } from 'vue'

const accessToken = ref('pk.eyJ1IjoibXVmdGFyZGlnaXRhbCIsImEiOiJja2t5bnQxaHYyYjlwMnhxbTM3MGRwdTJwIn0.HeK49l3qG9VGfL76XLTq2w')
const mapStyle = ref('mapbox://styles/muftardigital/ckkyptzj90v3717mtcrji6b55')
const center = ref([-101.29114529694438, 39.92256763648007]);

</script>
<style scoped>

</style>