<script setup>
import { CmpNavigation, CmpHeader } from '@/components/presentation';
import { RouterView } from 'vue-router';
import CmpSpinner from '@/components/container/CmpSpinner.vue';
import { useSpinnerStore } from '@/stores/spinner';
const store = useSpinnerStore();
</script>

<template>
  <CmpHeader>
    <CmpNavigation />
  </CmpHeader>
  <RouterView />
  <CmpSpinner v-if="store.spinnerShown" />
</template>
