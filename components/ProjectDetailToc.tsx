'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ProjectDetail } from '@/types/project';
import clsx from 'clsx';

interface ProjectDetailTocProps {
  details: ProjectDetail[];
}

export default function ProjectDetailToc({ details }: ProjectDetailTocProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const sectionIds = details.map((_, idx) => `detail-${idx}`);
    const sections = sectionIds.map((id) => document.getElementById(id));
    const handleScroll = () => {
      let foundIdx = 0;
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            foundIdx = i;
          }
        }
      }
      setActiveIdx(foundIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [details]);

  return (
    <nav className="mb-6 select-none md:mb-0">
      <h3 className="mb-2 text-base font-semibold">목차</h3>
      <ul className="space-y-2 border-l-2 border-gray-200 pl-2">
        {details.map((item, idx) => (
          <li key={idx}>
            <Link
              href={`#detail-${idx}`}
              className={clsx(
                'flex items-center gap-2 text-sm hover:text-gray-600 hover:underline',
                activeIdx === idx ? 'text-black hover:text-black dark:text-white' : 'text-gray-400'
              )}
            >
              {idx + 1}. {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
