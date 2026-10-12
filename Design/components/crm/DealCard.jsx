import React from 'react';
import { CompanyLogo } from '../display/CompanyLogo.jsx';
export function DealCard({ title, company, amount, due, dueTone, owner, dragging = false, onClick }) {
  const initials = (owner || '').split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className={'card deal-card' + (dragging ? ' is-dragging' : '')} onClick={onClick}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><CompanyLogo name={company} size="sm" /><span className="text-muted" style={{ fontSize: 'var(--text-sm)' }}>{company}</span></div>
      <div style={{ fontWeight: 600 }}>{title}</div>
      <div className="deal-amount">{amount}</div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        {due ? <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 'var(--text-sm)', color: dueTone ? 'var(--color-' + dueTone + '-fg)' : 'var(--color-text-muted)' }}><i className="ph ph-calendar-blank" aria-hidden="true" />{due}</span> : <span />}
        {owner && <span className="avatar" title={owner}>{initials}</span>}
      </div>
    </div>
  );
}