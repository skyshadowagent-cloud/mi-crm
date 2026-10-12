# CRM Design System · design.md

Especificación portable y autocontenida. Basta con este archivo para reconstruir el sistema en cualquier stack. Versión 1.0 · septiembre 2026.

---

## 1. Contexto

| | |
|---|---|
| Producto | CRM para un pequeño negocio de ventas digitales |
| Plataforma | Móvil primero · web responsive · PWA |
| Stack | Tailwind v4 · React + Vite · shadcn/ui adaptado |
| Idioma | Español (es-ES), tuteo |
| Usuarios | **Marta** (45, dueña, poco técnica) · **Carlos** (28, ventas, muy de móvil) |
| Base visual | Nocturne adaptado: oscuro por defecto, modo claro, Inter y acento morado |
| Accesibilidad | WCAG 2.2 AA |

**Principios**
1. **Directo.** Una acción principal por pantalla, con verbos claros.
2. **Legible.** Texto de 16px, etiquetas siempre visibles y estados que no dependen solo del color.
3. **Rápido.** Zonas táctiles de 48px, gestos para llamar y animaciones de menos de 200ms.

**Personalidad**: profesional, minimalista y directa. Referencias: Attio, Linear y Notion.

---

## 2. Color

Oscuro por defecto en `:root`; claro con `data-theme="light"` en `<html>` o en cualquier contenedor.

### Roles

| Token | Oscuro | Claro | Uso | Contraste (oscuro / claro) |
|---|---|---|---|---|
| `--color-bg` | #161826 | #f6f6f9 | Fondo de página | — |
| `--color-surface` | #1e2030 | #fdfdfe | Tarjetas, filas, barras | — |
| `--color-surface-2` | #272a3a | #efeff4 | Elevado: diálogos, toasts, seleccionado | — |
| `--color-border` | #2f3242 | #e2e3ea | Separadores, borde de tarjeta | decorativo |
| `--color-border-strong` | #6a6e80 | #858999 | Borde de campos y botones secundarios | 3.5 / 3.2:1 |
| `--color-text` | #e9e9ed | #1b1c28 | Texto principal | 14.5 / 15.7:1 |
| `--color-text-muted` | #a4a8bb | #515667 | Texto secundario, etiquetas | 7.5 / 6.8:1 |
| `--color-text-subtle` | #8a8ea3 | #646979 | Metadatos, placeholder | 5.4 / 5.1:1 |
| `--color-accent` | #6d5bd0 | #6d5bd0 | Contornos, foco, selección, iconos activos | 3.4 / 4.8:1 (no para texto en oscuro) |
| `--color-accent-text` | #a99cf3 | #5646a8 | Texto en acento, botón principal | 7.3 / 6.9:1 |
| `--color-accent-bg` | #29234a | #f3f1ff | Tinte de seleccionado | — |

### Semánticos (fg sobre bg)

| Rol | fg oscuro | bg oscuro | fg claro | bg claro | Contraste | Uso en CRM |
|---|---|---|---|---|---|---|
| success | #8fdcb0 | #13291e | #1f6b44 | #e3f6ec | 9.6 / 5.8 | Ganado, pagado |
| warning | #f0c878 | #33260f | #8a5c0f | #fbf0da | 9.3 / 5.1 | Negociación, vence hoy, sin conexión |
| danger | #f3a3a1 | #3a1a1c | #962f2d | #fbe5e4 | 7.9 / 6.4 | Perdido, error, eliminar |
| info | #9ec5f5 | #14253c | #245a99 | #e2eefc | 8.6 / 6.0 | Contactado, llamar |
| neutral | #cfd3e5 | #292b31 | #3f424d | #e4e7f5 | 9.5 / 8.1 | Nuevo |

### Reglas
- El acento nunca rellena áreas grandes. Va en líneas, anillos, marcas cortas y tintes.
- Todo estado lleva color más icono o texto.
- Nada de negro ni blanco puros; solo las sombras mezclan negro.

