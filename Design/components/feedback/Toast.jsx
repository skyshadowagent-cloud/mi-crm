import React from 'react';
const ICON = { success: 'check-circle', info: 'info', warning: 'warning', danger: 'x-circle' };
export function Toast({ message, tone = 'success', actionLabel, onAction }) {
  return (
    <div className="toast" role="status">
      <i className={'ph ph-' + ICON[tone]} style={{ color: 'var(--color-' + tone + '-fg)' }} aria-hidden="true" />
      <span className="toast-msg">{message}</span>
      {actionLabel && <button className="btn btn-ghost" onClick={onAction}>{actionLabel}</button>}
    </div>
  );
}