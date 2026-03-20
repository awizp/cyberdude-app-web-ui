interface FormFieldProps {
    label: string;
    required?: boolean;
    children: React.ReactNode;
    error?: string;
}

const FormField = ({ label, required, children, error }: FormFieldProps) => (
    <div className="space-y-1.5 animate-fade-in-up">
        <label className="block text-sm font-medium text-secondary-foreground">
            {label}
            {required && <span className="text-orange-500 ml-1">*</span>}
        </label>
        {children}
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
);

export default FormField;