### Tokens completos

```css
/* Color — oscuro por defecto (:root); claro con [data-theme="light"] en <html> o cualquier contenedor. */
:root {
  /* Rampas base (OKLCH, misma escala de luminosidad) */
  --color-neutral-100: #f3f5fe;
  --color-neutral-200: #e4e7f5;
  --color-neutral-300: #cfd3e5;
  --color-neutral-400: #b2b6ca;
  --color-neutral-500: #9397ab;
  --color-neutral-600: #75798c;
  --color-neutral-700: #595d6c;
  --color-neutral-800: #3f424d;
  --color-neutral-900: #292b31;
  --color-accent-100: #f3f1ff;
  --color-accent-200: #e4e0fd;
  --color-accent-300: #cbc3fb;
  --color-accent-400: #a99cf3;
  --color-accent-500: #8a7ae6;
  --color-accent-600: #6d5bd0;
  --color-accent-700: #5646a8;
  --color-accent-800: #3d3277;
  --color-accent-900: #29234a;
  --color-success-100: #e3f6ec;
  --color-success-300: #8fdcb0;
  --color-success-500: #2f9e63;
  --color-success-700: #1f6b44;
  --color-success-900: #13291e;
  --color-warning-100: #fbf0da;
  --color-warning-300: #f0c878;
  --color-warning-500: #c98a1c;
  --color-warning-700: #8a5c0f;
  --color-warning-900: #33260f;
  --color-danger-100: #fbe5e4;
  --color-danger-300: #f3a3a1;
  --color-danger-500: #d4504c;
  --color-danger-700: #962f2d;
  --color-danger-900: #3a1a1c;
  --color-info-100: #e2eefc;
  --color-info-300: #9ec5f5;
  --color-info-500: #3f84d4;
  --color-info-700: #245a99;
  --color-info-900: #14253c;
  /* Roles semánticos · oscuro */
  --color-bg: #161826;
  --color-surface: #1e2030;
  --color-surface-2: #272a3a;
  --color-border: #2f3242;
  --color-border-strong: #6a6e80;
  --color-text: #e9e9ed;
  --color-text-muted: #a4a8bb;
  --color-text-subtle: #8a8ea3;
  --color-accent: #6d5bd0;
  --color-accent-text: #a99cf3;
  --color-accent-bg: #29234a;
  --color-neutral-fg: #cfd3e5;
  --color-neutral-bg: #292b31;
  --color-success-fg: #8fdcb0;
  --color-success-bg: #13291e;
  --color-warning-fg: #f0c878;
  --color-warning-bg: #33260f;
  --color-danger-fg: #f3a3a1;
  --color-danger-bg: #3a1a1c;
  --color-info-fg: #9ec5f5;
  --color-info-bg: #14253c;
  --color-divider: color-mix(in srgb, #e9e9ed 12%, transparent);
  color-scheme: dark;
}
[data-theme="light"] {
  --color-bg: #f6f6f9;
  --color-surface: #fdfdfe;
  --color-surface-2: #efeff4;
  --color-border: #e2e3ea;
  --color-border-strong: #858999;
  --color-text: #1b1c28;
  --color-text-muted: #515667;
  --color-text-subtle: #646979;
  --color-accent: #6d5bd0;
  --color-accent-text: #5646a8;
  --color-accent-bg: #f3f1ff;
  --color-neutral-fg: #3f424d;
  --color-neutral-bg: #e4e7f5;
  --color-success-fg: #1f6b44;
  --color-success-bg: #e3f6ec;
  --color-warning-fg: #8a5c0f;
  --color-warning-bg: #fbf0da;
  --color-danger-fg: #962f2d;
  --color-danger-bg: #fbe5e4;
  --color-info-fg: #245a99;
  --color-info-bg: #e2eefc;
  --color-divider: color-mix(in srgb, #1b1c28 12%, transparent);
  color-scheme: light;
}
```

