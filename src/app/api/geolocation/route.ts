import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get Vercel's built-in geolocation headers
    const country = request.headers.get('x-vercel-ip-country') || 'GB';
    const timezone = request.headers.get('x-vercel-ip-timezone') || 'Europe/London';
    const region = request.headers.get('x-vercel-ip-region') || '';
    const city = request.headers.get('x-vercel-ip-city') || '';

    // Log the headers for debugging (remove in production)
    console.log('Vercel Geolocation Headers:', {
      country,
      timezone,
      region,
      city,
    });

    return NextResponse.json({
      country,
      timezone,
      region,
      city,
      source: 'vercel',
    });
  } catch (error) {
    console.error('Geolocation API error:', error);
    return NextResponse.json(
      { error: 'Failed to get geolocation data' },
      { status: 500 }
    );
  }
}
