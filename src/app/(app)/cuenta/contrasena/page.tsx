import type { Metadata } from "next";
import { ScreenPlaceholder } from "@/components/screen-placeholder";

export const metadata: Metadata = { title: "Cambiar contraseña" };

export default function Page() {
  return <ScreenPlaceholder title="Cambiar contraseña" description="Contraseña actual y nueva." />;
}
