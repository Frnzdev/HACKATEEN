"use client";
import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function MedidaConverter() {
  const { t } = useTranslation();

  const units = useMemo(() => ({
    length: {
      label: t('MeasureConverter.length'),
      units: {
        m: t('MeasureConverter.units.m'),
        cm: t('MeasureConverter.units.cm'),
        in: t('MeasureConverter.units.in'),
        ft: t('MeasureConverter.units.ft'),
        km: t('MeasureConverter.units.km'),
        mi: t('MeasureConverter.units.mi')
      },
      convert: (value: number, from: string, to: string) => {
        const conversions: Record<string, number> = { m: 1, cm: 0.01, in: 0.0254, ft: 0.3048, km: 1000, mi: 1609.34 };
        return (value * conversions[from]) / conversions[to];
      },
    },
    weight: {
      label: t('MeasureConverter.weight'),
      units: {
        kg: t('MeasureConverter.units.kg'),
        g: t('MeasureConverter.units.g'),
        lb: t('MeasureConverter.units.lb'),
        oz: t('MeasureConverter.units.oz'),
        mg: t('MeasureConverter.units.mg'),
        t: t('MeasureConverter.units.t')
      },
      convert: (value: number, from: string, to: string) => {
        const conversions: Record<string, number> = { kg: 1, g: 0.001, mg: 1e-6, lb: 0.453592, oz: 0.0283495, t: 1000 };
        return (value * conversions[from]) / conversions[to];
      },
    },
    temperature: {
      label: t('MeasureConverter.temperature'),
      units: {
        C: t('MeasureConverter.units.C'),
        F: t('MeasureConverter.units.F'),
        K: t('MeasureConverter.units.K')
      },
      convert: (value: number, from: string, to: string) => {
        if (from === to) return value;
        let celsius: number;
        if (from === 'F') {
          celsius = (value - 32) * 5/9;
        } else if (from === 'K') {
          celsius = value - 273.15;
        } else {
          celsius = value;
        }

        if (to === 'F') {
          return (celsius * 9/5) + 32;
        } else if (to === 'K') {
          return celsius + 273.15;
        }
        return celsius;
      },
    },
  }), [t]);

  type UnitType = keyof typeof units;

  const [type, setType] = useState<UnitType>("length");
  const [from, setFrom] = useState<string>("m");
  const [to, setTo] = useState<string>("cm");
  const [value, setValue] = useState<string>("");

  const result = value ? units[type].convert(parseFloat(value), from, to).toFixed(4) : "";

  const handleTypeChange = (val: UnitType) => {
    setType(val);
    const [first, second] = Object.keys(units[val].units);
    setFrom(first);
    setTo(second);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue === "" || /^-?\d*\.?\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  const getUnitLabel = (type: UnitType, key: string) => {
    return (units[type].units as Record<string, string>)[key];
  };

  return (
    <section
      id="medidas"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-white to-blue-400 px-6 dark:from-black dark:to-black/90"
    >
      <h1 className="font-bold mb-5 text-2xl text-center">
        {t('MeasureConverter.page_title')}
      </h1>

      <div className="w-full max-w-xl">
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            {t('MeasureConverter.converter_title')}
          </h2>
          <span className="block text-center text-sm text-gray-500 mb-6">
            {t('MeasureConverter.converter_subtitle')}
          </span>

          <div className="space-y-4">
            <select
              value={type}
              onChange={(e) => handleTypeChange(e.target.value as UnitType)}
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
              placeholder={t('MeasureConverter.value_placeholder') || 'Valor'}
              value={value}
              onChange={handleValueChange}
              className="w-full border rounded-md p-2 dark:bg-zinc-800 dark:text-white"
            />

            <div className="grid grid-cols-2 gap-2">
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
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
                onChange={(e) => setTo(e.target.value)}
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
                {value} {getUnitLabel(type, from)} ={" "}
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {result} {getUnitLabel(type, to)}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}