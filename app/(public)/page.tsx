import { HomeHero } from "@/components/sections/HomeHero";
import { SchoolIntro } from "@/components/sections/SchoolIntro";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { AcademicPathways } from "@/components/sections/AcademicPathways";
import { HeadWelcome } from "@/components/sections/HeadWelcome";
import { SchoolLife } from "@/components/sections/SchoolLife";
import { BoardingTeaser } from "@/components/sections/BoardingTeaser";
import { MomentsGallery } from "@/components/sections/MomentsGallery";
import { NewsEvents } from "@/components/sections/NewsEvents";
import { AdmissionsCta } from "@/components/sections/AdmissionsCta";
import { ContactMap } from "@/components/sections/ContactMap";

export const metadata = {
  title: "First Class Private School | Building Tomorrow's Christian Leaders from Mbizo",
  description:
    "First Class Private School (FCPS) is a Christ-centred private day and boarding school in Mbizo, Kwekwe, Zimbabwe. We offer Forms 1–6 ZIMSEC and Cambridge education grounded in Christian values, Unhu/Ubuntu and practical skills.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <SchoolIntro />
      <WhyChoose />
      <AcademicPathways />
      <HeadWelcome />
      <SchoolLife />
      <BoardingTeaser />
      <MomentsGallery />
      <NewsEvents />
      <AdmissionsCta />
      <ContactMap />
    </>
  );
}
