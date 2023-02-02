<script setup lang="ts">
import { useConverterStore } from "@/stores/converter";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { getLatestCurrency } from "@/api/converter";

const store = useConverterStore();
const {
  loading,
  latestCurrencies,
  convertFrom,
  convertTo,
  toCurrency,
  fromCurrency,
} = storeToRefs(store);

onMounted(async () => {
  await getLatestCurrency();
  convertTo.value = latestCurrencies.value.rates["AED"];
});
</script>
<template>
  <div v-if="!loading" class="wrapper">
    <div class="flex">
      <select v-model="fromCurrency" @change="store.exchangeRate">
        <option :value="latestCurrencies.base">
          {{ latestCurrencies.base }}
        </option>
      </select>

      <button @click="store.swapCurrencies">swap</button>

      <select v-model="toCurrency" @change="store.exchangeRate">
        <option
          v-for="(_, currency, idx) in latestCurrencies.rates"
          :key="idx"
          :value="currency"
        >
          {{ currency }}
        </option>
      </select>
    </div>

    <div class="flex">
      <input
        type="number"
        v-model.number="convertFrom"
        @input="store.exchangeRate"
      />
      <input type="number" v-model.number="convertTo" />
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.flex {
  display: flex;
  gap: 1rem;
}

input {
  padding: 0.25rem;
}
</style>
