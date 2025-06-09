import AnimatedSection from '@/components/AnimatedSection';
import ProjectDetailHeader from '@/components/ProjectDetailHeader';
import ProjectDetailList from '@/components/ProjectDetailList';
import ProjectOverView from '@/components/ProjectOverView';
import { projects } from '@/constants/project';
import ProjectLink from './_components/ProjectLink';
import appDetail from '@/constants/app';
import ProjectDetailToc from '@/components/ProjectDetailToc';

const projectMeta = projects.app;

export default function SponjyApp() {
  return (
    <main className="project-detail-container">
      <div className="relative mb-4">
        <AnimatedSection as="div" className="space-y-2">
          <ProjectDetailHeader
            Icon={projectMeta.Icon}
            title={projectMeta.title}
            date={projectMeta.date}
          />
        </AnimatedSection>
        <AnimatedSection
          as="div"
          delay={0.1}
          className="static mt-4 md:absolute md:top-0 md:right-0 md:mt-0"
        >
          <ProjectLink links={projectMeta.links} />
        </AnimatedSection>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="min-w-0 flex-1">
          <AnimatedSection as="section" delay={0.2} className="mb-8 rounded-lg">
            <ProjectOverView {...projectMeta} />
          </AnimatedSection>
          <AnimatedSection as="section" delay={0.4} className="mb-8 rounded-lg">
            <ProjectDetailList details={appDetail} />
          </AnimatedSection>
        </div>
        <AnimatedSection as="aside" delay={0.3} className="hidden w-64 flex-shrink-0 md:block">
          <div className="sticky top-8">
            <ProjectDetailToc details={appDetail} />
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
