// Marcador temporal de pantalla. Sustitúyelo al implementar cada ruta según Design/CRM App.dc.html.
export function ScreenPlaceholder({ title, description }: { title: string; description?: string }) {
  return (
    <section className="card space-y-2 p-6">
      <h1 className="text-2xl">{title}</h1>
      {description && <p className="text-text-muted">{description}</p>}
      <p className="text-sm text-text-subtle">Pantalla pendiente de implementar.</p>
    </section>
  );
}
