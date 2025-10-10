import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative min-h-screen px-6 flex items-center justify-center overflow-hidden bg-gradient-hero bg-mesh">
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary/20 mb-8">
            <span className="text-sm font-medium text-primary">
              ✨ Your AI-Powered SaaS Partner
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Go from MVP to{" "}
            <span className="text-primary">Intelligent SaaS</span>,
            <br className="hidden md:block" />
            <span className="text-foreground">Faster.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            You have a powerful vision for a SaaS product. You need more than
            just freelancers—you need a reliable technical partner to build a
            robust, AI-native platform that wins customers and attracts
            investors.
            <span className="text-primary font-medium">
              We are that partner.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() =>
                window.open("https://cal.com/mbilal/cubiler-tech", "_blank")
              }
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
            >
              Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              onClick={() => scrollToSection("case-studies")}
              className="glass-effect border-border/20 text-foreground px-6 py-4 text-lg font-medium rounded-xl hover:bg-accent/5 transition-all duration-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
