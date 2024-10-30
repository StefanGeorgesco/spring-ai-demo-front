import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSpinnerStore = defineStore('spinner', () => {
  const shown = ref(false);
  function show() {
    shown.value = true;
  }
  function hide() {
    shown.value = false;
  }
  return { shown, show, hide };
});