---

## 3. Tipografía

- **Familia**: Inter con eje óptico `opsz` 14–32. Los títulos usan automáticamente el corte Display.
  `https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600&display=swap`
- **Pesos**: 400 texto · 500 etiquetas y botones · 600 títulos e importes.
- **Base**: 16px. **Escala**: 1.2. **Interlineado**: 1.5 en texto y 1.2 en títulos.
- **Cifras**: `font-variant-numeric: tabular-nums` en todos los importes.

| Token | rem | px | Line-height | Peso | Tracking | Uso |
|---|---|---|---|---|---|---|
| `--text-3xl` | 2.0625 | 33 | 1.15 | 600 | -0.03em | Display, KPIs |
| `--text-2xl` | 1.75 | 28 | 1.2 | 600 | -0.02em | Título de pantalla |
| `--text-xl` | 1.4375 | 23 | 1.3 | 600 | -0.015em | Título de ficha, importe de deal |
| `--text-lg` | 1.1875 | 19 | 1.4 | 600 | 0 | Sección, diálogo |
| `--text-base` | 1 | 16 | 1.5 | 400/500 | 0 | Cuerpo, botones, campos |
| `--text-sm` | 0.875 | 14 | 1.5 | 400/500 | 0 | Secundario, etiquetas de campo |
| `--text-xs` | 0.75 | 12 | 1.5 | 500 | 0 | Solo metadatos y barra inferior |

Todo en rem, para soportar el texto del sistema hasta el 200%.

---

## 4. Espaciado, forma y elevación

**Espaciado** (base 4px, densidad cómoda): 4 · 8 · 12 · 16 · 20 · 24 · 32 · 48 → `--space-1…12`, Tailwind `--spacing: 0.25rem`. Márgenes de pantalla: 16px en móvil y 24px en web.

**Radios**

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 8px | Tags, logos de empresa |
| `--radius-md` | 12px | Botones, campos, tarjetas (base) |
| `--radius-lg` | 16px | Diálogos, hojas |
| `--radius-full` | 9999px | FAB, chips |

**Elevación**: borde fino + sombra mínima.

| Token | Oscuro | Claro | Uso |
|---|---|---|---|
| `--shadow-sm` | 0 0 0 1px border | igual | Tarjetas, filas |
| `--shadow-md` | 0 0 0 1px border-strong, 0 4px 12px rgb(0 0 0/.35) | 0 0 0 1px border, 0 4px 12px rgb(27 28 40/.08) | Menús, FAB |
| `--shadow-lg` | 0 0 0 1px border-strong, 0 16px 40px rgb(0 0 0/.5) | 0 0 0 1px border, 0 16px 40px rgb(27 28 40/.14) | Diálogos, toasts, arrastre |

**Tamaños de control**

| Token | Valor | Uso |
|---|---|---|
| `--size-control-sm` | 36px | Solo web con ratón |
| `--size-control-md` | 44px | Web por defecto |
| `--size-control-lg` | 48px | Móvil por defecto, todos los campos |
| `--size-touch` | 48px | Zona táctil mínima |

---

## 5. Iconografía e imagen

- **Phosphor Regular** (`@phosphor-icons/web@2.1.1`): `<i class="ph ph-phone"></i>`.
- 16px en tags, 20px en botones y campos, 24px en navegación y acciones de fila.
- Siempre con etiqueta visible. Excepciones: buscar, cerrar y más, con `aria-label`.
- Iconos del CRM: house (Inicio), users (Contactos), kanban (Deals), check-square (Tareas), phone, whatsapp-logo, envelope-simple, note-pencil, magnifying-glass, funnel-simple, plus, calendar-blank, wifi-slash, trash, floppy-disk, dots-three.
- **Imágenes**: solo logos de empresa, cuadrados con radio de 8px. Sin logo, iniciales sobre `surface-2`. Sin fotos, ilustraciones ni emoji.
- **Marca**: sin logo gráfico. Wordmark "CRM" en Inter 600 con un cuadrado de acento de 8–12px (radio 2–3px).

