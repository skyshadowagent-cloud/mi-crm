import Link from "next/link";
import { Suspense, type ReactNode } from "react";
import { CalendarCheckIcon, UserCircleIcon, UsersThreeIcon } from "@phosphor-icons/react/ssr";
import { NavLink } from "@/components/nav-link";

const NAV = [
  { href: "/hoy", label: "Hoy", Icon: CalendarCheckIcon },
  { href: "/clientes", label: "Clientes", Icon: UsersThreeIcon },
] as const;

function Item({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <Link href={href} className={className}>
          {children}
        </Link>
      }
    >
      <NavLink href={href} className={className}>
        {children}
      </NavLink>
    </Suspense>
  );
}

// Móvil (<1024px): barra inferior con Hoy y Clientes.
// Escritorio (≥1024px): sidebar de 232px con la cuenta al pie.
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh lg:grid lg:grid-cols-[232px_1fr]">
      <nav aria-label="Principal" className="sidebar sticky top-0 hidden h-dvh lg:flex">
        <div className="sidebar-brand">Mi CRM</div>
        {NAV.map(({ href, label, Icon }) => (
          <Item key={href} href={href} className="sidebar-item">
            <Icon size={20} aria-hidden />
            {label}
          </Item>
        ))}
        <div className="mt-auto">
          <Item href="/cuenta" className="sidebar-item">
            <UserCircleIcon size={20} aria-hidden />
            Mi cuenta
          </Item>
        </div>
      </nav>

      <main className="mx-auto w-full max-w-5xl p-4 pb-24 md:p-6 lg:pb-6">{children}</main>

      <nav aria-label="Principal" className="bottom-nav fixed inset-x-0 bottom-0 lg:hidden">
        {NAV.map(({ href, label, Icon }) => (
          <Item key={href} href={href} className="bottom-nav-item">
            <Icon size={24} aria-hidden />
            {label}
          </Item>
        ))}
      </nav>
    </div>
  );
}
