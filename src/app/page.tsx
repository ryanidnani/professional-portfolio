import { AboutSection } from "@/components/about-section";
import { Hero } from "@/components/hero";
import { PeerReviewsSection } from "@/components/peer-reviews-section";
import { ProjectsSection } from "@/components/projects-section";
import { PublicationsSection } from "@/components/publications-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

/** Refetch Google Scholar papers and citation counts about once an hour. */
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main" className="flex-1">
        <Hero />
        <AboutSection />
        <PublicationsSection />
        <PeerReviewsSection />
        <ProjectsSection />
      </main>
      <SiteFooter />
    </>
  );
}
