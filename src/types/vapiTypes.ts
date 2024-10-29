// src/types/vapiTypes.ts
export interface Call {
    id: string;
    orgId: string;
    createdAt: string;
    updatedAt: string;
    type: 'inboundPhoneCall' | 'outboundPhoneCall' | 'webCall';
    status: 'queued' | 'ringing' | 'in-progress' | 'forwarding' | 'ended';
  }
  