---

## 6. Interacción y estados

| Estado | Tratamiento |
|---|---|
| Hover | Tinte: `color-mix(accent 14%)` en principal/ghost, `color-mix(text 7%)` en secundario |
| Focus | `outline: 2px solid var(--color-accent); outline-offset: 2px` (solo `:focus-visible`) |
| Pulsado | Tinte al 24% + `transform: scale(0.98)` |
| Desactivado | `opacity: .45; cursor: not-allowed` |
| Cargando | Spinner `ph-circle-notch` girando + `aria-busy="true"` + texto "Guardando…" |
| Error | Borde `danger-500` + mensaje con icono `warning-circle` en `danger-fg` |
| Éxito | Toast con icono `check-circle` en `success-fg` |
| Seleccionado | Fondo `accent-bg` + texto `accent-text` + borde `accent` |

**Movimiento**

| Token | Valor | Uso |
|---|---|---|
| `--duration-fast` | 120ms | Hover, pulsar, focus |
| `--duration-base` | 180ms | Toast, deslizar, hojas |
| `--duration-slow` | 240ms | Cambio de pantalla |
| `--ease-out` | cubic-bezier(0.2, 0.8, 0.2, 1) | Todas |

Sin rebotes. Con `prefers-reduced-motion: reduce`, todas las duraciones pasan a 0.

**Microinteracciones**
- Escala 0.98 al pulsar.
- Toast de 4s con "Deshacer" en lugar de confirmar antes.
- Skeleton con la forma del contenido al cargar.
- Deslizar una fila a la izquierda revela Llamar (info) y WhatsApp (success), de 80px cada una.
- Arrastrar deals entre etapas: la tarjeta pasa a `surface-2`, borde de acento, sombra lg y rotación de -1.5°.

---

## 7. Componentes

| Componente | Clase CSS | Props clave | Notas |
|---|---|---|---|
| Button | `.btn .btn-{primary\|secondary\|ghost\|danger} .btn-{sm\|lg}` | variant, size, icon, loading, block | Primary = contorno de acento, nunca relleno. Una por pantalla |
| IconButton | `.btn .btn-icon` | icon, label (obligatorio) | Solo para iconos inequívocos |
| Fab | `.btn .btn-fab` | icon, label="Nuevo" | Pill 56px, abajo a la derecha sobre la barra inferior |
| Chip | `.chip[aria-pressed]` | selected, count | Filtros rápidos, 40px, desplazables en horizontal |
| Field | `.field .input .field-help .field-error` | label, help, error, icon, multiline | 48px, texto de 16px, etiqueta siempre arriba |
| SegmentedControl | `.seg .seg-opt` | options, value, onChange | 2–4 opciones exclusivas |
| Tag | `.tag .tag-{tone} .tag-sm` | tone, icon, size | Radio 8px |
| StageTag | — | stage | Etapas fijas (ver tabla) |
| CompanyLogo | `.logo .logo-sm` | name, src, size | 44 / 28px, iniciales como alternativa |
| Card | `.card` | as | surface, radio 12, borde fino, padding 16 |
| ContactRow | `.contact-row .swipe` | name, company, meta, amount, stage, open, onCall, onWhatsApp | Mínimo 72px de alto |
| DealCard | `.card .deal-card .is-dragging` | title, company, amount, due, owner, dragging | Kanban |
| Toast | `.toast` | message, tone, actionLabel | Abajo en el centro, 4s |
| Banner | `.banner` | tone, icon | Sin conexión, sincronizando |
| Dialog | `.dialog-backdrop .dialog` | title, actions, onClose | Solo acciones irreversibles |
| Skeleton | `.skeleton` | width, height | Shimmer de 1.4s |
| BottomNav | `.bottom-nav .bottom-nav-item[aria-current]` | items, active | 5 destinos, 56px, marca de acento de 2px arriba |
| Sidebar | `.sidebar .sidebar-item[aria-current]` | items, active, brand | 220px, a partir de 1024px |

