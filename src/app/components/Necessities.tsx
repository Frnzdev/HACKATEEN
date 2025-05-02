"use client";

import { useEffect, useState } from "react";

type Necessity = {
  id: string;
  item: string;
  quantity: string;
  location: string;
  notes?: string;
  createdAt: string;
};

export default function Necessities() {
  const [necessities, setNecessities] = useState<Necessity[]>([]);
  const [form, setForm] = useState({
    item: "",
    quantity: "",
    location: "",
    notes: "",
  });
  const [filter, setFilter] = useState({ item: "", location: "" });
  const [loading, setLoading] = useState(false);

  const fetchNecessities = async () => {
    try {
      const res = await fetch("/api/necessities");
      const data = await res.json();
      setNecessities(data);
    } catch (error) {
      console.error("Erro ao buscar necessidades:", error);
    }
  };

  useEffect(() => {
    fetchNecessities();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/necessities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ item: "", quantity: "", location: "", notes: "" });
        await fetchNecessities();
      } else {
        console.error("Erro ao enviar necessidade");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setLoading(false);
    }
  };

  const filtered = necessities.filter(
    (n) =>
      (filter.item
        ? n.item.toLowerCase().includes(filter.item.toLowerCase())
        : true) &&
      (filter.location
        ? n.location.toLowerCase().includes(filter.location.toLowerCase())
        : true)
  );

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold">Necessidades Atuais</h1>

      {/* Filtro */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Filtrar por item"
          className="border p-2 flex-1"
          value={filter.item}
          onChange={(e) => setFilter({ ...filter, item: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filtrar por cidade"
          className="border p-2 flex-1"
          value={filter.location}
          onChange={(e) => setFilter({ ...filter, location: e.target.value })}
        />
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="border p-4 rounded space-y-3 bg-gray-50"
      >
        <h2 className="font-semibold text-lg">Nova necessidade</h2>
        <input
          type="text"
          placeholder="Tipo de item"
          className="w-full border p-2"
          value={form.item}
          onChange={(e) => setForm({ ...form, item: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Quantidade"
          className="w-full border p-2"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Cidade/Estado"
          className="w-full border p-2"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />
        <textarea
          placeholder="Observações (opcional)"
          className="w-full border p-2"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white px-4 py-2 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>

      {/* Lista de necessidades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((n) => (
          <div key={n.id} className="border rounded p-4 shadow bg-white">
            <h3 className="font-bold">{n.item}</h3>
            <p>
              <strong>Quantidade:</strong> {n.quantity}
            </p>
            <p>
              <strong>Local:</strong> {n.location}
            </p>
            {n.notes && (
              <p>
                <strong>Obs:</strong> {n.notes}
              </p>
            )}
            <p className="text-sm text-gray-500 mt-2">
              {new Date(n.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
