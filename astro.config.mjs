// @ts-check

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders, passthroughImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://blog.loudpump.com',
	// Cloudflare Workers Builds가 빌드 시점에 @astrojs/cloudflare 어댑터를
	// 자동 주입하여 SSR 모드로 만들고, 이미지 처리를 _image endpoint로 라우팅함.
	// 정적 호스팅에서는 endpoint가 404가 되어 모든 이미지가 깨짐.
	// 두 가지 방어를 동시에 적용:
	// 1) 어댑터를 코드에 명시 (자동 주입 default 설정 대신 우리 설정 사용)
	// 2) image.service에 passthroughImageService()를 명시하여 endpoint 사용 자체를
	//    비활성화하고 원본 이미지의 정적 경로를 직접 출력하도록 강제
	adapter: cloudflare(),
	image: {
		service: passthroughImageService(),
	},
	integrations: [mdx(), sitemap()],
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
