"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Features", href: "features" },
    { label: "Community", href: "community" },
    { label: "Download", href: "download" },
  ];

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-him-peach/95 backdrop-blur-sm border-b border-him-purple-dark/10 shadow-sm"
          : "bg-him-peach/95 backdrop-blur-sm border-b border-him-purple-dark/10"
      )}
    >
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-montserrat font-bold text-him-purple-dark text-2xl tracking-[-0.5px]">
            HIM?
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-inter font-medium text-him-purple-dark hover:text-him-purple-active transition-colors"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-him-purple-dark hover:text-him-purple-active transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-him-peach border-b border-him-purple-dark/10 shadow-lg">
          <Container>
            <div className="py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left font-inter font-medium text-him-purple-dark hover:text-him-purple-active transition-colors py-2"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};

export default Navigation;