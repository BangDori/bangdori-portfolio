import { ShieldUser, Smartphone, YoutubeIcon, Zap } from 'lucide-react';
import { FaAndroid, FaApple } from 'react-icons/fa';

const appDetail = [
  {
    title: '인증 토큰 갱신 병목 해결로 서버 부하 감소',
    image: '',
    problem: '동시 요청 환경에서 인증 토큰 갱신이 중복되어 서버 부하가 증가.',
    cause: '여러 클라이언트가 동시에 토큰 만료 시, 각각 갱신 요청을 보내 중복 처리 발생.',
    alternatives: [
      '클라이언트에서 토큰 만료 전 미리 갱신',
      '서버에서 중복 요청 큐잉 처리',
      '토큰 갱신 요청 제한',
    ],
    solution:
      '서버에 인증 토큰 갱신 대기열 큐를 도입해, N개의 중복 갱신 요청을 단일 요청으로 처리.',
    insight:
      '큐잉 처리로 서버 부하를 크게 줄였으나, 큐 대기 시간에 따른 사용자 경험도 함께 고려해야 함.',
  },
  {
    title: '네트워크 에러에도 끊김 없는 스플래시 화면 설계',
    image: '',
    problem: '네트워크/서버 에러 발생 시 앱이 멈추거나 비정상 종료되는 문제.',
    cause: '에러 핸들링 미흡으로 인한 예외 상황 미처리.',
    alternatives: ['에러 발생 시 사용자에게 안내 메시지 제공', '에러 발생 시 재시도 로직 추가'],
    solution:
      '에러 핸들링 전략을 통해 네트워크/서버 에러를 분리하고, Sentry 인증 에러 해결로 인증 프로세스 안정성 개선. 서버 에러에 대해 Exponential Backoff Retry를 적용하여 안정성 강화.',
    insight: '에러 상황에서도 사용자 경험을 해치지 않도록 UX를 설계하는 것이 중요함을 느낌.',
  },
  {
    title: '딥링크를 이용한 사용자 유입 경로 다각화',
    image: '',
    problem: '앱스토어를 통한 단일 유입 방식으로 신규 사용자 유입 경로가 제한됨.',
    cause: '딥링크 및 공유 기능 미구현.',
    alternatives: ['QR 코드 및 공유 링크를 통한 유입 경로 추가', '전역 상태를 활용한 딥링크 처리'],
    solution: '딥링크 및 QR 코드, 공유 링크를 도입하여 로그인 전/후 자연스러운 이동 경험 제공.',
    insight: '다양한 유입 경로를 제공함으로써 사용자 접근성을 높일 수 있었음.',
  },
  {
    title: '빠른 결제 경험 제공으로 완료율 15% 향상',
    image: '',
    problem: '결제 과정이 복잡하고 시간이 오래 걸려 결제 완료율이 낮음.',
    cause: '이전 결제 수단 자동 선택 미구현, UX 최적화 부족.',
    alternatives: ['이전 결제 수단 자동 선택', '결제 플로우 단순화'],
    solution: '이전 결제 수단 자동 선택으로 평균 결제 시간 3초 이상 단축, 결제 완료율 15% 상승.',
    insight: '작은 UX 개선이 실제 비즈니스 성과로 이어질 수 있음을 경험.',
  },
];

export const projects = {
  app: {
    Icon: Smartphone,
    title: '스폰지 앱',
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
    detail: appDetail,
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
