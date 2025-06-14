import { Card, CardContent } from '@/components/ui/card';
import { ProjectDetailLink } from '@/types/project';

interface ProjectLinkProps {
  links: ProjectDetailLink[];
}

export default function ProjectLink({ links }: ProjectLinkProps) {
  return (
    <Card>
      <CardContent className="flex flex-row flex-wrap items-center gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium hover:underline"
          >
            <link.icon size={16} />
            {link.label}
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
