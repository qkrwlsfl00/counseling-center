import assert from 'node:assert/strict';
import test from 'node:test';
import { sanitizeLegacyHtml } from '../src/lib/sanitizeLegacyHtml.js';

test('레거시 HTML에서 실행 가능한 태그와 URL을 제거한다', () => {
  const result = sanitizeLegacyHtml(
    '<p>안전한 본문</p><script>alert(1)</script><a href="javascript:alert(1)">링크</a>',
  );

  assert.doesNotMatch(result, /<script/i);
  assert.doesNotMatch(result, /javascript:/i);
  assert.match(result, /<p>안전한 본문<\/p>/);
});

test('외부 링크에 안전한 rel 속성을 부여한다', () => {
  const result = sanitizeLegacyHtml(
    '<a href="https://example.com" target="_blank">외부 링크</a>',
  );

  assert.match(result, /href="https:\/\/example\.com"/);
  assert.match(result, /rel="noopener noreferrer"/);
});
