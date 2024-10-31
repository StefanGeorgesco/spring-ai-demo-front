import axios from 'axios';
import { defineStore } from 'pinia';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    salesHistory: [],
    inventoryHistory: [],
  }),
  actions: {
    async getProducts() {
      const { data } = await axios.get(`${apiBaseUrl}/product`);
      this.products = data;
    },
    async getSalesHistory() {
      const { data } = await axios.get(`${apiBaseUrl}/sales-history`);
      this.salesHistory = data;
    },
    async getInventoryHistory() {
      const { data } = await axios.get(`${apiBaseUrl}/inventory-history`);
      this.inventoryHistory = data;
    },
  },
});
