<script setup>
import Card from 'primevue/card';
import { RAGChat } from '@/services/chatservice';
import { ref } from 'vue';
import { useSpinnerStore } from '@/stores/spinner';

const query = ref('');
const response = ref({
  response: '',
  success: true,
});
const spinnerStore = useSpinnerStore();

async function onSend() {
  response.value = {
    response: '',
    success: true,
  };
  spinnerStore.showSpinner();
  const data = await RAGChat(query.value);
  response.value = {
    ...data,
    response: data.response.replaceAll('\n', '<br />'),
  };
  spinnerStore.hideSpinner();
}
</script>

<template>
  <Card>
    <template #title> Posez-moi votre question ici : </template>
    <template #content>
      <textarea
        rows="4"
        class="form-control m-1"
        placeholder="Entrez votre question ici"
        v-model="query"
      ></textarea>
      <button @click="onSend()" class="btn btn-primary mt-1">Envoyer</button>
      <div
        class="mt-3"
        v-html="response.response"
      ></div>
    </template>
  </Card>
</template>
