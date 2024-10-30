<script setup>
import { RouterView } from 'vue-router';
import { CmpNavigation, CmpHeader } from '@/components/presentation';
</script>

<template>
  <CmpHeader>
    <CmpNavigation />
  </CmpHeader>

  <RouterView />
</template>
