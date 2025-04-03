import nodemailer from 'nodemailer';

// Configure environment variables for production
// For development, replace these with your test credentials
const EMAIL_USER = process.env.EMAIL_USER || 'hstreckenbach@temparasolutions.com';
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || 'hstreckenbach@temparasolutions.com';
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || '';
const EMAIL_SERVICE = process.env.EMAIL_SERVICE || 'gmail';
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;

export async function POST(request) {
  try {
    // Parse the request body
    const data = await request.json();
    const { name, email, company, message } = data;
    
    // Simple validation
    if (!name || !email || !company) {
      return new Response(
        JSON.stringify({ success: false, message: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Create a transporter based on configuration
    let transporterConfig;
    
    if (SMTP_HOST && SMTP_PORT) {
      // Use custom SMTP server if configured
      transporterConfig = {
        host: SMTP_HOST,
        port: parseInt(SMTP_PORT, 10),
        secure: parseInt(SMTP_PORT, 10) === 465, // true for 465, false for other ports
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASSWORD,
        },
      };
    } else {
      // Use service-based configuration (Gmail, etc.)
      transporterConfig = {
        service: EMAIL_SERVICE,
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASSWORD,
        },
      };
    }
    
    const transporter = nodemailer.createTransport(transporterConfig);
    
    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Email service configuration error. Please contact us directly.',
          error: verifyError.message
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Prepare email content
    const mailOptions = {
      from: `"Tempara Website" <${EMAIL_USER}>`,
      to: EMAIL_RECIPIENT,
      subject: `New Strategy Call Request from ${name} at ${company}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Message: ${message || 'No message provided'}
      `,
      html: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; color: #333;">
  <h2 style="color: #4F46E5; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Strategy Call Request</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p><strong>Company:</strong> ${company}</p>
  <p><strong>Message:</strong> ${message || 'No message provided'}</p>
  <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
    <p>This email was sent from the Tempara Solutions website contact form.</p>
  </div>
</div>
      `,
      replyTo: email
    };
    
    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Email sent successfully'
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      console.error('Error sending email:', error);
      
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Failed to send email. Please try again later or contact us directly.', 
          error: error.message 
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Server error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: 'Server error. Please try again later.',
        error: error.message
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
} 