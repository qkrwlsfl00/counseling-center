import { createClient } from 'next-sanity';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createBookingEmailHtml, validateBookingData } from '../../../lib/booking';
import { SITE_URL } from '../../../lib/site';
import { apiVersion, dataset, projectId } from '../../../sanity/env';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request) {
  let input;

  try {
    input = await request.json();
  } catch {
    return NextResponse.json(
      { message: '요청 본문이 올바른 JSON 형식이 아닙니다.' },
      { status: 400 }
    );
  }

  const validation = validateBookingData(input);

  if (!validation.isValid) {
    return NextResponse.json(
      { message: '입력 내용을 다시 확인해주세요.', errors: validation.errors },
      { status: 400 }
    );
  }

  try {
    const { name, phone, program, isVoucher, memo } = validation.data;

    const newBooking = {
      _type: 'booking',
      name,
      phone,
      program,
      isVoucher,
      memo,
      status: 'new',
    };

    const response = await client.create(newBooking);

    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail && resend) {
      try {
        await resend.emails.send({
          from: '예약알림 <onboarding@resend.dev>',
          to: adminEmail,
          subject: `[새로운 예약] ${name} 님의 상담 신청이 접수되었습니다.`,
          html: createBookingEmailHtml(validation.data, `${SITE_URL}/studio`),
        });
      } catch (emailError) {
        console.error('Email sending failed (Resend):', emailError);
      }
    }

    return NextResponse.json(
      { message: '예약이 성공적으로 접수되었습니다.', id: response._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking submission error:', error);
    return NextResponse.json(
      { message: '예약 접수 중 서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
