import Link from "next/link";

export default function Info() {
  return (
    <section
      id="informacoes"
      className="w-full py-16 px-6 bg-gradient-to-r from-white to-blue-400 dark:from-black dark:to-black/90"
    >
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          Informações importantes para refugiados
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* ONGs */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              ONGs de Apoio
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-gray-300">
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.acnur.org"
                  target="_blank"
                >
                  👐 ACNUR - Agência da ONU para Refugiados
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.caritas.org.br"
                  target="_blank"
                >
                  🤝 Cáritas Brasileira
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.imdh.org.br"
                  target="_blank"
                >
                  🌍 Instituto Migrações e Direitos Humanos (IMDH)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.msf.org"
                  target="_blank"
                >
                  🏥 Médicos Sem Fronteiras
                </Link>
              </li>
            </ul>
          </div>

          {/* Oportunidades de Trabalho */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Onde Trabalhar
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-gray-300">
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.trabalhador.com"
                  target="_blank"
                >
                  🏭 Centros de Apoio ao Trabalhador (CATs)
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.empregarrefugiados.com"
                  target="_blank"
                >
                  💼 Empresas com projetos de inclusão
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.cooperativas.org.br"
                  target="_blank"
                >
                  🧵 Cooperativas de costura e produção
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.cursoscapacita.com"
                  target="_blank"
                >
                  🛠️ Cursos de capacitação com vagas de emprego
                </Link>
              </li>
            </ul>
          </div>

          {/* Educação */}
          <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-zinc-700">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Educação e Formação
            </h3>
            <ul className="space-y-2 text-blue-800 dark:text-gray-300">
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.etec.sp.gov.br"
                  target="_blank"
                >
                  📚 ETECs com vagas para refugiados
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.portuguesgratis.com.br"
                  target="_blank"
                >
                  🧑‍🏫 Cursos de português gratuitos
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.programasbolsas.com"
                  target="_blank"
                >
                  🎓 Programas de bolsas e certificações
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline"
                  href="https://www.inscricoesonline.com"
                  target="_blank"
                >
                  📱 Acompanhamento digital e inscrições online
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
