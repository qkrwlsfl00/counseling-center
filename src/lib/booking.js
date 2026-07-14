export const BOOKING_PROGRAMS = Object.freeze([
  '놀이/심리 치료',
  '언어 치료',
  '음악 치료',
  '청소년/부모 상담',
  '맞춤형 학습 코칭',
  '종합 역량·심리 검사',
  '기타',
]);

export const BOOKING_LIMITS = Object.freeze({
  name: 50,
  phone: 13,
  memo: 1000,
});

const phonePattern = /^(?:0\d{8,10}|02-\d{3,4}-\d{4}|0\d{2}-\d{3,4}-\d{4})$/;
const controlCharacterPattern = /[\u0000-\u001F\u007F]/;

function asRecord(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

function trimmedString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

export function normalizeBookingData(value) {
  const input = asRecord(value);

  return {
    name: trimmedString(input.name),
    phone: trimmedString(input.phone),
    program: trimmedString(input.program),
    isVoucher: input.isVoucher === true,
    memo: trimmedString(input.memo),
  };
}

export function validateBookingData(value) {
  const input = asRecord(value);
  const data = normalizeBookingData(input);
  const errors = {};

  if (!data.name) {
    errors.name = '이름을 입력해주세요.';
  } else if (data.name.length > BOOKING_LIMITS.name) {
    errors.name = `이름은 ${BOOKING_LIMITS.name}자 이내로 입력해주세요.`;
  } else if (controlCharacterPattern.test(data.name)) {
    errors.name = '이름에 사용할 수 없는 문자가 포함되어 있습니다.';
  }

  if (!data.phone) {
    errors.phone = '연락처를 입력해주세요.';
  } else if (!phonePattern.test(data.phone)) {
    errors.phone = '올바른 연락처 형식이 아닙니다. (하이픈 포함 혹은 숫자만 기입)';
  }

  if (!data.program) {
    errors.program = '희망하시는 코칭/상담 분야를 선택해주세요.';
  } else if (!BOOKING_PROGRAMS.includes(data.program)) {
    errors.program = '선택할 수 없는 상담 분야입니다.';
  }

  if (data.memo.length > BOOKING_LIMITS.memo) {
    errors.memo = `남기실 말씀은 ${BOOKING_LIMITS.memo}자 이내로 입력해주세요.`;
  }

  if ('isVoucher' in input && typeof input.isVoucher !== 'boolean') {
    errors.isVoucher = '바우처 여부 값이 올바르지 않습니다.';
  }

  return {
    data,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

export function escapeHtml(value) {
  const replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };

  return String(value).replace(/[&<>"']/g, (character) => replacements[character]);
}

export function createBookingEmailHtml(booking, studioUrl) {
  const name = escapeHtml(booking.name);
  const phone = escapeHtml(booking.phone);
  const program = escapeHtml(booking.program);
  const memo = escapeHtml(booking.memo || '없음');
  const safeStudioUrl = escapeHtml(studioUrl);

  return `
    <h2>새로운 상담 예약이 접수되었습니다.</h2>
    <ul>
      <li><strong>이름:</strong> ${name}</li>
      <li><strong>연락처:</strong> ${phone}</li>
      <li><strong>희망 분야:</strong> ${program}</li>
      <li><strong>바우처 여부:</strong> ${booking.isVoucher ? '예' : '아니오'}</li>
      <li><strong>남기실 말씀:</strong> ${memo}</li>
    </ul>
    <p><a href="${safeStudioUrl}" target="_blank" rel="noopener noreferrer">Sanity Studio로 이동하여 확인하기</a></p>
  `;
}
