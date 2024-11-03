<script setup>
import { useProductStore } from '@/stores/products';
import { onMounted, ref } from 'vue';

const store = useProductStore();
onMounted(() => store.getSalesHistory());
const pointHistoriqueDeVentesCourant = ref(null);
</script>

<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="pointHistoriqueDeVentes in store.historiqueDeVentes"
      :key="pointHistoriqueDeVentes.id"
      @click="
        pointHistoriqueDeVentesCourant =
          pointHistoriqueDeVentesCourant !== pointHistoriqueDeVentes
            ? pointHistoriqueDeVentes
            : null
      "
    >
      <div class="flex flex-column">
        <div class="m-2">
          Semaine du {{ pointHistoriqueDeVentes.dateDebutSemaine }} :
          {{ pointHistoriqueDeVentes.quantiteVendue }} x
          {{ pointHistoriqueDeVentes.produit.nom }}
        </div>

        <Transition>
          <div
            class="bg-secondary rounded p-3 text-white"
            v-if="pointHistoriqueDeVentesCourant == pointHistoriqueDeVentes"
          >
            <pre>{{ pointHistoriqueDeVentes }}</pre>
          </div>
        </Transition>
      </div>
    </li>
  </ul>
</template>

<style scoped>
li {
  cursor: pointer;
}

.v-enter-active {
  transition: opacity 1s ease-in-out;
}

.v-enter-from {
  opacity: 0;
}
</style>
