import { Card, CardContent } from '@/components/ui/card';

interface ProjectOverViewProps {
  description: string;
  techStack: string[];
}

export default function ProjectOverView({ description, techStack }: ProjectOverViewProps) {
  return (
    <Card className="mb-8 border-[1px] shadow-sm">
      <CardContent>
        <div className="mb-4">
          <h2 className="mb-2 text-xl font-bold">개요</h2>
          <p className="text-sm leading-relaxed text-gray-600">{description}</p>
        </div>
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
  );
}
