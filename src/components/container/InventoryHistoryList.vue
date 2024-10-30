<script setup>
import { useProductStore } from '@/stores/products';
import { onMounted, ref } from 'vue';

const store = useProductStore();
onMounted(() => store.getInventoryHistory());
const currentInventoryHistoryPoint = ref(null);
</script>

<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="inventoryHistoryPoint in store.inventoryHistory"
      :key="inventoryHistoryPoint.id"
      @click="
        currentInventoryHistoryPoint =
          currentInventoryHistoryPoint !== inventoryHistoryPoint
            ? inventoryHistoryPoint
            : null
      "
    >
      <div class="flex flex-column">
        <div class="m-2">
          Semaine du {{ inventoryHistoryPoint.weekStartDate }},
          {{ inventoryHistoryPoint.product.description }} :
          {{ inventoryHistoryPoint.stockQuantity }}
        </div>

        <Transition>
          <div
            class="bg-secondary rounded p-3 text-white"
            v-if="currentInventoryHistoryPoint == inventoryHistoryPoint"
          >
            <pre>{{ inventoryHistoryPoint }}</pre>
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
