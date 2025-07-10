
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

const PriceUpCaseStudy = () => {
  const navigate = useNavigate();

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
      description: "Intelligent pricing algorithms that adapt to market conditions and project complexity"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with profit margin analysis and performance tracking"
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Project Management",
      description: "End-to-end project tracking from estimation to completion and billing"
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure Payments",
      description: "Integrated Stripe payments with automated invoicing and payment tracking"
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Team Collaboration",
      description: "Multi-user workspaces with role-based permissions and real-time updates"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Automation",
      description: "Automated quote generation, follow-ups, and client communication workflows"
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

      {/* Key Features */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-card hover-glow group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
