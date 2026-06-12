import React from 'react';
import AssessmentsClient from './AssessmentsClient';

export const metadata = {
  title: '검사 안내 | 드림학습코칭상담센터',
  description: '종합심리검사, 언어검사, 학습심리검사, 뇌파검사(BQM) 등 체계적인 진단 평가를 안내합니다.',
};

export default function AssessmentsPage() {
  return <AssessmentsClient />;
}
