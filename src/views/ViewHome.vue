<script setup lang="ts">
import CmpSpinner from '@/components/container/CmpSpinner.vue';
import QueryForm from '@/components/container/QueryForm.vue';
import { useSpinnerStore } from '@/stores/spinner';

const store = useSpinnerStore();
</script>

<template>
  <layout-view>
    <template #title>Bienvenue</template>

    <QueryForm />
    <CmpSpinner v-if="store.spinnerShown" />
  </layout-view>
</template>
