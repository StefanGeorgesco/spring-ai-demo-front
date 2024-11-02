<script setup lang="ts">
import CmpSpinner from '@/components/container/CmpSpinner.vue';
import AnalystChatForm from '@/components/container/AnalystChatForm.vue';
import { useSpinnerStore } from '@/stores/spinner';

const store = useSpinnerStore();
</script>

<template>
  <layout-view>
    <template #title>Chat analyste</template>

    <AnalystChatForm />
    <CmpSpinner v-if="store.spinnerShown" />
  </layout-view>
</template>
