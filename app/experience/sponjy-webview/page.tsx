import AnimatedSection from '@/components/AnimatedSection';
import ProjectDetailHeader from '@/components/ProjectDetailHeader';
import ProjectDetailList from '@/components/ProjectDetailList';
import ProjectOverView from '@/components/ProjectOverView';
import { projects } from '@/constants/project';
import webviewDetail from '@/constants/webview';

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
      <AnimatedSection as="section" delay={0.4} className="mb-8 rounded-lg">
        <ProjectDetailList details={webviewDetail} />
      </AnimatedSection>
    </main>
  );
}
