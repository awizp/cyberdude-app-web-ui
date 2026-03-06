import HeroSection from "@/app/experiment/recruiters/components/HeroSection";
import OrganizationSection from "@/app/experiment/recruiters/components/OrganizationSection";
import RecruiterAccessSection from "@/app/experiment/recruiters/components/RecruiterAccessSection";
import RecruitmentProcessSection from "@/app/experiment/recruiters/components/RecruitmentProcessSection";
import SkillDNASection from "@/app/experiment/recruiters/components/SkillDNASection";
import ProjectGallerySection from "@/app/experiment/recruiters/components/ProjectGallerySection";
import CareerEventsSection from "@/app/experiment/recruiters/components/CareerEventsSection";
import CollaborationSection from "@/app/experiment/recruiters/components/CollaborationSection";
import RecruiterJourneySection from "@/app/experiment/recruiters/components/RecruiterJourneySection";
import WhyCyberDudeSection from "@/app/experiment/recruiters/components/WhyCyberDudeSection";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

const Recruiters = () => {
    return (
        <div className="min-h-screen bg-background">
            <SiteHeader />
            <HeroSection />
            <OrganizationSection />
            <RecruiterAccessSection />
            <RecruitmentProcessSection />
            <SkillDNASection />
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