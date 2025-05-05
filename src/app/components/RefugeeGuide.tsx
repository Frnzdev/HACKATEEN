"use client";

export default function RefugeeGuide() {
  return (
    <section
      id="guide"
      className="w-full min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-r from-white to-blue-400 dark:from-black dark:to-black "
    >
      <div className="max-w-4xl w-full bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-900 dark:text-white mb-6 text-center">
          Guia para Refugiados Recém-Chegados ao Brasil
        </h1>

        <p className="mb-4">
          Ao chegar ao Brasil como refugiado, é fundamental conhecer seus
          direitos e os primeiros passos para se adaptar e acessar os serviços
          básicos. Este guia apresenta informações essenciais para quem está
          começando uma nova vida em território brasileiro.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
          1. Solicitação de Refúgio
        </h2>
        <p className="mb-4">
          A primeira providência deve ser procurar uma unidade da Polícia
          Federal para registrar seu pedido de refúgio. Esse pedido é gratuito e
          garante um protocolo oficial, que serve como documento temporário
          válido no país.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
          2. Documentos e Direitos
        </h2>
        <p className="mb-4">
          Com o protocolo de refúgio, você pode solicitar o CPF (Cadastro de
          Pessoa Física) e a Carteira de Trabalho (CTPS). Isso permite que você
          trabalhe legalmente, abra conta em banco e utilize diversos serviços
          públicos.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
          3. Acesso à Saúde
        </h2>
        <p className="mb-4">
          O Sistema Único de Saúde (SUS) oferece atendimento médico gratuito a
          todos. Basta apresentar um documento (como o protocolo de refúgio) e
          comprovante de endereço em qualquer posto de saúde.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
          4. Educação e Escola
        </h2>
        <p className="mb-4">
          Crianças e adolescentes refugiados têm direito à educação pública e
          gratuita. É possível matriculá-los mesmo sem toda a documentação.
          Adultos também podem estudar por meio da Educação de Jovens e Adultos
          (EJA) e revalidar diplomas do país de origem.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
          5. Ajuda de ONGs e Instituições
        </h2>
        <p className="mb-4">
          Organizações como a Caritas, ACNUR, Missão Paz e IMDH oferecem apoio
          com abrigo, alimentação, atendimento psicológico, cursos de português
          e orientação jurídica. Procure uma unidade dessas instituições na sua
          cidade.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
          6. Aprendizado do Português
        </h2>
        <p className="mb-4">
          Aprender o português é um passo essencial para facilitar a integração.
          Muitas ONGs e escolas públicas oferecem aulas gratuitas para
          imigrantes e refugiados.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mt-6 mb-2">
          7. Direitos e Proteção
        </h2>
        <p className="mb-4">
          Refugiados têm direito à liberdade religiosa, proteção contra
          deportação, igualdade de tratamento, liberdade de ir e vir e acesso a
          serviços públicos. O Brasil é um país signatário da Convenção da ONU
          sobre Refugiados e oferece proteção internacional.
        </p>

        <p className="mt-8 italic text-sm text-gray-600 dark:text-gray-400">
          Este conteúdo tem fins informativos. Para suporte personalizado,
          busque órgãos oficiais ou instituições especializadas no atendimento a
          refugiados.
        </p>
      </div>
    </section>
  );
}
