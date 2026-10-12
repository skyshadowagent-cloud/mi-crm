import React from 'react';
export function IconButton({ icon, label, variant = 'secondary', size = 'md', className = '', ...rest }) {
  const cls = ['btn', 'btn-icon', 'btn-' + variant, size === 'lg' && 'btn-lg', className].filter(Boolean).join(' ');
  return <button className={cls} aria-label={label} title={label} {...rest}><i className={'ph ph-' + icon} aria-hidden="true" /></button>;
}