import type { Metadata } from "next";
import { ScreenPlaceholder } from "@/components/screen-placeholder";

export const metadata: Metadata = { title: "Nuevo cliente" };

export default function Page() {
  return <ScreenPlaceholder title="Nuevo cliente" description="Alta de cliente. Al guardar abre su ficha." />;
}
