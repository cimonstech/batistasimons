import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface EmailRequest {
  resultsId: string;
  userEmail: string;
  userPhone: string;
  results: {
    websiteType: string;
    techStack: string[];
    whyThisWorks: string;
    timeline: string;
    hosting: string;
    bandwidth: string;
    security: string;
    nextStep: string;
  };
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

    const body: EmailRequest = await request.json();
    const { userEmail, userPhone, results, resultsId } = body;

    // Get the origin from the request
    const referer = request.headers.get("referer");
    const origin = referer 
      ? new URL(referer).origin 
      : process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";
    const resultsUrl = `${origin}/advisor/results/${resultsId}`;

    // Email to user
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3377ff 0%, #00d2ff 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { background: white; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #3377ff; }
            .section h3 { color: #3377ff; margin-top: 0; }
            .cta-button { display: inline-block; background: #3377ff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
            .footer { text-align: center; color: #666; font-size: 12px; margin-top: 30px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Your Website Project Recommendations</h1>
              <p>Thank you for using our Project Advisor!</p>
            </div>
            <div class="content">
              <div class="section">
                <h3>Recommended Website Type</h3>
                <p>${results.websiteType}</p>
              </div>
              
              <div class="section">
                <h3>Suggested Technology</h3>
                <ul>
                  ${results.techStack.map((tech) => `<li>${tech}</li>`).join("")}
                </ul>
                ${results.whyThisWorks ? `<p><strong>Why this works:</strong> ${results.whyThisWorks}</p>` : ""}
              </div>
              
              <div class="section">
                <h3>Estimated Timeline</h3>
                <p>${results.timeline}</p>
              </div>
              
              <div class="section">
                <h3>Hosting Recommendation</h3>
                <p>${results.hosting}</p>
                ${results.bandwidth ? `<p><strong>Bandwidth Needs:</strong> ${results.bandwidth}</p>` : ""}
              </div>
              
              <div class="section">
                <h3>SSL & Security</h3>
                <p>${results.security}</p>
              </div>
              
              <div class="section">
                <h3>Next Step</h3>
                <p>${results.nextStep}</p>
                <a href="${resultsUrl}" class="cta-button">View Full Results</a>
              </div>
              
              <div class="footer">
                <p><strong>Disclaimer:</strong> This is an advisory estimate based on the information provided, not a final quotation. Actual project requirements, timeline, and costs may vary.</p>
                <p>View your results online: <a href="${resultsUrl}">${resultsUrl}</a></p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Email to Batista
    const batistaEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #3377ff; color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 20px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 15px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #3377ff; }
            .info-box strong { color: #3377ff; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Project Advisor Submission</h2>
            </div>
            <div class="content">
              <div class="info-box">
                <strong>User Email:</strong> ${userEmail}<br>
                <strong>User Phone:</strong> ${userPhone}<br>
                <strong>Results ID:</strong> ${resultsId}
              </div>
              
              <div class="info-box">
                <strong>Recommended Website Type:</strong><br>
                ${results.websiteType}
              </div>
              
              <div class="info-box">
                <strong>Technology Stack:</strong><br>
                ${results.techStack.join(", ")}
              </div>
              
              <div class="info-box">
                <strong>Timeline:</strong> ${results.timeline}
              </div>
              
              <div class="info-box">
                <strong>View Full Results:</strong><br>
                <a href="${resultsUrl}">${resultsUrl}</a>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Get email configuration from environment variables
    const fromEmail = process.env.ADVISOR_FROM_EMAIL || "Portfolio Advisor <onboarding@resend.dev>";
    const adminEmail = process.env.ADVISOR_ADMIN_EMAIL || "batista.simons1@gmail.com";

    // Send email to user
    await resend.emails.send({
      from: fromEmail,
      to: userEmail,
      subject: "Your Website Project Recommendations",
      html: userEmailHtml,
    });

    // Send email to admin (Batista)
    await resend.emails.send({
      from: fromEmail,
      to: adminEmail,
      subject: `New Project Advisor Submission - ${userEmail}`,
      html: batistaEmailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
