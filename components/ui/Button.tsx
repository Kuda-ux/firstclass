import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

type ButtonProps = ButtonBaseProps &
  (
    | ({ as: "a"; href: string } & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">)
    | ({ as?: "button" } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  );

const variants = {
  primary:
    "bg-burgundy text-white border border-burgundy hover:bg-wine focus-visible:ring-burgundy/40",
  secondary:
    "bg-gold text-charcoal border border-gold hover:bg-gold/90 focus-visible:ring-gold/40",
  outline:
    "bg-transparent text-burgundy border border-burgundy hover:bg-burgundy/5 focus-visible:ring-burgundy/40",
  ghost:
    "bg-transparent text-burgundy border border-transparent hover:bg-soft focus-visible:ring-burgundy/40",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  as,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (as === "a") {
    const { href, ...rest } = props as React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
