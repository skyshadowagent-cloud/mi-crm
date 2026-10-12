import type { Metadata } from "next";
import { ScreenPlaceholder } from "@/components/screen-placeholder";

export const metadata: Metadata = { title: "Clientes" };

export default function Page() {
  return <ScreenPlaceholder title="Clientes" description="Búsqueda y filtro por etapa. En tableta y escritorio, maestro-detalle con la ficha." />;
}
