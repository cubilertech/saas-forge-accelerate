import React from "react";
import { Card, CardContent } from "../ui/card";
import { Rocket, TrendingUp, Zap } from "lucide-react";

const GrowthSection = ({ isVisible }) => {
  return (
    <section
      id="services"
      data-animate
      className={`px-6 py-20 transition-all duration-1000 ${
        isVisible("services")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Technical Partner at{" "}
            <span className="text-primary">Every Stage of Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We meet you exactly where you are on your journey, with clear,
            packaged solutions designed to solve your most pressing challenge
            right now.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
            <CardContent className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-center mb-6">
                  <Rocket className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  You have a great idea.
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  <span className="text-primary">
                    We'll build your first version.
                  </span>{" "}
                  Our MVP Sprint turns your concept into a high-quality product
                  for your first users. We build the solid foundation you need
                  to prove your idea, win customers, and raise funding
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-primary/30">
                <p className="text-primary text-sm font-medium">Ideal for:</p>
                <p className="text-muted-foreground text-sm italic">
                  {" "}
                  Founders starting from scratch.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
            <CardContent className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-center mb-6">
                  <TrendingUp className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  You Have Traction.
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  <span className="text-primary">
                    {" "}
                    We'll help you refine, enhance, and innovate.{" "}
                  </span>{" "}
                  Our team acts as your long-term technical partner, handling
                  everything from critical bug fixes to building game-changing
                  AI features that keep you ahead of the competition.
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-primary/30">
                <p className="text-primary text-sm font-medium">Ideal for:</p>
                <p className="text-muted-foreground text-sm italic">
                  Startups with an existing product looking to innovate.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
            <CardContent className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-center mb-6">
                  <Zap className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  You're Ready to Scale.
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  <span className="text-primary">
                    We provide a dedicated product team.{" "}
                  </span>{" "}
                  When you need to build more without the cost of hiring, we
                  provide a full "pod" of senior developers and AI specialists.
                  They act as a seamless extension of your team to accelerate
                  your roadmap.
                </p>
              </div>
              <div className="mt-auto pt-6 border-t border-primary/30">
                <p className="text-primary text-sm font-medium">Ideal for:</p>
                <p className="text-muted-foreground text-sm italic">
                  Growing businesses that need to expand their development
                  capacity.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
