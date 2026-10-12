import { ScreenPlaceholder } from "@/components/screen-placeholder";

export default async function Page({ params }: PageProps<"/clientes/[id]/interaccion">) {
  const { id } = await params;
  return <ScreenPlaceholder title="Anotar interacción" description={`Hoja inferior en móvil, diálogo en tableta y escritorio (id: ${id})`} />;
}
