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
import mobileHeroImg from "@/assets/mobile-app-hero.jpg";
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground tracking-tight">
            SaaSForge<span className="text-primary">.</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                Home
              </Button>
            </Link>
            <a href={bookCallUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5">
                Book a Call
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section - Visual & Modern */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left - Content */}
            <div className="space-y-6">
              <Badge variant="secondary" className="text-primary border-primary/20 bg-accent px-4 py-1.5 text-sm font-medium">
                <Smartphone className="h-4 w-4 mr-1.5" />
                Mobile App Development
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                AI-Native Apps,{" "}
                <span className="text-gradient-primary">Built with Flutter</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                High-performance iOS & Android apps with integrated AI — from on-device 
                machine learning to generative AI features. One codebase, infinite possibilities.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-card border border-border/50">
                    <div className="flex items-center justify-center text-primary mb-1">{stat.icon}</div>
                    <div className="text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a href={bookCallUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 gap-2 shadow-lg shadow-primary/20">
                    Start Your App <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#capabilities">
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-border">
                    Explore Capabilities
                  </Button>
                </a>
              </div>
            </div>

            {/* Right - Hero Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-2xl scale-110" />
                <img 
                  src={mobileHeroImg} 
                  alt="AI-powered Flutter mobile app development" 
                  className="relative rounded-2xl shadow-2xl shadow-primary/10 w-full max-w-md"
                  width={1024}
                  height={768}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" data-animate className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${isVisible("capabilities") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Badge variant="secondary" className="text-primary border-primary/20 bg-accent px-3 py-1 text-xs font-medium mb-4">
              WHAT WE BUILD
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Full-Spectrum Mobile Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From cross-platform Flutter development to on-device AI — everything you need to launch a world-class mobile product.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${isVisible("capabilities") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {capabilities.map((cap, i) => (
              <Card key={i} className="group bg-card border-border/50 hover-glow overflow-hidden">
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
      <section data-animate id="showcase" className="py-20 bg-accent/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible("showcase") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
              <h2 className="text-3xl font-bold text-foreground">
                Apps for Every Industry
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {useCases.map((uc, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors">
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
      <section data-animate id="process" className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${isVisible("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Badge variant="secondary" className="text-primary border-primary/20 bg-accent px-3 py-1 text-xs font-medium mb-4">
              THE PROCESS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              From Idea to App Store
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A proven 5-phase process that keeps you in the loop at every step.
            </p>
          </div>

          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {process.map((step, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 border border-border/50">
                  {step.icon}
                </div>
                <div className="flex-1 pb-6 border-b border-border/50 last:border-0">
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
      <section data-animate id="why-flutter" className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${isVisible("why-flutter") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Badge variant="secondary" className="text-primary border-primary/20 bg-accent px-3 py-1 text-xs font-medium mb-4">
              WHY US
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Flutter + AI = Unfair Advantage
            </h2>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 delay-200 ${isVisible("why-flutter") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { icon: <Zap className="h-6 w-6" />, title: "2x Faster Delivery", desc: "One codebase for both platforms cuts development time in half." },
              { icon: <Cpu className="h-6 w-6" />, title: "Native Performance", desc: "Flutter compiles to ARM machine code — no bridge, no lag." },
              { icon: <Brain className="h-6 w-6" />, title: "AI-First Architecture", desc: "ML pipelines built into the app from day one, not bolted on." },
              { icon: <Users className="h-6 w-6" />, title: "Dedicated Team", desc: "Senior Flutter + AI engineers, not juniors learning on your project." },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border/50 text-center hover-glow">
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
      <section data-animate id="case-studies" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 transition-all duration-700 ${isVisible("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Badge variant="secondary" className="text-primary border-primary/20 bg-accent px-3 py-1 text-xs font-medium mb-4">
              REAL RESULTS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Apps We've Shipped
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real mobile apps built with Flutter and AI — delivering measurable impact for our clients.
            </p>
          </div>

          <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isVisible("case-studies") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {/* Pipa Case Study */}
            <Card className="group bg-card border-border/50 hover-glow overflow-hidden">
              <div className="aspect-[16/9] bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center relative overflow-hidden">
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
            <Card className="group bg-card border-border/50 hover-glow overflow-hidden">
              <div className="aspect-[16/9] bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center relative overflow-hidden">
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
      <section data-animate id="faq" className="py-20 bg-accent/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-10 transition-all duration-700 ${isVisible("faq") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
          </div>

          <div className={`space-y-3 transition-all duration-700 delay-200 ${isVisible("faq") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {faqs.map((faq, i) => (
              <Collapsible key={i}>
                <CollapsibleTrigger className="w-full flex items-center justify-between p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors text-left group">
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-8 gap-2 font-semibold">
                    Book Strategy Call <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <Link to="/">
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-lg font-bold text-foreground">
            SaaSForge<span className="text-primary">.</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SaaSForge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MobileAppDevelopment;
