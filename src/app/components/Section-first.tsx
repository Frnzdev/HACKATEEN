import Image from "next/image";
import Link from "next/link";
import ButtonToggle from "./button-toggle";

export default function SectionFirst() {
  return (
    <section className="overflow-x-hidden w-full h-screen flex items-center bg-gradient-to-r from-white to-blue-400 justify-center px-6 dark:from-black dark:to-black/90">
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
            <Link href="">
              <ButtonToggle titulo="Conversões" />
            </Link>
            <Link
              href="#localizacao"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 text-center dark:bg-black/50 dark:text-white dark:border dark:border-white dark:hover:bg-gray-200 duration-200 dark:hover:text-black"
            >
              Onde estou?
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
            className="object-contain max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
