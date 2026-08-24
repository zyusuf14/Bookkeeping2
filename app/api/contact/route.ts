import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      plan,
      service,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Website Enquiries <onboarding@resend.dev>",

      // We'll use the client's email here once the domain is verified.
      to: ["info@thebookkeepingcorporation.com"],

      replyTo: email,

      subject: `New website enquiry from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; color: #1f2937; line-height: 1.6;">
          <h2 style="color: #123B5D;">
            New Website Enquiry
          </h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p>
            <strong>Phone:</strong>
            ${phone || "Not provided"}
          </p>

          <p>
            <strong>Plan:</strong>
            ${plan || "No plan selected"}
          </p>

          <p>
            <strong>Service:</strong>
            ${service || "Not specified"}
          </p>

          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        { error: "Unable to send enquiry." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}