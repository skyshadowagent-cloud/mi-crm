import React from 'react';
export function Field({ label, help, error, icon, id, multiline = false, className = '', ...rest }) {
  const fid = id || 'f-' + String(label || '').toLowerCase().replace(/\W+/g, '-');
  const Tag = multiline ? 'textarea' : 'input';
  const control = <Tag id={fid} className="input" aria-invalid={error ? true : undefined} aria-describedby={error || help ? fid + '-d' : undefined} {...rest} />;
  return (
    <div className={'field ' + className}>
      {label && <label htmlFor={fid}>{label}</label>}
      {icon ? <div className="input-wrap"><i className={'ph ph-' + icon} aria-hidden="true" />{control}</div> : control}
      {error ? <span id={fid + '-d'} className="field-error"><i className="ph ph-warning-circle" aria-hidden="true" />{error}</span>
        : help && <span id={fid + '-d'} className="field-help">{help}</span>}
    </div>
  );
}