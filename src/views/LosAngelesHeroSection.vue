<template>
    <div class="overflow-hidden relative">
        <div>
            <GoogleMap />
        </div>
        <div class="fixed xl:top-[8.5rem] lg:top-[10.1rem] md:top-[6.8rem] sm:top-[6.6rem] top-[6.4rem]">
            <LosAngelesSidebar />
        </div>
    </div>
</template>

<script setup>
import GoogleMap from '../components/layout/UI/GoogleMap.vue';
import LosAngelesSidebar from '@/components/layout/UI/LosAngelesSidebar.vue'
</script>