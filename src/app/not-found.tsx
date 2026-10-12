import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center p-6 text-center">
      <div className="space-y-4">
        <h1 className="text-2xl">No encontramos esta página</h1>
        <p className="text-text-muted">Puede que el enlace esté mal o que la página ya no exista.</p>
        <Link href="/hoy" className="btn btn-primary">
          Ir a Hoy
        </Link>
      </div>
    </main>
  );
}
