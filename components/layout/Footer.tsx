import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const Footer = () => {
  return (
    <footer className="bg-him-neutral-800 text-him-peach py-12">
      <Container>
        {/* Brand and Tagline */}
        <div className="text-center mb-8">
          <div className="font-montserrat font-bold text-him-peach text-2xl mb-2">
            HIM?
          </div>
          <p className="font-inter font-medium text-him-peach opacity-80 text-sm">
            A safe space for women to share, support, and look out for one another in dating.
          </p>
        </div>

        {/* Simplified Legal Links */}
        <div className="border-t border-him-purple-dark pt-8">
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-sm mb-8">
            <Link 
              href="/terms" 
              className="font-inter text-him-peach hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
            <span className="text-him-purple-dark">|</span>
            <Link 
              href="/privacy" 
              className="font-inter text-him-peach hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-him-purple-dark">|</span>
            <Link 
              href="/guidelines" 
              className="font-inter text-him-peach hover:text-white transition-colors"
            >
              Community Guidelines
            </Link>
            <span className="text-him-purple-dark">|</span>
            <Link 
              href="/refund" 
              className="font-inter text-him-peach hover:text-white transition-colors"
            >
              Refund Policy
            </Link>
            <span className="text-him-purple-dark">|</span>
            <Link 
              href="/defamation" 
              className="font-inter text-him-peach hover:text-white transition-colors"
            >
              Report Defamation
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-inter font-medium text-him-peach opacity-60 text-xs">
              © 2025 Him Dating App Ltd. All rights reserved. Made with ❤️ for women.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;