<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();

const router = useRouter();

router.beforeEach(to => {
  document.title = to.name;
  return true;
});
</script>

<template>
  <div class="navbar bg-light">
    <div class="container">
      <a class="navbar-brand text-secondary" href="#">
        <h2>Analyste IA / {{ route.name }}</h2>
      </a>
      <div class="d-flex align-items-center">
        <span class="details">
          <slot />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  height: 50px;
  transition: height 0.5s ease;
  flex-wrap: nowrap;
}

.details {
  opacity: 0;
  transition: opacity 1s ease;
}

.navbar:hover {
  height: 100px;
}

.navbar:hover .details {
  opacity: 1;
}
</style>
