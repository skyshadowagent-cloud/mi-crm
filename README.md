# Mi CRM

CRM para un pequeño negocio de ventas digitales en España: clientes, seguimientos, interacciones y ventas. Web responsive y PWA, en español (es-ES).

**Stack:** Next.js 16 (App Router, TypeScript) · Tailwind CSS v4 · Convex (base de datos y backend) · Railway (hosting).

## Requisitos

- Node.js 24 (`nvm use` lee `.nvmrc`).
- Una cuenta de [Convex](https://convex.dev).

## Puesta en marcha en local

```bash
nvm use
npm install
npx convex dev        # la primera vez: inicia sesión, crea el proyecto y escribe .env.local
```

Deja `npx convex dev` abierto (sincroniza `convex/` con tu despliegue de desarrollo y genera `convex/_generated/`) y, en otra terminal:

```bash
npm run dev           # http://localhost:3000
```

| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo de Next.js |
| `npm run dev:convex` | Igual que `npx convex dev` |
| `npm run build` / `npm start` | Build y servidor de producción |
| `npm run lint` / `npm run typecheck` | ESLint y TypeScript |

> Los scripts usan Webpack (`--webpack`) en lugar de Turbopack porque los binarios nativos de Turbopack necesitan glibc ≥ 2.29 y el equipo de desarrollo actual tiene 2.27. Cuando se actualice el sistema, se puede quitar el flag.

## Estructura

```
Design/                     Referencia de diseño (normativa: design.md, tailwind.css, tokens/). No se importa en la app.
convex/
  schema.ts                 Tablas: users, clients, interactions, opportunities, followUps
src/
  app/
    layout.tsx              Layout raíz: Inter, tema oscuro y ConvexClientProvider
    globals.css             Tokens del diseño como @theme de Tailwind
    login/                  Pública
    (app)/                  Rutas con sesión, dentro de AppShell
      hoy/  hoy/tarea/[id]
      clientes/  clientes/nuevo  clientes/[id]/{interaccion,seguimiento,venta}
      cuenta/  cuenta/{datos,contrasena}
      equipo/               Solo rol «duena»
    api/health/             Healthcheck para Railway
  components/               AppShell, NavLink, proveedores
  lib/                      roles.ts (canManageUsers), format.ts (EUR, Europe/Madrid)
  styles/tokens/            Clases de componente del diseño (.btn, .card, .chip…)
```

Las pantallas son marcadores (`ScreenPlaceholder`). Se implementan siguiendo `Design/CRM App.dc.html` y `Design/README.md`.

## Despliegue en Railway

1. Sube el repo a GitHub y crea en Railway un servicio desde ese repo.
2. En Convex: *Settings → Deploy keys → Generate production deploy key*.
3. En Railway, variables del servicio: `CONVEX_DEPLOY_KEY=<la clave>`.
4. Despliega. `railway.json` ya define el build (`npx convex deploy --cmd 'npm run build'`, que despliega las funciones de Convex y compila Next con `NEXT_PUBLIC_CONVEX_URL` de producción), el arranque (`npm start`) y el healthcheck (`/api/health`).
5. En *Settings → Networking*, genera un dominio público.
