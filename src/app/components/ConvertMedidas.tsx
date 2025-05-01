"use client";

import { useState } from "react";

const units = {
  comprimento: ["Metro", "Kilômetro", "Milha", "inch", "Pés"],
  peso: ["Grama", "Quilograma", "Libra", "Onças"],
  temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
};

export default function MeasureConverter() {
  const [category, setCategory] = useState<keyof typeof units>("comprimento");
  const [from, setFrom] = useState("Metro");
  const [to, setTo] = useState("Kilômetro");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleConvert() {
    setLoading(true);
    try {
      // Nova URL da API Measurement Unit Converter com sua chave de API
      const url = `https://measurement-unit-converter.p.rapidapi.com/convert/${category}?from=${from}&to=${to}&value=${amount}`;

      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "ab1eefe1acmshfa055107f66655bp1c15b3jsn0f1200ba5c9f",
          "x-rapidapi-host": "measurement-unit-converter.p.rapidapi.com",
        },
      });

      if (!res.ok) {
        throw new Error("Erro na requisição API");
      }

      const data = await res.json();

      if (data.result !== undefined) {
        setResult(data.result);
      } else {
        alert("Erro na conversão.");
        setResult(null);
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com a API.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="convert-all"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-100 to-green-300 dark:from-black dark:to-black/90 transition-colors duration-500"
    >
      <h1 className="text-2xl font-bold mb-5 text-center">
        Conversor de Medidas
      </h1>
      <div className="bg-white dark:bg-zinc-900 text-black dark:text-white rounded-2xl shadow-xl p-10 w-full max-w-lg">
        <div className="space-y-6">
          <div>
            <label className="block font-medium mb-1">Categoria</label>
            <select
              value={category}
              onChange={(e) => {
                const cat = e.target.value as keyof typeof units;
                setCategory(cat);
                setFrom(units[cat][0]);
                setTo(units[cat][1]);
              }}
              className="w-full p-3 rounded-lg border bg-gray-100 dark:bg-gray-300 dark:text-black"
            >
              {Object.keys(units).map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Valor</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-3 rounded-lg border bg-gray-100 dark:bg-gray-300 dark:text-black"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">De</label>
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full p-3 rounded-lg border bg-gray-100 dark:bg-gray-300 dark:text-black"
              >
                {units[category].map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block font-medium mb-1">Para</label>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full p-3 rounded-lg border bg-gray-100 dark:bg-gray-300 dark:text-black"
              >
                {units[category].map((unit) => (
                  <option key={unit} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleConvert}
            disabled={loading}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 dark:bg-black dark:hover:bg-gray-200 dark:hover:text-black"
          >
            {loading ? "Convertendo..." : "Converter"}
          </button>

          {result !== null && (
            <div className="text-center mt-6 text-xl font-medium">
              {amount} {from} ={" "}
              <span className="text-green-600 dark:text-green-400 font-bold">
                {result.toFixed(4)} {to}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
