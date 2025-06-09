import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from './ProjectCard';
import { projects } from '@/constants/project';
import CompanyCard from './CompanyCard';
import { company } from '@/constants/company';

const projectList = Object.values(projects);

export default function ProjectsSummarySection() {
  return (
    <AnimatedSection as="section" className="mt-8" delay={0.5}>
      <h2 className="text-foreground mb-6 text-2xl font-bold">경력</h2>

      <CompanyCard {...company}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <AnimatedSection key={project.title} as="div" delay={0.5 + 0.1 * index}>
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </CompanyCard>
    </AnimatedSection>
  );
}
