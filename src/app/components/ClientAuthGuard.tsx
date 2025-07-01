"use client";
import { useUser, RedirectToSignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const ClientAuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useUser();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Espera até que o Clerk tenha feito a verificação inicial de autenticação
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>; // Pode adicionar um loader enquanto verifica a autenticação
  }

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return <>{children}</>;
};

export default ClientAuthGuard;
