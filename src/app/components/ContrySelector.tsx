"use client";
import { useEffect, useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";

interface Country {
  name: string;
  flag: string;
  code: string;
}

export default function CountrySelector() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selected, setSelected] = useState<Country | null>(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((country: any) => ({
            name: country.name.common,
            flag: country.flags.png,
            code: country.cca2,
          }))
          .sort((a: Country, b: Country) => a.name.localeCompare(b.name));
        setCountries(sorted);
        setSelected(
          sorted.find((c: { code: string }) => c.code === "BR") || null
        );
      });
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <Menu as="div" className="relative inline-block text-left w-full">
        <div>
          <Menu.Button className="inline-flex justify-between w-full items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
            {selected ? (
              <div className="flex items-center space-x-2">
                <Image
                  src={selected.flag}
                  alt={selected.name}
                  width={24}
                  height={16}
                  className="border"
                />
                <span>{selected.name}</span>
              </div>
            ) : (
              <span>Selecione um país</span>
            )}
            {/* Chevron Down como SVG inline */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.657a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 max-h-60 overflow-y-auto">
            <div className="py-1">
              {countries.map((country) => (
                <Menu.Item key={country.code}>
                  {({ active }) => (
                    <button
                      onClick={() => setSelected(country)}
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex items-center w-full px-4 py-2 text-sm text-gray-700`}
                    >
                      <Image
                        src={country.flag}
                        alt={country.name}
                        width={24}
                        height={16}
                        className="mr-2 border"
                      />
                      {country.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
