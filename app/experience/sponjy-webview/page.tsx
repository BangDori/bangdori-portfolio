import AnimatedSection from '@/components/AnimatedSection';
import ProjectDetailHeader from '@/components/ProjectDetailHeader';
import ProjectOverView from '@/components/ProjectOverView';
import { projects } from '@/constants/project';

const projectMeta = projects.webview;

export default function SponjyWebView() {
  return (
    <main className="mx-auto w-full max-w-4xl p-8">
      <div className="mb-4">
        <AnimatedSection as="div" delay={0} className="space-y-2">
          <ProjectDetailHeader
            Icon={projectMeta.Icon}
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
