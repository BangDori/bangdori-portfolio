import AnimatedSection from '@/components/AnimatedSection';

const techStack = [
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Tanstack Query',
  'Zustand',
  'Sass',
  'Tailwind CSS',
  'Webpack',
  'Babel',
  'Vite',
];

export default function TechStackSection() {
  return (
    <AnimatedSection as="section" className="mt-8 md:w-[75%]" delay={0.5}>
      <h2 className="text-foreground mb-6 text-2xl font-bold">기술 스택</h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-[#23272f] dark:text-gray-200"
          >
            {item}
          </span>
        ))}
      </div>
    </AnimatedSection>
  );
}
