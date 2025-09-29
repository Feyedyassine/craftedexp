import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import countries from 'world-countries';

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

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

function getCountryName(countryCode: string): string {
  const country = countries.find(c => c.cca2 === countryCode);
  return country ? country.name.common : countryCode;
}

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

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
            .container { max-width: 700px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #0d1f2d 0%, #1a2f3f 100%); color: white; padding: 40px 30px; text-align: center; }
            .logo { width: 200px; height: auto; margin-bottom: 15px; }
            .subtitle { font-size: 16px; opacity: 0.9; margin-bottom: 10px; }
            .enquiry-type { background: rgba(255,255,255,0.1); padding: 8px 16px; border-radius: 20px; display: inline-block; font-size: 14px; font-weight: 600; }
            .content { padding: 40px; }
            .section { margin-bottom: 35px; }
            .section-title { font-size: 18px; font-weight: bold; color: #0d1f2d; margin-bottom: 20px; padding-bottom: 8px; border-bottom: 2px solid #e8f4f8; }
            .field { margin-bottom: 18px; }
            .label { font-weight: 600; color: #0d1f2d; margin-bottom: 6px; display: block; font-size: 14px; }
            .value { background: #f8f9fa; padding: 14px; border-radius: 6px; border-left: 4px solid #0d1f2d; font-size: 15px; }
            .message { background: #f8f9fa; padding: 16px; border-radius: 6px; border-left: 4px solid #0d1f2d; white-space: pre-wrap; font-size: 15px; }
            .location { background: linear-gradient(135deg, #e8f4f8 0%, #f0f8ff 100%); padding: 20px; border-radius: 8px; margin-top: 25px; }
            .location-title { font-weight: bold; color: #0d1f2d; margin-bottom: 15px; font-size: 16px; }
            .location-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
            .location-item { font-size: 14px; }
            .footer { background: #f8f9fa; padding: 25px; text-align: center; font-size: 12px; color: #666; border-top: 1px solid #e0e0e0; }
            .timestamp { color: #666; font-size: 12px; margin-top: 25px; background: #f0f0f0; padding: 15px; border-radius: 6px; }
            .timestamp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
            .budget-range { background: #e8f4f8; padding: 12px; border-radius: 6px; font-weight: 600; color: #0d1f2d; }
            .countries { background: #f0f8ff; padding: 12px; border-radius: 6px; }
            .empty-field { color: #999; font-style: italic; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://craftedexperiences.com/icons/logo_horizental.svg" alt="Crafted Experiences" class="logo" />
              <div class="subtitle">New Contact Form Submission</div>
              <div class="enquiry-type">${body.type === 'corporate' ? '🏢 Corporate Enquiry' : '✈️ Individual Enquiry'}</div>
            </div>
            
            <div class="content">
              <!-- Contact Information -->
              <div class="section">
                <div class="section-title">👤 Contact Information</div>
                
                <div class="field">
                  <span class="label">Full Name:</span>
                  <div class="value">${sanitizedData.name}</div>
                </div>
                
                <div class="field">
                  <span class="label">Email Address:</span>
                  <div class="value">${sanitizedData.email}</div>
                </div>
                
                <div class="field">
                  <span class="label">Phone Number:</span>
                  <div class="value">${sanitizedData.phone}</div>
                </div>
                
                ${sanitizedData.company ? `
                <div class="field">
                  <span class="label">Company Name:</span>
                  <div class="value">${sanitizedData.company}</div>
                </div>
                ` : ''}
              </div>

              ${body.type === 'individuals' ? `
              <!-- Trip Details -->
              <div class="section">
                <div class="section-title">✈️ Trip Details</div>
                
                <div class="field">
                  <span class="label">Destinations:</span>
                  <div class="value countries">${body.countries || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <span class="label">Travel Date:</span>
                  <div class="value">${body.date || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <span class="label">Duration:</span>
                  <div class="value">${body.duration || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <span class="label">Number of People:</span>
                  <div class="value">${body.people || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <span class="label">Budget Range:</span>
                  <div class="value budget-range">${formatCurrency(body.budget?.min || 0)} - ${formatCurrency(body.budget?.max || 0)}</div>
                </div>
                
                <div class="field">
                  <span class="label">Additional Comments:</span>
                  <div class="value">${body.comments || 'None'}</div>
                </div>
              </div>
              ` : `
              <!-- Corporate Service Details -->
              <div class="section">
                <div class="section-title">🏢 Corporate Service Details</div>
                
                <div class="field">
                  <span class="label">Service Type:</span>
                  <div class="value">${body.service || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <span class="label">Company Name:</span>
                  <div class="value">${body.company || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <span class="label">Number of Attendees:</span>
                  <div class="value">${body.attendees || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <span class="label">Preferred Date:</span>
                  <div class="value">${body.date || 'Not specified'}</div>
                </div>
                
                <div class="field">
                  <span class="label">Budget Range:</span>
                  <div class="value budget-range">${formatCurrency(body.budget?.min || 0)} - ${formatCurrency(body.budget?.max || 0)}</div>
                </div>
                
                <div class="field">
                  <span class="label">Event Objectives & Requirements:</span>
                  <div class="value">${body.requirements || 'None'}</div>
                </div>
              </div>
              `}
              
              <!-- Additional Information -->
              <div class="section">
                <div class="section-title">ℹ️ Additional Information</div>
                
                <div class="field">
                  <span class="label">How did you hear about us:</span>
                  <div class="value">${body.source || 'Not specified'}</div>
                </div>
              </div>
              
              <div class="location">
                <div class="location-title">📍 Location Information</div>
                <div class="location-grid">
                  <div class="location-item"><strong>Country:</strong> ${getCountryName(country)}</div>
                  <div class="location-item"><strong>City:</strong> ${city}</div>
                  <div class="location-item"><strong>Region:</strong> ${region}</div>
                  <div class="location-item"><strong>Timezone:</strong> ${timezone}</div>
                </div>
              </div>
              
              <div class="timestamp">
                <div class="timestamp-grid">
                  <div><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                    timeZone: timezone !== 'Unknown' ? timezone : 'UTC',
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}</div>
                  <div><strong>IP Address:</strong> ${ip}</div>
                  <div><strong>User Agent:</strong> ${userAgent.substring(0, 50)}...</div>
                  <div><strong>Referer:</strong> ${referer}</div>
                </div>
              </div>
            </div>
            
            <div class="footer">
              This email was sent from the Crafted Experiences contact form.<br>
              Please respond to this enquiry promptly to maintain excellent customer service.
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
