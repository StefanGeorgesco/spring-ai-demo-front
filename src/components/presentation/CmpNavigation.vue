<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/recommendations">Recommandations</RouterLink>
    <RouterLink to="/analyst">Analyste</RouterLink>
    <RouterLink to="/products">Produits</RouterLink>
    <RouterLink to="/sales-history">Ventes</RouterLink>
    <RouterLink to="/inventory-history">Stock</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 18px;
  text-align: center;
}

nav a {
  color: gray;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  font-weight: 600;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  text-decoration: none;
  display: inline-block;
  padding: 0 0.5rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
