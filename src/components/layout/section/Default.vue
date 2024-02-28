<template>
    <div class="">
        <component :is="Header" />
    </div>
      <section class="">
        <slot />
      </section>
    <div class="">
      <component :is="Footer" />
    </div>
  </template>
  
  <script setup>
  import { defineAsyncComponent } from 'vue';
  const Header = defineAsyncComponent(() => import('@/components/layout/Header.vue'));
  const Footer = defineAsyncComponent(() => import('@/components/layout/Footer.vue'));
  </script>