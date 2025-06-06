import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from './ProjectCard';
import { projects } from '@/constants/project';

const projectList = Object.values(projects);

export default function ProjectsSummarySection() {
  return (
    <AnimatedSection as="section" className="mt-8" delay={0.5}>
      <h2 className="mb-6 text-2xl font-bold">주요 프로젝트</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <ProjectCard key={project.title} order={index} {...project} />
        ))}
      </div>
    </AnimatedSection>
  );
}
