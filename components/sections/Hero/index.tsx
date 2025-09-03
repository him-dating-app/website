"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden py-12 md:py-20">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div className="mb-12 lg:mb-0">
            <h1 className="font-montserrat font-bold text-him-purple-dark text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              A safe space for women to share, support, and look out for one another while dating
            </h1>
            <p className="font-inter font-medium text-him-purple-dark text-lg md:text-xl opacity-80 mb-8 leading-relaxed">
              Join a trusted community built for women. Share real experiences, get alerts about potential dates, and connect with others who prioritise safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={Download}
                onClick={() => scrollToSection("download")}
                className="group"
              >
                <span className="whitespace-nowrap">Download the App</span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection("features")}
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Image with overlays */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1749448071791-aec673b0e27a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGhvbGRpbmclMjBzbWFydHBob25lJTIwbGlmZXN0eWxlJTIwbmF0dXJhbHxlbnwxfHx8fDE3NTY5MjYyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Woman using smartphone for dating safety"
                width={1080}
                height={500}
                className="w-full h-[400px] md:h-[500px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-him-purple-dark/20 to-transparent" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-him-orange-light rounded-2xl border border-him-purple-dark shadow-him-md p-4 animate-float">
              <div className="text-center">
                <div className="font-montserrat font-bold text-him-purple-dark text-2xl">Join Now!</div>
                {/* <div className="font-inter font-medium text-him-purple-dark text-sm">Women Protected</div> */}
              </div>
            </div>

            {/* Phone mockup overlay */}
            <div className="absolute -top-4 -right-4 bg-him-purple-medium rounded-2xl border border-him-purple-dark shadow-him-sm p-3 rotate-12 opacity-90">
              <div className="bg-him-peach rounded-xl p-2 w-16 h-24">
                <div className="bg-him-purple-dark rounded-full w-2 h-2 mx-auto mb-1 opacity-30" />
                <div className="space-y-1">
                  <div className="bg-him-purple-dark h-1 w-full rounded opacity-20" />
                  <div className="bg-him-orange-light h-1 w-3/4 rounded" />
                  <div className="bg-him-purple-dark h-1 w-1/2 rounded opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;