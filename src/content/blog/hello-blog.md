---
title: '블로그를 시작하며'
description: 'Astro와 Cloudflare Pages로 블로그를 만든 과정을 짧게 기록합니다.'
pubDate: 'May 17 2026'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

오랜만에 블로그를 다시 시작합니다. 이번에는 가볍고 빠른 환경에서 글에만 집중하고 싶어서
[Astro](https://astro.build/)와 [Cloudflare Pages](https://pages.cloudflare.com/) 조합을 골랐습니다.

## 이 블로그의 스택

- **프레임워크**: Astro 5 (정적 사이트 생성)
- **콘텐츠**: 마크다운 (`src/content/blog/*.md`)
- **호스팅**: Cloudflare Pages 무료 티어
- **도메인**: blog.loudpump.com
- **폰트**: Noto Sans KR

## 글을 쓰는 방법

1. `src/content/blog/` 폴더에 `.md` 파일 하나 만들기
2. 상단에 제목/설명/날짜를 적는 frontmatter 작성
3. 본문은 평범한 마크다운으로 작성
4. `git push`만 하면 Cloudflare가 1~2분 안에 자동으로 배포

> 별도 CMS도, 데이터베이스도, 서버 관리도 없습니다. 깃 푸시가 곧 발행입니다.

## 앞으로

개발하면서 배운 것, 읽은 것, 생각한 것을 부담 없이 짧게라도 남겨보려고 합니다.
긴 호흡의 글보다 자주 쓰는 것을 먼저 목표로 삼겠습니다.
