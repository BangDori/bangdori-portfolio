import { ThemeToggle } from '@/components/theme/ThemeToggle';
import AboutSection from './_components/AboutSection';
import ProfileCard from './_components/ProfileCard';
import ProjectsSummarySection from './_components/ProjectsSummarySection';
import TechStackSection from './_components/TechStackSection';

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-6xl px-8 pt-8 pb-16 md:pt-16">
      <div className="relative" style={{ paddingTop: 0, paddingRight: 0 }}>
        <ThemeToggle />
      </div>
      <ProfileCard />
      <AboutSection />
      <TechStackSection />
      <ProjectsSummarySection />
    </main>
  );
}
