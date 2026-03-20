"use client";

import { useState, type FormEvent } from "react";
import type { Persona } from "@/components/ui/PersonaSelector";
import FormField from "./FormField";

interface ContactFormProps {
    persona: Persona;
}

const inputClasses =
    "w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all";

const selectClasses =
    "w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all appearance-none cursor-pointer";

const ContactForm = ({ persona }: ContactFormProps) => {
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showOtherSource, setShowOtherSource] = useState(false);

    const validate = (formData: FormData): boolean => {
        const newErrors: Record<string, string> = {};
        const name = formData.get("fullName") as string;
        const email = formData.get("email") as string;

        if (!name?.trim()) newErrors.fullName = "Name is required";
        if (!email?.trim()) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email address";

        if (persona === "student") {
            if (!formData.get("skillLevel")) newErrors.skillLevel = "Required";
            if (!formData.get("learningGoal")) newErrors.learningGoal = "Required";
            if (!formData.get("dreamRole")) newErrors.dreamRole = "Required";
        }
        if (persona === "recruiter") {
            if (!formData.get("companyName")) newErrors.companyName = "Required";
            if (!formData.get("talentRequired")) newErrors.talentRequired = "Required";
            if (!formData.get("hiringUrgency")) newErrors.hiringUrgency = "Required";
        }
        if (persona === "organization") {
            if (!formData.get("institutionName")) newErrors.institutionName = "Required";
            if (!formData.get("orgSize")) newErrors.orgSize = "Required";
            if (!formData.get("contactRole")) newErrors.contactRole = "Required";
        }
        if (persona === "mentor") {
            const linkedin = formData.get("linkedin") as string;
            if (!formData.get("expertise")) newErrors.expertise = "Required";
            if (!linkedin?.trim()) newErrors.linkedin = "LinkedIn is mandatory";
            else if (!/^https?:\/\/(www\.)?linkedin\.com\//.test(linkedin)) newErrors.linkedin = "Must be a valid LinkedIn URL";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (validate(formData)) {
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center mb-6">
                    <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Submission Received</h3>
                <p className="text-muted-foreground max-w-md">
                    Thank you for reaching out. Our team will get back to you based on your inquiry type.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-orange-500 hover:underline cursor-pointer"
                >
                    Submit another inquiry
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Common fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField label="Full Name" required error={errors.fullName}>
                    <input name="fullName" type="text" placeholder="John Doe" className={inputClasses} />
                </FormField>
                <FormField label="Email Address" required error={errors.email}>
                    <input name="email" type="email" placeholder="john@example.com" className={inputClasses} />
                </FormField>
            </div>

            {/* Student fields */}
            {persona === "student" && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField label="Current Skill Level" required error={errors.skillLevel}>
                            <select name="skillLevel" className={selectClasses} defaultValue="">
                                <option value="" disabled>Select level</option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                        </FormField>
                        <FormField label="Learning Goal" required error={errors.learningGoal}>
                            <select name="learningGoal" className={selectClasses} defaultValue="">
                                <option value="" disabled>Select goal</option>
                                <option value="job">Job Placement</option>
                                <option value="upskill">Upskilling</option>
                                <option value="hobby">Hobby Learning</option>
                            </select>
                        </FormField>
                    </div>
                    <FormField label="Dream Role" required error={errors.dreamRole}>
                        <select name="dreamRole" className={selectClasses} defaultValue="">
                            <option value="" disabled>Select your dream role</option>
                            <option value="frontend">Frontend Developer</option>
                            <option value="backend">Backend Developer</option>
                            <option value="fullstack">Full Stack Developer</option>
                            <option value="uiux">UI/UX Designer</option>
                            <option value="devops">DevOps Engineer</option>
                            <option value="data">Data Analyst</option>
                            <option value="mobile">Mobile Developer</option>
                        </select>
                    </FormField>
                </>
            )}

            {/* Recruiter fields */}
            {persona === "recruiter" && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField label="Company Name" required error={errors.companyName}>
                            <input name="companyName" type="text" placeholder="Acme Corp" className={inputClasses} />
                        </FormField>
                        <FormField label="Company Domain / Industry" error={errors.companyDomain}>
                            <input name="companyDomain" type="text" placeholder="e.g. Fintech, SaaS" className={inputClasses} />
                        </FormField>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField label="Talent Required" required error={errors.talentRequired}>
                            <select name="talentRequired" className={selectClasses} defaultValue="">
                                <option value="" disabled>Select talent type</option>
                                <option value="frontend">Frontend Developer</option>
                                <option value="backend">Backend Developer</option>
                                <option value="fullstack">Full Stack Developer</option>
                                <option value="uiux">UI/UX Designer</option>
                                <option value="devops">DevOps Engineer</option>
                            </select>
                        </FormField>
                        <FormField label="Hiring Urgency" required error={errors.hiringUrgency}>
                            <select name="hiringUrgency" className={selectClasses} defaultValue="">
                                <option value="" disabled>Select urgency</option>
                                <option value="immediate">Immediate</option>
                                <option value="pipeline">Future Pipeline</option>
                            </select>
                        </FormField>
                    </div>
                    <FormField label="LinkedIn or Company URL">
                        <input name="companyUrl" type="url" placeholder="https://linkedin.com/company/..." className={inputClasses} />
                    </FormField>
                </>
            )}

            {/* Organization fields */}
            {persona === "organization" && (
                <>
                    <FormField label="Institution / Organization Name" required error={errors.institutionName}>
                        <input name="institutionName" type="text" placeholder="University of..." className={inputClasses} />
                    </FormField>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField label="Organization Size" required error={errors.orgSize}>
                            <select name="orgSize" className={selectClasses} defaultValue="">
                                <option value="" disabled>Select size</option>
                                <option value="1-50">1–50</option>
                                <option value="51-200">51–200</option>
                                <option value="201-1000">201–1,000</option>
                                <option value="1000+">1,000+</option>
                            </select>
                        </FormField>
                        <FormField label="Point of Contact Role" required error={errors.contactRole}>
                            <select name="contactRole" className={selectClasses} defaultValue="">
                                <option value="" disabled>Select role</option>
                                <option value="hod">HOD</option>
                                <option value="hr">HR</option>
                                <option value="cto">CTO</option>
                                <option value="lnd">L&D Manager</option>
                            </select>
                        </FormField>
                    </div>
                    <FormField label="Problem Area">
                        <textarea name="problemArea" rows={3} placeholder="e.g. Students lack practical skills" className={inputClasses + " resize-none"} />
                    </FormField>
                </>
            )}

            {/* Mentor fields */}
            {persona === "mentor" && (
                <>
                    <FormField label="Expertise Area" required error={errors.expertise}>
                        <select name="expertise" className={selectClasses} defaultValue="">
                            <option value="" disabled>Select expertise</option>
                            <option value="mern">MERN Stack</option>
                            <option value="cloud">Cloud / DevOps</option>
                            <option value="uiux">UI/UX Design</option>
                            <option value="python">Python / Data</option>
                            <option value="mobile">Mobile Development</option>
                        </select>
                    </FormField>
                    <FormField label="LinkedIn Profile" required error={errors.linkedin}>
                        <input name="linkedin" type="url" placeholder="https://linkedin.com/in/..." className={inputClasses} />
                    </FormField>
                    <FormField label="Portfolio / GitHub">
                        <input name="portfolio" type="url" placeholder="https://github.com/..." className={inputClasses} />
                    </FormField>
                </>
            )}

            {/* Guardian fields */}
            {persona === "guardian" && (
                <>
                    <FormField label="Student Registration ID">
                        <input name="studentRegId" type="text" placeholder="e.g. CD-2024-001" className={inputClasses} />
                    </FormField>
                    <FormField label="Relationship to Student">
                        <select name="relationship" className={selectClasses} defaultValue="">
                            <option value="" disabled>Select relationship</option>
                            <option value="parent">Parent</option>
                            <option value="guardian">Legal Guardian</option>
                            <option value="sponsor">Sponsor</option>
                        </select>
                    </FormField>
                </>
            )}

            {/* How did you hear about us */}
            <FormField label="How did you hear about us?">
                <select
                    name="referralSource"
                    className={selectClasses}
                    defaultValue=""
                    onChange={(e) => setShowOtherSource(e.target.value === 'other')}
                >
                    <option value="" disabled>Select a source</option>
                    <option value="youtube">YouTube</option>
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="twitter">X (Twitter)</option>
                    <option value="facebook">Facebook</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="telegram">Telegram</option>
                    <option value="google">Google Search</option>
                    <option value="friend">Friend / Referral</option>
                    <option value="other">Other</option>
                </select>
            </FormField>
            {showOtherSource && (
                <FormField label="Please specify">
                    <input name="referralSourceOther" type="text" placeholder="Tell us where..." className={inputClasses} />
                </FormField>
            )}

            <button
                type="submit"
                className="w-full rounded-lg bg-orange-500 py-3 text-sm font-display font-semibold text-primary-foreground transition-all hover:brightness-110 glow-orange cursor-pointer"
            >
                Submit Inquiry
            </button>
        </form>
    );
};

export default ContactForm;
