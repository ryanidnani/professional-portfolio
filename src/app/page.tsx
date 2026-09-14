import { AboutSection } from "@/components/about-section";
import { Hero } from "@/components/hero";
import { PeerReviewsSection } from "@/components/peer-reviews-section";
import { ProjectsSection } from "@/components/projects-section";
import { PublicationsSection } from "@/components/publications-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
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
