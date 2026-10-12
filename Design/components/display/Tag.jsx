import React from 'react';
export function Tag({ tone = 'neutral', icon, size = 'md', children, className = '' }) {
  return <span className={['tag', 'tag-' + tone, size === 'sm' && 'tag-sm', className].filter(Boolean).join(' ')}>{icon && <i className={'ph ph-' + icon} aria-hidden="true" />}{children}</span>;
}