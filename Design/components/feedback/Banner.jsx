import React from 'react';
export function Banner({ tone = 'info', icon = 'info', children }) {
  return <div className="banner" role="status" style={{ background: 'var(--color-' + tone + '-bg)', color: 'var(--color-' + tone + '-fg)' }}><i className={'ph ph-' + icon} aria-hidden="true" /><span>{children}</span></div>;
}