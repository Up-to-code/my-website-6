import Certifications from "@/components/layout/Certifications";
import Hero from "@/components/layout/Hero";
import MySkills from "@/components/layout/MySkills";
import CustomerTestimonials from "@/components/layout/OurCutamers";
import { ProjectListRtlArabic } from "@/components/project-list-rtl-arabic";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectListRtlArabic />
      <Certifications />
      <MySkills />
      <CustomerTestimonials />
    </>
  );
}
