export async function convertUnit(
  category: string,
  fromUnit: string,
  toUnit: string,
  value: number
) {
  const url = `https://measurement-unit-converter.p.rapidapi.com/convert/${category}/${fromUnit}/${toUnit}/${value}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!, // Use variável de ambiente
      "X-RapidAPI-Host": "measurement-unit-converter.p.rapidapi.com",
    },
  });

  if (!res.ok) throw new Error("Erro na conversão");

  const data = await res.json();
  return data;
}
