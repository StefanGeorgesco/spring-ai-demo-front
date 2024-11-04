<script setup>
import AnalystChatForm from '@/components/container/AnalystChatForm.vue';
</script>

<template>
  <layout-view>
    <template #title>
      Chat analyste <small>(génération de code - SQL)</small>
    </template>
    <AnalystChatForm />
  </layout-view>
</template>
