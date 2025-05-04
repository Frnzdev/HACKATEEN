"use client";
import { useState, useEffect } from "react";

type Necessidade = {
  id: number;
  nome: string;
  item: string;
  quantidade: number;
};

export default function Necessidades() {
  const [necessidades, setNecessidades] = useState<Necessidade[]>([]);
  const [nome, setNome] = useState("");
  const [item, setItem] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Adicionando o estado de carregamento

  useEffect(() => {
    fetchNecessidades();
  }, []);

  const fetchNecessidades = async () => {
    setIsLoading(true); // Inicia o carregamento
    const res = await fetch("/api/necessidades");
    const data = await res.json();
    setNecessidades(data);
    setIsLoading(false); // Finaliza o carregamento
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/necessidades", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, item, quantidade }),
    });

    if (res.ok) {
      setNome("");
      setItem("");
      setQuantidade(1);
      fetchNecessidades();
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Necessidades</h1>

      <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded">
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Quantidade"
          value={quantidade}
          onChange={(e) => setQuantidade(parseInt(e.target.value))}
          className="w-full border p-2 rounded"
          min={1}
          required
        />
        <button
          type="submit"
          className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded dark:bg-black dark:border dark:border-white dark:hover:bg-gray-200 duration-200 dark:hover:text-black"
        >
          Enviar
        </button>
      </form>

      {isLoading ? ( // Exibe o indicador de carregamento
        <div className="flex justify-center items-center space-x-2">
          <div className="w-5 h-5 border-4 border-blue-700 border-t-transparent rounded-full animate-spin" />
          <span>Convertendo...</span>
        </div>
      ) : (
        <div className="space-y-2">
          {necessidades.map((n) => (
            <div key={n.id} className="border p-3 rounded shadow">
              <strong>{n.nome}</strong> precisa de{" "}
              <strong>
                {n.quantidade}x {n.item}
              </strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
