import { ScreenPlaceholder } from "@/components/screen-placeholder";

export default async function Page({ params }: PageProps<"/hoy/tarea/[id]">) {
  const { id } = await params;
  return <ScreenPlaceholder title="Detalle de seguimiento" description={`Hoja inferior en móvil, panel a la derecha en escritorio (id: ${id})`} />;
}
