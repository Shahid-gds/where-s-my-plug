<template>
    <div class="">
        <component :is="dispensariesHeader" />
    </div>
      <section class="">
        <slot />
      </section>
  </template>
  
  <script setup>
  import { defineAsyncComponent } from 'vue';
  const dispensariesHeader = defineAsyncComponent(() => import('@/components/layout/dispensariesHeader.vue'));
  </script>