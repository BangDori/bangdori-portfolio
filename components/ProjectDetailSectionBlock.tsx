interface ProjectDetailSectionBlockProps {
  title: string;
  children: React.ReactNode;
}

export default function ProjectDetailSectionBlock({
  title,
  children,
}: ProjectDetailSectionBlockProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-semibold text-gray-800 md:text-xl">{title}</span>
      {children}
    </div>
  );
}
