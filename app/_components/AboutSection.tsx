import AnimatedSection from '@/components/AnimatedSection';

export default function AboutSection() {
  return (
    <AnimatedSection as="section" className="mt-8" delay={0.5}>
      <p className="text-sm leading-relaxed font-medium md:text-base">
        일상 속에 스며들 수 있는, 누구나 사용할 수 있는 좋은 제품을 만들고 싶습니다.
        <br />
        좋은 제품은 사용자의 상황에서 고민하고, 팀과 적극적으로 커뮤니케이션할 때 나온다고 믿습니다.
        <br />
        새로운 사람을 만나는 것을 좋아하고, 새로운 것에 도전하는 것을 즐깁니다.
      </p>
    </AnimatedSection>
  );
}
