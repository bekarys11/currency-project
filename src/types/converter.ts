export interface IConverterAPI {
  date: string;
  timestamp: number;
  base: string;
  rates: {
    [key: string]: number;
  };
}
