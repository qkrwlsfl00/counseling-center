import { createClient } from 'next-sanity';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-12',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    const { name, phone, program, isVoucher, memo } = data;

    if (!name || !phone || !program) {
      return NextResponse.json(
        { message: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    const newBooking = {
      _type: 'booking',
      name,
      phone,
      program,
      isVoucher: Boolean(isVoucher),
      memo: memo || '',
      status: 'new',
    };

    // 1. Sanity CMS 저장
    const response = await client.create(newBooking);

    // 2. Resend를 통한 이메일 전송
    const adminEmail = process.env.ADMIN_EMAIL;
    if (adminEmail && process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: '예약알림 <onboarding@resend.dev>', // Resend 기본 발신자 (테스트용)
          to: adminEmail,
          subject: `[새로운 예약] ${name} 님의 상담 신청이 접수되었습니다.`,
          html: `
            <h2>새로운 상담 예약이 접수되었습니다.</h2>
            <ul>
              <li><strong>이름:</strong> ${name}</li>
              <li><strong>연락처:</strong> ${phone}</li>
              <li><strong>희망 분야:</strong> ${program}</li>
              <li><strong>바우처 여부:</strong> ${isVoucher ? '예' : '아니오'}</li>
              <li><strong>남기실 말씀:</strong> ${memo || '없음'}</li>
            </ul>
            <br/>
            <p><a href="https://dreamsc.co.kr/studio" target="_blank">Sanity Studio로 이동하여 확인하기</a></p>
          `,
        });
      } catch (emailError) {
        console.error('Email sending failed (Resend):', emailError);
        // 메일 전송이 실패해도 예약 접수 자체는 성공으로 처리합니다.
      }
    }

    return NextResponse.json(
      { message: '예약이 성공적으로 접수되었습니다.', id: response._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking submission error:', error);
    return NextResponse.json(
      { message: '예약 접수 중 서버 오류가 발생했습니다.', error: error.message },
      { status: 500 }
    );
  }
}
