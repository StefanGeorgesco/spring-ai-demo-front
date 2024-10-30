<script setup>
import { useProductStore } from '@/stores/products';
import { onMounted, ref } from 'vue';

const store = useProductStore();
onMounted(() => store.getSalesHistory());
const currentSalesHistoryPoint = ref(null);
</script>

<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="salesHistoryPoint in store.salesHistory"
      :key="salesHistoryPoint.id"
      @click="
        currentSalesHistoryPoint =
          currentSalesHistoryPoint !== salesHistoryPoint
            ? salesHistoryPoint
            : null
      "
    >
      <div class="flex flex-column">
        <div class="m-2">
          Semaine du {{ salesHistoryPoint.weekStartDate }},
          {{ salesHistoryPoint.product.description }} :
          {{ salesHistoryPoint.salesAmount }} (quantité
          {{ salesHistoryPoint.quantitySold }})
        </div>

        <Transition>
          <div
            class="bg-secondary rounded p-3 text-white"
            v-if="currentSalesHistoryPoint == salesHistoryPoint"
          >
            <pre>{{ salesHistoryPoint }}</pre>
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
