import {
  ShieldCheck,
  Brain,
  Activity,
  BadgeCheck,
  AlertCircle,
  BookX,
  ShieldAlert,
  Users,
  User,
  Building2,
  Briefcase,
  Eye,
  Lock,
  FolderOpen,
  Zap,
  TrendingUp,
  BookOpen,
  Target,
  Flame,
  ScanFace,
  BarChart3,
  Compass,
} from "lucide-react";

const AboutSectionData = {
  /* ── Hero stats ─────────────────────────────────────── */
  stats: [
    { value: "10K+", label: "Active Learners" },
    { value: "95%", label: "Completion Rate" },
    { value: "4×", label: "Faster Job Placement" },
    { value: "200+", label: "Hiring Partners" },
  ],

  /* ── Mission & Vision ───────────────────────────────── */
  missionVision: {
    mission:
      'To bridge the gap between passive online learning and professional competence by creating an accountable, evidence-based ecosystem. We don\'t just provide content; we enforce the discipline and rigor required to transform beginners into job-ready professionals through "Natural Intelligence" and strict, proctored engagement.',
    vision:
      'To become the global standard for verified skill acquisition, where a "CyberDude" certification isn\'t just a digital image, but a data-rich proof of grit, logic, and practical mastery that recruiters trust implicitly.',
  },

  /* ── Problem we solve ───────────────────────────────── */
  problems: [
    {
      icon: Flame,
      badge: "The Completion Crisis",
      title: "Addressing the 90% dropout rate in traditional MOOCs.",
      desc: "Traditional MOOCs fail because there is zero accountability. CyberDude enforces discipline with locked, sequential modules — no skipping, no shortcuts.",
      stat: "90%",
      statLabel: "MOOC dropout rate",
    },
    {
      icon: BookX,
      badge: "The Skill Gap",
      title: 'Moving beyond "watching videos" to "solving problems".',
      desc: "Passively scrolling through videos doesn't build skills. Our attention-verified, project-based curriculum ensures every minute equals measurable competence.",
      stat: "72%",
      statLabel: "of graduates lack job-ready skills",
    },
    {
      icon: ShieldAlert,
      badge: "The Trust Deficit",
      title: 'Replacing inflated resumes with verified "Skill DNA".',
      desc: "Employers can't trust self-reported skills. We replace inflated résumés with verified Skill DNA — provable grit, logic scores, and live project portfolios.",
      stat: "60%",
      statLabel: "of hirers distrust resume claims",
    },
  ],

  /* ── Core pillars ───────────────────────────────────── */
  pillars: [
    {
      icon: Lock,
      number: "01",
      title: "Strict Accountability",
      desc: 'Sequential modules and AI-based proctoring ensure you don\'t just "skip to the end". Every unlock is earned.',
      tag: "Anti-passive",
    },
    {
      icon: ScanFace,
      number: "02",
      title: "Attention-First Learning",
      desc: 'Integrated "Are you still there?" checks and interactive quizzes that pause content until you prove focus.',
      tag: "AI Proctoring",
    },
    {
      icon: BarChart3,
      number: "03",
      title: "Skill DNA Tracking",
      desc: "A visual radar chart measuring Grit, Collaboration, and Learning Velocity — not just grades.",
      tag: "Deep Metrics",
    },
    {
      icon: FolderOpen,
      number: "04",
      title: "Live Portfolio Builder",
      desc: "Projects auto-populate a verified digital portfolio as you complete them — giving recruiters proof of work, not just a certificate.",
      tag: "Proof of Work",
    },
    {
      icon: Brain,
      number: "05",
      title: "Natural Intelligence",
      desc: "Smart rule-based nudges, contextual hints, and recall triggers keep the human mind engaged and advancing.",
      tag: "Smart Engine",
    },
    {
      icon: BadgeCheck,
      number: "06",
      title: "Verified Talent Pipeline",
      desc: "Recruiters access a pre-vetted talent pool with proven logic scores — cutting screening time by 80%.",
      tag: "Recruitment",
    },
  ],

  /* ── Value by persona ───────────────────────────────── */
  personas: [
    {
      icon: User,
      role: "For Learners",
      headline: "Turn a degree into a career with a verified portfolio.",
      benefit: "Verified portfolio",
      desc: "Build a structured, disciplined learning habit. Complete real projects that prove your skills and land your first — or next — job faster.",
      points: [
        "Structured sequential curriculum",
        "Auto-populated live portfolio",
        "Verified Skill DNA transcript",
      ],
    },
    {
      icon: Target,
      role: "For Recruiters",
      headline: "Access a pre-vetted talent pool with 80% less screening time.",
      benefit: "Pre-vetted talent",
      desc: "Stop sifting through inflated résumés. Access a pre-vetted talent pool filtered by proven logic scores, project work, and verified competence.",
      points: [
        "Logic-score filtered candidates",
        "Real project portfolios to review",
        "Skill DNA instead of self-reports",
      ],
    },
    {
      icon: Eye,
      role: "For Guardians",
      headline: "Gain peace of mind through transparent progress dashboards.",
      benefit: "Transparent dashboard",
      desc: "A read-only dashboard shows login activity, quiz grades, and course milestones in real time — full visibility into your child's progress.",
      points: [
        "Live login & activity tracking",
        "Quiz scores & milestone alerts",
        "Course completion transparency",
      ],
    },
  ],

  /* ── Differentiators ────────────────────────────────── */
  differentiators: [
    {
      icon: Lock,
      tag: "Anti-passive learning",
      title: "Strict Monitoring & Discipline",
      desc: "Mandatory sequential modules that only unlock upon completion of previous sections — mimicking a structured classroom syllabus.",
    },
    {
      icon: Eye,
      tag: "AI Proctoring",
      title: "Attention Verification",
      desc: "AI-based proctoring and mandatory attention checks solve the passive-scrolling problem. Inactivity is logged and content paused.",
    },
    {
      icon: Activity,
      tag: "Deep metrics",
      title: "Skill DNA (Beyond the Résumé)",
      desc: "We measure Grit, Learning Velocity, Collaboration, and Problem-Solving Methodology — far beyond traditional grades.",
    },
    {
      icon: FolderOpen,
      tag: "Live Portfolio",
      title: "Practical Portfolios",
      desc: "Projects auto-populate a live digital portfolio — giving recruiters proof of work, not a static certificate.",
    },
  ],

  /* ── Audience summary ───────────────────────────────── */
  audience: [
    {
      icon: User,
      title: "Learners",
      desc: "A structured path to become job-ready with real-world skills.",
    },
    {
      icon: Building2,
      title: "Institutions",
      desc: "Bridge the gap between academic learning and industry needs.",
    },
    {
      icon: Briefcase,
      title: "Recruiters",
      desc: "Hire verified candidates with proven skills and data-backed insights.",
    },
    {
      icon: Eye,
      title: "Guardians",
      desc: "Track progress with transparency and monitor performance.",
    },
  ],

  /* ── Who is CyberDude for ───────────────────────────── */
  audienceTable: [
    {
      icon: User,
      persona: "Newbies",
      problem: "Overwhelmed by unstructured resources and easily distracted.",
      solution:
        "Provides the structure and discipline needed to build a consistent learning habit and a job-ready portfolio.",
    },
    {
      icon: Briefcase,
      persona: "Working Professionals",
      problem: "Limited time and a need for high-ROI upskilling.",
      solution:
        'A "no-fluff" environment that guarantees every minute results in verified, industry-respected credentials.',
    },
    {
      icon: BookOpen,
      persona: "Job Seekers",
      problem: "Résumé gaps and a lack of confidence after a career break.",
      solution:
        "Provides a verified skill transcript and current projects to prove capabilities are up-to-date.",
    },
    {
      icon: Building2,
      persona: "Institutions",
      problem: "Outdated curricula and low student placement rates.",
      solution:
        'Acts as a "Finishing School" module, bridging the gap between academia and industry.',
    },
    {
      icon: Users,
      persona: "Corporate Teams",
      problem: "Low completion rates for employee training and unclear ROI.",
      solution:
        "Real-time analytics on team engagement and skill mastery via a live dashboard.",
    },
    {
      icon: Target,
      persona: "Recruiters",
      problem: "Sifting through hundreds of résumés with inflated skills.",
      solution:
        "A pre-vetted talent portal filtered by proven logic scores and project work.",
    },
    {
      icon: Eye,
      persona: "Guardians",
      problem: "Lack of transparency regarding their child's progress.",
      solution:
        "A read-only dashboard showing login activity, quiz grades, and completion milestones.",
    },
  ],

  /* ── Philosophy ─────────────────────────────────────── */
  philosophyPrinciples: [
    {
      icon: Brain,
      title: "Active Recall Triggers",
      desc: "After a complex video, learners explain concepts in their own words — activating memory consolidation.",
    },
    {
      icon: Zap,
      title: "Smart Hint System",
      desc: "When stuck for too long, the system detects it and nudges with a contextual hint.",
    },
    {
      icon: TrendingUp,
      title: "Momentum-Driven Engagement",
      desc: "Streak tracking, milestone badges, and daily nudges keep the human mind active and moving forward.",
    },
    {
      icon: ShieldCheck,
      title: "Workflow Rule Engine",
      desc: "Smart rules trigger the right intervention at the right time — discipline without dependence on pure AI.",
    },
  ],
};

export default AboutSectionData;
