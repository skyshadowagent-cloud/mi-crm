import React from 'react';
export function CompanyLogo({ name = '', src, size = 'md' }) {
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return <span className={'logo' + (size === 'sm' ? ' logo-sm' : '')} aria-hidden={!src}>{src ? <img src={src} alt={name} /> : initials}</span>;
}