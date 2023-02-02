<script setup lang="ts">
import { onMounted } from "vue";
import { getCurrency } from "@/api/currency";
import { storeToRefs } from "pinia";
import { useCurrencyStore } from "@/stores/currency";
import BaseArrow from "@/components/BaseArrow.vue";

const { currencies, loading, search, filteredCurrencies } = storeToRefs(
  useCurrencyStore()
);

onMounted(async () => {
  await getCurrency();
});
</script>
<template>
  <section v-if="!loading" class="wrapper">
    <input type="text" v-model="search" class="container" />
    <div class="heading">
      <h1 class="container">Валютные пары</h1>
    </div>

    <ul class="container" v-if="!search">
      <li v-for="(currency, idx) in currencies.Valute" :key="idx">
        <span>RUB/{{ currency.CharCode }} </span>
        <span> {{ currency.Value.toFixed(2) }} </span>
        <span> {{ (currency.Value - currency.Previous).toFixed(2) }}</span>

        <BaseArrow :current-value="currency?.Value - currency?.Previous" />
      </li>
    </ul>

    <ul class="container" v-else>
      <li v-for="(currency, idx) in filteredCurrencies" :key="idx">
        RUB/{{ currency.CharCode }}
        {{ currency.Value.toFixed(2) }}
        {{ (currency.Value - currency.Previous).toFixed(2) }}

        <BaseArrow :current-value="currency?.Value - currency?.Previous" />
      </li>
    </ul>
  </section>
</template>
<style scoped>
input {
  padding: 0.25rem;
  display: flex;
}

ul > li {
  padding-block: 0.25rem;
  font-size: 1.2rem;
}

li > * + * {
  padding-left: 2rem;
}

.wrapper > * + * {
  margin-top: 1.5rem;
}

.heading {
  background-color: #f2f6fa;
  padding-block: 0.75rem;
}

.container {
  max-width: 1200px;
  margin-inline: auto;
}
</style>
