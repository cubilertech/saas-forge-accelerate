import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui-components/Button";
import { portfolioItems } from "@/constants";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

const CaseStudySection = ({ isVisible }) => {
  return (
    <section
      id="case-studies"
      data-animate
      className={`px-6 py-16 transition-all duration-1000 ${
        isVisible("case-studies")
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real projects, real results. See how we've helped founders transform
            their ideas into successful products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="bg-gradient-card card-blur hover-glow group cursor-pointer border border-border/20 overflow-hidden h-full"
            >
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} project preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                      {item.industry}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {item.name}
                    </h3>
                  </div>
                </div>
              </div>

              <CardContent className="p-4 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {item.techStack.slice(0, 3).map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-muted text-muted-foreground border-border px-2 py-1 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {item.techStack.length > 3 && (
                      <Badge className="bg-muted text-muted-foreground border-border px-2 py-1 text-xs">
                        +{item.techStack.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Case Study Button */}
                <div className="pt-2">
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 text-xs rounded-lg font-medium w-full"
                    onClick={() => {
                      if (item.name === "AfterHire") {
                        window.location.href = "/case-study/afterhire";
                      } else if (item.name === "PriceUp") {
                        window.location.href = "/case-study/priceup";
                      } else if (item.name === "Pipa") {
                        window.location.href = "/case-study/pipa";
                      }
                    }}
                  >
                    View Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="glass-effect border-primary/30 text-primary hover:bg-primary/10 px-6 py-3 rounded-xl font-medium group"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

{
  /* <section
        id="case-studies"
        data-animate
        className={`px-6 py-16 transition-all duration-1000 ${
          isVisible("case-studies")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-lg md:max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real projects, real results. See how we've helped founders
              transform their ideas into successful products.
            </p>
          </div>
          <ProjectShowCase
            testimonials={testimonialsItems}
            onItemClick={handleTestimonialClick}
          />
        </div>
      </section> */
}