**Etapas del deal**

| stage | Etiqueta | Tono | Icono |
|---|---|---|---|
| nuevo | Nuevo | neutral | circle-dashed |
| contactado | Contactado | info | chat-circle |
| propuesta | Propuesta | accent | file-text |
| negociacion | Negociación | warning | handshake |
| ganado | Ganado | success | check-circle |
| perdido | Perdido | danger | x-circle |

---

## 8. Layout y navegación

- **Móvil (< 1024px)**: cabecera con título (28px) y buscar; chips de filtro; lista de filas; FAB "+ Nuevo"; barra inferior (Inicio, Contactos, Deals, Tareas, Más).
- **Web (≥ 1024px)**: sidebar de 220px con los mismos destinos; contenido con cabecera, acciones "Filtrar" y "Nuevo contacto", y tabla (`.table`, cabeceras de 12px en mayúsculas).
- **PWA**: `viewport-fit=cover`, `.safe-top` / `.safe-bottom` con `env(safe-area-inset-*)`, Banner de "Sin conexión" y `theme-color` = `#161826` (oscuro) / `#f6f6f9` (claro).

---

## 9. Contenido

- Tuteo y frases cortas con verbo. Botones en infinitivo: Guardar, Llamar, Mover a Ganado.
- Tipo frase, sin mayúsculas iniciales en cada palabra.
- Importes `Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })` → "3.200 €".
- Fechas relativas cerca ("hoy", "hace 2 h") y cortas lejos ("3 oct.").
- Los errores dicen cómo arreglarlo. Las preguntas de los diálogos son concretas y nombran el objeto.
- Sin emoji ni signos de exclamación.

---

## 10. Implementación con Tailwind v4

```css
/* src/index.css */
@import "./design-system/tailwind.css";
```

```html
<html lang="es">                      <!-- oscuro -->
<html lang="es" data-theme="light">   <!-- claro -->

<button class="btn btn-primary btn-lg"><i class="ph ph-floppy-disk"></i>Guardar</button>
<span class="tag tag-success"><i class="ph ph-check-circle"></i>Ganado</span>
<div class="bg-surface rounded-md shadow-sm p-4">
  <p class="text-sm text-text-muted">Última actividad hace 2 h</p>
  <p class="text-xl font-semibold tabular-nums">3.200 €</p>
</div>
```

- **Utilidades generadas**: `bg-bg`, `bg-surface`, `bg-surface-2`, `text-text`, `text-text-muted`, `text-accent-text`, `border-border`, `border-accent`, `bg-success-bg`, `text-danger-fg`, `bg-accent-100…900`, `rounded-sm/md/lg`, `shadow-sm/md/lg` y `text-xs…3xl`.
- **shadcn/ui**: mapear `--background`→bg, `--card`→surface, `--popover`→surface-2, `--primary`→accent, `--border`→border, `--input`→border-strong, `--ring`→accent, `--radius`→0.75rem, `--destructive`→danger-500.

---

## 11. Checklist de revisión

- [ ] Texto ≥ 4.5:1 y bordes de campo ≥ 3:1 en ambos modos
- [ ] Zonas táctiles ≥ 48px en móvil
- [ ] Campos a 16px o más
- [ ] Iconos con etiqueta o aria-label
- [ ] Estados con icono o texto, no solo color
- [ ] Una sola acción primary por pantalla
- [ ] Lo reversible usa Toast con Deshacer; lo irreversible, Dialog
- [ ] Funciona al 200% de texto y con reducir movimiento
- [ ] Safe areas respetadas
