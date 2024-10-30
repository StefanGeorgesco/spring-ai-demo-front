import axios from 'axios';
import { defineStore } from 'pinia';

const URL = 'http://localhost:8080/api';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    salesHistory: [],
    inventoryHistory: [],
  }),
  actions: {
    async getProducts() {
      const { data } = await axios.get(`${URL}/product`);
      this.products = data;
    },
    async getSalesHistory() {
      const { data } = await axios.get(`${URL}/sales-history`);
      this.salesHistory = data;
    },
    async getInventoryHistory() {
      const { data } = await axios.get(`${URL}/inventory-history`);
      this.inventoryHistory = data;
    },
  },
});
