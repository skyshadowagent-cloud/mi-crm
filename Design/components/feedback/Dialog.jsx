import React from 'react';
export function Dialog({ open = true, title, children, actions, onClose, inline = false }) {
  if (!open) return null;
  const box = <div className="dialog" role="dialog" aria-modal={!inline} aria-label={title}><div className="dialog-title">{title}</div><div className="dialog-body">{children}</div>{actions && <div className="dialog-actions">{actions}</div>}</div>;
  if (inline) return box;
  return <div className="dialog-backdrop" onClick={e => e.target === e.currentTarget && onClose && onClose()}>{box}</div>;
}