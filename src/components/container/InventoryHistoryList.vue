<script setup>
import { useProductStore } from '@/stores/products';
import { onMounted, ref } from 'vue';

const store = useProductStore();
onMounted(() => store.getInventoryHistory());
const pointHistoriqueDeStockCourant = ref(null);
</script>

<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="pointHistoriqueDeStock in store.historiqueDeStock"
      :key="pointHistoriqueDeStock.id"
      @click="
        pointHistoriqueDeStockCourant =
          pointHistoriqueDeStockCourant !== pointHistoriqueDeStock
            ? pointHistoriqueDeStock
            : null
      "
    >
      <div class="flex flex-column">
        <div class="m-2">
          Semaine du {{ pointHistoriqueDeStock.dateDebutSemaine }} :
          {{ pointHistoriqueDeStock.produit.nom }} /
          {{ pointHistoriqueDeStock.quantiteEnStock }}
        </div>

        <Transition>
          <div
            class="bg-secondary rounded p-3 text-white"
            v-if="pointHistoriqueDeStockCourant == pointHistoriqueDeStock"
          >
            <pre>{{ pointHistoriqueDeStock }}</pre>
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
