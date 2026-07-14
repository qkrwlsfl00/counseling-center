function requirePublicEnv(name, value) {
  if (!value) {
    throw new Error(`필수 환경변수 ${name}가 설정되지 않았습니다.`);
  }

  return value;
}

export const projectId = requirePublicEnv(
  'NEXT_PUBLIC_SANITY_PROJECT_ID',
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
);

export const dataset = requirePublicEnv(
  'NEXT_PUBLIC_SANITY_DATASET',
  process.env.NEXT_PUBLIC_SANITY_DATASET,
);

export const apiVersion = requirePublicEnv(
  'NEXT_PUBLIC_SANITY_API_VERSION',
  process.env.NEXT_PUBLIC_SANITY_API_VERSION,
);
