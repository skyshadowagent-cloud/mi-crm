import React from 'react';
export function Button({ variant = 'secondary', size = 'md', icon, iconRight, loading = false, block = false, disabled, children, className = '', ...rest }) {
  const cls = ['btn', 'btn-' + variant, size !== 'md' && 'btn-' + size, block && 'btn-block', className].filter(Boolean).join(' ');
  return (
    <button className={cls} disabled={disabled} aria-busy={loading || undefined} {...rest}>
      {loading ? <i className="ph ph-circle-notch spin" aria-hidden="true" /> : icon && <i className={'ph ph-' + icon} aria-hidden="true" />}
      {children}
      {iconRight && !loading && <i className={'ph ph-' + iconRight} aria-hidden="true" />}
    </button>
  );
}