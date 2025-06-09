import AnimatedSection from '@/components/AnimatedSection';
import ProjectDetailHeader from '@/components/ProjectDetailHeader';
import ProjectDetailList from '@/components/ProjectDetailList';
import ProjectDetailToc from '@/components/ProjectDetailToc';
import ProjectOverView from '@/components/ProjectOverView';
import adminDetail from '@/constants/admin';
import { projects } from '@/constants/project';

const projectMeta = projects.admin;

export default function AdminPage() {
  return (
    <main className="mx-auto w-full max-w-4xl p-8 md:max-w-6xl">
      <div className="mb-4">
        <AnimatedSection as="div" delay={0} className="space-y-2">
          <ProjectDetailHeader
            Icon={projectMeta.Icon}
            title={projectMeta.title}
            date={projectMeta.date}
          />
        </AnimatedSection>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="min-w-0 flex-1">
          <AnimatedSection as="section" delay={0.2} className="mb-8 rounded-lg">
            <ProjectOverView {...projectMeta} />
          </AnimatedSection>
          <AnimatedSection as="section" delay={0.4} className="mb-8 rounded-lg">
            <ProjectDetailList details={adminDetail} />
          </AnimatedSection>
        </div>
        <AnimatedSection as="aside" delay={0.3} className="hidden w-64 flex-shrink-0 md:block">
          <div className="sticky top-8">
            <ProjectDetailToc details={adminDetail} />
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
