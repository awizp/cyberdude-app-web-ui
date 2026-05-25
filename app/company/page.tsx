import Awards from "./awards/page";
import Impact from "./impact/page";
import Missionsection from "./mission-section";
import Partner from "./partner/page";
import SiteHeader from "@/components/ui/site-header";
import SiteFooter from "@/components/ui/site-footer";

function page() {
  return (
    <div>
      <SiteHeader />

      {/* <section id="about">
        <Aboutsection />
      </section> */}

      <section id="awards">
        <Awards />
      </section>

      <section id="impact">
        <Impact />
      </section>

      <section id="mission">
        <Missionsection />
      </section>

      <section id="partner">
        <Partner />
      </section>

      <SiteFooter />
    </div>
  );
}

export default page;
