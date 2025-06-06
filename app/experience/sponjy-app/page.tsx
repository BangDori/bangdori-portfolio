import AnimatedSection from '@/components/AnimatedSection';
import ProjectDetailHeader from '@/components/ProjectDetailHeader';
import ProjectOverView from '@/components/ProjectOverView';
import { projects } from '@/constants/project';
import { Smartphone } from 'lucide-react';

const projectMeta = projects.app;

export default function SponjyApp() {
  return (
    <main className="mx-auto w-full max-w-4xl p-8">
      <div className="mb-4">
        <AnimatedSection as="div" delay={0} className="space-y-2">
          <ProjectDetailHeader
            Icon={Smartphone}
            title={projectMeta.title}
            date={projectMeta.date}
          />
        </AnimatedSection>
      </div>
      <AnimatedSection as="section" delay={0.2} className="mb-8 rounded-lg">
        <ProjectOverView {...projectMeta} />
      </AnimatedSection>
    </main>
  );
}
