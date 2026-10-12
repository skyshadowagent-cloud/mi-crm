import type { Metadata } from "next";
import { ScreenPlaceholder } from "@/components/screen-placeholder";

export const metadata: Metadata = { title: "Iniciar sesión" };

export default function LoginPage() {
  return (
    <main className="grid min-h-dvh place-items-center p-6">
      <ScreenPlaceholder title="Iniciar sesión" description="Ruta pública. Al entrar, vuelve a la ruta que se había pedido." />
    </main>
  );
}
