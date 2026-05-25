export interface SlideOption {
  icon: string;
  label: string;
  description?: string;
}

export interface SlideField {
  key: string;
  label: string;
  type: "text" | "email" | "tel" | "url";
  placeholder: string;
  required?: boolean;
}

export interface SlideConfig {
  type: "selection" | "form";
  step: number;
  title: string;
  subtitle: string;
  hint?: string;
  dataKey?: string;
  options?: SlideOption[];
  fields?: SlideField[];
}

export interface RoleOutcome {
  emoji: string;
  title: string;
  points: string[];
}

// Step 1 is always the same: choose your role
export const ROLE_SLIDE: SlideConfig = {
  type: "selection",
  step: 1,
  title: "Who are you?",
  subtitle: "Choose Your Role",
  hint: "This decides your platform experience",
  dataKey: "role",
  options: [
    { icon: "🎓", label: "Newbie (Learner)", description: "Starting fresh with structured learning" },
    { icon: "💼", label: "Working Professional", description: "Upskilling or transitioning roles" },
    { icon: "🔍", label: "Job Seeker", description: "Preparing to land your next role" },
    { icon: "📋", label: "Recruiter / HR", description: "Discover and hire proven talent" },
    { icon: "🏢", label: "Organization", description: "Manage learning at scale" },
    { icon: "🛡️", label: "Guardian", description: "Support a learner's journey" },
  ],
};

