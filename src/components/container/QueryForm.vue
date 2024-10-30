<script setup>
import Card from 'primevue/card';
import { chat } from '@/services/chatservice';
import { ref } from 'vue';
import { useSpinnerStore } from '@/stores/spinner';

const query = ref('');
const response = ref('');
const store = useSpinnerStore();

async function onSend() {
  store.show();
  response.value = (await chat(query.value)).replaceAll('\n', '<br />');
  store.hide();
}
</script>

<template>
  <Card>
    <template #title>
      <pre>Posez-moi votre question</pre>
    </template>
    <template #content>
      <input
        class="form-control m-1"
        placeholder="Entrez votre question ici"
        v-model="query"
      />
      <button @click="onSend()" class="btn btn-primary mt-1">Envoyer</button>
      <div class="mt-3" v-html="response"></div>
    </template>
  </Card>
</template>
