import Aboutsection from "../experiment/company/Aboutsection/page";
import Awards from "../experiment/company/Awards/page";
import Impact from "../experiment/company/Impact/page";
import Missionsection from "../experiment/company/MissonSection/page";
import Partner from "../experiment/company/Partner/page";
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

      <section id="impact">
        <Impact />
      </section>

      <section id="awards">
        <Awards />
      </section>

      <section id="partner">
        <Partner />
      </section>
      <SiteFooter />
    </div>
  );
}

export default page;