// ─── Learner / Newbie Flow ───
const LEARNER_SLIDES: SlideConfig[] = [
  {
    type: "selection",
    step: 2,
    title: "What's your current level?",
    subtitle: "Your Starting Point",
    hint: "We adjust your learning path based on this",
    dataKey: "skillLevel",
    options: [
      { icon: "🌱", label: "Absolute Beginner", description: "No prior experience" },
      { icon: "⚡", label: "Intermediate", description: "Familiar with basics, need practice" },
      { icon: "🚀", label: "Advanced", description: "Experienced, looking to specialize" },
    ],
  },
  {
    type: "selection",
    step: 3,
    title: "Choose your area of interest",
    subtitle: "What Do You Want to Focus On?",
    hint: "This defines your learning roadmap",
    dataKey: "focus",
    options: [
      { icon: "🎨", label: "UI / UX Design" },
      { icon: "⚡", label: "Frontend Development" },
      { icon: "🔧", label: "Backend Development" },
      { icon: "🚀", label: "Full Stack Development" },
    ],
  },
  {
    type: "selection",
    step: 4,
    title: "What are you aiming for?",
    subtitle: "Your Learning Goal",
    hint: "Helps us guide you better",
    dataKey: "goal",
    options: [
      { icon: "💼", label: "Get a Job" },
      { icon: "🔄", label: "Switch Career" },
      { icon: "📈", label: "Upskill" },
      { icon: "💡", label: "Learn for Interest" },
    ],
  },
  {
    type: "selection",
    step: 5,
    title: "How do you prefer to learn?",
    subtitle: "Commitment Style",
    dataKey: "commitment",
    options: [
      { icon: "📅", label: "Daily Learning" },
      { icon: "🗓️", label: "Weekend Learning" },
      { icon: "🔀", label: "Flexible" },
    ],
  },
  {
    type: "form",
    step: 6,
    title: "Create your account",
    subtitle: "Basic Details",
    hint: "Secure your access and save your progress",
    fields: [
      { key: "name", label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
      { key: "email", label: "Email Address", type: "email", placeholder: "Enter your email", required: true },
      { key: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
    ],
  },
];

// ─── Working Professional Flow ───
const PROFESSIONAL_SLIDES: SlideConfig[] = [
  {
    type: "selection",
    step: 2,
    title: "What's your current role?",
    subtitle: "Your Background",
    dataKey: "currentRole",
    options: [
      { icon: "💻", label: "Developer" },
      { icon: "📊", label: "Non-Tech Professional" },
      { icon: "🎨", label: "Designer" },
      { icon: "🔹", label: "Other" },
    ],
  },
  {
    type: "selection",
    step: 3,
    title: "How much experience do you have?",
    subtitle: "Experience Level",
    dataKey: "experience",
    options: [
      { icon: "🌱", label: "0–2 Years" },
      { icon: "⚡", label: "2–5 Years" },
      { icon: "🚀", label: "5+ Years" },
    ],
  },
  {
    type: "selection",
    step: 4,
    title: "What's driving your upskilling?",
    subtitle: "Upskilling Focus",
    hint: "Helps us tailor your experience",
    dataKey: "upskillingFocus",
    options: [
      { icon: "🔄", label: "Career Transition" },
      { icon: "📈", label: "Skill Upgrade" },
      { icon: "🏆", label: "Promotion Preparation" },
    ],
  },
  {
    type: "selection",
    step: 5,
    title: "Which domain interests you?",
    subtitle: "Preferred Domain",
    dataKey: "domain",
    options: [
      { icon: "⚡", label: "Frontend" },
      { icon: "🔧", label: "Backend" },
      { icon: "🚀", label: "Full Stack" },
      { icon: "☁️", label: "Specialized (Cloud / UI/UX)" },
    ],
  },
  {
    type: "form",
    step: 6,
    title: "Create your account",
    subtitle: "Basic Details",
    hint: "Secure your access and save your progress",
    fields: [
      { key: "name", label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
      { key: "email", label: "Email Address", type: "email", placeholder: "Enter your email", required: true },
      { key: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
    ],
  },
];

// ─── Job Seeker Flow ───
const JOB_SEEKER_SLIDES: SlideConfig[] = [
  {
    type: "selection",
    step: 2,
    title: "How long have you been away?",
    subtitle: "Career Gap Status",
    dataKey: "careerGap",
    options: [
      { icon: "⏱️", label: "< 6 Months" },
      { icon: "📆", label: "6–12 Months" },
      { icon: "📅", label: "1+ Year" },
    ],
  },
  {
    type: "selection",
    step: 3,
    title: "What's your experience so far?",
    subtitle: "Previous Experience",
    dataKey: "prevExperience",
    options: [
      { icon: "🌱", label: "Fresher" },
      { icon: "⚡", label: "Some Experience" },
      { icon: "🚀", label: "Experienced" },
    ],
  },
  {
    type: "selection",
    step: 4,
    title: "What role are you targeting?",
    subtitle: "Target Role",
    dataKey: "targetRole",
    options: [
      { icon: "⚡", label: "Frontend Developer" },
      { icon: "🔧", label: "Backend Developer" },
      { icon: "🚀", label: "Full Stack Developer" },
      { icon: "🔹", label: "Other" },
    ],
  },
  {
    type: "selection",
    step: 5,
    title: "How confident are you feeling?",
    subtitle: "Confidence Level",
    dataKey: "confidence",
    options: [
      { icon: "🫣", label: "Need full guidance" },
      { icon: "🤔", label: "Somewhat confident" },
      { icon: "💪", label: "Ready for interviews" },
    ],
  },
  {
    type: "form",
    step: 6,
    title: "Create your account",
    subtitle: "Basic Details",
    hint: "Secure your access and save your progress",
    fields: [
      { key: "name", label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
      { key: "email", label: "Email Address", type: "email", placeholder: "Enter your email", required: true },
      { key: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
    ],
  },
];

// ─── Recruiter / HR Flow ───
const RECRUITER_SLIDES: SlideConfig[] = [
  {
    type: "selection",
    step: 2,
    title: "What roles are you hiring for?",
    subtitle: "Hiring Focus",
    dataKey: "hiringFocus",
    options: [
      { icon: "⚡", label: "Frontend Developers" },
      { icon: "🔧", label: "Backend Developers" },
      { icon: "🚀", label: "Full Stack Developers" },
      { icon: "🎨", label: "UI/UX Designers" },
    ],
  },
  {
    type: "selection",
    step: 3,
    title: "How urgent is your hiring?",
    subtitle: "Hiring Urgency",
    dataKey: "urgency",
    options: [
      { icon: "🔥", label: "Immediate" },
      { icon: "🔄", label: "Ongoing Hiring" },
      { icon: "📋", label: "Future Pipeline" },
    ],
  },
  {
    type: "form",
    step: 4,
    title: "Tell us about your company",
    subtitle: "Company Details",
    fields: [
      { key: "companyName", label: "Company Name", type: "text", placeholder: "Enter company name", required: true },
      { key: "industryDomain", label: "Industry Domain", type: "text", placeholder: "e.g. SaaS, Fintech, EdTech", required: true },
    ],
  },
  {
    type: "form",
    step: 5,
    title: "Help us verify your profile",
    subtitle: "Verification",
    hint: "Optional but recommended",
    fields: [
      { key: "linkedin", label: "LinkedIn Profile", type: "url", placeholder: "https://linkedin.com/in/..." },
      { key: "companyWebsite", label: "Company Website", type: "url", placeholder: "https://..." },
    ],
  },
  {
    type: "form",
    step: 6,
    title: "Create your account",
    subtitle: "Basic Details",
    hint: "Secure your access and save your progress",
    fields: [
      { key: "name", label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
      { key: "email", label: "Work Email", type: "email", placeholder: "Enter your work email", required: true },
      { key: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
    ],
  },
];

// ─── Organization Flow ───
const ORGANIZATION_SLIDES: SlideConfig[] = [
  {
    type: "selection",
    step: 2,
    title: "What type of organization?",
    subtitle: "Organization Type",
    dataKey: "orgType",
    options: [
      { icon: "🏫", label: "College / Institution" },
      { icon: "🏢", label: "Corporate / Company" },
    ],
  },
  {
    type: "selection",
    step: 3,
    title: "How big is your team?",
    subtitle: "Team Size",
    dataKey: "teamSize",
    options: [
      { icon: "👥", label: "< 50" },
      { icon: "🏢", label: "50–200" },
      { icon: "🌐", label: "200+" },
    ],
  },
  {
    type: "selection",
    step: 4,
    title: "What's your primary need?",
    subtitle: "Primary Need",
    dataKey: "primaryNeed",
    options: [
      { icon: "🎓", label: "Student Training" },
      { icon: "📈", label: "Employee Upskilling" },
      { icon: "🤝", label: "Placement Support" },
    ],
  },
  {
    type: "selection",
    step: 5,
    title: "What's your role in the organization?",
    subtitle: "Point of Contact",
    dataKey: "contactRole",
    options: [
      { icon: "👨‍🏫", label: "HOD" },
      { icon: "👩‍💼", label: "HR Manager" },
      { icon: "📚", label: "L&D Lead" },
      { icon: "💻", label: "CTO" },
    ],
  },
  {
    type: "form",
    step: 6,
    title: "Create your account",
    subtitle: "Basic Details",
    hint: "Secure your access and save your progress",
    fields: [
      { key: "name", label: "Name", type: "text", placeholder: "Enter your name", required: true },
      { key: "email", label: "Work Email", type: "email", placeholder: "Enter your work email", required: true },
      { key: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
    ],
  },
];

// ─── Guardian Flow ───
const GUARDIAN_SLIDES: SlideConfig[] = [
  {
    type: "selection",
    step: 2,
    title: "What's your relationship to the learner?",
    subtitle: "Relationship",
    dataKey: "relationship",
    options: [
      { icon: "👨‍👧", label: "Parent" },
      { icon: "🛡️", label: "Guardian" },
      { icon: "🤝", label: "Sponsor" },
    ],
  },
  {
    type: "form",
    step: 3,
    title: "Tell us about the student",
    subtitle: "Student Details",
    fields: [
      { key: "studentName", label: "Student Name", type: "text", placeholder: "Enter student's full name", required: true },
      { key: "registrationId", label: "Registration ID (Optional)", type: "text", placeholder: "Enter registration ID if available" },
    ],
  },
  {
    type: "selection",
    step: 4,
    title: "What do you want to do?",
    subtitle: "Your Purpose",
    dataKey: "purpose",
    options: [
      { icon: "📊", label: "Track Progress" },
      { icon: "💳", label: "Manage Payments" },
      { icon: "👁️", label: "General Monitoring" },
    ],
  },
  {
    type: "form",
    step: 5,
    title: "Create your account",
    subtitle: "Basic Details",
    hint: "Secure your access and save your progress",
    fields: [
      { key: "name", label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
      { key: "email", label: "Email Address", type: "email", placeholder: "Enter your email", required: true },
      { key: "phone", label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
    ],
  },
];

// Map role labels to their flows
export const ROLE_FLOWS: Record<string, SlideConfig[]> = {
  "Newbie (Learner)": LEARNER_SLIDES,
  "Working Professional": PROFESSIONAL_SLIDES,
  "Job Seeker": JOB_SEEKER_SLIDES,
  "Recruiter / HR": RECRUITER_SLIDES,
  "Organization": ORGANIZATION_SLIDES,
  "Guardian": GUARDIAN_SLIDES,
};

// Map role labels to their outcomes
export const ROLE_OUTCOMES: Record<string, RoleOutcome> = {
  "Newbie (Learner)": {
    emoji: "🎓",
    title: "Your Learning Journey Begins",
    points: [
      "Personalized learning roadmap",
      "Skill program recommendations",
      "Structured dashboard ready",
    ],
  },
  "Working Professional": {
    emoji: "💼",
    title: "Fast-Track Your Growth",
    points: [
      "Fast-track learning path",
      "Advanced modules unlocked",
      "Interview-focused preparation",
    ],
  },
  "Job Seeker": {
    emoji: "🔍",
    title: "Your Comeback Starts Now",
    points: [
      "Interview preparation track",
      "Skill validation focus",
      "Confidence-building roadmap",
    ],
  },
  "Recruiter / HR": {
    emoji: "📋",
    title: "Your Talent Pipeline is Ready",
    points: [
      "Access to talent dashboard",
      "Filtered candidate pool",
      "Recruitment pipeline tools",
    ],
  },
  "Organization": {
    emoji: "🏢",
    title: "Partnership Ready",
    points: [
      "Partnership onboarding initiated",
      "Demo & pricing workflow",
      "Admin dashboard access",
    ],
  },
  "Guardian": {
    emoji: "🛡️",
    title: "You're Connected",
    points: [
      "Access to monitoring dashboard",
      "Progress tracking tools",
      "Payment management ready",
    ],
  },
};

export function getSlidesForRole(role: string): SlideConfig[] {
  return ROLE_FLOWS[role] || LEARNER_SLIDES;
}
