import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schema } from './src/sanity/schema';
import { dataset, projectId } from './src/sanity/env';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,

  title: '드림학습코칭상담센터 관리자',

  plugins: [structureTool()],

  schema: {
    types: schema.types,
  },
});
