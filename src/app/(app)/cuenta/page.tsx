import type { Metadata } from "next";
import { ScreenPlaceholder } from "@/components/screen-placeholder";

export const metadata: Metadata = { title: "Mi cuenta" };

export default function Page() {
  return <ScreenPlaceholder title="Mi cuenta" description="Datos personales, contraseña y cierre de sesión." />;
}
