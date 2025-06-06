import { Card, CardContent } from '@/components/ui/card';
import { ProjectDetail } from '@/types/project';
import Image from 'next/image';
import ProjectDetailSectionBlock from './ProjectDetailSectionBlock';
import clsx from 'clsx';
import { Check, Dot } from 'lucide-react';

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
            {/* <ul className="ml-4 list-inside list-disc text-sm text-gray-700 md:text-base">
              {alternatives.map((alt, i) => (
                <li key={i} className={clsx(alt.selected && 'font-semibold text-green-600')}>
                  {alt.text}
                </li>
              ))}
            </ul> */}
            <ul className="ml-4 list-none text-sm text-gray-700 md:text-base">
              {alternatives.map((alt, i) => (
                <li
                  key={i}
                  className={clsx(
                    'flex items-center gap-2',
                    alt.selected && 'font-semibold text-green-600'
                  )}
                >
                  {alt.selected ? (
                    <Check size={16} className="flex-shrink-0 text-green-600" />
                  ) : (
                    <Dot size={16} className="text-black" />
                  )}
                  {alt.text}
                </li>
              ))}
            </ul>
          </ProjectDetailSectionBlock>
          <ProjectDetailSectionBlock title="해결">
            <p className="text-sm text-gray-700 md:text-base">{solution}</p>
          </ProjectDetailSectionBlock>
          <ProjectDetailSectionBlock title="고찰">
            <p className="text-sm text-gray-700 md:text-base">{insights.join(' ')}</p>
          </ProjectDetailSectionBlock>
        </div>
      </CardContent>
    </Card>
  );
}
