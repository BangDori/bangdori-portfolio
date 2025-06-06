import { Card, CardContent } from '@/components/ui/card';
import { ProjectDetail } from '@/types/project';
import Image from 'next/image';
import ProjectDetailSectionBlock from './ProjectDetailSectionBlock';
import clsx from 'clsx';

export default function ProjectDetailCard({
  title,
  images,
  problem,
  cause,
  alternatives,
  solution,
  insights,
}: ProjectDetail) {
  return (
    <Card>
      <CardContent>
        <h3 className="mb-4 text-lg font-bold md:text-xl">{title}</h3>
        {images && images.length > 0 && (
          <div className="mb-6 flex flex-col items-center gap-4">
            {images.map((img, idx) => (
              <div key={idx} className="flex w-full flex-col items-center">
                <Image
                  src={img.src}
                  alt={img.caption || title + ' 관련 이미지'}
                  width={700}
                  height={300}
                  className="h-auto w-full rounded object-contain shadow"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
                {img.caption && (
                  <span className="mt-2 text-center text-xs text-gray-500">{img.caption}</span>
                )}
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-col gap-6">
          <ProjectDetailSectionBlock title="문제">
            <p className="text-sm text-gray-700 md:text-base">{problem}</p>
          </ProjectDetailSectionBlock>
          <ProjectDetailSectionBlock title="원인">
            <p className="text-sm text-gray-700 md:text-base">{cause}</p>
          </ProjectDetailSectionBlock>
          <ProjectDetailSectionBlock title="대안">
            <ul className="dot-list">
              {alternatives.map((alt, i) => (
                <li key={i} className={clsx(alt.selected && 'font-semibold text-green-600')}>
                  {alt.text}
                </li>
              ))}
            </ul>
          </ProjectDetailSectionBlock>
          <ProjectDetailSectionBlock title="해결">
            <ul className="dot-list">
              {solution.map((sol, i) => (
                <li key={i}>{sol}</li>
              ))}
            </ul>
          </ProjectDetailSectionBlock>
          <ProjectDetailSectionBlock title="고찰">
            <ul className="dot-list">
              {insights.map((insight, i) => (
                <li key={i}>{insight}</li>
              ))}
            </ul>
          </ProjectDetailSectionBlock>
        </div>
      </CardContent>
    </Card>
  );
}
