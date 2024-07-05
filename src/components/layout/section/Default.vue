<template>
  <div>
    <component :is="Header" />
  </div>
  <section>
    <slot />
  </section>
  <div v-if="!isDispensariesRoute">
    <component :is="Footer" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() => import('@/components/layout/Header.vue'));
const Footer = defineAsyncComponent(() => import('@/components/layout/Footer.vue'));

const route = useRoute();

const isDispensariesRoute = computed(() => route.name === 'Dispensaries' || route.name === 'Los Angeles');
</script>
