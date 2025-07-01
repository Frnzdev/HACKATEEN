export interface ApiCountry {
  name: { common: string };
  flags?: { png?: string; svg?: string };
  cca2: string;
}

export interface Country {
  name: string;
  flag: string;
  code: string;
}

export const fetchCountries = async (): Promise<ApiCountry[]> => {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca2");
  if (!response.ok) {
    throw new Error(`Erro HTTP! status: ${response.status}`);
  }
  const data = await response.json();
  if (!Array.isArray(data)) {
    console.error("Formato inesperado da API:", data);
    return [];
  }
  return data;
};
