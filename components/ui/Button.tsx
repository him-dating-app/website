import * as React from "react";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { 
      className, 
      children, 
      variant = "primary", 
      size = "md", 
      icon: Icon,
      iconPosition = "left",
      loading = false,
      fullWidth = false,
      disabled,
      ...props 
    }, 
    ref
  ) => {
    const baseStyles = "inline-flex items-center justify-center font-montserrat font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-him-purple-dark focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-him-neutral-800 text-him-peach border border-him-purple-dark hover:scale-[0.98] active:scale-95 shadow-him-sm hover:shadow-him-md",
      secondary: "bg-him-orange-light text-him-purple-dark border-2 border-him-purple-dark hover:scale-[0.98] active:scale-95 hover:bg-him-orange-light/80 shadow-him-sm",
      outline: "bg-transparent text-him-purple-dark border-2 border-him-purple-dark hover:bg-him-purple-dark hover:text-white",
    };
    
    const sizes = {
      sm: "h-10 px-4 text-sm rounded-full",
      md: "h-12 px-6 text-base rounded-full",
      lg: "h-14 px-8 text-lg rounded-full",
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent" />
        ) : (
          <>
            {Icon && iconPosition === "left" && (
              <Icon className="w-5 h-5 mr-2" />
            )}
            {children}
            {Icon && iconPosition === "right" && (
              <Icon className="w-5 h-5 ml-2" />
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };