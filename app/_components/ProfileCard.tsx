'use client';

import Image from 'next/image';
import { Mail, Globe, Github } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const profileLinks = [
  {
    icon: Mail,
    label: '이메일',
    href: `mailto:bangdori@gmail.com?subject=제목을 입력해주세요&body=${encodeURIComponent(
      '안녕하세요, 포트폴리오를 보고 연락드립니다.\n\n문의 내용:\n'
    )}`,
    text: 'bangdori@gmail.com',
  },
  {
    icon: Globe,
    label: '개인 블로그',
    href: 'https://bangdori.kr',
    text: 'https://bangdori.kr',
  },
  {
    icon: Github,
    label: '깃허브 프로필',
    href: 'https://github.com/bangdori',
    text: 'github.com/bangdori',
  },
];

export default function ProfileCard() {
  return (
    <div className="flex w-full flex-col gap-2 md:flex-row md:items-start md:gap-8">
      {/* Profile Image */}
      <AnimatedSection
        as="div"
        className="h-64 w-full max-w-xs flex-shrink-0 overflow-hidden rounded-2xl shadow-md md:h-48 md:w-48"
      >
        <Image
          src="/profile.jpeg"
          alt="프로필 사진"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          priority
        />
      </AnimatedSection>

      {/* Profile Info */}
      <AnimatedSection
        as="div"
        className="flex w-full flex-col justify-between gap-2 py-2 md:h-48"
        delay={0.2}
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900 md:text-4xl">강병준</h1>
          <p className="text-base text-gray-600">Frontend Developer</p>
        </div>
        <div className="mt-2 flex flex-col gap-2 text-sm text-gray-600 md:text-base">
          {profileLinks.map(({ icon: Icon, label, href, text }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={20} />
              <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {text}
              </a>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
