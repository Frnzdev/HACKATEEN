"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const currencies = [
  { code: "USD", name: "Dólar Americano" },
  { code: "EUR", name: "Euro" },
  { code: "BRL", name: "Real Brasileiro" },
  { code: "ARS", name: "Peso Argentino" },
  { code: "CLP", name: "Peso Chileno" },
  { code: "COP", name: "Peso Colombiano" },
  { code: "PEN", name: "Sol Peruano" },
  { code: "UYU", name: "Peso Uruguaio" },
  { code: "PYG", name: "Guarani Paraguaio" },
  { code: "BOB", name: "Boliviano" },
  { code: "VES", name: "Bolívar Venezuelano" },
  { code: "GBP", name: "Libra Esterlina" },
];

export default function Converter() {
  const { t } = useTranslation();
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BRL");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "102d59737bf9bf5a5849f58fb03cf2ce";

  async function handleConvert() {
    setLoading(true);
    try {
      const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}&access_key=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.success === false) {
        console.error("Erro da API:", data.error);
        alert(t('Converter.api_error', { info: data.error.info }));
        setResult(null);
      } else if (typeof data.result === "number") {
        setResult(data.result);
      } else {
        console.error("Resposta inesperada da API:", data);
        alert(t('Converter.unexpected_api_response'));
        setResult(null);
      }
    } catch (error) {
      console.error("Erro ao converter moeda:", error);
      alert(t('Converter.api_connection_error'));
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section
        id="conversor"
        className="relative min-h-screen flex flex-col items-center bg-gradient-to-r from-white to-blue-400 justify-center px-6 dark:from-black dark:to-black/90"
      >
        <div className="absolute inset-0 md:hidden z-0">
          <Image
            src="/Money.png"
            alt="Imagem de fundo dinheiro"
            layout="fill"
            objectFit="cover"
            className="opacity-20 blur-sm"
            data-aos="fade-up-left"
            priority
          />
        </div>

        <h1
          data-aos="fade-up-left"
          className="flex justify-center font-bold mb-5 text-2xl z-10 text-center px-4"
        >
          {t('Converter.page_title')}
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-screen-xl px-6 z-10">
          <div
            data-aos="fade-up-left"
            className="relative bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md text-black dark:text-white rounded-2xl shadow-xl p-10 w-full max-w-lg"
          >
            <h1 className="text-3xl font-bold mb-6 text-center">
              {t('Converter.converter_title')}
            </h1>
            <span className="flex text-gray-400 justify-center mb-4 text-sm">
              {t('Converter.converter_subtitle')}
            </span>

            <div className="space-y-6">
              <div>
                <label htmlFor="amount" className="block font-medium mb-1">
                  {t('Converter.amount_label')}
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full p-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black dark:text-black dark:bg-gray-300"
                />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="from" className="block font-medium mb-1">
                    {t('Converter.from_label')}
                  </label>
                  <select
                    id="from"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:text-black dark:bg-gray-300"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code} - {t(`Countries.${currency.code}`, currency.name)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex-1">
                  <label htmlFor="to" className="block font-medium mb-1">
                    {t('Converter.to_label')}
                  </label>
                  <select
                    id="to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:text-black dark:bg-gray-300"
                  >
                    {currencies.map((currency) => (
                      <option key={currency.code} value={currency.code}>
                        {currency.code} - {t(`Countries.${currency.code}`, currency.name)}
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
                    <span>{t('Converter.converting')}</span>
                  </div>
                ) : (
                  t('Converter.convert_button')
                )}
              </button>

              {result !== null && (
                <div className="text-center mt-6 text-xl font-medium">
                  {amount} {from} ={" "}
                  <span className="text-blue-600 dark:text-blue-400 font-bold">
                    {result.toFixed(2)} {to}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:block md:w-1/2 lg:w-1/3 ml-10">
            <Image
              src="/Money.png"
              width={900}
              height={900}
              style={{ height: "auto", width: "100%" }}
              alt="Ícone de dinheiro"
            />
          </div>
        </div>
      </section>
    </>
  );
}