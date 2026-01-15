import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = process.env.OPENAI_API_KEY
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null;

interface AdvisorRequest {
  projectGoal: string;
  features: string[];
  contentVolume: string;
  description: string;
  timeline: string;
}

export async function POST(request: NextRequest) {
  try {
    if (!openai) {
      return NextResponse.json(
        {
          error: "OpenAI API key not configured",
          message: "Please set OPENAI_API_KEY in your environment variables",
        },
        { status: 500 }
      );
    }

    const body: AdvisorRequest = await request.json();

    // Build the prompt for OpenAI
    const prompt = `You are a website project advisor helping clients understand the best way to build their website project.

Project Details:
- Goal: ${body.projectGoal}
- Features needed: ${body.features.join(", ") || "None specified"}
- Content volume: ${body.contentVolume}
- Timeline expectation: ${body.timeline}
- Description: ${body.description}

Based on this information, provide a comprehensive advisory report in JSON format with the following structure:
{
  "websiteType": "A clear description of the recommended website type (e.g., 'A content-based website (Blog)' or 'Online store')",
  "techStack": ["Technology 1", "Technology 2", "Technology 3"],
  "whyThisWorks": "A brief explanation (2-3 sentences) of why this technology stack works well for their needs",
  "timeline": "Estimated timeline (e.g., '1-2 weeks' or '4-6 weeks')",
  "hosting": "Hosting recommendation (e.g., 'Shared hosting, entry-level plan is sufficient' or 'Managed WordPress hosting, medium bandwidth plan')",
  "bandwidth": "Bandwidth needs (e.g., 'Low to moderate' or 'Medium to high')",
  "security": "SSL & security recommendations (e.g., 'Free SSL certificate, basic security plugin recommended' or 'SSL required for payments, firewall & backups recommended')",
  "nextStep": "Next step recommendation (e.g., 'Book a free consultation or request a quote')"
}

Important guidelines:
- Do NOT provide exact prices or guarantees
- Use terms like "estimated", "recommended", "suggested"
- Keep explanations clear and non-technical where possible
- Be realistic about timelines
- Focus on WordPress, WooCommerce, React, Next.js, PHP, MySQL, and similar technologies
- For blogs/content sites, recommend WordPress
- For e-commerce, recommend WordPress + WooCommerce
- For custom applications, recommend React/Next.js
- Always emphasize this is advisory, not a final quote

Return ONLY valid JSON, no additional text.`;

    const completion = await openai!.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful website project advisor. Always respond with valid JSON only, no markdown formatting, no code blocks.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      response_format: { type: "json_object" },
    });

    const responseText = completion.choices[0]?.message?.content;
    if (!responseText) {
      throw new Error("No response from AI");
    }

    // Parse the JSON response
    const advisorResponse = JSON.parse(responseText);

    return NextResponse.json(advisorResponse);
  } catch (error) {
    console.error("Advisor API error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate recommendations",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
