import type { Metadata } from "next";
import { ScreenPlaceholder } from "@/components/screen-placeholder";

export const metadata: Metadata = { title: "Hoy" };

export default function Page() {
  return <ScreenPlaceholder title="Hoy" description="Tareas del día: Atrasadas, Para hoy y Completadas." />;
}
