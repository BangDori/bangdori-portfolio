import AnimatedSection from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  order: number;
  Icon: LucideIcon;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  date?: string;
}

export default function ProjectCard({
  order,
  Icon,
  title,
  description,
  techStack,
  link,
  date,
}: ProjectCardProps) {
  return (
    <AnimatedSection as="div" delay={0.5 + 0.1 * order}>
      <Link href={link} className="block transition-transform hover:scale-[1.02]">
        <Card className="h-full overflow-hidden border border-transparent py-4 transition-colors focus-within:border-[#3182f6] hover:border-[#3182f6] md:h-[200px]">
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center gap-2">
                <Icon size={20} />
                <h3 className="text-lg font-bold">{title}</h3>
              </div>
              <span className="text-muted-foreground text-sm">{date}</span>
            </div>
            <p className="text-muted-foreground mt-4 mb-6 line-clamp-2 text-sm md:mb-0 md:h-16">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-[#e8f3ff] px-2 py-0.5 text-xs font-semibold text-[#3182f6]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </AnimatedSection>
  );
}
