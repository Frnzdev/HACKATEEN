import Image from "next/image";
import Link from "next/link";
import CountrySelector from "./ContrySelector";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-black/38 backdrop:blur-sm rounded-4xl p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image src="/Logo_Refugio.png" alt="Logo" width={100} height={100} />
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-white font-semibold p-2">
            <li className="duration-300 hover:underline hover:scale-[1.1] ">
              <Link href="/">Início</Link>
            </li>
            <li className="duration-300 hover:underline hover:scale-[1.1] ">
              <Link href="/">Notícias</Link>
            </li>
            <li className="duration-300 hover:underline hover:scale-[1.1] ">
              <Link href="/">Login</Link>
            </li>
            <li className="duration-300 hover:underline hover:scale-[1.1] ">
              <Link href="/">Cadastro</Link>
            </li>
          </ul>
          {/* Alinhando CountrySelector com os outros itens */}
          <div className="flex items-center">
            <CountrySelector />
          </div>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
}
