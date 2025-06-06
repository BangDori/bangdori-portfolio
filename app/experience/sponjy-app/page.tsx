import AnimatedSection from '@/components/AnimatedSection';
import ProjectDetailHeader from '@/components/ProjectDetailHeader';
import ProjectDetailList from '@/components/ProjectDetailList';
import ProjectOverView from '@/components/ProjectOverView';
import { projects } from '@/constants/project';
import ProjectLink from './_components/ProjectLink';

const projectMeta = projects.app;
const projectDetails = projectMeta.detail;

export default function SponjyApp() {
  return (
    <main className="mx-auto w-full max-w-4xl p-8">
      <div className="relative mb-4">
        <AnimatedSection as="div" className="space-y-2">
          <ProjectDetailHeader
            Icon={projectMeta.Icon}
            title={projectMeta.title}
            date={projectMeta.date}
          />
        </AnimatedSection>
        <AnimatedSection as="div" className="static mt-4 md:absolute md:top-0 md:right-0 md:mt-0">
          <ProjectLink links={projectMeta.links} />
        </AnimatedSection>
      </div>
      <AnimatedSection as="section" delay={0.2} className="mb-8 rounded-lg">
        <ProjectOverView {...projectMeta} />
      </AnimatedSection>
      <AnimatedSection as="section" delay={0.4} className="mb-8 rounded-lg">
        <ProjectDetailList details={projectDetails} />
      </AnimatedSection>
    </main>
  );
}
