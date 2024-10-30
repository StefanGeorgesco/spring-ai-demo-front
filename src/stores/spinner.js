import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSpinnerStore = defineStore('spinner', () => {
  const spinnerShown = ref(false);
  function showSpinner() {
    spinnerShown.value = true;
  }
  function hideSpinner() {
    spinnerShown.value = false;
  }
  return { spinnerShown, showSpinner, hideSpinner };
});
