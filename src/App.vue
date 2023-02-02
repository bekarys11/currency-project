<script setup lang="ts">
import CurrencyList from "@/pages/CurrencyList.vue";
import CurrencyConverter from "@/pages/CurrencyConverter.vue";
import { ref } from "vue";

const currentPage = ref(CurrencyList);
</script>

<template>
  <main>
    <div class="tabs">
      <button @click="currentPage = CurrencyList">list</button>
      <button @click="currentPage = CurrencyConverter">converter</button>
    </div>
    <component :is="currentPage" />
  </main>
</template>

<style scoped>
.tabs {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

button {
  width: 8rem;
  height: 2.4rem;
  border: none;
  border-radius: 10%;
}
</style>
