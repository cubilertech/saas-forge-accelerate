import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Users, Clock, BarChart3, FileText, Workflow, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const AfterHireCaseStudy = () => {
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
      image: "/lovable-uploads/f948e02f-81d4-42c5-843f-29fba630f83b.png",
      benefits: [
        "Automated task assignment and scheduling",
        "Consistent experience for all new hires",
        "Reduced manual HR intervention by 60%"
      ]
    },
    {
      title: "Automated Task Management & Analytics",
      subtitle: "Assign tasks, track progress, and measure engagement automatically.",
      detailedDescription: "We replaced manual email follow-ups with an automated task management board and a powerful analytics dashboard. This gives HR managers a real-time, top-level view of their entire onboarding pipeline. They can see exactly where each new hire is in their journey and proactively identify who might need extra support.",
      image: "/lovable-uploads/730f9a9b-9f1a-45f4-8fa6-9c78262be023.png",
      benefits: [
        "Real-time progress tracking",
        "Proactive identification of at-risk hires",
        "Automated progress reporting"
      ]
    },
    {
      title: "Centralized Content & Form Management",
      subtitle: "Manage all documents, videos, and forms in one single source of truth.",
      detailedDescription: "AfterHire needed a way to consolidate all their training materials, policy documents, and information-gathering forms. We built a centralized content management system that allows them to create, manage, and version all their assets, ensuring that new hires always receive the most up-to-date information.",
      image: "/lovable-uploads/b96795e0-27a1-4201-b34d-6976610e44da.png",
      benefits: [
        "Version-controlled document management",
        "Dynamic form builder with multiple field types",
        "Centralized content library"
      ]
    },
    {
      title: "Scalable Multi-Tenant Architecture",
      subtitle: "Securely manage hundreds of client companies from a single, unified platform.",
      detailedDescription: "A foundational requirement was the ability to serve multiple B2B clients. We architected the platform with a secure, robust multi-tenant structure from day one. This allows AfterHire to segment data, branding, and workflows for each client, while managing everything from one central admin panel.",
      image: "/lovable-uploads/247d9edc-21bc-4393-a0a1-de4fa5709f05.png",
      benefits: [
        "Secure data isolation between clients",
        "Custom branding per client company",
        "Centralized administration dashboard"
      ]
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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30 py-24 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="w-fit">
                HR Tech SaaS Platform
              </Badge>
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  How We Built an HR Tech Platform that{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Reduced New Hire Time-to-Productivity by 40%
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  AfterHire's clients were struggling to provide a consistent and engaging onboarding experience for their distributed hires. The manual, scattered process was failing. We partnered with them to architect and build a powerful, multi-tenant SaaS platform from the ground up, transforming their operations into a streamlined, automated journey.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-fit">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="w-fit">
                  View Live Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border bg-background/50 backdrop-blur-sm p-4">
                <img
                  src="/lovable-uploads/730f9a9b-9f1a-45f4-8fa6-9c78262be023.png"
                  alt="AfterHire Dashboard"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              The Problem
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              AfterHire's core challenge was delivering a scalable and uniform onboarding process. Their clients were using a chaotic mix of scattered documents, manual email follow-ups, and static checklists. This resulted in an inconsistent experience for new hires, a heavy administrative burden for HR teams, and a critically slow ramp-up to full productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => {
              const IconComponent = problem.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{problem.title}</h3>
                  <p className="text-sm text-muted-foreground">{problem.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Powerful Features That Drive Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We built a comprehensive, end-to-end platform from scratch that transformed their chaotic processes into a streamlined, profitable, and scalable operation.
            </p>
          </div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Badge variant="secondary" className="w-fit">
                    Feature {index + 1}
                  </Badge>
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {feature.subtitle}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.detailedDescription}
                    </p>
                  </div>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <Card className="overflow-hidden">
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
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 mx-auto text-center">
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-muted-foreground">
              We chose the right tools for a scalable, secure, and high-performance platform.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <Card className="max-w-4xl mx-auto p-8 lg:p-12 text-center">
            <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
              "This platform completely transformed our service. We've eliminated manual errors and can now offer a world-class, automated onboarding experience to all our clients. The team didn't just build what we asked; they were true partners in our product's success and technical strategy."
            </blockquote>
            <div className="space-y-2">
              <p className="font-semibold text-lg">Client's Name</p>
              <p className="text-muted-foreground">Founder at AfterHire</p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Build Your Market-Defining SaaS Platform?
            </h2>
            <p className="text-xl opacity-90">
              Let's discuss how we can create a solution that drives real business impact, just like we did with AfterHire.
            </p>
            <Button size="lg" variant="secondary" className="mt-8">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfterHireCaseStudy;