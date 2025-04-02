// Example API route in Next.js (app/api/verify-turnstile/route.ts)
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { response } = await request.json();
  const secretKey = process.env.TURNSTILE_SECRET_KEY; // Ensure the secret key is set up in the .env

  const verificationResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: secretKey,
      response,
    }),
  });

  const result = await verificationResponse.json();

  if (result.success) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
