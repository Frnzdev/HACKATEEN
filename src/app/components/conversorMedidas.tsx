"use client";
import { useState } from "react";
import Image from "next/image";

const units = {
  length: {
    label: "Comprimento",
    units: {
      m: "Metro",
      cm: "Centímetro",
      in: "Polegada",
      ft: "Pé",
      km: "Quilômetro",
      mi: "Milha",
    },
    convert: (value: number, from: string, to: string) => {
      const conversions: Record<string, number> = {
        m: 1,
        cm: 0.01,
        in: 0.0254,
        ft: 0.3048,
        km: 1000,
        mi: 1609.34,
      };
      return (value * conversions[from]) / conversions[to];
    },
  },
  weight: {
    label: "Peso",
    units: {
      kg: "Quilo",
      g: "Grama",
      lb: "Libra",
      oz: "Onça",
      mg: "Miligramas",
      t: "Tonelada",
    },
    convert: (value: number, from: string, to: string) => {
      const conversions: Record<string, number> = {
        kg: 1,
        g: 0.001,
        mg: 0.000001,
        lb: 0.453592,
        oz: 0.0283495,
        t: 1000,
      };
      return (value * conversions[from]) / conversions[to];
    },
  },
  temperature: {
    label: "Temperatura",
    units: { C: "Celsius", F: "Fahrenheit", K: "Kelvin" },
    convert: (value: number, from: string, to: string) => {
      if (from === to) return value;
      const celsius =
        from === "C"
          ? value
          : from === "F"
          ? (value - 32) * (5 / 9)
          : value - 273.15;
      return to === "C"
        ? celsius
        : to === "F"
        ? (celsius * 9) / 5 + 32
        : celsius + 273.15;
    },
  },
};

export default function Converter() {
  const [type, setType] = useState<keyof typeof units>("length");
  const [from, setFrom] =
    useState<keyof (typeof units)["length"]["units"]>("m");
  const [to, setTo] = useState<keyof (typeof units)["length"]["units"]>("cm");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = () => {
    setLoading(true);
    try {
      const conversionResult = units[type].convert(amount, from, to);
      setResult(conversionResult);
    } catch (error) {
      console.error("Erro ao converter:", error);
      alert("Erro ao realizar a conversão.");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="conversor"
      className="relative min-h-screen flex flex-col items-center bg-gradient-to-r from-white to-blue-400 justify-center px-6 dark:from-black dark:to-black/90"
    >
      <div className="absolute inset-0 md:hidden z-0">
        <Image
          src="/Money.png"
          alt="Imagem de fundo"
          layout="fill"
          objectFit="cover"
          className="opacity-20 blur-sm"
          priority
        />
      </div>

      <h1 className="flex justify-center font-bold mb-5 text-2xl z-10 text-center px-4">
        Precisa converter algo?
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen-xl px-6 z-10">
        <div className="relative bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md text-black dark:text-white rounded-2xl shadow-xl p-10 w-full max-w-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Conversor de Medidas, Temperatura e Peso
          </h1>
          <span className="flex text-gray-400 justify-center mb-4 text-sm">
            Selecione o tipo e converta entre unidades
          </span>

          <div className="space-y-6">
            <div>
              <label htmlFor="amount" className="block font-medium mb-1">
                Valor
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:text-black dark:bg-gray-300"
              />
            </div>

            <div>
              <label htmlFor="type" className="block font-medium mb-1">
                Tipo de Conversão
              </label>
              <select
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value as keyof typeof units)}
                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:text-black dark:bg-gray-300"
              >
                {Object.entries(units).map(([key, data]) => (
                  <option key={key} value={key}>
                    {data.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="from" className="block font-medium mb-1">
                  De
                </label>
                <select
                  id="from"
                  value={from}
                  onChange={(e) =>
                    setFrom(
                      e.target
                        .value as keyof (typeof units)[typeof type]["units"]
                    )
                  }
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:text-black dark:bg-gray-300"
                >
                  {Object.entries(units[type].units).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label htmlFor="to" className="block font-medium mb-1">
                  Para
                </label>
                <select
                  id="to"
                  value={to}
                  onChange={(e) =>
                    setTo(
                      e.target
                        .value as keyof (typeof units)[typeof type]["units"]
                    )
                  }
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:text-black dark:bg-gray-300"
                >
                  {Object.entries(units[type].units).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleConvert}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 dark:border dark:border-white dark:bg-black dark:hover:bg-gray-200 duration-200 dark:hover:text-black"
            >
              {loading ? (
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-5 h-5 border-4 border-blue-700 border-t-transparent rounded-full animate-spin" />
                  <span>Convertendo...</span>
                </div>
              ) : (
                "Converter"
              )}
            </button>

            {result !== null && (
              <div className="text-center mt-6 text-xl font-medium">
                {amount} {from} ={" "}
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {result.toFixed(4)} {to}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
