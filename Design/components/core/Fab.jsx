import React from 'react';
export function Fab({ icon = 'plus', label = 'Nuevo', className = '', ...rest }) {
  return <button className={'btn btn-fab ' + className} {...rest}><i className={'ph ph-' + icon} aria-hidden="true" />{label}</button>;
}