import { ShieldUser, Smartphone, YoutubeIcon } from 'lucide-react';
import { FaAndroid, FaApple } from 'react-icons/fa';

export const projects = {
  app: {
    Icon: Smartphone,
    title: '모바일 앱',
    description:
      '축구 · 풋살 소셜 매칭 플랫폼의 모바일 앱 개발 및 인증, 결제, 딥링크 등 핵심 기능 구현',
    techStack: ['TypeScript', 'React Native', 'Zustand', 'Tanstack Query', 'Jest'],
    link: '/experience/sponjy-app',
    date: '2024.06 ~ 진행 중',
    links: [
      {
        icon: FaApple,
        label: 'Play Store',
        href: 'https://apps.apple.com/kr/app/%EC%8A%A4%ED%8F%B0%EC%A7%80/id6670791014',
      },
      {
        icon: FaAndroid,
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.dalliza.sponjy&hl=ko',
      },
    ],
  },
  webview: {
    Icon: YoutubeIcon,
    title: '모바일 웹뷰',
    description: 'Three.js를 활용한 3D 인터랙션을 지원하는 웹뷰 개발',
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
};
