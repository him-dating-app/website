import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "interactive";
  shadow?: "sm" | "md" | "lg";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = "default", shadow = "md", ...props }, ref) => {
    const variants = {
      default: "bg-him-purple-medium border border-him-purple-dark",
      elevated: "bg-white border border-him-purple-dark",
      interactive: "bg-him-purple-medium border border-him-purple-dark hover:scale-[1.02] transition-all duration-300",
    };
    
    const shadows = {
      sm: "shadow-him-sm",
      md: "shadow-him-md",
      lg: "shadow-him-lg hover:shadow-him-lg",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-[25px] p-6",
          variants[variant],
          shadows[shadow],
          className
        )}
        {...props}
      >
        <div className="relative z-10">{children}</div>
      </div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-1.5", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-montserrat font-semibold text-him-purple-dark text-xl leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-him-purple-dark opacity-80 text-sm", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-4", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardDescription, CardContent };