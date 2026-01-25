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
    websiteTypeDescription?: string;
    techStack: string[];
    techStackDetails?: string;
    whyThisWorks: string;
    timeline: string;
    timelineBreakdown?: string;
    hosting: string;
    hostingDetails?: string;
    bandwidth: string;
    security: string;
    securityDetails?: string;
    nextStep: string;
    benefits?: string[];
    considerations?: string[];
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
                <p><strong>${results.websiteType}</strong></p>
                ${results.websiteTypeDescription ? `<p style="margin-top: 10px;">${results.websiteTypeDescription}</p>` : ""}
              </div>
              
              <div class="section">
                <h3>Suggested Technology</h3>
                <ul>
                  ${results.techStack.map((tech) => `<li><strong>${tech}</strong></li>`).join("")}
                </ul>
                ${results.techStackDetails ? `<p style="margin-top: 15px;"><strong>What these technologies do:</strong><br>${results.techStackDetails}</p>` : ""}
                ${results.whyThisWorks ? `<p style="margin-top: 15px; padding: 15px; background: #e8f4f8; border-radius: 5px;"><strong>Why this works for your project:</strong><br>${results.whyThisWorks}</p>` : ""}
              </div>
              
              <div class="section">
                <h3>Estimated Timeline</h3>
                <p><strong>${results.timeline}</strong></p>
                ${results.timelineBreakdown ? `<p style="margin-top: 10px; white-space: pre-line;">${results.timelineBreakdown}</p>` : ""}
              </div>
              
              <div class="section">
                <h3>Hosting Recommendation</h3>
                <p><strong>${results.hosting}</strong></p>
                ${results.hostingDetails ? `<p style="margin-top: 10px;">${results.hostingDetails}</p>` : ""}
                ${results.bandwidth ? `<p style="margin-top: 10px;"><strong>Bandwidth Needs:</strong> ${results.bandwidth}</p>` : ""}
              </div>
              
              <div class="section">
                <h3>SSL & Security</h3>
                <p><strong>${results.security}</strong></p>
                ${results.securityDetails ? `<p style="margin-top: 10px;">${results.securityDetails}</p>` : ""}
              </div>
              
              ${results.benefits && results.benefits.length > 0 ? `
              <div class="section">
                <h3>Key Benefits</h3>
                <ul>
                  ${results.benefits.map((benefit) => `<li>${benefit}</li>`).join("")}
                </ul>
              </div>
              ` : ""}
              
              ${results.considerations && results.considerations.length > 0 ? `
              <div class="section">
                <h3>Things to Consider</h3>
                <ul>
                  ${results.considerations.map((consideration) => `<li>${consideration}</li>`).join("")}
                </ul>
              </div>
              ` : ""}
              
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
    // Resend requires verified domains - use their default domain to avoid verification issues
    // Always use onboarding@resend.dev unless domain is verified
    let fromEmail = "onboarding@resend.dev";
    
    // Only use custom email if domain is verified (you can enable this after verification)
    const customFromEmail = process.env.ADVISOR_FROM_EMAIL;
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
    
    const adminEmail = process.env.ADVISOR_ADMIN_EMAIL || "batista.simons1@gmail.com";

    // Send email to user
    let userEmailError = null;
    try {
      const userEmailResult = await resend.emails.send({
        from: fromEmail,
        to: userEmail,
        subject: "Your Website Project Recommendations",
        html: userEmailHtml,
      });
      
      if (userEmailResult.error) {
        console.error("User email error:", userEmailResult.error);
        userEmailError = userEmailResult.error;
      } else {
        console.log("User email sent successfully:", userEmailResult.data?.id);
      }
    } catch (emailError) {
      console.error("Error sending user email:", emailError);
      userEmailError = emailError;
      // Continue to try sending admin email even if user email fails
    }

    // Send email to admin (Batista)
    let adminEmailError = null;
    try {
      const adminEmailResult = await resend.emails.send({
        from: fromEmail,
        to: adminEmail,
        subject: `New Project Advisor Submission - ${userEmail}`,
        html: batistaEmailHtml,
      });
      
      if (adminEmailResult.error) {
        console.error("Admin email error:", adminEmailResult.error);
        adminEmailError = adminEmailResult.error;
      } else {
        console.log("Admin email sent successfully:", adminEmailResult.data?.id);
      }
    } catch (emailError) {
      console.error("Error sending admin email:", emailError);
      adminEmailError = emailError;
    }

    // If both emails failed, return error
    if (userEmailError && adminEmailError) {
      throw new Error("Failed to send both emails. Please check your Resend configuration.");
    }

    // If at least one email succeeded, return success (but log warnings)
    if (userEmailError) {
      console.warn("User email failed but admin email succeeded");
    }
    if (adminEmailError) {
      console.warn("Admin email failed but user email succeeded");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const errorDetails = error instanceof Error ? error.toString() : String(error);
    
    return NextResponse.json(
      {
        error: "Failed to send email",
        message: errorMessage,
        details: process.env.NODE_ENV === "development" ? errorDetails : undefined,
      },
      { status: 500 }
    );
  }
}
