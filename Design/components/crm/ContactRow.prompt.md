Fila de contacto para listas móviles; con `onCall`/`onWhatsApp` habilita las acciones al deslizar.
```jsx
<ContactRow name="Lucía Ortega" company="Estudio Brisa" meta="hace 2 h" amount="2.400 €" stage="propuesta" />
<ContactRow name="Javier Molina" company="Molina Fitness" open onCall={call} onWhatsApp={wa} />
```
- Formatea importes con `Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })`.