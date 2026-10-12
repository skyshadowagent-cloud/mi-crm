# design/ · Referencia de diseño del CRM

Esta carpeta es la referencia de diseño del CRM (web responsive + PWA, en español). Sirve para que Claude Code, y cualquier persona del equipo, implemente la app en el stack real: React + Vite, Tailwind v4 y shadcn/ui adaptado.

> **Los archivos HTML son solo referencia visual.** No son código de producción, no se importan ni se copian al proyecto. Muestran cómo se ve y cómo se comporta cada pantalla. La implementación se escribe desde cero en el stack del repositorio, usando los tokens y la especificación de esta carpeta.

## Qué es normativo y qué es referencia

| Archivo | Tipo | Uso |
|---|---|---|
| `design.md` | **Normativo** | Especificación completa del sistema: color, tipo, espaciado, componentes, accesibilidad y tono. Es la fuente de verdad. |
| `tailwind.css` | **Normativo** | Tokens como `@theme` de Tailwind v4. Se copia al proyecto. |
| `tokens/*.css`, `styles.css` | **Normativo** | Los mismos tokens como variables CSS, más la capa de clases de componente (`.btn`, `.chip`, `.tag`, `.card`, `.contact-row`, `.bottom-nav`, `.sidebar`, `.dialog`…). Sirven de referencia de valores y estados (hover, pulsado, foco, desactivado). |
| `components/**/*.jsx`, `*.d.ts`, `*.prompt.md` | Referencia de API | Componentes React del sistema: props (`.d.ts`) y guía de uso (`.prompt.md`). Hay que reescribirlos con shadcn/ui y Tailwind; conserva los nombres y las props. |
| `CRM App.dc.html` | **Solo visual** | Prototipo navegable de la app: rutas, pantallas, formularios, validaciones y estados. |
| `CRM Design System.dc.html`, `guidelines/*.html` | **Solo visual** | Documento del sistema y fichas de fundamentos. |
| `support.js`, `_ds/` | Solo para abrir los HTML | Motor que hace funcionar los prototipos en el navegador. **No forma parte de la app.** |
| `SKILL.md` | Referencia | Resumen del sistema para usarlo como skill. |

## Cómo abrir los prototipos

Sirve la carpeta con un servidor estático y abre `CRM App.dc.html`:

```bash
npx serve design
```

Necesita conexión: React, Inter y Phosphor se cargan desde CDN. Cuentas de prueba: `marta@crm.es` (dueña), `carlos@crm.es`, `irene@crm.es` y `diego@crm.es`, todas con la contraseña `demo1234`.

## Qué NO copiar del prototipo

- El formato `.dc.html`, las plantillas `{{ }}` y `support.js`.
- Los estilos inline. En la app se usan clases de Tailwind con los tokens de `tailwind.css`.
- El router por hash (`#/hoy`). En la app se usa React Router con rutas normales.
- La autenticación. En el prototipo la contraseña se comprueba en el propio navegador y la sesión se guarda en `localStorage` con la clave `crm-app-session`. En producción la autenticación y la comprobación de roles van en el servidor.
- Los datos de ejemplo, que están fijos en el código del prototipo.

## Árbol de rutas

```
/login                         Iniciar sesión (pública)
/                              → /hoy
└─ <AppShell>                  requiere sesión; guarda la ruta pedida y vuelve a ella tras entrar
   ├─ /hoy                     Tareas del día: Atrasadas → Para hoy → Completadas
   │  └─ /hoy/tarea/:id        Detalle de seguimiento (hoja inferior en móvil, panel a la derecha en escritorio)
   ├─ /clientes                Lista de clientes: búsqueda + filtro por etapa
   │  ├─ /clientes/nuevo       Alta de cliente → al guardar abre su ficha
   │  └─ /clientes/:id         Ficha del cliente
   │     ├─ /interaccion       Formulario: anotar interacción
   │     ├─ /seguimiento       Formulario: programar seguimiento
   │     └─ /venta             Formulario: venta u oportunidad
   ├─ /cuenta                  Mi cuenta
   │  ├─ /cuenta/datos         Editar nombre y email
   │  └─ /cuenta/contrasena    Cambiar contraseña
   ├─ /equipo                  Usuarios y roles; solo rol «duena», si no, «Acceso restringido»
   └─ *                        404
```

Los formularios de la ficha son rutas hijas: se abren en una hoja inferior en móvil y en un diálogo en tableta y escritorio. Se cierran con Atrás, con Esc o tocando fuera.

