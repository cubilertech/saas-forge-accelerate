import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Users, 
  Clock, 
  BarChart3, 
  FileText, 
  Workflow, 
  Settings 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import CaseStudyTestimonials from "@/components/CaseStudyTestimonials";

const AfterHireCaseStudy = () => {
  const navigate = useNavigate();

  const problems = [
    {
      icon: Users,
      title: "Inconsistent Onboarding",
      description: "Every new hire received a different experience, leading to confusion."
    },
    {
      icon: Clock,
      title: "Manual Admin Work", 
      description: "HR teams were spending dozens of hours per week on repetitive, low-value tasks."
    },
    {
      icon: BarChart3,
      title: "Lack of Scalability",
      description: "No ability to securely manage multiple client companies on one platform."
    },
    {
      icon: FileText,
      title: "Poor Engagement Tracking",
      description: "No visibility into which new hires were engaged or falling behind."
    }
  ];

  const features = [
    {
      title: "Dynamic Onboarding Workflows",
      subtitle: "Create custom, automated onboarding journeys for any role.",
      detailedDescription: "The core of the platform is a powerful workflow builder. This allows HR admins to ditch static checklists and create dynamic, step-by-step journeys for new hires. They can assign tasks, schedule check-ins, and deliver content automatically, ensuring every employee gets a consistent, world-class experience.",
      image: "/lovable-uploads/workflow-builder.png"
    },
    {
      title: "Automated Task Management & Analytics",
      subtitle: "Assign tasks, track progress, and measure engagement automatically.",
      detailedDescription: "We replaced manual email follow-ups with an automated task management board and a powerful analytics dashboard. This gives HR managers a real-time, top-level view of their entire onboarding pipeline. They can see exactly where each new hire is in their journey and proactively identify who might need extra support.",
      image: "/lovable-uploads/task-automation.png"
    },
    {
      title: "Centralized Content & Form Management",
      subtitle: "Manage all documents, videos, and forms in one single source of truth.",
      detailedDescription: "AfterHire needed a way to consolidate all their training materials, policy documents, and information-gathering forms. We built a centralized content management system that allows them to create, manage, and version all their assets, ensuring that new hires always receive the most up-to-date information.",
      image: "/lovable-uploads/Centralized-content.png"
    },
    {
      title: "Scalable Multi-Tenant Architecture",
      subtitle: "Securely manage hundreds of client companies from a single, unified platform.",
      detailedDescription: "A foundational requirement was the ability to serve multiple B2B clients. We architected the platform with a secure, robust multi-tenant structure from day one. This allows AfterHire to segment data, branding, and workflows for each client, while managing everything from one central admin panel.",
      image: "/lovable-uploads/Multi-tenant.png"
    }
  ];

  const techStack = [
    "Next.js",
    "TypeScript", 
    "Node.js",
    "GraphQL",
    "MongoDB",
    "Redux",
    "AWS"
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
            alt="Cubiler Technologies" 
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
                AfterHire
              </Badge>
            </div>

            {/* Title and Subtitle */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                How We Built an HR Tech Platform that{" "}
                <span className="text-gradient-primary">Reduced New Hire Time-to-Productivity by 40%</span>
              </h1>
              <p className="hidden md:block text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                AfterHire's clients were struggling to provide a consistent and engaging onboarding experience for their distributed hires. 
                The manual, scattered process was failing. We partnered with them to architect and build a powerful, multi-tenant SaaS platform 
                from the ground up, transforming their operations into a streamlined, automated journey.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative pt-12">
              <div className="relative max-w-4xl mx-auto">
                <Card className="bg-gradient-card border border-border/10 overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/dashboard-afterHire.png"
                    alt="AfterHire Dashboard"
                    className="w-full h-auto object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="px-6 py-16 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">The Problem</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AfterHire's core challenge was delivering a scalable and uniform onboarding process. Their clients were using a chaotic mix of scattered documents, manual email follow-ups, and static checklists. This resulted in an inconsistent experience for new hires, a heavy administrative burden for HR teams, and a critically slow ramp-up to full productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <Card key={index} className="bg-gradient-card hover-glow text-center p-4 border border-destructive/20">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-destructive/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-destructive" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                  </CardContent>
                </Card>
              );
            })}
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
            We built a comprehensive, end-to-end platform from scratch that transformed their chaotic processes into a streamlined, profitable, and scalable operation
          </p>
        </div>

        {features.map((feature, index) => (
          <div 
            key={index}
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
              We chose the right tools for a scalable, secure, and high-performance platform
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
                Ready to Build Your{" "}
                <span className="text-primary">Market-Defining SaaS Platform?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can create a solution that drives real business impact, just like we did with AfterHire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base rounded-xl font-semibold"
                  onClick={() => navigate('/')}
                >
                  Start Your Project
                </Button>
                <Button 
                  variant="outline" 
                  className="glass-effect border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 text-base rounded-xl font-semibold"
                  onClick={() => navigate('/')}
                >
                  View More Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png" 
                alt="Cubiler Technologies" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Cubiler Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AfterHireCaseStudy;