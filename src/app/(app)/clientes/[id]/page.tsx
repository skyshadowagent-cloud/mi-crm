import { ScreenPlaceholder } from "@/components/screen-placeholder";

export default async function Page({ params }: PageProps<"/clientes/[id]">) {
  const { id } = await params;
  return <ScreenPlaceholder title="Ficha del cliente" description={`Cabecera, acciones rápidas, seguimientos pendientes e historial (id: ${id})`} />;
}
