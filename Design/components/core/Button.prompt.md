Botón de acción; usa `primary` para la única acción principal de la pantalla y `lg` en móvil.
```jsx
<Button variant="primary" size="lg" icon="floppy-disk">Guardar</Button>
<Button variant="secondary" icon="phone">Llamar</Button>
<Button variant="danger" icon="trash">Eliminar</Button>
<Button variant="primary" loading>Guardando…</Button>
```
- Variantes: primary (contorno acento), secondary (contorno neutro), ghost (solo texto), danger.
- Tamaños: sm 36 · md 44 · lg 48. En móvil nunca sm.
- `loading` sustituye el icono por un spinner y pone aria-busy.