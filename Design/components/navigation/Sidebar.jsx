import React from 'react';
export function Sidebar({ items, active, onChange, brand = 'CRM' }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand"><span className="wordmark-mark" />{brand}</div>
      {items.map(it => (
        <button key={it.id} className="sidebar-item" aria-current={active === it.id ? 'page' : undefined} onClick={() => onChange && onChange(it.id)}>
          <i className={'ph ph-' + it.icon} aria-hidden="true" />{it.label}
          {it.badge != null && <span className="tag tag-warning tag-sm sidebar-badge tabular">{it.badge}</span>}
        </button>
      ))}
    </aside>
  );
}