import { AboutMe } from "@/components/about-me-zinc";
import Certifications from "@/components/layout/Certifications";
import Hero from "@/components/layout/Hero";
import MySkills from "@/components/layout/MySkills";
import { ProjectListRtlArabic } from "@/components/project-list-rtl-arabic";

export default function Home() {
  return <div>
    <Hero     />
    <ProjectListRtlArabic/>
    <Certifications/>
    <MySkills />
    <AboutMe/>
  </div>;
}
