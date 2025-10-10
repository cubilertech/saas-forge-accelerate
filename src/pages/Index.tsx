import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "@/components/ui-components/FooterSection";
import WavesHeroSection from "@/components/landingPage/WaveHeroSection";
import { strategyCallUrl, testimonials } from "@/constants";
import { VideoModel } from "@/components/ui-components/VideoModel";
import TeamCTASection from "@/components/landingPage/TeamCtaSection";
import { TestimonialSection } from "@/components/landingPage/TestimonialSection";
import CaseStudySection from "@/components/landingPage/CaseStudySection";
import GrowthSection from "@/components/landingPage/GrowthSection";
import LaunchProcessSection from "@/components/landingPage/LaunchProcessSection";
import ChatWidget from "@/components/ui-components//chatBorad";
// import ProjectsMarquee from "@/components/ProjectsMarquee";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");
  const [videoError, setVideoError] = useState<string>("");
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Optimized auto-advance testimonials with user interaction pause
  useEffect(() => {
    if (isPaused || isUserInteracting) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, isUserInteracting]);

  // Reset user interaction after delay
  useEffect(() => {
    if (isUserInteracting) {
      const timeout = setTimeout(() => {
        setIsUserInteracting(false);
      }, 8000);
      return () => clearTimeout(timeout);
    }
  }, [isUserInteracting]);

  // Handle navigation clicks with pause
  const handleTestimonialNavigation = (index: number) => {
    setCurrentTestimonial(index);
    setIsUserInteracting(true);
  };

  const handlePrevious = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsUserInteracting(true);
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsUserInteracting(true);
  };

  const isVisible = (id: string) => visibleSections.has(id);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle video modal
  // const handleVideoPlay = (videoUrl: string) => {
  //   if (!videoUrl) {
  //     setVideoError("Video URL is not available");
  //     return;
  //   }

  //   setIsVideoLoading(true);
  //   setVideoError("");
  //   setCurrentVideoUrl(videoUrl);
  //   setIsVideoModalOpen(true);
  // };

  const handleVideoModalClose = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoUrl("");
    setVideoError("");
    setIsVideoLoading(false);
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const handleVideoError = () => {
    setVideoError("Failed to load video. Please try again later.");
    setIsVideoLoading(false);
  };

  // const words = "Go from MVP to Intelligent SaaS, Faster.";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-l from-primary/3 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-t from-primary/3 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Transparent Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png"
                alt="Cubiler Technologies"
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Process
              </button>
              <Button
                onClick={() => window.open(strategyCallUrl, "_blank")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-300"
              >
                Get Started
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg glass-effect"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-4">
              <button
                onClick={() => {
                  scrollToSection("services");
                  setIsMenuOpen(false);
                }}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => {
                  scrollToSection("case-studies");
                  setIsMenuOpen(false);
                }}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Work
              </button>
              <button
                onClick={() => {
                  scrollToSection("process");
                  setIsMenuOpen(false);
                }}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Process
              </button>
              <Button
                onClick={() => {
                  window.open(strategyCallUrl, "_blank");
                  setIsMenuOpen(false);
                }}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium"
              >
                Get Started
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <WavesHeroSection />

      {/* Projects Marquee Section - Hidden */}
      {/* <ProjectsMarquee /> */}

      {/* Growth Section */}
      <GrowthSection isVisible={isVisible} />

      {/* Process Section */}

      {/* <ProcessSection processSteps={processSteps} isVisible={isVisible} /> */}
      <LaunchProcessSection isVisible={isVisible} />

      {/* Success Stories Section */}
      <CaseStudySection isVisible={isVisible} />

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Team CTA Section */}
      <TeamCTASection />

      {/* <ChatWidget /> */}

      <ChatWidget />

      {/* Footer Section */}
      <Footer />

      {/* Video Modal */}
      <VideoModel
        isVideoModalOpen={isVideoModalOpen}
        handleVideoModalClose={handleVideoModalClose}
        currentVideoUrl={currentVideoUrl}
        isVideoLoading={isVideoLoading}
        videoError={videoError}
        setVideoError={setVideoError}
        setIsVideoLoading={setIsVideoLoading}
        handleVideoLoad={handleVideoLoad}
        handleVideoError={handleVideoError}
      />
    </div>
  );
};

export default Index;
