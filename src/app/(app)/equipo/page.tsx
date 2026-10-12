import type { Metadata } from "next";
import { ScreenPlaceholder } from "@/components/screen-placeholder";

export const metadata: Metadata = { title: "Equipo" };

export default function Page() {
  return <ScreenPlaceholder title="Equipo" description="Usuarios y roles. Solo para el rol «duena»; si no, «Acceso restringido»." />;
}
