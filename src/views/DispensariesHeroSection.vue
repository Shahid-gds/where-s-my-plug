<template>
    <div class="overflow-hidden relative">
        <div>
            <GoogleMap />
        </div>
        <div class="absolute xl:top-[5.4rem] top-0 z-30">
            <DispensariesSidebar />
        </div>
    </div>
</template>

<script setup>
import GoogleMap from '../components/layout/UI/GoogleMap.vue';
import DispensariesSidebar from '../components/layout/UI/DispensariesSidebar.vue'
</script>