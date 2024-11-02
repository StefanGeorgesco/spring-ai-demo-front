<script setup lang="ts">
import CmpSpinner from '@/components/container/CmpSpinner.vue';
import { useSpinnerStore } from '@/stores/spinner';
import RecommendationChatForm from '@/components/container/RecommendationChatForm.vue';

const store = useSpinnerStore();
</script>

<template>
  <layout-view>
    <template #title>Chat recommandations</template>

    <RecommendationChatForm />
    <CmpSpinner v-if="store.spinnerShown" />
  </layout-view>
</template>
