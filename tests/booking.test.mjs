import assert from 'node:assert/strict';
import test from 'node:test';
import {
  BOOKING_LIMITS,
  createBookingEmailHtml,
  validateBookingData,
} from '../src/lib/booking.js';

test('예약 입력을 정규화하고 유효한 값만 허용한다', () => {
  const result = validateBookingData({
    name: '  홍길동  ',
    phone: '010-1234-5678',
    program: '언어 치료',
    isVoucher: true,
    memo: '  상담 요청  ',
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
  assert.deepEqual(result.data, {
    name: '홍길동',
    phone: '010-1234-5678',
    program: '언어 치료',
    isVoucher: true,
    memo: '상담 요청',
  });
});

test('잘못된 연락처, 임의의 프로그램과 과도하게 긴 메모를 거부한다', () => {
  const result = validateBookingData({
    name: '홍길동',
    phone: '010---1234',
    program: '존재하지 않는 프로그램',
    isVoucher: 'true',
    memo: '가'.repeat(BOOKING_LIMITS.memo + 1),
  });

  assert.equal(result.isValid, false);
  assert.deepEqual(Object.keys(result.errors).sort(), [
    'isVoucher',
    'memo',
    'phone',
    'program',
  ]);
});

test('이메일 본문의 사용자 입력을 HTML로 이스케이프한다', () => {
  const html = createBookingEmailHtml({
    name: '<script>alert(1)</script>',
    phone: '010-1234-5678',
    program: '언어 치료',
    isVoucher: false,
    memo: '<img src=x onerror=alert(1)>',
  }, 'https://dreamsc.co.kr/studio');

  assert.doesNotMatch(html, /<script>|<img/);
  assert.match(html, /&lt;script&gt;/);
  assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);
});
