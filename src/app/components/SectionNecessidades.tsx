"use client";

import { useState, useEffect } from "react";

// Definindo o tipo para uma Necessidade
interface Necessidade {
  id: number;
  nome: string;
  item: string;
  quantidade: number;
}

export default function SectionNecessidades() {
  const [nome, setNome] = useState("");
  const [item, setItem] = useState("");
  const [quantidade, setQuantidade] = useState(1);

  // Definindo o estado como um array de Necessidades
  const [necessidades, setNecessidades] = useState<Necessidade[]>([]);

  // Função para buscar as necessidades já registradas
  const fetchNecessidades = async () => {
    try {
      const res = await fetch("/api/necessidades/listar");
      const data = await res.json();
      setNecessidades(data); // Atualiza o estado com a lista de necessidades
    } catch (error) {
      console.error("Erro ao carregar necessidades:", error);
    }
  };

  // Carregar as necessidades quando o componente for montado
  useEffect(() => {
    fetchNecessidades();
  }, []);

  // Função para enviar a necessidade
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/necessidades/criar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, item, quantidade }),
    });

    const textResponse = await res.text(); // Obtenha o texto completo da resposta
    console.log("Resposta da API:", textResponse); // Log da resposta

    if (res.ok) {
      try {
        const data = JSON.parse(textResponse); // Tente converter para JSON
        console.log("Necessidade criada:", data);
        // Limpa os campos do formulário
        setNome("");
        setItem("");
        setQuantidade(1);
        // Atualiza a lista de necessidades
        fetchNecessidades();
      } catch (error) {
        console.error("Erro ao processar a resposta:", error);
        alert("Erro desconhecido. Por favor, tente novamente.");
      }
    } else {
      console.error("Resposta da API não está em formato JSON:", textResponse);
      alert("Erro ao criar necessidade.");
    }
  };

  return (
    <section
      id="necessidades"
      className="w-full min-h-screen bg-gradient-to-r from-white to-blue-400 dark:from-black dark:to-black/90 px-6 py-12 flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Registre uma Necessidade
      </h2>

      {/* Formulário de envio */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md space-y-4"
      >
        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
        />
        <input
          type="text"
          placeholder="Item necessário"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
        />
        <input
          type="number"
          min={1}
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          required
          className="w-full p-3 border border-gray-300 dark:border-zinc-700 rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-white"
        />
        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-500 text-white font-semibold py-3 rounded-md transition duration-200"
        >
          Enviar Necessidade
        </button>
      </form>

      {/* Lista de necessidades registradas */}
      <div className="w-full max-w-3xl mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
          Necessidades registradas
        </h3>
        <ul className="space-y-3">
          {necessidades.map((n) => (
            <li
              key={n.id}
              className="bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 p-4 rounded-lg shadow-sm text-gray-800 dark:text-white"
            >
              <strong>{n.nome}</strong> precisa de{" "}
              <strong>{n.quantidade}</strong> x <em>{n.item}</em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
