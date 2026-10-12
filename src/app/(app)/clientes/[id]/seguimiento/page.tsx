import { ScreenPlaceholder } from "@/components/screen-placeholder";

export default async function Page({ params }: PageProps<"/clientes/[id]/seguimiento">) {
  const { id } = await params;
  return <ScreenPlaceholder title="Programar seguimiento" description={`Hoja inferior en móvil, diálogo en tableta y escritorio (id: ${id})`} />;
}
