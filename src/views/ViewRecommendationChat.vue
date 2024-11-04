<script setup>
import RecommendationChatForm from '@/components/container/RecommendationChatForm.vue';
</script>

<template>
  <layout-view>
    <template #title>
      Chat de recommandations
      <small>(RAG + mémoire de conversation)</small>
    </template>
    <RecommendationChatForm />
  </layout-view>
</template>
