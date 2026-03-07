const sections = [
  {
    id: "1",
    title: "Acceptance of Terms",
    content: ["By accessing or using cyberdude.app, you confirm that:"],
    bullets: [
      "You are at least 18 years old (or using the platform under authorized guardian supervision).",
      "You agree to comply with all applicable laws and regulations.",
      "You understand that cyberdude.app is designed to transform beginners into skilled professionals through structured, performance-driven, and evidence-based learning methodologies.",
    ],
    after:
      "These Terms may be updated periodically. Continued use of the platform after updates constitutes acceptance of the revised Terms.",
  },
  {
    id: "2",
    title: "Account Registration & Accountability",
    subsections: [
      {
        subtitle: "2.1 Account Responsibility",
        content:
          "Users must provide accurate and complete information during registration. You are responsible for:",
        bullets: [
          "Maintaining the confidentiality of your login credentials",
          "All activities conducted under your account",
          "Promptly notifying us of unauthorized access",
        ],
        after:
          "cyberdude.app reserves the right to suspend or terminate accounts that provide false information or violate platform policies.",
      },
    ],
  },
  {
    id: "3",
    title: "Strict Monitoring & Academic Integrity",
    content: [
      "To ensure authentic skill development and maintain the credibility of certifications, cyberdude.app implements structured monitoring systems.",
    ],
    subsections: [
      {
        subtitle: "3.1 Attention Verification",
        content: "The platform may implement:",
        bullets: [
          '"Are you still there?" prompts',
          "Random attention checks",
          "Timed quizzes or checkpoints",
        ],
        after:
          "Failure to respond may result in session pauses or progress tracking adjustments.",
      },
      {
        subtitle: "3.2 AI-Based Proctoring",
        content: "For critical assessments, exams, or certifications:",
        bullets: [
          "AI-powered webcam monitoring may be activated",
          "Browser lockdown mechanisms may restrict opening new tabs, applications, or screen switching",
          "Screen activity may be monitored for integrity purposes",
        ],
        after:
          "By participating in such modules, you explicitly consent to this monitoring.",
      },
      {
        subtitle: "3.3 Sequential Learning Enforcement",
        content: "To maintain curriculum integrity:",
        bullets: [
          "Modules must be completed in structured sequence",
          "Skipping ahead is restricted",
          "Unlocking of advanced modules depends on prior completion",
        ],
        after:
          "This ensures genuine competency development rather than superficial course completion.",
      },
    ],
  },
  {
    id: "4",
    title: "Skill DNA & Verified Learning Profile",
    content: [
      "cyberdude.app uses data-driven analytics to measure real skill growth.",
    ],
    subsections: [
      {
        subtitle: "4.1 Behavioral & Cognitive Metrics",
        content: "The platform tracks learning metrics such as:",
        bullets: [
          "Grit & persistence",
          "Learning velocity",
          "Completion consistency",
          "Collaboration engagement",
          "Assessment performance",
        ],
        after: "These metrics collectively form your Skill DNA Profile.",
      },
      {
        subtitle: "4.2 Recruiter Visibility (Opt-in Only)",
        content: "If you explicitly opt-in:",
        bullets: [
          "Your Skill Profile",
          "Radar chart analytics",
          "Verified project portfolio",
          "Performance insights",
        ],
        after:
          "may be shared with verified recruiters. You may opt-out at any time through account settings.",
      },
      {
        subtitle: "4.3 Dynamic Certifications & Badges",
        content: "Digital certificates and badges:",
        bullets: [
          "Contain embedded metadata",
          "Reflect real performance metrics",
          "Are performance-backed, not attendance-based",
        ],
        after:
          "cyberdude.app reserves the right to revoke certifications in cases of academic dishonesty.",
      },
    ],
  },
  {
    id: "5",
    title: "Mentorship & Community Standards",
    subsections: [
      {
        subtitle: "5.1 Mentor Sessions",
        content: "1:1 mentorship sessions:",
        bullets: [
          "Require available credits",
          "Are subject to mentor availability",
          "Must be booked in designated time slots",
        ],
        after: "No-shows may result in credit deduction.",
      },
      {
        subtitle: "5.2 Community Conduct",
        content: "Users must:",
        bullets: [
          "Maintain respectful communication",
          "Avoid harassment, spam, or offensive language",
          "Contribute constructively to forums",
        ],
        after:
          "The platform tracks a Collaboration Index based on interaction quality. Repeated violations may result in account restrictions.",
      },
    ],
  },
  {
    id: "6",
    title: "Roles & Permissions",
    subsections: [
      {
        subtitle: "6.1 Guardian Accounts",
        content: "Guardian accounts:",
        bullets: [
          "Have read-only access",
          "Can monitor learner progress, grades, attendance, and activity logs",
          "Cannot alter course data or assessment results",
        ],
      },
      {
        subtitle: "6.2 Organizational Accounts",
        content: "Corporate or institutional accounts may grant:",
        bullets: [
          "Analytics dashboards",
          "ROI tracking",
          "Employee/student performance monitoring",
          "Completion insights",
        ],
        after:
          "Organizations are responsible for proper internal use of such data.",
      },
    ],
  },
  {
    id: "7",
    title: "Payments, Subscriptions & Refunds",
    subsections: [
      {
        subtitle: "7.1 Payment Processing",
        content:
          "Payments are securely processed via third-party gateways such as:",
        bullets: ["RazorPay", "Paytm", "Other integrated providers"],
        after: "cyberdude.app does not store full payment card details.",
      },
      {
        subtitle: "7.2 Access Conditions",
        content: "Access to:",
        bullets: [
          "Premium modules",
          "Advanced certifications",
          "Recruitment pipelines",
        ],
        after: "may depend on successful payment.",
      },
      {
        subtitle: "7.3 Refund Policy",
        content: "Refund eligibility (if applicable):",
        bullets: [
          "Must comply with the platform's official refund window",
          "May be denied after significant course progress is completed",
          "Will not apply in cases of policy violations",
        ],
        after:
          "Specific refund terms will be outlined at the time of purchase.",
      },
    ],
  },
  {
    id: "8",
    title: "Limitation of Liability",
    content: [
      "cyberdude.app aims to enhance employability and skill development; however:",
    ],
    bullets: [
      "Course completion does not guarantee employment",
      "Recruiter engagement depends on external hiring decisions",
      "We are not responsible for job offers, salary levels, or employment outcomes",
    ],
    after:
      "The platform acts as a structured bridge between learners and recruiters but does not guarantee hiring results. To the fullest extent permitted by law, cyberdude.app shall not be liable for indirect or consequential damages, data loss due to user negligence, or service interruptions beyond reasonable control.",
  },
  {
    id: "9",
    title: "Data Usage & Privacy",
    content: ["User data collected for:"],
    bullets: [
      "Learning analytics",
      "Skill measurement",
      "Recruiter visibility",
      "Platform improvement",
    ],
    after:
      "is handled according to our Privacy Policy. We implement reasonable security measures to protect user information but cannot guarantee absolute security.",
  },
  {
    id: "10",
    title: "Termination of Access",
    content: [
      "cyberdude.app reserves the right to suspend or terminate accounts, revoke certifications, or restrict recruiter visibility if users:",
    ],
    bullets: [
      "Violate academic integrity",
      "Misuse monitoring systems",
      "Engage in fraudulent behavior",
    ],
  },
  {
    id: "11",
    title: "Intellectual Property",
    content: ["All content including:"],
    bullets: [
      "Course materials",
      "Videos",
      "Learning frameworks",
      "Analytics models",
      "Platform design",
    ],
    after:
      "is the intellectual property of cyberdude.app and may not be copied, redistributed, or reproduced without written permission.",
  },
  {
    id: "12",
    title: "Governing Law",
    content: [
      "These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of the courts located in the applicable city and state.",
    ],
  },
];

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
    <h3 className="mb-3 font-heading text-sm font-semibold text-primary">
      {sub.subtitle}
    </h3>
    <p className="mb-3 text-secondary-foreground">{sub.content}</p>
    {sub.bullets && (
      <ul className="mb-3 space-y-2 pl-5">
        {sub.bullets.map((b, i) => (
          <li
            key={i}
            className="relative text-secondary-foreground before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
          >
            {b}
          </li>
        ))}
      </ul>
    )}
    {sub.after && <p className="text-muted-foreground text-sm">{sub.after}</p>}
  </div>
);

