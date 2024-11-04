<script setup>
import Card from 'primevue/card';
import { analystChat } from '@/services/chatservice';
import { ref } from 'vue';
import { useSpinnerStore } from '@/stores/spinner';

const query = ref('');
const showDetails = ref(false);
const response = ref({
  response: '',
  success: true,
  details: ''
});
const spinnerStore = useSpinnerStore();

async function onSend() {
  response.value = {
    response: '',
    success: true,
    details: '',
  };
  spinnerStore.showSpinner();
  const data = await analystChat(query.value);
  response.value = {
    ...data,
    response: data.response.replaceAll('\n', '<br />'),
  };
  spinnerStore.hideSpinner();
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
      <button @click="onSend()" class="btn btn-primary mt-1">Envoyer</button>
      <div class="my-4" v-html="response.response"></div>
      <div v-if="response.details" class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          id="flexSwitchCheck"
          value="test"
          v-model="showDetails"
        />
        <label class="form-check-label" for="flexSwitchCheck">Détails</label>
      </div>
      <div v-if="showDetails">
        <div v-if="response.details?.sql" class="mt-3 bg-light rounded p-3">
          <code>
            <p>Requête SQL :</p>
            <pre>{{ response.details?.sql?.trim() }}</pre>
          </code>
        </div>
        <div
          v-if="response.details?.data"
          class="mt-3 bg-secondary rounded p-3 text-white"
        >
          <p>Résultat :</p>
          <pre>{{ response.details?.data }}</pre>
        </div>
      </div>
    </template>
  </Card>
</template>
