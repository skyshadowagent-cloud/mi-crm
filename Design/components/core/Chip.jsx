import React from 'react';
export function Chip({ selected = false, count, children, className = '', ...rest }) {
  return <button className={'chip ' + className} aria-pressed={selected} {...rest}>{children}{count != null && <span className="tabular">· {count}</span>}</button>;
}