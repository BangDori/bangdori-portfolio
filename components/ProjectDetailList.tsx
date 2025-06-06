import { ProjectDetail } from '@/types/project';
import ProjectDetailCard from './ProjectDetailCard';
import { Card, CardContent } from './ui/card';

export default function ProjectDetailList({ details }: { details: ProjectDetail[] }) {
  return (
    <Card className="mb-8 border-[1px] shadow-sm">
      <CardContent>
        <div className="mb-4">
          <h2 className="mb-2 text-xl font-bold md:text-2xl">개발 상세 내용</h2>
        </div>
        {details.map((item, idx) => (
          <ProjectDetailCard key={idx} {...item} />
        ))}
      </CardContent>
    </Card>
  );
}
