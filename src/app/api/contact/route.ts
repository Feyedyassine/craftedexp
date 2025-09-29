import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limiting: 5 requests per IP per hour
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const key = ip;
  const record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

function validateFormData(data: Record<string, unknown>): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters');
  }

  if (!data.email || typeof data.email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address is required');
  }

  if (!data.phone || typeof data.phone !== 'string' || data.phone.trim().length < 8) {
    errors.push('Phone number is required and must be at least 8 characters');
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length < 10) {
    errors.push('Message is required and must be at least 10 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .substring(0, 1000); // Limit length
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               request.headers.get('x-vercel-forwarded-for')?.split(',')[0] ||
               'unknown';

    // Check rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();
    
    // Validate form data
    const validation = validateFormData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
      company: sanitizeInput(body.company || ''),
      message: sanitizeInput(body.message)
    };

    // Get location data from Vercel headers
    const country = request.headers.get('x-vercel-ip-country') || 'Unknown';
    const city = request.headers.get('x-vercel-ip-city') || 'Unknown';
    const region = request.headers.get('x-vercel-ip-region') || 'Unknown';
    const timezone = request.headers.get('x-vercel-ip-timezone') || 'Unknown';

    // Get user agent and referer
    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const referer = request.headers.get('referer') || 'Direct';

    // Create email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { background: #0d1f2d; color: white; padding: 30px; text-align: center; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
            .subtitle { font-size: 14px; opacity: 0.8; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0d1f2d; margin-bottom: 5px; display: block; }
            .value { background: #f8f9fa; padding: 12px; border-radius: 4px; border-left: 4px solid #0d1f2d; }
            .message { background: #f8f9fa; padding: 15px; border-radius: 4px; border-left: 4px solid #0d1f2d; white-space: pre-wrap; }
            .location { background: #e8f4f8; padding: 15px; border-radius: 4px; margin-top: 20px; }
            .location-title { font-weight: bold; color: #0d1f2d; margin-bottom: 10px; }
            .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666; }
            .timestamp { color: #666; font-size: 12px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">Crafted Experiences</div>
              <div class="subtitle">New Contact Form Submission</div>
            </div>
            
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${sanitizedData.name}</div>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <div class="value">${sanitizedData.email}</div>
              </div>
              
              <div class="field">
                <span class="label">Phone:</span>
                <div class="value">${sanitizedData.phone}</div>
              </div>
              
              ${sanitizedData.company ? `
              <div class="field">
                <span class="label">Company:</span>
                <div class="value">${sanitizedData.company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <span class="label">Message:</span>
                <div class="message">${sanitizedData.message}</div>
              </div>
              
              <div class="location">
                <div class="location-title">📍 Location Information</div>
                <div><strong>Country:</strong> ${country}</div>
                <div><strong>City:</strong> ${city}</div>
                <div><strong>Region:</strong> ${region}</div>
                <div><strong>Timezone:</strong> ${timezone}</div>
              </div>
              
              <div class="timestamp">
                <div><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                  timeZone: timezone !== 'Unknown' ? timezone : 'UTC',
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric', 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}</div>
                <div><strong>IP Address:</strong> ${ip}</div>
                <div><strong>User Agent:</strong> ${userAgent}</div>
                <div><strong>Referer:</strong> ${referer}</div>
              </div>
            </div>
            
            <div class="footer">
              This email was sent from the Crafted Experiences contact form.
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email
    const { data: emailData, error } = await resend.emails.send({
      from: 'Crafted Experiences <noreply@crafted-experiences.com>',
      to: ['contact@crafted-experiences.com'],
      subject: `New Contact Form Submission - ${sanitizedData.name}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        emailId: emailData?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
