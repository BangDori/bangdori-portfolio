'use client';

import { useState } from 'react';
import type { Image as ImageType } from '@/types/project';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from './ui/dialog';

export default function ProjectDetailImages({ images }: { images: ImageType[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="mb-6 flex flex-col items-center gap-4">
      {images.map((img, idx) => (
        <div key={idx} className="flex w-full flex-col items-center">
          <button
            type="button"
            onClick={() => setOpenIdx(idx)}
            className="focus:outline-none"
            aria-label="이미지 확대"
          >
            <Image
              src={img.src}
              alt={img.caption || '프로젝트 이미지'}
              width={700}
              height={300}
              className="h-auto w-full cursor-pointer rounded border-[1px] object-contain shadow transition"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </button>
          {img.caption && (
            <span className="mt-2 text-center text-xs text-gray-500">{img.caption}</span>
          )}
          {/* Dialog(모달) */}
          <Dialog open={openIdx === idx} onOpenChange={() => setOpenIdx(null)}>
            <DialogContent className="flex max-w-[80%] flex-col items-center md:max-w-3xl lg:max-w-[80%]">
              <DialogTitle>{img.caption}</DialogTitle>
              <Image
                src={img.src}
                alt={img.caption || '프로젝트 이미지'}
                width={1200}
                height={600}
                className="h-auto w-full rounded object-contain"
              />
            </DialogContent>
          </Dialog>
        </div>
      ))}
    </div>
  );
}
