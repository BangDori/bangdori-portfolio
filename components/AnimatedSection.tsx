'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type MotionTag = 'div' | 'section' | 'aside';

interface AnimatedSectionProps {
  as: MotionTag;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  as,
  children,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
