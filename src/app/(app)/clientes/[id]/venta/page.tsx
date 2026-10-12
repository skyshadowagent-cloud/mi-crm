import { ScreenPlaceholder } from "@/components/screen-placeholder";

export default async function Page({ params }: PageProps<"/clientes/[id]/venta">) {
  const { id } = await params;
  return <ScreenPlaceholder title="Venta u oportunidad" description={`Hoja inferior en móvil, diálogo en tableta y escritorio (id: ${id})`} />;
}
