<script setup lang="ts">
import { RouterView } from 'vue-router';
import { VThemeProvider } from 'vuetify/components';
</script>

<template>
  <VThemeProvider theme="custom">
    <RouterView />
  </VThemeProvider>
</template>
