import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  DollarSign,
  Calendar,
  Target,
  BarChart3,
  Zap,
  Shield,
  Clock,
  FileText,
  Wrench,
  Building,
  Calculator,
  MessageSquare,
  GitBranch,
  Server
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CaseStudyTestimonials from "@/components/CaseStudyTestimonials";

const PriceUpCaseStudy = () => {
  const navigate = useNavigate();
  const [visibleFeature, setVisibleFeature] = useState(0);

  const techStack = [
    "Next.js",
    "TypeScript", 
    "MongoDB",
    "Vercel",
    "Stripe",
    "Tailwind CSS",
    "Node.js",
    "Auth0"
  ];

  const keyFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Bulletproof Quoting Engine",
      subtitle: "Create complex, 100% accurate quotes in minutes, not hours.",
      detailedDescription: "The core of PriceUp's revenue leakage was their manual, spreadsheet-based quoting process. It was slow, inconsistent, and prone to costly errors. We developed a dynamic, step-by-step engine that acts as a foolproof checklist. Users select glass types, hardware, and labor rates from a pre-defined library, ensuring every single cost is captured, every single time.",
      image: "/lovable-uploads/cde0d446-bc0e-4104-a6a4-fdd973f8ef18.png",
      benefits: [
        "Error-free calculations that protect profit margins",
        "Standardized pricing across the entire sales team",
        "Drastic reduction in quoting time from hours to minutes"
      ]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Professional PDF & Invoicing",
      subtitle: "Generate branded quotes and invoices with a single click.",
      detailedDescription: "PriceUp needed their client-facing documents to look as professional as their work. We integrated a one-click feature that converts any quote into a beautifully branded PDF proposal. Once a job is complete, the exact same data is used to generate a final invoice, which can be sent to the client instantly, eliminating manual re-entry and delays.",
      image: "/lovable-uploads/pdf.png",
      benefits: [
        "Enhanced brand professionalism that wins larger contracts",
        "Faster payment cycles due to immediate invoicing",
        "Elimination of manual data entry and associated errors"
      ]
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Scheduling & Task Management",
      subtitle: "Visualize all jobs and manage crew assignments from one dashboard.",
      detailedDescription: "The old whiteboard system for scheduling crews was a recipe for chaos and confusion. We built a visual, drag-and-drop scheduler that provides a single source of truth for all active jobs and crew availability. Project managers can assign specific tasks to installers, who can see their daily schedule on any device.",
      image: "/lovable-uploads/3b894766-edb1-46bb-b0e0-0eab09a061bd.png",
      benefits: [
        "Optimized crew scheduling and resource allocation",
        "Clear visibility of the entire company's workload",
        "Reduced communication errors and missed appointments"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Layout & Hardware Management",
      subtitle: "A central library for all your glass layouts and hardware parts.",
      detailedDescription: "A single glass job can involve thousands of specific parts, from custom layouts to unique hardware SKUs. We created a central database where PriceUp can store, manage, and price every single component they use. This library feeds directly into the quoting engine, guaranteeing perfect accuracy on even the most complex projects.",
      image: "/lovable-uploads/1f9ff678-592f-4384-8d9b-610344a58f8a.png",
      benefits: [
        "A centralized parts and layouts database",
        "Guaranteed quote accuracy by pulling real-time data",
        "Simplified inventory and cost management"
      ]
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Multi-Location Management",
      subtitle: "Manage jobs, crews, and reporting across different branches.",
      detailedDescription: "As PriceUp's business grew, they needed the ability to manage operations across multiple branches. We built the platform on a multi-tenant architecture from the ground up. This allows them to segment data, crews, customers, and reporting by location, while giving the executive team a unified, top-level view of the entire business's performance.",
      image: "/lovable-uploads/0cbabedb-5681-40a5-ba5e-ae2ca21539d0.png",
      benefits: [
        "A scalable foundation ready for future growth",
        "Segmented reporting and analytics for each branch",
        "Unified operational control from a single login"
      ]
    }
  ];

  const results = [
    {
      metric: "40%",
      description: "More accurate quotes",
      icon: <Target className="h-8 w-8 text-primary" />
    },
    {
      metric: "150+",
      description: "Active businesses",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      metric: "95%",
      description: "Client satisfaction",
      icon: <TrendingUp className="h-8 w-8 text-primary" />
    },
    {
      metric: "60%",
      description: "Time saved on estimates",
      icon: <Clock className="h-8 w-8 text-primary" />
    }
  ];

  const challenges = [
    {
      icon: <Calculator className="h-6 w-6 text-destructive" />,
      text: "Complex pricing models across different service industries"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-destructive" />,
      text: "Real-time collaboration between team members and clients"
    },
    {
      icon: <GitBranch className="h-6 w-6 text-destructive" />,
      text: "Seamless integration with existing business workflows"
    },
    {
      icon: <Server className="h-6 w-6 text-destructive" />,
      text: "Scalable architecture to handle growing user base"
    }
  ];

  const solutions = [
    "Built flexible pricing engine with customizable parameters",
    "Implemented real-time updates using WebSocket connections",
    "Created comprehensive API for third-party integrations",
    "Designed microservices architecture for optimal scalability"
  ];

  // Auto-scroll effect for features with intersection observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const featureIndex = parseInt(entry.target.getAttribute('data-feature-index') || '0');
          setVisibleFeature(featureIndex);
        }
      });
    }, observerOptions);

    // Observe all feature sections
    const featureSections = document.querySelectorAll('[data-feature-index]');
    featureSections.forEach((section) => observer.observe(section));

    return () => {
      featureSections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png" 
                alt="CUBILER Technologies" 
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-6">
            {/* Badge */}
            <div className="flex justify-center">
              <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1 text-sm font-medium">
               Price Up
              </Badge>
            </div>

            {/* Title and Subtitle */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                How We Built a Custom Quoting & Invoicing Platform that{" "}
                <span className="text-gradient-primary">Reduced Quoting Errors by 95%</span>{" "}
                for a Glass Installation Business
              </h1>
              <p className="hidden md:block text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                PriceUp was running their multi-million dollar business on a chaotic system of spreadsheets and paper forms. 
                We partnered with them to build a custom, end-to-end software platform from scratch, transforming their 
                operations and boosting their profitability.
              </p>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 text-base rounded-xl font-semibold group"
                onClick={() => window.open('https://priceup.glass', '_blank')}
              >
                View Live Project
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="glass-effect border-primary/30 text-primary hover:bg-primary/10 px-6 py-3 text-base rounded-xl font-semibold"
              >
                View Code Architecture
              </Button>
            </div> */}

            {/* Three Stack Images */}
            <div className="relative pt-12">
              <div className="relative max-w-3xl mx-auto">
                {/* Center Image - Popped Up */}
                <div className="relative z-30 transform -translate-y-4">
                  <Card className="bg-gradient-card border border-border/10 overflow-hidden rounded-xl shadow-2xl">
                    <img 
                      src="/lovable-uploads/c03d61d6-5ad2-48a8-8de5-bc9f6aa2e9af.png"
                      alt="PriceUp Quoting Engine"
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </div>

                {/* Left Image - Slightly Behind */}
                <div className="absolute left-0 top-0 w-3/4 z-20 transform -rotate-3 -translate-x-8">
                  <Card className="bg-gradient-card border border-border/10 overflow-hidden rounded-xl shadow-xl opacity-80">
                    <img 
                      src="/lovable-uploads/3b894766-edb1-46bb-b0e0-0eab09a061bd.png"
                      alt="PriceUp Scheduling"
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </div>

                {/* Right Image - Slightly Behind */}
                <div className="absolute right-0 top-0 w-3/4 z-20 transform rotate-3 translate-x-8">
                  <Card className="bg-gradient-card border border-border/10 overflow-hidden rounded-xl shadow-xl opacity-80">
                    <img 
                      src="/lovable-uploads/30348186-6e10-4232-8149-8b41d1f1c770.png"
                      alt="PriceUp Invoicing"
                      className="w-full h-auto object-cover"
                    />
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {/* <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Measurable Impact on Business Growth
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              PriceUp has transformed how service businesses handle their estimation and billing processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <Card key={index} className="bg-gradient-card hover-glow text-center p-6">
                <CardContent className="space-y-3">
                  <div className="flex justify-center">
                    {result.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary">{result.metric}</div>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
    

      {/* The Problem */}
      <section className="px-6 py-16 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">The Problem</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              PriceUp was running a multi-million dollar glass installation business on spreadsheets, paper forms, and manual processes. 
              This chaotic system was creating costly errors, frustrated customers, and significant revenue leakage that threatened their growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-gradient-card hover-glow text-center p-4 border border-destructive/20">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center">
                      {challenge.icon}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{challenge.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections - Full Width Sequential */}
      <section className="py-16">
        <div className="text-center mb-20 px-6">
              <div className="flex justify-center">
              <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1 text-sm font-medium">
                Our Solution
              </Badge>
            </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features That Drive Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We built a comprehensive platform from scratch that transformed their chaotic processes into a streamlined, profitable operation
          </p>
        </div>

        {keyFeatures.map((feature, index) => (
          <div 
            key={index}
            data-feature-index={index}
            className={`py-20 ${index % 2 === 1 ? 'bg-muted/20' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content Side */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
    

                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xl text-primary font-medium">
                      {feature.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.detailedDescription}
                    </p>
                  </div>

                </div>

                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="bg-gradient-card border border-border/10 overflow-hidden rounded-3xl shadow-2xl hover-glow">
                    <div className="relative">
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-auto object-contain bg-white/5"
                      />
                      <div className="absolute top-6 left-6 right-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                              <Zap className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                              Live Demo
                            </span>
                          </div>
                          <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                            Feature {index + 1}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We chose the right tools for scalability, performance, and maintainability
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <Badge 
                key={tech}
                className="bg-primary/20 text-primary border-primary/30 px-6 py-3 text-lg font-medium rounded-xl"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyTestimonials />

      {/* CTA Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-card p-12 border border-border/10 rounded-3xl">
            <CardContent className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Build Your Next{" "}
                <span className="text-primary">Game-Changing Platform?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can help you create a solution that drives real business impact, 
                just like we did with PriceUp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl"
                  onClick={() => navigate('/#contact')}
                >
                  Start Your Project
                </Button>
                <Button 
                  variant="outline" 
                  className="glass-effect border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg font-semibold rounded-xl"
                  onClick={() => navigate('/')}
                >
                  View More Work
                </Button>
              </div>
            </CardContent>
          </Card>
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

export default PriceUpCaseStudy;
