import SiteFooter from "@/components/ui/site-footer";
import SiteHeader from "@/components/ui/site-header";
import TermsContentData from "@/data/term-and-condition";

const SubSection = ({
  sub,
}: {
  sub: {
    subtitle: string;
    content: string;
    bullets?: string[];
    after?: string;
  };
}) => (
  <div className="mt-6">
    <h3 className="mb-3 text-sm font-semibold text-orange-500">
      {sub.subtitle}
    </h3>
    <p className="mb-3 text-gray-700">{sub.content}</p>
    {sub.bullets && (
      <ul className="mb-3 space-y-2 pl-5">
        {sub.bullets.map((b, i) => (
          <li
            key={i}
            className="relative text-gray-600 before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-orange-500"
          >
            {b}
          </li>
        ))}
      </ul>
    )}
    {sub.after && <p className="text-gray-600 text-sm">{sub.after}</p>}
  </div>
);

const LegalTermsPage = () => {
  return (
    <>
      <SiteHeader />
      <div className="space-y-12 container mx-auto p-4 ">
        <section className="">
          <div className="mx-autso max-w-4xl px-6 pt-16">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] bg-orange-500 text-white inline-block px-2 py-1 rounded">
              Legal
            </p>
            <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="max-w-2xl text-lg text-gray-600">
              Please read these terms carefully before using cyberdude.app. By
              accessing our platform, you agree to be bound by the following
              terms.
            </p>
          </div>
        </section>
        {/* Table of Contents */}
        <nav className="rounded-lg border border-border bg-card p-6">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
            Table of Contents
          </h2>
          <ol className="grid gap-2 sm:grid-cols-2">
            {TermsContentData.map((s) => (
              <li key={s.id}>
                <a
                  href={`#section-${s.id}`}
                  className="text-sm text-secondary-foreground transition-colors hover:text-orange-500"
                >
                  <span className="text-xs text-orange-500 mr-2">{s.id}.</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        {TermsContentData.map((section) => (
          <section
            key={section.id}
            id={`section-${section.id}`}
            className="scroll-mt-24"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-orange-500 text-sm font-bold text-orange-100">
                {section.id}
              </span>
              <h2 className="text-xl font-bold text-foreground">
                {section.title}
              </h2>
            </div>

            <div className="border-l-2 border-border pl-6 ml-4">
              {section.content?.map((p, i) => (
                <p key={i} className="mb-3 text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}

              {section.bullets && (
                <ul className="mb-3 space-y-2 pl-5">
                  {section.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="relative text-gray-600 before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-orange-500"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {section.after && (
                <p className="text-gray-700 text-sm">{section.after}</p>
              )}

              {section.subsections?.map((sub, i) => (
                <SubSection key={i} sub={sub} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <SiteFooter />
    </>
  );
};

export default LegalTermsPage;
