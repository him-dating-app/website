import React from "react";
import { Card } from "@/components/ui/Card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  iconColor?: string;
  title: string;
  description: string;
  badge?: React.ReactNode;
  variant?: "large" | "small";
  comingSoon?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  iconColor = "text-him-purple-dark",
  title,
  description,
  badge,
  variant = "small",
  comingSoon = false,
}) => {
  const isLarge = variant === "large";

  return (
    <Card
      variant="interactive"
      shadow={isLarge ? "lg" : "md"}
      className={cn(
        isLarge ? "p-8" : "p-6",
        "group"
      )}
    >
      <div className={cn(
        "bg-him-orange-light rounded-full flex items-center justify-center mb-4",
        isLarge ? "w-16 h-16" : "w-12 h-12"
      )}>
        <Icon className={cn(
          iconColor,
          isLarge ? "w-8 h-8" : "w-6 h-6"
        )} />
      </div>
      
      <h3 className={cn(
        "font-montserrat font-semibold text-him-purple-dark mb-3",
        isLarge ? "text-xl" : "text-lg"
      )}>
        {title}
      </h3>

      {comingSoon && (
        <span className="text-xs bg-him-orange-light text-him-purple-dark px-2 py-1 rounded-full mb-3 inline-block">
          Coming Soon
        </span>
      )}
      
      <p className={cn(
        "font-inter font-medium text-him-purple-dark leading-relaxed",
        isLarge ? "opacity-80 mb-4" : "opacity-70 text-sm"
      )}>
        {description}
      </p>
      
      {badge && isLarge && (
        <div className="bg-him-peach rounded-xl p-3 border border-him-purple-dark/20 mt-4">
          <div className="flex items-center gap-2 text-sm">
            {badge}
          </div>
        </div>
      )}
    </Card>
  );
};

export default FeatureCard;