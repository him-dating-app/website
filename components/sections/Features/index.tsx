import React from "react";
import { Container } from "@/components/ui/Container";
import FeatureCard from "./FeatureCard";
import { 
  CheckCircle, 
  Flag, 
  Users, 
  Bell, 
  MessageSquare, 
  Shield,
  Star
} from "lucide-react";

const FeaturesSection = () => {
  const primaryFeatures = [
    {
      icon: CheckCircle,
      iconColor: "text-green-600",
      title: "Verified Green Flags",
      description: "See what other women have said about the good guys, and share your own experiences.",
      badge: (
        <>
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="font-inter font-medium text-him-purple-dark">
            &quot;Respectful &amp; genuine&quot; — Sarah_M
          </span>
        </>
      ),
    },
    {
      icon: Flag,
      iconColor: "text-red-600",
      title: "Flag & Report System",
      description: "Call out unwanted or concerning behaviour, anonymously if you choose.",
      badge: (
        <>
          <Shield className="w-4 h-4 text-him-purple-dark" />
          <span className="font-inter font-medium text-him-purple-dark">
            Anonymous reporting available
          </span>
        </>
      ),
    },
  ];

  const secondaryFeatures = [
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other women, share advice, and support each other in a moderated space.",
    },
    {
      icon: Bell,
      iconColor: "text-orange-600",
      title: "Smart Alerts",
      description: "Be notified when new posts match your criteria, helping you make more informed decisions",
    },
    {
      icon: MessageSquare,
      iconColor: "text-blue-600",
      title: "Private Messaging",
      description: "Safely connect one-to-one with trusted women in the community.",
    },
    {
      icon: Shield,
      title: "Safety Check-ins",
      description: "Let trusted friends monitor your dates with automatic check-ins and emergency alerts.",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-him-purple-dark text-3xl md:text-4xl mb-6">
            Features That Protect &amp; Connect
          </h2>
          <p className="font-inter font-medium text-him-purple-dark text-lg opacity-80 max-w-2xl mx-auto">
            Comprehensive tools to help women stay safe, while building genuine connections.
          </p>
        </div>

        {/* Primary Features - Top Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {primaryFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              iconColor={feature.iconColor}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
              variant="large"
            />
          ))}
        </div>

        {/* Secondary Features - Bottom Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              iconColor={feature.iconColor}
              title={feature.title}
              description={feature.description}
              comingSoon={feature.comingSoon}
              variant="small"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;