import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Rocket,
  Building2,
  Plus,
  CheckCircle,
  TrendingUp,
  Users,
  Target,
  Search,
  MapPin,
  Zap,
  ArrowRight,
  Quote,
  Menu,
  X,
  Play,
  ExternalLink,
  Bot,
  AlertCircle,
  Sparkles,
  Mic,
  Scan,
  Database,
  Brain,
  Mail,
  Calendar,
} from "lucide-react";
import { useEffect, useState } from "react";
import ProjectsMarquee from "@/components/ProjectsMarquee";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");
  const [videoError, setVideoError] = useState<string>("");
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Handle scroll for header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsUserInteracting(true);
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsUserInteracting(true);
  };

  const isVisible = (id: string) => visibleSections.has(id);

  const strategyCallUrl = "https://cal.com/mbilal/cubiler-tech";

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const testimonials = [
    {
      id: 1,
      quote:
        "Before, our business ran on a chaotic mix of spreadsheets and paper. It was slow, and costly errors were a constant problem. The custom platform Cubiler Technologies built for us completely transformed our operations. Our quoting is now fast and accurate, and I have a clear view of my entire business. They are a true partner I can trust.",
      name: "Ahmad Zaheer",
      company: "Price UP",
      image: "/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      hasVideo: true,
    },
  ];

  // Handle video modal
  const handleVideoPlay = (videoUrl: string) => {
    if (!videoUrl) {
      setVideoError("Video URL is not available");
      return;
    }

    setIsVideoLoading(true);
    setVideoError("");
    setCurrentVideoUrl(videoUrl);
    setIsVideoModalOpen(true);
  };

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

  const portfolioItems = [
    {
      id: 1,
      name: "AfterHire",
      description:
        "A comprehensive HR onboarding platform that automates employee workflows, document management, and integration processes.",
      industry: "Human Resources",
      techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "/lovable-uploads/dashboard-afterHire.png",
      results: ["50% faster onboarding", "200+ companies"],
      liveUrl: "https://afterhire.com",
    },
    {
      id: 2,
      name: "PriceUp",
      description:
        "An intelligent estimation and invoicing platform for service industries with dynamic pricing models and automated billing.",
      industry: "Business Services",
      techStack: ["Next.js", "TypeScript", "MongoDB", "Vercel"],
      image: "/lovable-uploads/cde0d446-bc0e-4104-a6a4-fdd973f8ef18.png",
      results: ["40% more accurate quotes", "150+ businesses"],
      liveUrl: "https://priceup.com",
    },
    {
      id: 3,
      name: "Pipa",
      description:
        "A specialized CRM and task management system for agriculture industry with real-time updates and mobile accessibility.",
      industry: "Agriculture Technology",
      techStack: ["React Native", "Express.js", "MySQL", "Firebase"],
      image: "/lovable-uploads/aa7e3655-ae93-4d12-9d84-a267b0cb2e02.png",
      results: ["60% improved efficiency", "500+ farms"],
      liveUrl: "https://pipa.com",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Define the Blueprint",
      description: "Get strategic clarity on user, problem, and scope.",
      details:
        "We start by becoming experts in your business. We dive deep into your goals, your users, and your metrics for success.",
    },

    {
      number: 2,
      title: "The Build Sprint",
      description: "Build with senior-led teams using the right AI boosts.",
      details:
        "You get constant visibility with regular check-ins and direct access to a project manager. Working software every two weeks.",
    },
    {
      number: 3,
      title: "Launch & Learn",
      description: "Deliver, measure, iterate with feedback loop built in.",
      details:
        "Rigorous testing ensures your platform is reliable, bug-free, and ready for your first users. We handle the deployment.",
    },
  ];

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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
        <div
          className={`max-w-6xl mx-auto px-6 transition-all duration-300 ${
            isScrolled ? "bg-background/60 backdrop-blur-md border border-border/30 rounded-full py-2" : ""
          }`}
        >
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
                Projects
              </button>
              <button
                onClick={() => scrollToSection("case-studies")}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Articles
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button
                onClick={() => window.open(strategyCallUrl, "_blank")}
                className={`bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-300 ${
                  isScrolled ? "w-10 h-10 p-0" : "px-6 py-2"
                }`}
              >
                {isScrolled ? (
                  <ArrowRight className="h-5 w-5 rotate-45" />
                ) : (
                  <span className="flex items-center gap-2">
                    CONTACT <ArrowRight className="h-4 w-4 rotate-45" />
                  </span>
                )}
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg glass-effect">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
      <section className="relative px-6 pt-24 pb-12 md:pb-4 overflow-hidden bg-gradient-hero bg-mesh">
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full border-2 border-primary/20 animate-float-slow"></div>
          <div
            className="absolute top-40 right-[15%] w-24 h-24 rounded-full bg-primary/5 animate-float-slow"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-40 left-[20%] w-20 h-20 rounded-lg border border-primary/15 rotate-45 animate-float-slow"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[60%] right-[25%] w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-transparent animate-float-slow"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Gradient Orbs */}
          <div className="absolute top-32 right-[10%] w-64 h-64 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
          <div
            className="absolute bottom-20 left-[15%] w-80 h-80 bg-gradient-to-tr from-primary/15 via-transparent to-primary/5 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Enhanced Badge with Sparkle */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect border border-primary/30 mb-8 animate-float backdrop-blur-xl">
              <Zap className="w-4 h-4 text-primary animate-sparkle" />
              <span className="text-sm font-semibold text-primary tracking-wide">Your Tech Partner</span>
            </div>

            {/* Gradient Headline with Text Shadow */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block text-gradient-primary animate-gradient-shift drop-shadow-[0_0_30px_rgba(32,186,230,0.3)]">
                AI product & Automation
              </span>
              <span className="block mt-2">Agency</span>
            </h1>

            {/* Enhanced Description */}
            <p className="text-lg md:text-2xl text-muted-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              We help founders <span className="text-primary font-semibold">Build, Validate, and Scale</span>{" "}
              Production-Grade
              <br />
              AI Products and Automation, Faster
            </p>

            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => window.open(strategyCallUrl, "_blank")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Free Strategy Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("case-studies")}
                className="glass-effect border-primary/30 text-foreground px-8 py-6 text-lg font-semibold rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-xl group"
              >
                <span className="flex items-center">
                  View Our Work
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Optimized Performance */}

      {/* Services Section - AI-Powered Solutions */}
      <section
        id="services"
        data-animate
        className={`px-6 py-20 transition-all duration-1000 ${isVisible("services") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Engineered for <span className="text-primary">Impact.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We provide elite-level development for the critical pillars of modern, AI-powered business.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1: AI Web & SaaS Platforms */}
            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full h-full rounded-lg border border-primary/20 bg-background/40 backdrop-blur-sm p-4 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                      </div>
                      <Sparkles className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-primary/20 rounded w-3/4"></div>
                      <div className="h-2 bg-primary/10 rounded w-full"></div>
                      <div className="h-2 bg-primary/10 rounded w-2/3"></div>
                      <div className="mt-4 p-3 bg-primary/10 rounded border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="h-3 w-3 text-primary" />
                          <div className="h-1.5 bg-primary/30 rounded w-20"></div>
                        </div>
                        <div className="h-1.5 bg-primary/20 rounded w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">AI Web & SaaS Platforms</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We architect and build intelligent, scalable SaaS products. From strategic pilots to enterprise-ready platforms, we embed Generative AI at the core to create defensible, market-leading web applications.
                </p>
              </CardContent>
            </Card>

            {/* Service 2: AI-Native Mobile Apps */}
            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background">
                <div className="absolute inset-0 flex items-center justify-center gap-4 p-6">
                  {/* iOS Device */}
                  <div className="w-20 h-32 rounded-2xl border-2 border-primary/30 bg-background/60 backdrop-blur-sm p-1 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-2 flex flex-col">
                      <div className="w-8 h-1 bg-foreground/20 rounded-full mx-auto mb-2"></div>
                      <div className="flex-1 space-y-1">
                        <div className="h-1 bg-primary/30 rounded w-3/4"></div>
                        <div className="h-1 bg-primary/20 rounded w-full"></div>
                        <div className="mt-2 p-1.5 bg-primary/20 rounded flex items-center gap-1">
                          <Mic className="h-2 w-2 text-primary" />
                          <div className="h-0.5 bg-primary/40 rounded flex-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Android Device */}
                  <div className="w-20 h-32 rounded-2xl border-2 border-primary/30 bg-background/60 backdrop-blur-sm p-1 transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-2 flex flex-col">
                      <div className="flex gap-1 mb-2">
                        <div className="w-1 h-1 bg-foreground/20 rounded-full"></div>
                        <div className="w-1 h-1 bg-foreground/20 rounded-full"></div>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="h-1 bg-primary/30 rounded w-3/4"></div>
                        <div className="h-1 bg-primary/20 rounded w-full"></div>
                        <div className="mt-2 p-1.5 bg-primary/20 rounded flex items-center justify-center">
                          <Scan className="h-3 w-3 text-primary animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">AI-Native Mobile Apps</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We build beautiful, high-performance mobile apps for iOS & Android using Flutter. We specialize in integrating on-device AI and cloud-based intelligence to create mobile experiences that feel like magic.
                </p>
              </CardContent>
            </Card>

            {/* Service 3: AI Business Automation */}
            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                    {/* Input Node */}
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <Database className="h-4 w-4 text-primary" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-primary/60" />
                    </div>
                    
                    {/* AI Brain */}
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Brain className="h-7 w-7 text-primary animate-pulse" />
                      </div>
                      <div className="absolute -inset-2 border-2 border-primary/20 rounded-full animate-ping opacity-20"></div>
                    </div>
                    
                    {/* Output Nodes */}
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary/60" />
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                          <Mail className="h-4 w-4 text-primary" />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                          <Calendar className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">AI Business Automation</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  We build custom AI workforces to handle your most repetitive operations. By deeply integrating Voice & Chat agents with your existing software, we eliminate manual busywork and unlock massive operational efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section - New List Design */}
      <section
        id="process"
        data-animate
        className={`relative px-6 py-20 bg-grid-pattern transition-all duration-1000 ${isVisible("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-background/95"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
            `,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Launch-Ready Process <span className="text-primary">Powered by AI</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We streamline every step with AI, taking you from concept to live product fast and ready for your first
              users in 4 weeks.
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className="flex items-start gap-6 group">
                {/* Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 border-2 border-primary/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-primary">{step.number}</span>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-3 leading-relaxed">{step.description}</p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">{step.details}</p>
                </div>

                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 mt-20 w-0.5 h-12 bg-gradient-to-b from-primary/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Improved Portfolio */}
      <section
        id="case-studies"
        data-animate
        className={`px-6 py-16 transition-all duration-1000 ${isVisible("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real projects, real results. See how we've helped founders transform their ideas into successful products.
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
                      <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">{item.industry}</Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg mb-1">{item.name}</h3>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{item.description}</p>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">Tech Stack</p>
                    <div className="flex flex-wrap gap-1">
                      {item.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} className="bg-muted text-muted-foreground border-border px-2 py-1 text-xs">
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

      <section
        id="testimonials"
        data-animate
        className={`px-6 py-24 bg-gradient-to-r from-muted/20 via-background to-muted/20 transition-all duration-1000 ${isVisible("testimonials") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-primary">Visionary Founders</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from founders who transformed their ideas into successful,
            </p>
          </div>

          {/* Optimized Testimonial Display */}
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex will-change-transform"
                style={{
                  transform: `translate3d(-${currentTestimonial * 100}%, 0, 0)`,
                  transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0"
                    style={{
                      contain: "layout style paint",
                      opacity: Math.abs(index - currentTestimonial) <= 1 ? 1 : 0.3,
                      transition: "opacity 0.3s ease-out",
                    }}
                  >
                    <Card className="bg-gradient-card card-blur hover-glow border-0 shadow-2xl overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-5 gap-0 items-center min-h-[400px]">
                          {/* Left side - Image */}
                          <div className="md:col-span-2 relative h-full">
                            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center p-8 md:p-12">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-2xl shadow-2xl"
                              />
                            </div>
                          </div>

                          {/* Right side - Content */}
                          <div className="md:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-center h-full">
                            {/* Quote Icon */}
                            <div className="mb-6">
                              <Quote className="h-12 w-12 text-primary opacity-30" />
                            </div>

                            {/* Testimonial Quote */}
                            <blockquote className="text-l md:text-xl lg:text-xl font-light text-foreground mb-8 leading-relaxed">
                              "{testimonial.quote}"
                            </blockquote>

                            {/* Author Info */}
                            <div className="mb-6">
                              <h4 className="text-2xl font-bold text-foreground mb-2">{testimonial.name}</h4>
                              <p className="text-muted-foreground text-lg mb-4">{testimonial.company}</p>

                              {/* Watch Testimonial Button */}
                              {testimonial.hasVideo && testimonial.videoUrl && (
                                <Button
                                  onClick={() => handleVideoPlay(testimonial.videoUrl)}
                                  variant="outline"
                                  className="bg-transparent border-primary/30 text-primary hover:bg-primary/10 px-4 py-2 rounded-lg font-medium group"
                                >
                                  <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                                  Watch Testimonial
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Navigation */}
            <div className="flex justify-center items-center space-x-6 mt-12">
              {/* Previous Button */}
              <button
                onClick={handlePrevious}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="w-12 h-12 rounded-full glass-effect border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ArrowRight className="h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>

              {/* Progress Dots */}
              <div
                className="flex space-x-3"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleTestimonialNavigation(index)}
                    className={`transition-all duration-300 ${
                      index === currentTestimonial
                        ? "w-12 h-4 bg-primary rounded-full"
                        : "w-4 h-4 bg-muted hover:bg-primary/50 rounded-full hover:scale-110"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="w-12 h-12 rounded-full glass-effect border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact"
        data-animate
        className={`px-6 py-20 transition-all duration-1000 ${isVisible("contact") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card card-blur rounded-2xl p-10 lg:p-12 border border-border/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Turn Your Vision into a <span className="text-primary">High-Growth SaaS Business?</span>
            </h2>
            <p className="hidden md:block text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's have a conversation. We offer a free, no-obligation 30-minute strategy session where we can dive
              into your project, offer some initial technical insights, and see if we're the right partner to help you
              succeed.
            </p>
            <Button
              onClick={() => window.open(strategyCallUrl, "_blank")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
            >
              Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="mt-2 md:mt-4 text-sm text-muted-foreground">
              No high-pressure sales tactics. Just a genuine conversation about building great software.
            </p>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 border-t border-border/20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <img
              src="/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png"
              alt="Cubiler Technologies"
              className="h-8 w-auto"
            />
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 Cubiler Technologies. Ready to build something amazing together.
          </p>
        </div>
      </footer>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={handleVideoModalClose}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogTitle className="sr-only">Video Testimonial</DialogTitle>
          <div className="relative bg-black rounded-lg overflow-hidden">
            {isVideoLoading && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                <div className="text-white text-center">
                  <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p>Loading video...</p>
                </div>
              </div>
            )}

            {videoError ? (
              <div className="aspect-video flex items-center justify-center bg-black text-white p-8">
                <div className="text-center">
                  <AlertCircle className="h-12 w-12 mx-auto mb-4 text-red-500" />
                  <p className="text-lg mb-4">{videoError}</p>
                  <Button
                    onClick={() => {
                      setVideoError("");
                      setIsVideoLoading(true);
                    }}
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            ) : currentVideoUrl ? (
              <video
                className="w-full aspect-video"
                controls
                autoPlay
                onLoadStart={handleVideoLoad}
                onError={handleVideoError}
                onCanPlay={() => setIsVideoLoading(false)}
              >
                <source src={currentVideoUrl} type="video/mp4" />
                <source src={currentVideoUrl} type="video/webm" />
                <source src={currentVideoUrl} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
