// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.loudpump.com',
	integrations: [mdx(), sitemap()],
	image: {
		// Cloudflare Pages 빌드 환경에서 sharp 기반 변환이 실패하여
		// _image 동적 엔드포인트로 fallback되는 문제 우회.
		// 이미지를 원본 그대로 정적 자산으로 복사하고 src/width/height만 출력.
		service: passthroughImageService(),
	},
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark-dimmed',
			},
		},
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Noto Sans KR',
			cssVariable: '--font-sans',
			fallbacks: ['system-ui', 'sans-serif'],
			weights: [400, 700],
			styles: ['normal'],
			subsets: ['korean', 'latin'],
		},
	],
});
