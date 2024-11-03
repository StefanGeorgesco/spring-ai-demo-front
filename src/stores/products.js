import axios from 'axios';
import { defineStore } from 'pinia';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const useProductStore = defineStore('productStore', {
  state: () => ({
    produits: [],
    historiqueDeVentes: [],
    historiqueDeStock: [],
  }),
  actions: {
    async getProducts() {
      const { data } = await axios.get(`${apiBaseUrl}/product`);
      this.produits = data;
    },
    async getSalesHistory() {
      const { data } = await axios.get(`${apiBaseUrl}/sales-history`);
      this.historiqueDeVentes = data;
    },
    async getInventoryHistory() {
      const { data } = await axios.get(`${apiBaseUrl}/inventory-history`);
      this.historiqueDeStock = data;
    },
  },
});
