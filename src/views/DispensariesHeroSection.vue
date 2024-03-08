<template>
    <div class="overflow-hidden relative">
        <div>
            <GoogleMap />
        </div>
        <div class="absolute top-24 left-6 z-50">
            <DispensariesSidebar />
        </div>
    </div>
</template>

<script setup>
import GoogleMap from '../components/layout/UI/GoogleMap.vue';
import DispensariesSidebar from '../components/layout/UI/DispensariesSidebar.vue'
</script>