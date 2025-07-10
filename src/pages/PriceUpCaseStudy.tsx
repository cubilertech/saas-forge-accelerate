
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
  Clock
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
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      title: "Dynamic Pricing Engine",
      description: "Intelligent pricing algorithms that adapt to market conditions and project complexity",
      detailedDescription: "Our advanced pricing engine uses machine learning algorithms to analyze market trends, project complexity, and historical data to suggest optimal pricing strategies. It automatically adjusts rates based on demand, seasonality, and competition, ensuring maximum profitability while remaining competitive.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      benefits: [
        "Increase profit margins by up to 40%",
        "Reduce pricing errors and inconsistencies",
        "Real-time market analysis integration",
        "Customizable pricing rules and parameters"
      ]
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with profit margin analysis and performance tracking",
      detailedDescription: "Get deep insights into your business performance with our comprehensive analytics suite. Track profit margins, project success rates, client satisfaction scores, and team productivity metrics through intuitive dashboards and detailed reports.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      benefits: [
        "Real-time performance monitoring",
        "Profit margin optimization insights",
        "Client behavior analysis",
        "Predictive business forecasting"
      ]
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Project Management",
      description: "End-to-end project tracking from estimation to completion and billing",
      detailedDescription: "Streamline your entire project lifecycle with our integrated project management tools. From initial estimation and client approval to task assignment, progress tracking, and final billing - everything is connected and automated.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      benefits: [
        "Automated project milestone tracking",
        "Resource allocation optimization",
        "Client communication hub",
        "Integrated time tracking and billing"
      ]
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure Payments",
      description: "Integrated Stripe payments with automated invoicing and payment tracking",
      detailedDescription: "Accept payments securely with our Stripe integration. Generate professional invoices automatically, track payment status in real-time, and handle recurring billing effortlessly. Support for multiple payment methods and currencies.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      benefits: [
        "PCI compliant payment processing",
        "Automated invoice generation",
        "Multi-currency support",
        "Recurring billing automation"
      ]
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Team Collaboration",
      description: "Multi-user workspaces with role-based permissions and real-time updates",
      detailedDescription: "Enable seamless collaboration across your entire team with role-based access controls, real-time notifications, and shared workspaces. Keep everyone aligned with project updates, client communications, and task assignments.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      benefits: [
        "Role-based access control",
        "Real-time collaboration tools",
        "Team performance tracking",
        "Integrated communication channels"
      ]
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Automation",
      description: "Automated quote generation, follow-ups, and client communication workflows",
      detailedDescription: "Reduce manual work with intelligent automation. Automatically generate quotes based on project parameters, send follow-up emails to prospects, and trigger client communications based on project milestones and deadlines.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      benefits: [
        "Automated quote generation",
        "Smart follow-up sequences",
        "Workflow automation rules",
        "Client communication templates"
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

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Feature List - Left Side */}
            <div className="space-y-4">
              <ScrollArea className="h-[600px] pr-4">
                {keyFeatures.map((feature, index) => (
                  <Card 
                    key={index} 
                    className={`mb-4 cursor-pointer transition-all duration-300 ${
                      selectedFeature === index 
                        ? 'bg-primary/10 border-primary/50 shadow-lg' 
                        : 'bg-gradient-card hover:bg-muted/30'
                    }`}
                    onClick={() => setSelectedFeature(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          selectedFeature === index 
                            ? 'bg-primary/30 scale-110' 
                            : 'bg-primary/20'
                        }`}>
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground leading-relaxed text-sm">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </ScrollArea>
            </div>

            {/* Feature Details - Right Side */}
            <div className="sticky top-24">
              <Card className="bg-gradient-card border border-border/10 overflow-hidden rounded-3xl">
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
                        {keyFeatures[selectedFeature].icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {keyFeatures[selectedFeature].title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8 space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {keyFeatures[selectedFeature].detailedDescription}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Key Benefits:</h4>
                    <div className="grid gap-2">
                      {keyFeatures[selectedFeature].benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
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
