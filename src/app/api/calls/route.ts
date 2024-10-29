// src/app/api/calls/route.ts
import { NextRequest, NextResponse } from 'next/server';
import vapiClient from '../../../utils/vapiClient';
import { Call } from 'types/vapiTypes';


export async function GET(req: NextRequest) {
  try {
    const limit = req.nextUrl.searchParams.get('limit') || '100';
    const assistantId = req.nextUrl.searchParams.get('assistantId');
    
    const response = await vapiClient.get<Call[]>('/call', {
      params: { limit, assistantId },
    });

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error('Error fetching calls:', error);
    return NextResponse.json({ error: 'Failed to fetch calls' }, { status: 500 });
  }
}
