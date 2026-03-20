import { forwardRef } from "react";

interface NavLinkProps {
    href: string;
    className?: string;
    activeClassName?: string;
    children?: React.ReactNode;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ className, href, ...props }, ref) => {
        return (
            <a
                ref={ref}
                href={href}
                className={className || ""}
                {...props}
            />
        );
    },
);

NavLink.displayName = "NavLink";

export { NavLink };
