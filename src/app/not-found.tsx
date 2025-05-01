import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/Logo_Refugio.png"
          alt="Logo Refugiados"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      {/* Chave e mensagem de erro */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full sm:w-96 text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          404 - Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          Could not find the requested resource
        </p>
        <Link
          className="text-blue-500 hover:text-blue-700 text-lg font-medium"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
