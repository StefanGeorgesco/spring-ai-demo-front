<template>
  <div
    class="spinner-frame px-1 pt-1 rouded opacity-50 position-fixed top-50 start-50 translate-middle"
  >
    <div class="spinner">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.spinner-frame {
  background-color: white;
  z-index: 2000;
}
</style>
