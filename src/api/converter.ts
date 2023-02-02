import { storeToRefs } from "pinia";
import axios from "axios";
import type { IConverterAPI } from "@/types/converter";
import { useConverterStore } from "@/stores/converter";

export const getLatestCurrency = async () => {
  const { loading, latestCurrencies } = storeToRefs(useConverterStore());
  try {
    loading.value = true;
    const { data } = await axios.get<IConverterAPI>(
      " https://www.cbr-xml-daily.ru/latest.js"
    );

    latestCurrencies.value = data;
  } catch (e) {
    console.error(e);
  } finally {
    loading.value = false;
  }
};
