import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import AppMockup from "./AppMockup";
import { Apple, Smartphone, Bell } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-16 md:py-24">
      <Container size="md">
        <div className="text-center">
          <h2 className="font-montserrat font-bold text-him-purple-dark text-3xl md:text-4xl mb-6">
            Ready to Join Him?
          </h2>
          <p className="font-inter font-medium text-him-purple-dark text-lg opacity-80 mb-12 max-w-2xl mx-auto">
           Be among the first to join a women-led community for dating smarter, safer, and stronger together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            {/* App Store Button */}
            <button className="bg-him-neutral-800 flex h-16 items-center justify-center px-8 py-0 relative rounded-2xl transition-all duration-200 hover:scale-[0.98] active:scale-95 min-w-[200px] group shadow-him-sm border border-him-purple-dark">
              <div className="flex items-center gap-3">
                <Apple className="w-8 h-8 text-him-peach group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-inter font-medium text-him-peach text-xs opacity-80">
                    Download on the
                  </div>
                  <div className="font-montserrat font-bold text-him-peach text-lg leading-tight">
                    App Store
                  </div>
                </div>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="bg-him-neutral-800 flex h-16 items-center justify-center px-8 py-0 relative rounded-2xl transition-all duration-200 hover:scale-[0.98] active:scale-95 min-w-[200px] group shadow-him-sm border border-him-purple-dark">
              <div className="flex items-center gap-3">
                <Smartphone className="w-8 h-8 text-him-peach group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <div className="font-inter font-medium text-him-peach text-xs opacity-80">
                    Get it on
                  </div>
                  <div className="font-montserrat font-bold text-him-peach text-lg leading-tight">
                    Google Play
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* App Screenshot Mockup */}
          <div className="relative max-w-sm mx-auto">
            <AppMockup />
            
            {/* Floating notification */}
            <div className="absolute -top-2 -right-2 bg-him-orange-light rounded-full border-2 border-him-purple-dark shadow-him-sm p-2 animate-bounce">
              <Bell className="w-4 h-4 text-him-purple-dark" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownloadSection;