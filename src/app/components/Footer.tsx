import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-500 dark:bg-zinc-800  backdrop-blur-md p-4 shadow-md text-white py-8 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <Image src={"/Logo_OK.png"} alt="Logo" width={100} height={100} />
        <div>
          <h2 className="text-xl font-bold text-white">RefugiApp</h2>
          <p className="mt-2 text-sm">Plataforma de ajuda a refugiados.</p>
        </div>

        {/* Links úteis */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Links úteis</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="hover:underline">
                Início
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:underline">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:underline">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/termos" className="hover:underline">
                Termos de uso
              </Link>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Nos Siga</h3>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Facebook
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Twitter
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="mt-8 text-center text-xs text-gray-200">
        &copy; {new Date().getFullYear()} {"<NextCode />"}. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
