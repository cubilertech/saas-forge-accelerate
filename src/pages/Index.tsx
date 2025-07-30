import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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
  Bot
} from "lucide-react";
import { useEffect, useState } from "react";
// import ProjectsMarquee from "@/components/ProjectsMarquee";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
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
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsUserInteracting(true);
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsUserInteracting(true);
  };

  const isVisible = (id: string) => visibleSections.has(id);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      id: 1,
      quote: "Working with this team was a game-changer. They didn't just write code; they understood our business goals and built a platform that was scalable from day one. I finally have a technical partner I can trust.",
      name: "John Doe",
      company: "Founder of AfterHire",
      initials: "JD",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      quote: "The development process was smooth and transparent. They delivered exactly what we needed on time and within budget. Our SaaS platform now handles thousands of users without any issues.",
      name: "Sarah Chen",
      company: "CEO of TechFlow",
      initials: "SC",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      quote: "I was impressed by their technical expertise and business understanding. They helped us pivot our MVP into a product that actually resonates with our target market.",
      name: "Michael Rodriguez",
      company: "Founder of DataSync",
      initials: "MR",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  const portfolioItems = [
    {
      id: 1,
      name: "AfterHire",
      description: "A comprehensive HR onboarding platform that automates employee workflows, document management, and integration processes.",
      industry: "Human Resources",
      techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      results: ["50% faster onboarding", "200+ companies"],
      liveUrl: "https://afterhire.com"
    },
    {
      id: 2,
      name: "PriceUp",
      description: "An intelligent estimation and invoicing platform for service industries with dynamic pricing models and automated billing.",
      industry: "Business Services",
      techStack: ["Next.js", "TypeScript", "MongoDB", "Vercel"],
      image: "/lovable-uploads/cde0d446-bc0e-4104-a6a4-fdd973f8ef18.png",
      results: ["40% more accurate quotes", "150+ businesses"],
      liveUrl: "https://priceup.com"
    },
    {
      id: 3,
      name: "Pipa",
      description: "A specialized CRM and task management system for agriculture industry with real-time updates and mobile accessibility.",
      industry: "Agriculture Technology",
      techStack: ["React Native", "Express.js", "MySQL", "Firebase"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      results: ["60% improved efficiency", "500+ farms"],
      liveUrl: "https://pipa.com"
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Define the Blueprint",
      description: "Get strategic clarity on user, problem, and scope.",
      details: "We start by becoming experts in your business. We dive deep into your goals, your users, and your metrics for success."
    },
 
    {
      number: 2,
      title: "The Build Sprint",
      description: "Build with senior-led teams using the right AI boosts.",
      details: "You get constant visibility with regular check-ins and direct access to a project manager. Working software every two weeks."
    },
    {
      number: 3,
      title: "Launch & Learn",
      description: "Deliver, measure, iterate with feedback loop built in.",
      details: "Rigorous testing ensures your platform is reliable, bug-free, and ready for your first users. We handle the deployment."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-l from-primary/3 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-t from-primary/3 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Transparent Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png" 
                alt="UBiLER Technologies" 
                className="h-10 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Process
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
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
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('services');
                  setIsMenuOpen(false);
                }}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => {
                  scrollToSection('case-studies');
                  setIsMenuOpen(false);
                }}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => {
                  scrollToSection('process');
                  setIsMenuOpen(false);
                }}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Process
              </button>
              <Button 
                onClick={() => {
                  scrollToSection('contact');
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

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen px-6 flex items-center justify-center overflow-hidden bg-gradient-hero bg-mesh">
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary/20 mb-8">
              <span className="text-sm font-medium text-primary">✨ Your AI-Powered SaaS Partner</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Go from MVP to <span className="text-primary">Intelligent SaaS</span>,
              <br className="hidden md:block" />
              <span className="text-foreground">Faster.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
             You have a powerful vision for a SaaS product. You need more than just freelancers—you need a reliable technical partner to build a robust, AI-native platform that wins customers and attracts investors.
              <span className="text-primary font-medium">We are that partner.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
              >
                Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('case-studies')}
                className="glass-effect border-border/20 text-foreground px-6 py-4 text-lg font-medium rounded-xl hover:bg-accent/5 transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Marquee Section - Hidden */}
      {/* <ProjectsMarquee /> */}

      {/* Testimonials Section - Optimized Performance */}
    
      {/* Services Section - Updated with Clean Design */}
      <section 
        id="services" 
        data-animate 
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Technical Partner at{" "}
              <span className="text-primary">Every Stage of Growth</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We meet you exactly where you are on your journey, with clear, packaged solutions designed to solve your most pressing challenge right now.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-center mb-6">
                    <Rocket className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">You Have the Vision.</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                    We help you bring it to life. Our MVP Sprint is designed to transform your concept into a high-quality, intelligent product ready for its first users. We build the solid foundation you need to validate your idea, win customers, and secure your next round of funding.
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-primary/30">
                  <p className="text-primary text-sm font-medium">Ideal for:</p>
                  <p className="text-muted-foreground text-sm italic">Pre-seed and seed-stage founders.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-center mb-6">
                    <TrendingUp className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">You Have Traction.</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                    We help you build a competitive moat. When your platform needs to get smarter to stay ahead of the competition, we integrate sophisticated AI features. From natural language search to data analysis co-pilots, we build the intelligent tools that increase user value and make your product indispensable.
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-primary/30">
                  <p className="text-primary text-sm font-medium">Ideal for:</p>
                  <p className="text-muted-foreground text-sm italic">Startups with an existing product looking to innovate.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-center mb-6">
                    <Zap className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">You're Ready to Scale.</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                    We provide the dedicated horsepower. When you need to accelerate your roadmap without the immense cost and time of traditional hiring, our Dedicated Product Team is the answer. You get a full "pod" of senior engineers and AI specialists who function as a seamless, long-term extension of your own team.
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-primary/30">
                  <p className="text-primary text-sm font-medium">Ideal for:</p>
                  <p className="text-muted-foreground text-sm italic">Growing businesses that need to expand their development capacity.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

  {/* Process Section - New List Design */}
      <section 
        id="process" 
        data-animate 
        className={`relative px-6 py-20 bg-grid-pattern transition-all duration-1000 ${isVisible('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-background/95"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Launch-Ready Process{" "}
              <span className="text-primary">Powered by AI</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We streamline every step with AI, taking you from concept to live product fast
              and ready for your first users in 4 weeks.
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
                  <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {step.details}
                  </p>
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
        className={`px-6 py-16 transition-all duration-1000 ${isVisible('case-studies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Success {" "}
              <span className="text-primary">Stories</span>
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
                      <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                        {item.industry}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg mb-1">{item.name}</h3>
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

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 text-xs rounded-lg font-medium flex-1 group"
                      onClick={() => window.open(item.liveUrl, '_blank')}
                    >
                      View Live
                      <ExternalLink className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass-effect border-primary/30 text-primary hover:bg-primary/10 px-3 py-2 text-xs rounded-lg font-medium flex-1"
                      onClick={() => {
                        if (item.name === 'PriceUp') {
                          window.location.href = '/case-study/priceup';
                        }
                      }}
                    >
                      Case Study
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
        className={`px-6 py-24 bg-gradient-to-r from-muted/20 via-background to-muted/20 transition-all duration-1000 ${isVisible('testimonials') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                  transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className="w-full flex-shrink-0"
                    style={{
                      contain: 'layout style paint',
                      opacity: Math.abs(index - currentTestimonial) <= 1 ? 1 : 0.3,
                      transition: 'opacity 0.3s ease-out'
                    }}
                  >
                    <Card className="bg-gradient-card card-blur hover-glow border-0 shadow-2xl overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-5 gap-0 items-center min-h-[400px]">
                          {/* Left side - Image */}
                          <div className="md:col-span-2 relative h-full">
                            <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center p-8 md:p-12">
                              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-6xl shadow-2xl">
                                {testimonial.initials}
                              </div>
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
                              <p className="text-muted-foreground text-lg">{testimonial.company}</p>
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
                        ? 'w-12 h-4 bg-primary rounded-full' 
                        : 'w-4 h-4 bg-muted hover:bg-primary/50 rounded-full hover:scale-110'
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
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card card-blur rounded-2xl p-10 lg:p-12 border border-border/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Turn Your Vision into a{" "}
              <span className="text-primary">High-Growth SaaS Business?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's have a conversation. We offer a free, no-obligation 30-minute strategy session where we can dive into your project, offer some initial technical insights, and see if we're the right partner to help you succeed.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group mb-4 w-auto max-w-fit mx-auto"
            >
              Book Your Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-muted-foreground">
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
              alt="UBiLER Technologies" 
              className="h-8 w-auto"
            />
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 UBiLER Technologies. Ready to build something amazing together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
