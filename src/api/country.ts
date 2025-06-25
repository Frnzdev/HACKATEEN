export interface ApiCountry {
  name: { common: string };
  flags?: { png?: string; svg?: string };
  cca2: string;
}

export const fetchCountries = async (): Promise<ApiCountry[]> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data: ApiCountry[] = await response.json();
  return data;
};
