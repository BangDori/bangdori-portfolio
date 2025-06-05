import AboutSection from './_components/AboutSection';
import ProfileCard from './_components/ProfileCard';

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-8 pt-8 pb-16 md:pt-16">
      <ProfileCard />
      <AboutSection />
    </main>
  );
}
