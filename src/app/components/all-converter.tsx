"use client";
import React, { useState } from "react";

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
      let celsius =
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

export default function MedidaConverter() {
  const [type, setType] = useState<keyof typeof units>("length");
  const [from, setFrom] =
    useState<keyof (typeof units)["length"]["units"]>("m");
  const [to, setTo] = useState<keyof (typeof units)["length"]["units"]>("cm");
  const [value, setValue] = useState<string>("");

  const result = value
    ? units[type].convert(parseFloat(value), from, to).toFixed(4)
    : "";

  const handleTypeChange = (val: keyof typeof units) => {
    setType(val);
    const [first, second] = Object.keys(units[val].units);
    setFrom(first as keyof (typeof units)["length"]["units"]);
    setTo(second as keyof (typeof units)["length"]["units"]);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Valida para garantir que o valor é um número ou vazio
    if (inputValue === "" || !isNaN(Number(inputValue))) {
      setValue(inputValue);
    }
  };

  return (
    <section
      id="medidas"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-6 py-8"
    >
      <h1 className="font-bold mb-5 text-2xl text-center">
        Precisa converter alguma medida?
      </h1>

      <div className="w-full max-w-xl">
        <div className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Conversor de Medidas
          </h2>
          <span className="block text-center text-sm text-gray-500 mb-6">
            Selecione o tipo e converta entre unidades
          </span>

          <div className="space-y-4">
            <select
              value={type}
              onChange={(e) =>
                handleTypeChange(e.target.value as keyof typeof units)
              }
              className="w-full border rounded-md p-2 dark:bg-zinc-800 dark:text-white"
            >
              {Object.entries(units).map(([key, data]) => (
                <option key={key} value={key}>
                  {data.label}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Valor"
              value={value}
              onChange={handleValueChange}
              className="w-full border rounded-md p-2 dark:bg-zinc-800 dark:text-white"
            />

            <div className="grid grid-cols-2 gap-2">
              <select
                value={from}
                onChange={(e) =>
                  setFrom(
                    e.target.value as keyof (typeof units)["length"]["units"]
                  )
                }
                className="w-full border rounded-md p-2 dark:bg-zinc-800 dark:text-white"
              >
                {Object.entries(units[type].units).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>

              <select
                value={to}
                onChange={(e) =>
                  setTo(
                    e.target.value as keyof (typeof units)["length"]["units"]
                  )
                }
                className="w-full border rounded-md p-2 dark:bg-zinc-800 dark:text-white"
              >
                {Object.entries(units[type].units).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {value && (
              <div className="text-center mt-4 text-xl font-medium">
                {value} {units[type].units[from]} ={" "}
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {result} {units[type].units[to]}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
