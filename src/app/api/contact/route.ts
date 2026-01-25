import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      return NextResponse.json(
        {
          error: "Email service not configured",
          message: "Please set RESEND_API_KEY in your environment variables",
        },
        { status: 500 }
      );
    }

    const body: ContactRequest = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          message: "Please provide name, email, and message",
        },
        { status: 400 }
      );
    }

    // Get email configuration from environment variables
    // Resend requires verified domains - use their default domain to avoid verification issues
    // Always use onboarding@resend.dev unless domain is verified
    let fromEmail = "onboarding@resend.dev";
    
    // Only use custom email if domain is verified (you can enable this after verification)
    const customFromEmail = process.env.CONTACT_FROM_EMAIL || process.env.ADVISOR_FROM_EMAIL;
    if (customFromEmail) {
      // Extract email address if it's in "Name <email>" format
      let extractedEmail = customFromEmail;
      if (customFromEmail.includes("<") && customFromEmail.includes(">")) {
        const match = customFromEmail.match(/<(.+)>/);
        if (match) {
          extractedEmail = match[1].trim();
        }
      }
      
      // Only use if it's from resend.dev domain (verified)
      if (extractedEmail.endsWith("@resend.dev")) {
        fromEmail = extractedEmail;
      } else {
        console.warn("Custom domain not verified, using Resend default. Verify domain at https://resend.com/domains");
      }
    }
    
    const adminEmail = process.env.CONTACT_ADMIN_EMAIL || "batista.simons1@gmail.com";

    // Email to admin (Batista)
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3377ff 0%, #00d2ff 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #3377ff; }
            .info-box strong { color: #3377ff; }
            .message-box { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border: 1px solid #e0e0e0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="info-box">
                <strong>Name:</strong> ${name}<br>
                <strong>Email:</strong> ${email}
              </div>
              
              <div class="message-box">
                <strong>Message:</strong><br><br>
                ${message.replace(/\n/g, '<br>')}
              </div>
              
              <div class="info-box" style="font-size: 12px; color: #666;">
                <strong>Reply to:</strong> <a href="mailto:${email}">${email}</a>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email to admin
    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: adminEmailHtml,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error: "Failed to send message",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
