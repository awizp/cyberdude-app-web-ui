import { useState, type FormEvent } from "react";
import FormField from "./FormField";

const inputClasses =
  "w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all";

const selectClasses =
  "w-full rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer";

const GeneralForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showOtherSource, setShowOtherSource] = useState(false);

  const validate = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};
    const name = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!name?.trim()) newErrors.fullName = "Name is required";
    if (!email?.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Invalid email address";
    if (!subject?.trim()) newErrors.subject = "Subject is required";
    if (!message?.trim()) newErrors.message = "Message is required";

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
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
          <span className="text-3xl">✓</span>
        </div>
        <h3 className="text-2xl font-display font-bold text-foreground mb-2">Submission Received</h3>
        <p className="text-muted-foreground max-w-md">
          Thank you for reaching out. Our team will get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-primary hover:underline cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name" required error={errors.fullName}>
          <input name="fullName" type="text" placeholder="John Doe" className={inputClasses} />
        </FormField>
        <FormField label="Email Address" required error={errors.email}>
          <input name="email" type="email" placeholder="john@example.com" className={inputClasses} />
        </FormField>
      </div>

      <FormField label="Phone Number">
        <input name="phone" type="tel" placeholder="+91 98765 43210" className={inputClasses} />
      </FormField>

      <FormField label="Subject" required error={errors.subject}>
        <select name="subject" className={selectClasses} defaultValue="">
          <option value="" disabled>Select a subject</option>
          <option value="general">General Question</option>
          <option value="support">Support / Help</option>
          <option value="feedback">Feedback</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="media">Media / Press</option>
          <option value="billing">Billing / Payments</option>
        </select>
      </FormField>

      <FormField label="Message" required error={errors.message}>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us how we can help..."
          className={inputClasses + " resize-none"}
        />
      </FormField>

      <FormField label="How did you hear about us?">
        <select
          name="referralSource"
          className={selectClasses}
          defaultValue=""
          onChange={(e) => setShowOtherSource(e.target.value === "other")}
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

export default GeneralForm;
