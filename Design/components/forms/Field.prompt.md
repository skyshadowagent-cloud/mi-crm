Campo de formulario de 48px con etiqueta arriba; nunca uses el placeholder como etiqueta.
```jsx
<Field label="Teléfono" type="tel" inputMode="tel" placeholder="+34 600 000 000" />
<Field label="Email" error="Falta el dominio, por ejemplo .com" />
<Field label="Buscar" icon="magnifying-glass" placeholder="Contactos, empresas o deals" />
```
- Texto a 16px para evitar el zoom de iOS. Usa `inputMode` correcto en móvil.