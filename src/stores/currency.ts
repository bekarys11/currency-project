import { defineStore } from "pinia";
import type { ICurrencyAPI, IValute } from "@/types/currency";

export const useCurrencyStore = defineStore("currency", {
  state: () => ({
    currencies: {} as ICurrencyAPI,
    loading: false,
    search: "",
  }),

  getters: {
    filteredCurrencies(): IValute[] {
      let filtered: IValute[] = [];
      for (const key in this.currencies.Valute) {
        // if valute name contains search string, add to filtered list
        if (
          this.currencies.Valute[key].Name.toLowerCase().includes(
            this.search.toLowerCase()
          )
        ) {
          filtered.push(this.currencies.Valute[key]);
        }

        // if valute charcode equals to search string, show the valute
        if (
          this.currencies.Valute[key].CharCode === this.search.toUpperCase()
        ) {
          filtered = [this.currencies.Valute[key]];
        }
      }
      return filtered;
    },
  },
});
