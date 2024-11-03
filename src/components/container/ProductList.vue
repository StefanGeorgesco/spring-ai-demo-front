<script setup>
import { useProductStore } from '@/stores/products';
import { onMounted, ref } from 'vue';

const store = useProductStore();
onMounted(() => store.getProducts());
const currentProduct = ref(null);
</script>

<template>
  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="produit in store.produits"
      :key="produit.id"
      @click="currentProduct = currentProduct !== produit ? produit : null"
    >
      <div class="flex flex-column">
        <div class="m-2">{{ produit.nom }}</div>

        <Transition>
          <div
            class="bg-secondary rounded p-3 text-white"
            v-if="currentProduct == produit"
          >
            <pre>{{ produit }}</pre>
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
