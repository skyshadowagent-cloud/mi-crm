import React from 'react';
import { CompanyLogo } from '../display/CompanyLogo.jsx';
import { StageTag } from '../display/StageTag.jsx';
export function ContactRow({ name, company, meta, metaTone, amount, stage, logo, open = false, onCall, onWhatsApp, onClick }) {
  const row = (
    <div className="contact-row" role="button" tabIndex={0} onClick={onClick}>
      <CompanyLogo name={company || name} src={logo} />
      <div style={{ minWidth: 0 }}>
        <div className="contact-row-name">{name}</div>
        <div className="contact-row-meta" style={metaTone ? { color: 'var(--color-' + metaTone + '-fg)' } : undefined}>{[company, meta].filter(Boolean).join(' · ')}</div>
      </div>
      {(amount || stage) && <div className="contact-row-end">{amount && <span className="tabular" style={{ fontWeight: 500 }}>{amount}</span>}{stage && <StageTag stage={stage} size="sm" showIcon={false} />}</div>}
    </div>
  );
  if (!onCall && !onWhatsApp) return row;
  return (
    <div className={'swipe' + (open ? ' is-open' : '')}>
      <div className="swipe-actions">
        <button className="swipe-action swipe-action-call" onClick={onCall}><i className="ph ph-phone" aria-hidden="true" />Llamar</button>
        <button className="swipe-action swipe-action-wa" onClick={onWhatsApp}><i className="ph ph-whatsapp-logo" aria-hidden="true" />WhatsApp</button>
      </div>
      {row}
    </div>
  );
}