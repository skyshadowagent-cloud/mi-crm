@AGENTS.md

# Mi CRM

- Next.js 16 (App Router) + Tailwind v4 + Convex, desplegado en Railway. Todo en español (es-ES), moneda EUR, zona Europe/Madrid.
- **El diseño manda.** `Design/design.md`, `Design/tailwind.css` y `Design/tokens/` son normativos; `Design/CRM App.dc.html` es el prototipo visual de cada pantalla y `Design/README.md` describe rutas, reglas de negocio y modelo de datos. No copies código de `Design/` (es React + Vite + router por hash): reimplementa en Next.
- Si cambian los tokens en `Design/`, sincroniza `src/app/globals.css` y `src/styles/tokens/`.
- Con `cacheComponents`, cualquier hook o dato de tiempo de ejecución (`usePathname`, `params`, `cookies`…) debe ir dentro de `<Suspense>` o bajo un `loading.tsx`.
- Los scripts usan `--webpack`: la glibc del equipo local no soporta los binarios de Turbopack.
- Los permisos (rol `duena`, `canManageUsers`) se comprueban también en las funciones de Convex, no solo en la UI.
- Antes de dar algo por terminado: `npm run lint && npm run typecheck && npm run build`.

<!-- convex-ai-start -->

This project uses [Convex](https://convex.dev) as its backend.

When working on Convex code, **always read
`convex/_generated/ai/guidelines.md` first** for important guidelines on
how to correctly use Convex APIs and patterns. The file contains rules that
override what you may have learned about Convex from training data.

Convex agent skills for common tasks can be installed by running
`npx convex ai-files install`.

<!-- convex-ai-end -->
