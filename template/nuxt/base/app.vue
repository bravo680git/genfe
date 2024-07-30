<script lang="ts" setup>
import { ConfigProvider } from 'ant-design-vue';
import { themeConfig } from '@/theme/config';
</script>

<template>
  <ConfigProvider :theme="themeConfig">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>
