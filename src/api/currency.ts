import axios from "axios";
import { useCurrencyStore } from "@/stores/currency";
import { storeToRefs } from "pinia";
import type { ICurrencyAPI } from "@/types/currency";

export const getCurrency = async () => {
  const { loading, currencies } = storeToRefs(useCurrencyStore());
  try {
    loading.value = true;
    const { data } = await axios.get<ICurrencyAPI>(
      "https://www.cbr-xml-daily.ru/daily_json.js"
    );

    currencies.value = data;
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};
