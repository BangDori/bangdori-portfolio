import { ShieldUser, Smartphone, YoutubeIcon, Zap } from 'lucide-react';

export const projects = {
  app: {
    Icon: Smartphone,
    title: '스폰지 앱',
    description:
      '축구 · 풋살 소셜 매칭 플랫폼의 모바일 앱 개발 및 인증, 결제, 딥링크 등 핵심 기능 구현',
    techStack: ['TypeScript', 'React Native', 'Zustand', 'Tanstack Query', 'Jest'],
    link: '/experience/sponjy-app',
    date: '2024.06 ~ 진행 중',
  },
  webview: {
    Icon: YoutubeIcon,
    title: '스폰지 웹뷰',
    description: 'three.js 기반의 360도 영상 플레이어 개발',
    techStack: ['TypeScript', 'Next.js', 'Three.js'],
    link: '/experience/sponjy-webview',
    date: '2025.05 ~ 진행 중',
  },
  admin: {
    Icon: ShieldUser,
    title: '관리자 페이지',
    description: '공지사항 작성 UX 개선, 결제 모듈 연동 등 관리자 웹 서비스 개발 및 운영',
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS'],
    link: '/experience/admin-page',
    date: '2025.02 ~ 2025.03',
  },
  productivity: {
    Icon: Zap,
    title: '생산성 개선',
    description: '인앱 업데이트, 배포 자동화 등 개발 생산성 및 배포 효율성 향상',
    techStack: ['AWS S3', 'Fastlane', 'Firebase', 'Github Actions'],
    link: '/experience/productivity',
  },
};
