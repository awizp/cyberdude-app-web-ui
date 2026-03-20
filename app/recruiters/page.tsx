import RecruitersHero from "@/components/ui/RecruitersHero";
import OrganizationSection from "@/components/ui/OrganizationSection";
import RecruitmentProcessSection from "@/components/ui/RecruitmentProcessSection";
import SkillDNASection from "@/components/ui/SkillDNASection";
import ProjectGallerySection from "@/components/ui/ProjectGallerySection";
import CareerEventsSection from "@/components/ui/CareerEventsSection";
import CollaborationSection from "@/components/ui/CollaborationSection";
import RecruiterJourneySection from "@/components/ui/RecruiterJourneySection";
import WhyCyberDudeSection from "@/components/ui/WhyCyberDudeSection";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

const Recruiters = () => {
    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />
            <RecruitersHero />
            <OrganizationSection />
            <SkillDNASection />
            <RecruitmentProcessSection />
            <ProjectGallerySection />
            <CareerEventsSection />
            <CollaborationSection />
            <RecruiterJourneySection />
            <WhyCyberDudeSection />
            <SiteFooter />
        </div>
    );
};

export default Recruiters;