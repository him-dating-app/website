import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Shield } from "lucide-react";

const WhatIsHimSection = () => {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-him-purple-dark text-3xl md:text-4xl mb-6">
            What is Him?
          </h2>
          <p className="font-inter font-medium text-him-purple-dark text-lg md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            Him? is a UK-based community created for women. We believe in the power of shared experiences and community-driven safety in modern dating. Every feature is created with women&apos;s protection, trust, and empowerment at its core.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <Card variant="default" shadow="lg" className="p-8">
              <div className="bg-him-orange-light rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-him-purple-dark" />
              </div>
              <h3 className="font-montserrat font-semibold text-him-purple-dark text-xl mb-4">
                Safety First, Always
              </h3>
              <p className="font-inter font-medium text-him-purple-dark opacity-80 leading-relaxed">
                Him? has been designed from day one with women&apos;s safety as the top priority. From reporting to alerts, every tool is designed to protect and empower our community.
              </p>
            </Card>
          </div>
          <div>
            <Image
              src="https://hips.hearstapps.com/hmg-prod/images/women-laughing-together-on-urban-rooftop-royalty-free-image-1687775003.jpg?resize=1200:*"
              alt="Two women having a conversation together"
              width={600}
              height={400}
              className="w-full h-[350px] md:h-[400px] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatIsHimSection;