Botón flotante de creación en móvil ("+ Nuevo"), abajo a la derecha sobre la barra inferior.
```jsx
<Fab onClick={openNew} />
```
- Posiciónalo con `position: fixed; right: 16px; bottom: calc(72px + env(safe-area-inset-bottom))`.