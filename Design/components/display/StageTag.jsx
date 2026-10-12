import React from 'react';
import { Tag } from './Tag.jsx';
const STAGES = {
  nuevo: { tone: 'neutral', icon: 'circle-dashed', label: 'Nuevo' },
  contactado: { tone: 'info', icon: 'chat-circle', label: 'Contactado' },
  propuesta: { tone: 'accent', icon: 'file-text', label: 'Propuesta' },
  negociacion: { tone: 'warning', icon: 'handshake', label: 'Negociación' },
  ganado: { tone: 'success', icon: 'check-circle', label: 'Ganado' },
  perdido: { tone: 'danger', icon: 'x-circle', label: 'Perdido' },
};
export function StageTag({ stage = 'nuevo', size = 'md', showIcon = true }) {
  const s = STAGES[stage] || STAGES.nuevo;
  return <Tag tone={s.tone} icon={showIcon ? s.icon : undefined} size={size}>{s.label}</Tag>;
}