import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  MessageCircle,
  Clock,
  ArrowRightLeft,
  CheckCircle,
  Users,
  Calendar,
  Target,
  Bot,
  Zap,
  ArrowRight,
  Play,
  TrendingUp,
  Link2,
  Repeat,
  BarChart3,
  Shield,
  Sparkles,
  Rocket,
  Search,
  Settings,
  DollarSign,
  AlertCircle,
  X,
  Mail,
  Globe,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AICustomerServices = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

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

  const isVisible = (id: string) => visibleSections.has(id);

  const demoUrl = "https://cal.com/mbilal/ai-demo";
  const bookDemoUrl = "https://cal.com/mbilal/free-demo";

  const problems = [
    {
      icon: (
        <div className="relative animate-pulse">
          <Phone className="h-12 w-12" />
          <X className="h-6 w-6 absolute -top-2 -right-2 text-red-500 animate-bounce" />
        </div>
      ),
      title: "Missed Opportunities",
      description: "Calls go to voicemail. Leads go to competitors.",
      loss: "$3,500",
      visual: (
        <div className="mt-4 flex gap-2 items-center justify-center">
          <Phone className="h-4 w-4 text-red-500 animate-pulse" />
          <Phone className="h-4 w-4 text-red-500 animate-pulse" style={{ animationDelay: "0.2s" }} />
          <Phone className="h-4 w-4 text-red-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
          <X className="h-5 w-5 text-red-500" />
        </div>
      ),
    },
    {
      icon: (
        <div className="relative">
          <Clock className="h-12 w-12 animate-spin" style={{ animationDuration: "3s" }} />
          <Repeat className="h-5 w-5 absolute -top-1 -right-1 animate-pulse" />
        </div>
      ),
      title: "Wasted Team Effort",
      description: "Hours lost on repetitive questions, not sales.",
      loss: "20hrs/week",
      visual: (
        <div className="mt-4 flex gap-1 items-end justify-center h-12">
          <div className="w-2 h-8 bg-red-500/50 rounded animate-pulse"></div>
          <div className="w-2 h-10 bg-red-500/50 rounded animate-pulse" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-2 h-12 bg-red-500/50 rounded animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-9 bg-red-500/50 rounded animate-pulse" style={{ animationDelay: "0.3s" }}></div>
        </div>
      ),
    },
    {
      icon: (
        <div className="relative">
          <Link2 className="h-12 w-8 rotate-45" />
          <X className="h-5 w-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500" />
        </div>
      ),
      title: "Manual Data Chaos",
      description: "Lost info. Costly errors. Poor experience.",
      loss: "15% error rate",
      visual: (
        <div className="mt-4 flex gap-3 items-center justify-center">
          <MessageCircle className="h-5 w-5 opacity-50" />
          <ArrowRight className="h-4 w-4 text-red-500 opacity-30" />
          <Calendar className="h-5 w-5 opacity-50" />
          <ArrowRight className="h-4 w-4 text-red-500 opacity-30" />
          <Users className="h-5 w-5 opacity-50" />
        </div>
      ),
    },
  ];

  const features = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: "Capture Every Conversation, 24/7",
      subtitle: "Conversational AI Agents",
      description: "Custom AI trained on your business. Instant professional responses.",
      stat: "99.9% Uptime",
      diagram: (
        <div className="flex items-center justify-center gap-3 mt-6 p-4 bg-primary/5 rounded-lg">
          <div className="flex flex-col items-center">
            <Phone className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-xs mt-1">Voice</span>
          </div>
          <ArrowRight className="h-4 w-4 text-primary" />
          <div className="flex flex-col items-center">
            <Bot className="h-8 w-8 text-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
            <span className="text-xs mt-1 font-bold">AI</span>
          </div>
          <ArrowRight className="h-4 w-4 text-primary" />
          <div className="flex flex-col items-center">
            <CheckCircle className="h-6 w-6 text-green-500 animate-pulse" style={{ animationDelay: "0.4s" }} />
            <span className="text-xs mt-1">Response</span>
          </div>
        </div>
      ),
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Connect Your Tools, End the Chaos",
      subtitle: "Deep Software Integration",
      description: "Direct CRM & calendar sync. Zero manual data entry.",
      stat: "100% Auto-Sync",
      diagram: (
        <div className="flex items-center justify-center gap-3 mt-6 p-4 bg-primary/5 rounded-lg">
          <div className="flex flex-col items-center">
            <Users className="h-6 w-6 text-primary" />
            <span className="text-xs mt-1">CRM</span>
          </div>
          <ArrowRightLeft className="h-5 w-5 text-primary animate-pulse" />
          <div className="flex flex-col items-center">
            <Bot className="h-8 w-8 text-primary" />
            <span className="text-xs mt-1 font-bold">AI</span>
          </div>
          <ArrowRightLeft className="h-5 w-5 text-primary animate-pulse" />
          <div className="flex flex-col items-center">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="text-xs mt-1">Calendar</span>
          </div>
        </div>
      ),
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Automate Your Growth",
      subtitle: "Proactive Follow-Up Engine",
      description: "Smart reminders, quote follow-ups, client re-engagement.",
      stat: "3x More Bookings",
      diagram: (
        <div className="flex flex-col gap-2 mt-6 p-4 bg-primary/5 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm">Day 1: Appointment booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <span className="text-sm">Day 3: Reminder sent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            <span className="text-sm">Day 30: Re-engage</span>
          </div>
        </div>
      ),
    },
  ];

  const customFeatures = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Perfectly Aligned",
      description: "Trained on your business. Your voice, your pricing.",
      comparison: (
        <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
          <div className="p-2 bg-red-500/10 rounded border border-red-500/20">
            <div className="font-semibold text-red-500 mb-1">Generic</div>
            <div className="opacity-70">❌ Scripts</div>
          </div>
          <div className="p-2 bg-green-500/10 rounded border border-green-500/20">
            <div className="font-semibold text-green-500 mb-1">Custom</div>
            <div className="opacity-70">✓ Your Data</div>
          </div>
        </div>
      ),
    },
    {
      icon: <Link2 className="h-8 w-8" />,
      title: "Deep Integrations",
      description: "Custom workflows. Exact triggers. Your systems.",
      comparison: (
        <div className="mt-4 flex justify-center gap-4">
          <div className="text-center">
            <div className="text-2xl mb-1">2</div>
            <div className="text-xs opacity-70">Generic</div>
          </div>
          <div className="text-primary text-center">
            <div className="text-3xl font-bold mb-1">15+</div>
            <div className="text-xs">Custom</div>
          </div>
        </div>
      ),
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      title: "Scalable Asset",
      description: "Grows with you. Adapts. Future-proof investment.",
      comparison: (
        <div className="mt-4 h-16 flex items-end justify-center gap-1">
          <div className="w-8 h-6 bg-red-500/30 rounded-t"></div>
          <div className="w-8 h-6 bg-red-500/30 rounded-t"></div>
          <div className="w-8 h-10 bg-green-500/50 rounded-t"></div>
          <div className="w-8 h-14 bg-green-500/70 rounded-t"></div>
          <div className="w-8 h-16 bg-green-500 rounded-t"></div>
        </div>
      ),
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description: "Map workflow. Find opportunities. Define solution.",
      duration: "Week 1",
      icon: <Search className="h-8 w-8" />,
    },
    {
      number: 2,
      title: "Custom Build & Integration",
      description: "Build AI. Connect tools. Your feedback.",
      duration: "Week 2-3",
      icon: <Settings className="h-8 w-8 animate-spin" style={{ animationDuration: "4s" }} />,
    },
    {
      number: 3,
      title: "Launch & Support",
      description: "Deploy. Train team. Ongoing support.",
      duration: "Week 4+",
      icon: <Rocket className="h-8 w-8" />,
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

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png"
                alt="Cubiler Technologies"
                className="h-10 w-auto"
              />
            </Link>

            <Button
              onClick={() => window.open(bookDemoUrl, "_blank")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-300"
            >
              Automate My Customer Support
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen px-6 flex items-center justify-center overflow-hidden bg-gradient-hero bg-mesh">
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-primary/20 mb-8">
              <span className="text-sm font-medium text-primary">🤖 AI Customer Service Automation</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary">Automate Multi-channel Cusotmer Support with AI.</span> Never Miss a Lead
              Again.
            </h1>

            {/* Animated Channel Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 animate-fade-in">
                <Phone className="h-4 w-4 text-primary animate-pulse" />
                <span className="text-sm font-medium">Voice AI</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 animate-fade-in"
                style={{ animationDelay: "0.1s" }}
              >
                <MessageCircle className="h-4 w-4 text-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
                <span className="text-sm font-medium">WhatsApp</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <Globe className="h-4 w-4 text-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                <span className="text-sm font-medium">Web Chat</span>
              </div>
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <Mail className="h-4 w-4 text-primary animate-pulse" style={{ animationDelay: "0.6s" }} />
                <span className="text-sm font-medium">Email</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Custom AI agents. Your workflow. Your tools. Every channel.
            </p>

            {/* Stats Counter */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">&lt;2s</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">0%</div>
                <div className="text-sm text-muted-foreground">Missed Calls</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section
        id="demo"
        data-animate
        className={`px-6 py-20 bg-gradient-to-b from-background to-primary/5 transition-all duration-1000 ${isVisible("demo") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20 mb-4">
              <Sparkles className="h-4 w-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Live Demo</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">"Auto Repair Shop" Demo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test the real technology. See results instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Voice AI Demo */}
            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
              <CardContent className="p-8 text-center flex flex-col h-full">
                <div className="flex justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <Phone className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-3">Voice AI</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  24/7 phone answering. Book appointments instantly.
                </p>
                <div className="mb-6 p-3 bg-primary/5 rounded-lg">
                  <div className="text-sm font-mono text-primary">"Do you do oil changes?"</div>
                </div>
                <Button
                  onClick={() => window.open("tel:+1XXXXXXXXXX", "_blank")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 w-full group/btn"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Click to Call Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp Demo */}
            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
              <CardContent className="p-8 text-center flex flex-col h-full">
                <div className="flex justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-3">WhatsApp AI</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  Text for quotes. Get appointment times. Instant.
                </p>
                <div className="mb-6 p-3 bg-primary/5 rounded-lg">
                  <div className="text-sm font-mono text-primary">"Quote for tire rotation?"</div>
                </div>
                <Button
                  onClick={() => window.open("https://wa.me/1XXXXXXXXXX", "_blank")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 w-full group/btn"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Web Chat Demo */}
            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
              <CardContent className="p-8 text-center flex flex-col h-full">
                <div className="flex justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-bold mb-3">Web Chat AI</h3>
                <p className="text-muted-foreground leading-relaxed mb-4 flex-grow">
                  Qualify leads. Book services. Convert visitors.
                </p>
                <div className="mb-6 p-3 bg-primary/5 rounded-lg">
                  <div className="text-sm font-mono text-primary">"Book a service appointment"</div>
                </div>
                <Button
                  onClick={() => window.open(demoUrl, "_blank")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 w-full group/btn"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Launch Chatbot Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        id="problems"
        data-animate
        className={`px-6 py-20 transition-all duration-1000 ${isVisible("problems") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Growth is <span className="text-primary">Leaking Through the Cracks.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    {problem.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{problem.description}</p>
                  <div className="flex items-center justify-center gap-2 p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                    <DollarSign className="h-5 w-5 text-red-500" />
                    <span className="font-bold text-red-500">{problem.loss}</span>
                    <span className="text-sm text-muted-foreground">lost/month</span>
                  </div>
                  {problem.visual}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        id="solution"
        data-animate
        className={`px-6 py-20 transition-all duration-1000 ${isVisible("solution") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Tailored Solution for <span className="text-primary">Every Business Need</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We don't do one-size-fits-all. We build the exact modules you need to solve your biggest operational
              headaches, starting with what matters most to you.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="relative flex items-start gap-8 mb-16 last:mb-0">
                {/* Step Number Circle */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg">
                    {index + 1}
                  </div>
                  {/* Connecting Line */}
                  {index < features.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-primary/60 to-primary/20"></div>
                  )}
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-4 opacity-80">{feature.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-primary mb-1">{feature.subtitle}</h4>
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                        <BarChart3 className="h-3 w-3 text-primary" />
                        <span className="text-xs font-semibold text-primary">{feature.stat}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-4">{feature.description}</p>
                  {feature.diagram}
                </div>
              </div>
            ))}

            {/* Callout Box */}
            <div className="mt-16 p-6 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 text-center">
              <p className="text-lg font-medium">
                <span className="text-primary font-bold">Start simple. Scale when ready.</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">Voice AI → Multi-channel → Full automation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Custom Section */}
      <section
        id="why-custom"
        data-animate
        className={`px-6 py-20 transition-all duration-1000 ${isVisible("why-custom") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Custom is <span className="text-primary">Smarter</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Generic = Expense. Custom = Asset.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                  {feature.comparison}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="process"
        data-animate
        className={`px-6 py-20 transition-all duration-1000 ${isVisible("process") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Simple Process</span>
            </h2>
            <p className="text-lg text-muted-foreground">Launch in 4 weeks</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="bg-gradient-card hover-glow group overflow-hidden border border-border/10 relative"
              >
                <CardContent className="p-8 text-center">
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 border border-primary/30">
                    <span className="text-xs font-bold text-primary">{step.duration}</span>
                  </div>

                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                  </div>

                  <div className="flex justify-center mb-4 text-primary opacity-80">{step.icon}</div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                  {/* Progress indicator */}
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent"></div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="cta"
        data-animate
        className={`px-6 py-20 transition-all duration-1000 ${isVisible("cta") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-card hover-glow overflow-hidden border border-border/10">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-primary">Ready to Start?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Free 15-min demo. See your solution.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Free Demo</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span className="text-sm">No Credit Card</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/20">
                  <Target className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Custom Solution</span>
                </div>
              </div>

              <Button
                onClick={() => window.open(bookDemoUrl, "_blank")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
              >
                Automate my customer support
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border/20">
        <div className="max-w-6xl mx-auto text-center">
          <img
            src="/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png"
            alt="Cubiler Technologies"
            className="h-8 w-auto mx-auto mb-4 opacity-60"
          />
          <p className="text-sm text-muted-foreground">© 2024 Cubiler Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AICustomerServices;
