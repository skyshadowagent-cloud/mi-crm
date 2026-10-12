import React from 'react';
export function Card({ as: El = 'div', children, className = '', ...rest }) {
  return <El className={'card ' + className} {...rest}>{children}</El>;
}