"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type Props = { href: string; className: string; children: ReactNode };

// Marca la ruta activa con aria-current. Va dentro de <Suspense> (ver AppShell)
// porque usePathname solo se conoce en tiempo de ejecución.
export function NavLink({ href, className, children }: Props) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);
  return (
    <Link href={href} className={className} aria-current={active ? "page" : undefined}>
      {children}
    </Link>
  );
}
