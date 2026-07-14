'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle2, User, Phone, ClipboardList, Loader2 } from 'lucide-react';
import Button from '../../../components/ui/Button';
import {
  BOOKING_LIMITS,
  BOOKING_PROGRAMS,
  validateBookingData,
} from '../../../lib/booking';

const Booking = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    program: '',
    isVoucher: false,
    memo: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const validation = validateBookingData(formData);
    setErrors(validation.errors);
    return validation.isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setSubmitError('');
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message || '예약 접수 중 오류가 발생했습니다.');
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : '예약 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full min-h-[75vh] flex items-center justify-center p-4 bg-[#fcfcfc]">
        <div className="bg-white p-8 md:p-16 rounded-[2rem] shadow-sm text-center max-w-lg w-full border border-gray-100">
          <CheckCircle2 className="w-24 h-24 text-green-400 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">예약 신청이 접수되었습니다!</h2>
          <p className="text-gray-600 mb-10 leading-relaxed text-lg">
            <strong>{formData.name}</strong> 님의 상담 신청이 안전하게 전달되었습니다.<br />
            담당자가 일정 확인 후 남겨주신 연락처 <strong className="text-dream-blue">{formData.phone}</strong> 로<br/>빠른 시간 내에 안내 전화를 드리겠습니다.
          </p>
          <Button variant="primary" fullWidth size="lg" onClick={() => router.push('/')}>
            메인 홈으로 돌아가기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fcfcfc] py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-dream-blue text-white font-bold text-sm mb-4 tracking-wider">
            RESERVATION
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">전문가 초기 상담 예약</h1>
          <p className="text-gray-600 text-lg">
            아이의 상황을 가장 잘 파악하기 위한 첫 걸음입니다.<br className="hidden md:block"/>
            연락처를 남겨주시면 친절하고 상세하게 안내해 드리겠습니다.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                <User className="w-4 h-4 text-dream-blue" /> 보호자 혹은 아동 이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                maxLength={BOOKING_LIMITS.name}
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                placeholder="예) 홍길동"
                className={`w-full px-5 py-3.5 rounded-xl border ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-dream-blue focus:ring-2 focus:ring-dream-blue/20'} outline-none transition-all placeholder-gray-400`}
              />
              {errors.name && <p id="name-error" className="mt-2 text-sm text-red-500 font-medium">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-dream-blue" /> 연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
                maxLength={BOOKING_LIMITS.phone}
                required
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                placeholder="예) 010-1234-5678"
                className={`w-full px-5 py-3.5 rounded-xl border ${errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-dream-blue focus:ring-2 focus:ring-dream-blue/20'} outline-none transition-all placeholder-gray-400`}
              />
              {errors.phone && <p id="phone-error" className="mt-2 text-sm text-red-500 font-medium">{errors.phone}</p>}
            </div>


            {/* Program */}
            <div>
              <label htmlFor="program" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-1.5">
                <ClipboardList className="w-4 h-4 text-dream-blue" /> 상담 희망 코칭/치료 분야 <span className="text-red-500">*</span>
              </label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                aria-invalid={Boolean(errors.program)}
                aria-describedby={errors.program ? 'program-error' : undefined}
                className={`w-full px-5 py-3.5 rounded-xl border appearance-none bg-white ${errors.program ? 'border-red-400 bg-red-50' : 'border-gray-200 focus:border-dream-blue focus:ring-2 focus:ring-dream-blue/20'} outline-none transition-all text-gray-700 cursor-pointer`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 1.25rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
              >
                <option value="">가장 관심 있는 분야를 하나 우선 선택해주세요</option>
                {BOOKING_PROGRAMS.map((program) => (
                  <option key={program} value={program}>{program}</option>
                ))}
              </select>
              {errors.program && <p id="program-error" className="mt-2 text-sm text-red-500 font-medium">{errors.program}</p>}
            </div>

            {/* Voucher Checkbox */}
            <div className="pt-3 pb-1">
              <label className="flex items-center gap-4 p-5 border border-yellow-300 bg-[#FDFD96]/20 rounded-xl cursor-pointer hover:bg-[#FDFD96]/40 transition-colors shadow-sm">
                <input
                  type="checkbox"
                  name="isVoucher"
                  checked={formData.isVoucher}
                  onChange={handleChange}
                  className="w-5 h-5 text-dream-blue rounded border-gray-300 focus:ring-dream-blue accent-dream-blue"
                />
                <div className="flex flex-col">
                  <span className="font-bold text-gray-800 text-sm mb-1">정부 지원 연계 바우처 대상자이신가요? (체크)</span>
                  <span className="text-xs text-gray-600">발달재활서비스, 우리아이심리지원 등 바우처 이용을 희망하는 경우 체크해주세요.</span>
                </div>
              </label>
            </div>

            {/* Memo */}
            <div>
              <label htmlFor="memo" className="block text-sm font-bold text-gray-700 mb-2">남기실 말씀 (선택 기입)</label>
              <textarea
                id="memo"
                name="memo"
                value={formData.memo}
                onChange={handleChange}
                maxLength={BOOKING_LIMITS.memo}
                aria-invalid={Boolean(errors.memo)}
                aria-describedby={errors.memo ? 'memo-error' : undefined}
                placeholder="아이의 연령, 최근 특이사항이나 아동과 관련되어 현재 가장 고민이 되는 부분을 간단히 적어주시면 상담에 큰 도움이 됩니다."
                rows={4}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-dream-blue focus:ring-2 focus:ring-dream-blue/20 outline-none transition-all resize-none placeholder-gray-400"
              />
              {errors.memo && <p id="memo-error" className="mt-2 text-sm text-red-500 font-medium">{errors.memo}</p>}
            </div>

            <div className="pt-6">
              {submitError && (
                <p role="alert" className="mb-4 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-600">
                  {submitError}
                </p>
              )}
              <Button type="submit" variant="primary" size="lg" fullWidth className="py-4 text-lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    예약 접수 중...
                  </span>
                ) : '상담 예약 신청 완료하기'}
              </Button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
