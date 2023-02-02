import { defineStore } from "pinia";
import type { IConverterAPI } from "@/types/converter";

export const useConverterStore = defineStore("converter", {
  state: () => ({
    latestCurrencies: {} as IConverterAPI,
    loading: false,
    convertFrom: 1,
    convertTo: 0,
    fromCurrency: "RUB",
    toCurrency: "AUD",
  }),

  actions: {
    swapCurrencies() {
      const temp = this.convertTo;
      this.convertFrom = temp;
      this.convertTo = this.convertFrom * this.convertFrom;
    },
    exchangeRate() {
      if (this.convertFrom === 1) {
        return (this.convertTo = this.latestCurrencies.rates[this.toCurrency]);
      }

      this.convertTo =
        this.convertFrom * this.latestCurrencies.rates[this.toCurrency];
    },
  },
});
