<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <div class="content">
      <router-view />
    </div>
  </main>
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss">
.content {
  min-height: calc(100vh - 60px - 176px);
  @media (max-width: 1000px) {
    min-height: calc(100vh - 70px - 328px);
  }
}
</style>
