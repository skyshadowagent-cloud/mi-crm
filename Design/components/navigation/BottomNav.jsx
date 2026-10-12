import React from 'react';
export const DEFAULT_NAV = [
  { id: 'inicio', label: 'Inicio', icon: 'house' },
  { id: 'contactos', label: 'Contactos', icon: 'users' },
  { id: 'deals', label: 'Deals', icon: 'kanban' },
  { id: 'tareas', label: 'Tareas', icon: 'check-square' },
  { id: 'mas', label: 'Más', icon: 'dots-three' },
];
export function BottomNav({ items = DEFAULT_NAV, active, onChange }) {
  return (
    <nav className="bottom-nav" aria-label="Principal">
      {items.map(it => (
        <button key={it.id} className="bottom-nav-item" aria-current={active === it.id ? 'page' : undefined} onClick={() => onChange && onChange(it.id)}>
          <i className={'ph ph-' + it.icon} aria-hidden="true" />{it.label}
        </button>
      ))}
    </nav>
  );
}