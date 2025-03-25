import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [mdx(), tailwind(), react()],
//  output: 'server',
    output: "static", // 정적 사이트로 빌드
    build: {
      outDir: "dist", // 빌드 결과를 dist 폴더에 저장
    },
  //adapter: vercel(),
});