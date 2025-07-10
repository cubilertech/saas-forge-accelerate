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
  Building
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PriceUpCaseStudy = () => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(0);

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
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Bulletproof Quoting Engine",
      subtitle: "Create complex, 100% accurate quotes in minutes, not hours.",
      detailedDescription: "The core of PriceUp's revenue leakage was their manual, spreadsheet-based quoting process. It was slow, inconsistent, and prone to costly errors. We developed a dynamic, step-by-step engine that acts as a foolproof checklist. Users select glass types, hardware, and labor rates from a pre-defined library, ensuring every single cost is captured, every single time.",
      image: "/lovable-uploads/c03d61d6-5ad2-48a8-8de5-bc9f6aa2e9af.png",
      benefits: [
        "Error-free calculations that protect profit margins",
        "Standardized pricing across the entire sales team",
        "Drastic reduction in quoting time from hours to minutes"
      ]
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Professional PDF & Invoicing",
      subtitle: "Generate branded quotes and invoices with a single click.",
      detailedDescription: "PriceUp needed their client-facing documents to look as professional as their work. We integrated a one-click feature that converts any quote into a beautifully branded PDF proposal. Once a job is complete, the exact same data is used to generate a final invoice, which can be sent to the client instantly, eliminating manual re-entry and delays.",
      image: "/lovable-uploads/30348186-6e10-4232-8149-8b41d1f1c770.png",
      benefits: [
        "Enhanced brand professionalism that wins larger contracts",
        "Faster payment cycles due to immediate invoicing",
        "Elimination of manual data entry and associated errors"
      ]
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
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
      icon: <Wrench className="h-6 w-6 text-primary" />,
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
      icon: <Building className="h-6 w-6 text-primary" />,
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
    "Complex pricing models across different service industries",
    "Real-time collaboration between team members and clients",
    "Seamless integration with existing business workflows",
    "Scalable architecture to handle growing user base"
  ];

  const solutions = [
    "Built flexible pricing engine with customizable parameters",
    "Implemented real-time updates using WebSocket connections",
    "Created comprehensive API for third-party integrations",
    "Designed microservices architecture for optimal scalability"
  ];

  // Auto-scroll effect for features
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFeature((prev) => (prev + 1) % keyFeatures.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [keyFeatures.length]);

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
                alt="UBiLER Technologies" 
                className="h-8 w-auto"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 bg-gradient-hero bg-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 text-sm font-medium">
                  Business Services Platform
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  PriceUp
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  An intelligent estimation and invoicing platform that revolutionizes how service businesses create quotes, manage projects, and get paid.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-xl font-semibold group"
                  onClick={() => window.open('https://priceup.glass', '_blank')}
                >
                  View Live Project
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  className="glass-effect border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg rounded-xl font-semibold"
                >
                  View Code Architecture
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary/10 rounded-3xl blur-2xl"></div>
              <Card className="relative bg-gradient-card border border-border/10 overflow-hidden rounded-3xl">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop" 
                    alt="PriceUp Dashboard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Measurable Impact on Business Growth
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              PriceUp has transformed how service businesses handle their estimation and billing processes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="bg-gradient-card hover-glow text-center p-8">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    {result.icon}
                  </div>
                  <div className="text-4xl font-bold text-primary">{result.metric}</div>
                  <p className="text-muted-foreground">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="px-6 py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">The Challenge</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Service businesses were struggling with inconsistent pricing, time-consuming manual estimates, 
                and fragmented project management workflows that led to revenue leakage and client dissatisfaction.
              </p>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-destructive/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Our Solution</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We developed a comprehensive platform that unifies estimation, project management, and billing 
                into one seamless workflow, powered by intelligent automation and real-time collaboration.
              </p>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Key Features */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features That Drive Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every feature was designed with the end-user in mind, focusing on simplicity and efficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Feature List - Left Side (2 columns) */}
            <div className="lg:col-span-2 space-y-3">
              {keyFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedFeature === index 
                      ? 'bg-primary/10 border-primary/50 shadow-lg scale-[1.02]' 
                      : 'bg-gradient-card hover:bg-muted/30 hover:scale-[1.01]'
                  }`}
                  onClick={() => setSelectedFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${
                        selectedFeature === index 
                          ? 'bg-primary/30 scale-110' 
                          : 'bg-primary/20'
                      }`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold mb-2 leading-tight">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Feature Details - Right Side (3 columns) */}
            <div className="lg:col-span-3">
              <Card className="bg-gradient-card border border-border/10 overflow-hidden rounded-3xl h-full">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <img 
                    src={keyFeatures[selectedFeature].image}
                    alt={keyFeatures[selectedFeature].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-primary/30 rounded-lg flex items-center justify-center">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-white/80 text-sm font-medium">Automation</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        {keyFeatures[selectedFeature].icon}
                      </div>
                      <span>{keyFeatures[selectedFeature].title}</span>
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {keyFeatures[selectedFeature].detailedDescription}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Key Benefits:</h4>
                    <div className="grid gap-3">
                      {keyFeatures[selectedFeature].benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-20 bg-muted/20">
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

      {/* CTA Section */}
      <section className="px-6 py-20">
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
    </div>
  );
};

export default PriceUpCaseStudy;
