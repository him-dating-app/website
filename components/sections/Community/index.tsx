import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Star } from "lucide-react";

const CommunitySection = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Him? helped me avoid a potentially dangerous situation. The community's experiences gave me the confidence to make an informed decision.",
      author: "Sarah, 28, London",
    },
    {
      rating: 5,
      text: "It feels like having a group of big sisters looking out for you in the dating world. Supportive, empowering, and safe.",
      author: "Maya, 24, Manchester",
    },
  ];

  const stats = [
    { value: "94%", label: "of women say they want to feel safer dating" },
    { value: "2k+", label: "waitlist sign up" },
  ];

  return (
    <section id="community" className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-him-purple-dark text-3xl md:text-4xl mb-6">
            Join a Growing Community
          </h2>
          <p className="font-inter font-medium text-him-purple-dark text-lg opacity-80 max-w-2xl mx-auto">
            Be part of the first wave of women shaping Him?, building trust and making smarter dating choices together.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-12 lg:mb-0">
            <Image
              src="https://images.unsplash.com/photo-1511145822182-677fa5800671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080&q=80"
              alt="Diverse women friends laughing together"
              width={600}
              height={400}
              className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div className="space-y-8">
            {/* Testimonials */}
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="default" shadow="sm" className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="font-inter font-medium text-him-purple-dark italic mb-4 text-lg">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-montserrat font-semibold text-him-purple-dark text-sm">
                  — {testimonial.author}
                </p>
              </Card>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-him-orange-light rounded-2xl border border-him-purple-dark shadow-him-sm p-4 text-center"
                >
                  <div className="font-montserrat font-bold text-him-purple-dark text-3xl mb-2">
                    {stat.value}
                  </div>
                  <div className="font-inter font-medium text-him-purple-dark text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button variant="primary" size="lg" fullWidth>
              Join the Community
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunitySection;