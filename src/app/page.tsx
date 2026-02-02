import { Hero } from "@/components/sections/hero";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { OtherProjects } from "@/components/sections/other-projects";
import { Skills } from "@/components/sections/skills";
import { Certifications } from "@/components/sections/certifications";
import { Timeline } from "@/components/sections/timeline";
import { References } from "@/components/sections/references";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <OtherProjects />
      <Certifications />
      <Skills />
      <Timeline />
      <References />
      {/* <Contact /> */}
    </>
  );
}
