import React from "react";
import { Container } from "@/components/ui/Container";
import { Shield, Lock, Award } from "lucide-react";

const TrustPartnersSection = () => {
  const badges = [
    {
      icon: Shield,
      label: "Safety-Led Design",
    },
    {
      icon: Lock,
      label: "Data Protection First",
    },
    {
      icon: Award,
      label: "Community Verified",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-him-purple-medium">
      <Container>
        <div className="text-center mb-12">
          <h3 className="font-montserrat font-semibold text-him-purple-dark text-lg mb-6">
            Built with Safety at the Core
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="bg-him-peach rounded-xl border border-him-purple-dark/30 p-4 flex items-center gap-2 hover:scale-105 hover:bg-him-orange-light transition-all duration-300"
              >
                <badge.icon className="w-5 h-5 text-him-purple-dark animate-pulse-slow" />
                <span className="font-inter font-medium text-him-purple-dark text-sm">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustPartnersSection;