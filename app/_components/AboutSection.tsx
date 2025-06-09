import AnimatedSection from '@/components/AnimatedSection';

export default function AboutSection() {
  return (
    <AnimatedSection as="section" className="mt-8" delay={0.3}>
      <p className="text-sm leading-relaxed font-medium text-gray-700 md:text-base dark:text-gray-400">
        사용자에게 작은 감동을 줄 수 있는 제품을 만들고 싶습니다.
        <br />
        작은 감동은 사용자 중심에서 고민하고, 팀과 적극적으로 커뮤니케이션할 때 나온다고 믿습니다.
        <br />
        새로운 사람을 만나는 것을 좋아하고, 새로운 것에 도전하는 것을 즐깁니다.
      </p>
    </AnimatedSection>
  );
}
