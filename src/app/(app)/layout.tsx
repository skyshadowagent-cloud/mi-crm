import { AppShell } from "@/components/app-shell";

// Rutas que requieren sesión. La guarda de autenticación irá aquí cuando se conecte Convex Auth.
export default function AppLayout({ children }: LayoutProps<"/">) {
  return <AppShell>{children}</AppShell>;
}