## Layout responsive

- **Móvil, < 768px:** barra inferior fija con dos pestañas (Hoy y Clientes) y botón flotante «+ Nuevo» en la lista. Cada pantalla ocupa todo el ancho.
- **Tableta, 768–1023px:** la lista de clientes y la ficha van en dos columnas (maestro-detalle).
- **Escritorio, ≥ 1024px:** sidebar de 232px con Hoy, Clientes y, al pie, avatar y nombre que llevan a `/cuenta`. La lista de clientes mide 380px y la ficha ocupa el resto.

## Reglas de negocio reflejadas en el prototipo

- **Hoy:** muestra primero los seguimientos atrasados. Cada tarea enseña el cliente, la acción, la fecha u hora y el responsable, con un botón «Hecho» y la opción Deshacer en un aviso. Al tocar la tarea se abre la ficha del cliente. Los seguimientos futuros solo aparecen en la ficha.
- **Búsqueda de clientes:** por nombre, email o teléfono. Ignora tildes y mayúsculas, y en el teléfono ignora espacios y signos (necesita al menos 2 cifras).
- **Fila de cliente:** nombre, empresa y teléfono, último contacto (la interacción más reciente que no sea una nota), etapa y una etiqueta «Tarea atrasada» o «Tarea para hoy».
- **Nuevo cliente:** nombre obligatorio. Teléfono de 9 a 15 cifras, email con formato válido y sin repetir, canal de origen obligatorio (web, WhatsApp o email) y nota de hasta 500 caracteres.
- **Ficha:** cabecera con nombre, empresa, teléfono (con WhatsApp), email y canal de origen. Debajo: acciones rápidas, seguimientos pendientes e historial cronológico que mezcla interacciones y ventas, agrupado por día y con lo más reciente primero.
- **Interacción:** fecha (hoy por defecto, no futura), canal (llamada, email, WhatsApp o en persona) y texto. **El autor es el usuario con sesión y no se puede editar.**
- **Venta u oportunidad:** qué se vende, importe (obligatorio y mayor que 0, en formato es-ES), estado (Abierta en azul por defecto, Ganada en verde, Perdida en rojo), fecha (no futura) y quién la gestiona. **Registrar una venta no cambia la etapa del cliente.**
- **Seguimiento:** qué hacer, fecha (no pasada, con atajos), hora opcional y responsable a elegir del equipo, que puede no ser quien lo crea. Se guarda también quién lo creó (`createdBy`).
- **Roles:** `duena`, `ventas` y `admin`. Solo `duena` ve y usa `/equipo`. La comprobación se centraliza en `canManageUsers(user)` y se aplica en tres puntos, marcados en el prototipo con etiquetas «Control de rol»: el menú de cuenta, la guarda de la ruta y la acción de eliminar. No se puede eliminar ni a una misma ni a la dueña. Los seguimientos pendientes del usuario eliminado pasan a quien lo elimina.
- **Confirmaciones:** solo lo irreversible abre un diálogo (eliminar usuario, cerrar sesión). Lo reversible se hace directamente y ofrece Deshacer en un aviso.

## Modelo de datos implícito

```ts
type RoleId = 'duena' | 'ventas' | 'admin';
type User = { id: string; full: string; email: string; roleId: RoleId };
type Stage = 'nuevo' | 'contactado' | 'propuesta' | 'negociacion' | 'ganado' | 'perdido';
type Client = { id: string; name: string; company?: string; phone?: string; email?: string;
  origin: 'web' | 'whatsapp' | 'email'; stage: Stage };
type Interaction = { id: string; clientId: string; kind: 'interaccion';
  channel: 'llamada' | 'email' | 'whatsapp' | 'persona' | 'nota'; text: string;
  authorId: string; at: string /* ISO */ };
type Opportunity = { id: string; clientId: string; kind: 'venta'; concept: string;
  amount: number; status: 'abierta' | 'ganada' | 'perdida'; managerId: string; at: string };
type FollowUp = { id: string; clientId: string; title: string; date: string /* YYYY-MM-DD */;
  time?: string; ownerId: string; createdBy: string; done: boolean };
```

## Accesibilidad (resumen de `design.md`)

WCAG 2.2 AA. Zonas táctiles de al menos 48px en móvil, campos a 16px, foco visible con anillo de acento de 2px, estados que no dependen solo del color (siempre con icono o texto) y soporte de texto al 200%.
