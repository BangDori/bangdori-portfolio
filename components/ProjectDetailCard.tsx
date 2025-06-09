import clsx from 'clsx';
import { Card, CardContent } from '@/components/ui/card';
import { ProjectDetail } from '@/types/project';
import ProjectDetailSectionBlock from './ProjectDetailSectionBlock';
import ProjectDetailImages from './ProjectDetailImages';

interface ProjectDetailCardProps extends ProjectDetail {
  index: number;
}

export default function ProjectDetailCard({
  title,
  images,
  problem,
  cause,
  alternatives,
  solution,
  insights,
  references,
  index,
}: ProjectDetailCardProps) {
  return (
    <Card id={`detail-${index}`}>
      <CardContent>
        <h3 className="mb-4 text-lg font-bold text-gray-900 md:text-xl dark:text-gray-300">
          {title}
        </h3>
        <ProjectDetailImages images={images} />
        <div className="flex flex-col gap-6">
          <ProjectDetailSectionBlock title="문제">
            <ul className="dot-list">
              <li className="text-gray-700 dark:text-gray-300">{problem}</li>
            </ul>
          </ProjectDetailSectionBlock>
          <ProjectDetailSectionBlock title="원인">
            <ul className="dot-list">
              {cause.map((c, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300">
                  {c}
                </li>
              ))}
            </ul>
          </ProjectDetailSectionBlock>
          <ProjectDetailSectionBlock title="대안">
            <ul className="dot-list">
              {alternatives.map((alt, i) => (
                <li
                  key={i}
                  className={clsx(
                    'text-gray-700 dark:text-gray-300',
                    alt.selected && 'font-semibold text-green-600 dark:text-green-400'
                  )}
                >
                  {alt.text}
                </li>
              ))}
            </ul>
          </ProjectDetailSectionBlock>
          <ProjectDetailSectionBlock title="해결">
            <ul className="dot-list">
              {solution.map((sol, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300">
                  {sol}
                </li>
              ))}
            </ul>
          </ProjectDetailSectionBlock>
          <ProjectDetailSectionBlock title="결과">
            <ul className="dot-list">
              {insights.map((insight, i) => (
                <li key={i} className="text-gray-700 dark:text-gray-300">
                  {insight}
                </li>
              ))}
            </ul>
          </ProjectDetailSectionBlock>
          {references.length > 0 && (
            <ProjectDetailSectionBlock title="참고 자료">
              <ul className="dot-list">
                {references.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline dark:text-blue-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </ProjectDetailSectionBlock>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
