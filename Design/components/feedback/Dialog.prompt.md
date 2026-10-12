Modal solo para acciones irreversibles; para lo reversible usa Toast con "Deshacer".
```jsx
<Dialog title="¿Eliminar a Lucía Ortega?" onClose={close}
  actions={<><Button size="lg" onClick={close}>Cancelar</Button><Button variant="danger" size="lg" icon="trash">Eliminar</Button></>}>
  Se borrarán sus 3 deals y notas. Esta acción no se puede deshacer.
</Dialog>
```