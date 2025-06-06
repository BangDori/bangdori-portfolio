import Link from 'next/link';
import { ArrowLeft, LucideIcon } from 'lucide-react';

interface ProjectDetailHeaderProps {
  Icon: LucideIcon;
  title: string;
  date?: string;
}

export default function ProjectDetailHeader({ title, Icon, date }: ProjectDetailHeaderProps) {
  return (
    <>
      <Link
        href="/"
        className="group flex w-fit items-center gap-1 border-b border-transparent text-sm text-gray-500 hover:text-gray-700"
      >
        <ArrowLeft size={14} />
        <span>뒤로가기</span>
      </Link>
      <div className="flex items-center gap-2">
        <Icon size={36} />
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      {date && <div className="text-sm text-gray-500">{date}</div>}
    </>
  );
}
