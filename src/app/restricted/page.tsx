"use client";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

export default function RestrictedPage() {
  const { isSignedIn } = useUser(); // Verifica se o usuário está logado

  // Se o usuário não estiver logado, redireciona para a página de login
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white to-blue-400 dark:from-black dark:to-black/90">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/Logo_Lar.png"
          alt="Logo Refugiados"
          width={300}
          height={300}
          className="rounded-full"
        />
      </div>

      {/* Mensagem de acesso restrito */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full sm:w-96 text-center dark:bg-zinc-800">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Área Restrita
        </h2>
        <p className="text-black dark:text-white mb-6">
          Bem-vindo à área restrita! Você está logado e tem acesso a este
          conteúdo.
        </p>
        <Link
          className="text-blue-500 hover:text-blue-700 text-lg font-medium"
          href="/"
        >
          Retornar à página inicial
        </Link>
      </div>
    </div>
  );
}
