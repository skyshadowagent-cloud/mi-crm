import React from 'react';
export function SegmentedControl({ options, value, onChange, name = 'seg', label }) {
  return (
    <div className="seg" role="radiogroup" aria-label={label}>
      {options.map(o => {
        const opt = typeof o === 'string' ? { value: o, label: o } : o;
        return (
          <label key={opt.value} className="seg-opt">
            <input type="radio" name={name} value={opt.value} checked={value === opt.value} onChange={() => onChange && onChange(opt.value)} />
            {opt.icon && <i className={'ph ph-' + opt.icon} aria-hidden="true" />}{opt.label}
          </label>
        );
      })}
    </div>
  );
}