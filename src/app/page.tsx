import { HydrateClient } from "~/trpc/server";
import { NavigationHeader } from "./_components/navigation-header";
import { ProjectCarousel } from "./_components/projects-carousel";
import { cn } from "~/lib/utils";
import { WorkExperienceSection } from "./_components/work-experience";
import { InteractiveGridPattern } from "~/components/ui/interactive-grid-pattern";
import { Skills } from "./_components/skills";
import { EducationList } from "./_components/education-list";
import { Contact } from "./_components/contact";
import { Introduction } from "./_components/introduction";


export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex flex-col items-center justify-center z-10 mb-8">
        <div className="bg-gradient-to-r from-transparent from-0% via-white to-transparent to-100% min-h-screen w-full absolute z-10 top-0 left-50 pointer-events-none" />
        <NavigationHeader />
        <div className="z-10 flex flex-col gap-y-8">
          <Introduction />
          <WorkExperienceSection />
          <EducationList />
          <ProjectCarousel />
          <Skills />
          <Contact />
        </div>
      </main>
      <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          )}
          width={20}
          height={20}
          squares={[80, 80]}
          squaresClassName="hover:fill-green-500"
        />
    </HydrateClient>
  );
}
