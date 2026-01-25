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

Based on this information, provide a comprehensive, detailed advisory report in JSON format with the following structure:
{
  "websiteType": "A clear, detailed description of the recommended website type (e.g., 'A content-based website (Blog)' or 'Online store')",
  "websiteTypeDescription": "A detailed 3-4 sentence explanation of what this website type means, what it's best for, and why it fits their needs. Write in plain, business-friendly language without technical jargon.",
  "techStack": ["Technology 1", "Technology 2", "Technology 3"],
  "techStackDetails": "A detailed explanation (4-5 sentences) of each technology in the stack, what it does in simple terms, and why each one is important for their project. Focus on benefits, not technical details.",
  "whyThisWorks": "A comprehensive explanation (5-6 sentences) of why this technology stack works well for their specific needs. Explain the benefits, scalability, ease of use, and how it addresses their project goals. Use business language, not technical jargon.",
  "timeline": "Estimated timeline (e.g., '8-12 weeks')",
  "timelineBreakdown": "A detailed breakdown of what happens during each phase: Planning (what's included), Development (key milestones), Testing (what gets tested), and Launch (what to expect). Write 2-3 sentences per phase.",
  "hosting": "Hosting recommendation (e.g., 'Cloud hosting with a scalable plan recommended for handling potential high traffic and data storage needs')",
  "hostingDetails": "A detailed explanation (3-4 sentences) of what this hosting means, why it's recommended, what they can expect, and any important considerations. Use plain language.",
  "bandwidth": "Bandwidth needs (e.g., 'Medium to high, to accommodate a large volume of users and content')",
  "security": "SSL & security recommendations (e.g., 'SSL required for online payments, along with firewall protection and regular data backups recommended')",
  "securityDetails": "A detailed explanation (3-4 sentences) of what these security measures mean, why they're important, and what protection they provide. Explain in business terms, not technical jargon.",
  "nextStep": "Next step recommendation (e.g., 'Book a free consultation to discuss your project in detail and get a customized quote')",
  "benefits": "A list of 4-5 key benefits they'll get from this approach, written as short bullet points in plain language (e.g., 'Easy to update content without technical knowledge', 'Mobile-friendly design that works on all devices')",
  "considerations": "A list of 2-3 important things to consider or plan for, written in friendly, advisory tone (e.g., 'Regular content updates will help keep your site fresh and engaging', 'Consider your long-term growth plans when choosing hosting')"
}

Important guidelines:
- Do NOT provide exact prices or guarantees
- Use terms like "estimated", "recommended", "suggested"
- Write in clear, business-friendly language - avoid technical jargon
- Explain things as if talking to a business owner, not a developer
- Be realistic about timelines
- Focus on WordPress, WooCommerce, React, Next.js, PHP, MySQL, and similar technologies
- For blogs/content sites, recommend WordPress
- For e-commerce, recommend WordPress + WooCommerce
- For custom applications, recommend React/Next.js
- Always emphasize this is advisory, not a final quote
- Make explanations detailed and helpful, not just technical specifications

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
