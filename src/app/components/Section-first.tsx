import Image from "next/image";
import Link from "next/link";

export default function SectionFirst() {
  return (
    <section className="w-full h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left max-w-6xl">
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-bold mb-4">Juntos por um Recomeço</h1>
          <p className="text-lg leading-relaxed mb-6">
            Somos uma iniciativa que oferece apoio a pessoas refugiadas,
            <br />
            ajudando na adaptação, integração e construção de uma nova vida com
            dignidade.
            <br />
            Oferecemos orientação, cursos, acolhimento e oportunidades.
            <br />
            <strong>Refúgio é um direito. Recomeçar é possível.</strong>
          </p>

          {/* Botões abaixo do texto */}
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link href="#saiba-mais">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                Conversões
              </button>
            </Link>
            <Link href="#doar">
              <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300">
                Onde estou?
              </button>
            </Link>
          </div>
        </div>

        {/* Imagem visível apenas em telas md+ */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center">
          <Image
            src="/Celular.png"
            alt="Celular na mão"
            width={400}
            height={400}
            className="object-contain max-w-full h-auto" // Ajuste para evitar overflow
          />
        </div>
      </div>
    </section>
  );
}
