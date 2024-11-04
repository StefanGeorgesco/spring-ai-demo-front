<script setup>
import Card from 'primevue/card';
import { RAGChat } from '@/services/chatservice';
import { ref } from 'vue';
import { useSpinnerStore } from '@/stores/spinner';

const query = ref('');
let conversationId = 0;
let conversationInProgress = false;
const response = ref({
  response: '',
  success: true,
});
const spinnerStore = useSpinnerStore();

async function onRequest(newConsersation = true) {
  response.value = {
    response: '',
    success: true,
  };
  spinnerStore.showSpinner();
  if (newConsersation) conversationId = Math.floor(Math.random() * 100000);
  const data = await RAGChat(query.value, conversationId);
  response.value = {
    ...data,
    response: data.response.replaceAll('\n', '<br />'),
  };
  spinnerStore.hideSpinner();
  conversationInProgress = true;
}
</script>

<template>
  <Card>
    <template #title>Quelle est votre recherche ?</template>
    <template #content>
      <textarea
        rows="4"
        class="form-control m-1"
        placeholder="Formulez votre question ici..."
        v-model="query">
    </textarea>
      <button
        :disabled="!query"
        @click="onRequest()"
        class="btn btn-primary mt-1"
      >
        {{ conversationInProgress ? 'Nouvelle demande' : 'Demande' }}
      </button>
      <button
        v-if="conversationInProgress"
        :disabled="!query"
        @click="onRequest(false)"
        class="btn btn-secondary mt-1 ms-1"
      >
        Suite
      </button>
      <div class="mt-3" v-html="response.response"></div>
    </template>
  </Card>
</template>
