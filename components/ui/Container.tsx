import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, children, size = "lg", padding = true, ...props }, ref) => {
    const sizes = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
      xl: "max-w-[1400px]",
      full: "max-w-full",
    };
    
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full",
          sizes[size],
          padding && "px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export { Container };