const TermsContent = () => {
  return (
    <div className="space-y-12 container mx-auto p-4 ">
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          
          <h1 className="mb-4 font-heading text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Please read these terms carefully before using cyberdude.app. By
            accessing our platform, you agree to be bound by the following
            terms.
          </p>
        </div>
      </section>
      {/* Table of Contents */}
      <nav className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          Table of Contents
        </h2>
        <ol className="grid gap-2 sm:grid-cols-2">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#section-${s.id}`}
                className="text-sm text-secondary-foreground transition-colors hover:text-primary"
              >
                <span className="font-heading text-xs text-primary mr-2">
                  {s.id}.
                </span>
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Sections */}
      {sections.map((section) => (
        <section
          key={section.id}
          id={`section-${section.id}`}
          className="scroll-mt-24"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary font-heading text-sm font-bold text-primary-foreground">
              {section.id}
            </span>
            <h2 className="font-heading text-xl font-bold text-foreground">
              {section.title}
            </h2>
          </div>

          <div className="border-l-2 border-border pl-6 ml-4">
            {section.content?.map((p, i) => (
              <p
                key={i}
                className="mb-3 text-secondary-foreground leading-relaxed"
              >
                {p}
              </p>
            ))}

            {section.bullets && (
              <ul className="mb-3 space-y-2 pl-5">
                {section.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="relative text-secondary-foreground before:absolute before:-left-4 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {section.after && (
              <p className="text-muted-foreground text-sm">{section.after}</p>
            )}

            {section.subsections?.map((sub, i) => (
              <SubSection key={i} sub={sub} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default TermsContent;
