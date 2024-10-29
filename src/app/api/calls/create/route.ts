// src/app/api/calls/create/route.ts
import { NextRequest, NextResponse } from 'next/server';
import vapiClient from '../../../../utils/vapiClient';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await vapiClient.post('/call', body);
    return NextResponse.json(response.data, { status: 201 });
  } catch (error) {
    console.error('Error creating call:', error);
    return NextResponse.json({ error: 'Failed to create call' }, { status: 500 });
  }
}
