// src/app/api/send_email/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { email, message, honeypot } = await req.json();

    if (honeypot) {
      return NextResponse.json({ success: false, message: 'Bot detected' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: 'New Message from Contact Form',
      text: `Message: ${message}\n\nFrom: ${email}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
