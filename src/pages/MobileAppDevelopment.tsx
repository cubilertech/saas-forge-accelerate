import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Cpu,
  Brain,
  Zap,
  Layers,
  Palette,
  Shield,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  BarChart3,
  Globe,
  Clock,
  Users,
  Code2,
  Sparkles,
  Target,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import mobileShowcaseImg from "@/assets/mobile-app-showcase.jpg";

const MobileAppDevelopment = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);
  const bookCallUrl = "https://cal.com/mbilal/free-demo";

  const capabilities = [
    {
      icon: <Layers className="h-7 w-7" />,
      title: "Cross-Platform with Flutter",
      description: "One codebase, pixel-perfect native apps on iOS and Android. Ship faster without compromising quality.",
      highlights: ["Single codebase", "Native performance", "Hot reload dev"],
    },
    {
      icon: <Brain className="h-7 w-7" />,
      title: "On-Device AI & ML",
      description: "Integrate TensorFlow Lite, Core ML, and custom models for real-time intelligence right on the device.",
      highlights: ["Image recognition", "NLP & voice", "Predictive analytics"],
    },
    {
      icon: <Sparkles className="h-7 w-7" />,
      title: "Generative AI Features",
      description: "Add AI-powered content generation, smart recommendations, and conversational interfaces to your app.",
      highlights: ["AI chatbots", "Smart search", "Personalization"],
    },
    {
      icon: <Palette className="h-7 w-7" />,
      title: "Premium UI/UX Design",
      description: "Custom-crafted interfaces with smooth animations, micro-interactions, and platform-native feel.",
      highlights: ["Custom animations", "Design systems", "Accessibility"],
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Enterprise-Grade Security",
      description: "Biometric auth, end-to-end encryption, and secure data handling built into every layer.",
      highlights: ["Biometric auth", "E2E encryption", "Secure storage"],
    },
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Backend & Cloud Integration",
      description: "Seamless API integrations, real-time databases, push notifications, and cloud functions.",
      highlights: ["REST & GraphQL", "Real-time sync", "Push notifications"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We map your vision, define user journeys, and architect the technical approach.",
      duration: "Week 1-2",
      icon: <Target className="h-6 w-6" />,
    },
    {
      step: "02",
      title: "Design & Prototype",
      description: "Interactive prototypes with your brand's visual language, tested with real users.",
      duration: "Week 2-4",
      icon: <Palette className="h-6 w-6" />,
    },
    {
      step: "03",
      title: "Agile Development",
      description: "Sprint-based development with bi-weekly demos. You see progress every step.",
      duration: "Week 4-10",
      icon: <Code2 className="h-6 w-6" />,
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Automated + manual testing across devices. Performance, security, and usability audits.",
      duration: "Week 10-12",
      icon: <Settings className="h-6 w-6" />,
    },
    {
      step: "05",
      title: "Launch & Scale",
      description: "App store submission, monitoring setup, and ongoing optimization post-launch.",
      duration: "Week 12+",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  const stats = [
    { value: "50+", label: "Apps Launched", icon: <Smartphone className="h-5 w-5" /> },
    { value: "4.8★", label: "Avg Store Rating", icon: <Star className="h-5 w-5" /> },
    { value: "60%", label: "Faster to Market", icon: <Clock className="h-5 w-5" /> },
    { value: "99.9%", label: "Crash-Free Rate", icon: <BarChart3 className="h-5 w-5" /> },
  ];

  const useCases = [
    { title: "HealthTech & Fitness", description: "Wearable integration, health tracking, AI-driven coaching", icon: "🏥" },
    { title: "FinTech & Banking", description: "Secure payments, portfolio tracking, fraud detection", icon: "💳" },
    { title: "E-Commerce & Retail", description: "AR try-ons, personalized shopping, instant checkout", icon: "🛍️" },
    { title: "EdTech & Learning", description: "Adaptive learning, progress tracking, interactive content", icon: "📚" },
    { title: "On-Demand Services", description: "Real-time tracking, matching algorithms, scheduling", icon: "🚗" },
    { title: "Social & Community", description: "Real-time messaging, content feeds, AI moderation", icon: "💬" },
  ];

  const faqs = [
    { q: "Why Flutter over React Native or native development?", a: "Flutter delivers true native performance with a single codebase, pixel-perfect UI across platforms, and significantly faster development cycles. It's Google-backed with a thriving ecosystem and produces apps indistinguishable from fully native ones." },
    { q: "How long does a typical mobile app project take?", a: "Most projects go from concept to App Store in 10-14 weeks. Simple MVPs can launch in 6-8 weeks, while complex enterprise apps may take 16-20 weeks. We provide detailed timelines during the discovery phase." },
    { q: "Can you integrate AI features into my existing app?", a: "Absolutely. We can add AI capabilities like chatbots, image recognition, smart recommendations, or predictive analytics to existing apps — whether built in Flutter, Swift, Kotlin, or React Native." },
    { q: "Do you handle App Store submission and maintenance?", a: "Yes. We manage the entire submission process for both Apple App Store and Google Play, including compliance, metadata optimization, and post-launch updates and monitoring." },
    { q: "What about ongoing support after launch?", a: "We offer flexible support plans including bug fixes, feature updates, performance monitoring, and scaling support. Most clients continue with a monthly retainer for continuous improvement." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated background elements - matching home page */}
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

      {/* Header - matching home page scroll-to-pill style */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3" : "py-6"}`}>
        <div
          className={`max-w-6xl mx-auto px-6 transition-all duration-300 ${
            isScrolled ? "bg-background/60 backdrop-blur-md border border-border/30 rounded-full py-2" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png"
                alt="Cubiler Technologies"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Home
              </Link>
              <a href="#capabilities" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Capabilities
              </a>
              <a href="#case-studies" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Case Studies
              </a>
              <a href={bookCallUrl} target="_blank" rel="noopener noreferrer">
                <Button
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
              </a>
            </nav>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg glass-effect">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-4">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Home
              </Link>
              <a href="#capabilities" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Capabilities
              </a>
              <a href="#case-studies" onClick={() => setIsMenuOpen(false)} className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Case Studies
              </a>
              <a href={bookCallUrl} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium">
                  Book a Call
                </Button>
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section - Centered with animated background */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-16 md:pt-24 overflow-hidden bg-gradient-hero bg-mesh">
        {/* Animated background shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large orbiting rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10 animate-[spin_40s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5 animate-[spin_60s_linear_infinite_reverse]"></div>
          
          {/* Floating gradient blobs */}
          <div className="absolute top-[15%] left-[15%] w-40 h-40 rounded-full bg-primary/8 blur-3xl animate-float-slow"></div>
          <div className="absolute top-[60%] right-[10%] w-56 h-56 rounded-full bg-primary/6 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-[15%] left-[30%] w-48 h-48 rounded-full bg-primary/5 blur-3xl animate-float-slow" style={{ animationDelay: "4s" }}></div>
          
          {/* Glowing orbs */}
          <div className="absolute top-[25%] right-[20%] w-3 h-3 rounded-full bg-primary/40 animate-pulse-glow"></div>
          <div className="absolute top-[70%] left-[20%] w-2 h-2 rounded-full bg-primary/30 animate-pulse-glow" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-[40%] left-[8%] w-4 h-4 rounded-full bg-primary/20 animate-pulse-glow" style={{ animationDelay: "3s" }}></div>
          
          {/* Radial gradient center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto w-full text-center">
          <div className="space-y-6 animate-fade-in">
            <Badge variant="secondary" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-effect border border-primary/30 text-primary text-sm font-semibold backdrop-blur-xl">
              <Smartphone className="h-4 w-4" />
              Mobile App Development
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight">
              <span className="block text-gradient-primary animate-gradient-shift drop-shadow-[0_0_30px_rgba(32,186,230,0.3)]">AI-Native Apps,</span>
              <span className="block mt-2">Built with Flutter</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto font-medium">
              High-performance iOS & Android apps with integrated AI — from on-device 
              machine learning to generative AI features. <span className="text-primary font-semibold">One codebase, infinite possibilities.</span>
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-card/60 backdrop-blur-sm border border-border/30 hover-glow">
                  <div className="flex items-center justify-center text-primary mb-1">{stat.icon}</div>
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <a href={bookCallUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Start Your App <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </a>
              <a href="#capabilities">
                <Button size="lg" variant="outline" className="glass-effect border-primary/30 text-foreground px-8 py-5 md:py-6 text-base md:text-lg font-semibold rounded-xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-xl group">
                  <span className="flex items-center">
                    Explore Capabilities
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" data-animate className={`px-6 py-20 relative transition-all duration-1000 ${isVisible("capabilities") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="text-primary border-primary/20 bg-accent px-3 py-1 text-xs font-medium mb-4">
              WHAT WE BUILD
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Full-Spectrum Mobile <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From cross-platform Flutter development to on-device AI — everything you need to launch a world-class mobile product.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <Card key={i} className="group bg-gradient-card hover-glow overflow-hidden border border-border/10">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cap.highlights.map((h, j) => (
                      <span key={j} className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">
                        {h}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Visual Section */}
      <section data-animate id="showcase" className={`px-6 py-20 relative overflow-hidden transition-all duration-1000 ${isVisible("showcase") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={mobileShowcaseImg} 
                alt="Mobile app portfolio showcase" 
                className="rounded-2xl shadow-xl"
                loading="lazy"
                width={1200}
                height={600}
              />
            </div>
            <div className="space-y-6">
              <Badge variant="secondary" className="text-primary border-primary/20 bg-accent px-3 py-1 text-xs font-medium">
                USE CASES
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Apps for Every <span className="text-primary">Industry</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map((uc, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-xl bg-card/60 backdrop-blur-sm border border-border/30 hover:border-primary/20 hover-glow transition-all">
                    <span className="text-2xl">{uc.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{uc.title}</h4>
                      <p className="text-xs text-muted-foreground">{uc.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section data-animate id="process" className={`relative px-6 py-20 bg-grid-pattern transition-all duration-1000 ${isVisible("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="absolute inset-0 bg-background/95"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}></div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="text-primary border-primary/20 bg-accent px-3 py-1 text-xs font-medium mb-4">
              THE PROCESS
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              From Idea to <span className="text-primary">App Store</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              A proven 5-phase process that keeps you in the loop at every step.
            </p>
          </div>

          <div className="space-y-6">
            {process.map((step, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 border border-border/30">
                  {step.icon}
                </div>
                <div className="flex-1 pb-6 border-b border-border/30 last:border-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-mono text-primary font-semibold">{step.step}</span>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <span className="text-xs text-muted-foreground ml-auto bg-accent px-2.5 py-0.5 rounded-full">{step.duration}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Flutter + AI Section */}
      <section data-animate id="why-flutter" className={`px-6 py-20 transition-all duration-1000 ${isVisible("why-flutter") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="text-primary border-primary/20 bg-accent px-3 py-1 text-xs font-medium mb-4">
              WHY US
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Flutter + AI = <span className="text-primary">Unfair Advantage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="h-6 w-6" />, title: "2x Faster Delivery", desc: "One codebase for both platforms cuts development time in half." },
              { icon: <Cpu className="h-6 w-6" />, title: "Native Performance", desc: "Flutter compiles to ARM machine code — no bridge, no lag." },
              { icon: <Brain className="h-6 w-6" />, title: "AI-First Architecture", desc: "ML pipelines built into the app from day one, not bolted on." },
              { icon: <Users className="h-6 w-6" />, title: "Dedicated Team", desc: "Senior Flutter + AI engineers, not juniors learning on your project." },
            ].map((item, i) => (
              <Card key={i} className="bg-gradient-card text-center hover-glow border border-border/10">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary mx-auto">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section data-animate id="case-studies" className={`px-6 py-20 transition-all duration-1000 ${isVisible("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="text-primary border-primary/20 bg-accent px-3 py-1 text-xs font-medium mb-4">
              REAL RESULTS
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Apps We've <span className="text-primary">Shipped</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real mobile apps built with Flutter and AI — delivering measurable impact for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pipa Case Study */}
            <Card className="group bg-gradient-card hover-glow overflow-hidden border border-border/10">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-background to-background flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-2 p-6">
                  <span className="text-5xl">🌾</span>
                  <h3 className="text-xl font-bold text-foreground">Pipa</h3>
                  <p className="text-sm text-muted-foreground">Farm Management Platform</p>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Node.js", "MongoDB", "AWS"].map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">{tech}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A comprehensive farm operations app replacing paper-based workflows with digital task management, automated timesheets, and real-time team communication for agricultural teams.
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="text-center p-2 rounded-lg bg-accent/50">
                    <div className="text-lg font-bold text-primary">40%</div>
                    <div className="text-xs text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-accent/50">
                    <div className="text-lg font-bold text-primary">Zero</div>
                    <div className="text-xs text-muted-foreground">Paper Forms</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-accent/50">
                    <div className="text-lg font-bold text-primary">Real-time</div>
                    <div className="text-xs text-muted-foreground">Coordination</div>
                  </div>
                </div>
                <Link to="/case-study/pipa">
                  <Button variant="ghost" className="w-full mt-2 gap-2 text-primary hover:text-primary hover:bg-accent group-hover:bg-accent transition-colors">
                    View Full Case Study <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AfterHire Case Study */}
            <Card className="group bg-gradient-card hover-glow overflow-hidden border border-border/10">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 via-background to-background flex items-center justify-center relative overflow-hidden">
                <div className="text-center space-y-2 p-6">
                  <span className="text-5xl">👥</span>
                  <h3 className="text-xl font-bold text-foreground">AfterHire</h3>
                  <p className="text-sm text-muted-foreground">HR & Onboarding Platform</p>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Flutter", "Firebase", "AI/ML", "Cloud Functions"].map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground font-medium">{tech}</span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  An intelligent HR platform streamlining employee onboarding, document management, and team coordination with AI-powered automation and real-time collaboration features.
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="text-center p-2 rounded-lg bg-accent/50">
                    <div className="text-lg font-bold text-primary">3x</div>
                    <div className="text-xs text-muted-foreground">Faster Onboarding</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-accent/50">
                    <div className="text-lg font-bold text-primary">85%</div>
                    <div className="text-xs text-muted-foreground">Less Manual Work</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-accent/50">
                    <div className="text-lg font-bold text-primary">4.9★</div>
                    <div className="text-xs text-muted-foreground">User Rating</div>
                  </div>
                </div>
                <Link to="/case-study/afterhire">
                  <Button variant="ghost" className="w-full mt-2 gap-2 text-primary hover:text-primary hover:bg-accent group-hover:bg-accent transition-colors">
                    View Full Case Study <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section data-animate id="faq" className={`px-6 py-20 transition-all duration-1000 ${isVisible("faq") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">Frequently Asked <span className="text-primary">Questions</span></h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Collapsible key={i}>
                <CollapsibleTrigger className="w-full flex items-center justify-between p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/30 hover:border-primary/20 transition-all text-left group">
                  <span className="font-medium text-foreground text-sm pr-4">{faq.q}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0 group-data-[state=open]:rotate-180 transition-transform" />
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4 pt-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-12 text-center">
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            <div className="relative space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
                Ready to Build Your App?
              </h2>
              <p className="text-primary-foreground/80 max-w-lg mx-auto">
                Book a free strategy call and let's map out your mobile app — from concept to App Store launch.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={bookCallUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-xl px-8 gap-2 font-bold transition-all duration-300 hover:shadow-2xl hover:scale-105">
                    Book Strategy Call <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <Link to="/">
                  <Button size="lg" variant="outline" className="rounded-xl px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png"
              alt="Cubiler Technologies"
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cubiler Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MobileAppDevelopment;
