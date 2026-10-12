import type { Metadata } from "next";
import { ScreenPlaceholder } from "@/components/screen-placeholder";

export const metadata: Metadata = { title: "Editar datos" };

export default function Page() {
  return <ScreenPlaceholder title="Editar datos" description="Nombre y email." />;
}
