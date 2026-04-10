import Aboutsection from "../experiment/company/Aboutsection/page";
import Awards from "../experiment/company/awards/page";
import Impact from "../experiment/company/impact/page";
import Missionsection from "../experiment/company/MissonSection/page";
import Partner from "../experiment/company/partner/page";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer"


function page() {
  return (
    <div>
      <SiteHeader />

      <section id="about">
        <Aboutsection />
      </section>

      <section id="mission">
        <Missionsection />
      </section>

      <SiteFooter />
    </div>
  );
}

export default page;
