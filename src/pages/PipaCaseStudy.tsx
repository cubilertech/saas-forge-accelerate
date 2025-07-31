import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  ArrowLeft, 
  ArrowRight,
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
  Server,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CaseStudyTestimonials from "@/components/CaseStudyTestimonials";

const PipaCaseStudy = () => {
  const navigate = useNavigate();
  const [visibleFeature, setVisibleFeature] = useState(0);

  const techStack = [
    "Flutter",
    "Node.js", 
    "TypeScript",
    "MongoDB",
    "AWS",
    "React"
  ];

  const keyFeatures = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Task & Job Management", 
      subtitle: "Clear Visual Operations",
      detailedDescription: "The old system of phone calls and text messages was a recipe for confusion. We built a clear, visual task management system that allows managers to assign jobs to specific employees, paddocks, or teams. Everyone knows exactly what they need to do and when, providing a single source of truth for the entire farm's operations and eliminating endless phone tag.",
      image: "/lovable-uploads/601f79ac-c0c7-4a7d-8b76-4f27b8481f42.png",
      benefits: [
        "Clear task assignment and tracking",
        "Elimination of phone tag communication",
        "Single source of truth for operations",
        "Visual management interface"
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Automated Timesheets & Reporting",
      subtitle: "Simplified Payroll Process", 
      detailedDescription: "Manual paper timesheets were inefficient and prone to errors, making payroll a nightmare. We implemented a simple, in-app time tracking feature that allows employees to log their hours against specific jobs. This data feeds into automated reports, giving managers crystal-clear visibility into labor costs and dramatically simplifying the entire payroll process.",
      image: "/lovable-uploads/e8e6d3da-864c-4954-9677-42fff838a4e0.png",
      benefits: [
        "Automated time tracking",
        "Error-free payroll processing",
        "Real-time labor cost visibility", 
        "Simplified administrative tasks"
      ]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Centralized Team Communication",
      subtitle: "Real-time Coordination",
      detailedDescription: "Communication is the lifeblood of a farm, but relying on personal text messages leads to missed information and a lack of clear records. We implemented a secure, real-time chat feature directly within the Pipa platform. This gives teams a centralized place for all job-related communication, ensuring everyone is working from the same information, at the same time.",
      image: "/lovable-uploads/98f7553d-37a5-4b43-bc7e-4cfd07404a8a.png",
      benefits: [
        "Centralized communication hub",
        "Real-time messaging",
        "Complete communication history",
        "Improved team coordination"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety & Compliance Management", 
      subtitle: "Comprehensive Safety Culture",
      detailedDescription: "Safety is paramount on a farm. We built a dedicated safety module to manage and track safety briefings, pre-start checklists, and incident reports. This creates a clear, auditable trail, reduces administrative burden, and helps farm managers foster a powerful safety culture.",
      image: "/lovable-uploads/6862c2e1-772c-499a-97a5-4407dd166dcf.png",
      benefits: [
        "Digital safety briefings",
        "Automated compliance tracking",
        "Incident reporting system",
        "Auditable safety records"
      ]
    }
  ];

  const results = [
    {
      metric: "100%",
      description: "Application Stability Improvement",
      icon: <Target className="h-8 w-8 text-primary" />
    },
    {
      metric: "75%",
      description: "Reduction in Communication Overhead",
      icon: <Users className="h-8 w-8 text-primary" />
    },
    {
      metric: "90%",
      description: "Faster Payroll Processing",
      icon: <TrendingUp className="h-8 w-8 text-primary" />
    },
    {
      metric: "50%",
      description: "Increase in User Adoption",
      icon: <Clock className="h-8 w-8 text-primary" />
    }
  ];

  const challenges = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-destructive" />,
      text: "Unstable Application & Frequent Crashes"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-destructive" />,
      text: "Blocked Business Growth"
    },
    {
      icon: <Users className="h-6 w-6 text-destructive" />,
      text: "Poor User Experience"
    },
    {
      icon: <Zap className="h-6 w-6 text-destructive" />,
      text: "Incomplete & Unreliable Backend"
    }
  ];

  const solutions = [
    "Complete backend architecture rebuild",
    "Performance optimization and stability improvements", 
    "Intuitive UI/UX redesign",
    "Comprehensive testing and quality assurance",
    "Scalable infrastructure implementation"
  ];

  const testimonials = [
    {
      text: "We were stuck with an unstable app that was holding our business hostage. Cubiler Technologies didn't just fix the bugs; they re-architected the foundation and gave us a platform we could finally trust to build our business on. They are true technical partners who took the time to understand our vision and deliver a rock-solid solution.",
      author: "Managing Partner",
      company: "People in Paddocks",
      type: "text" as const
    }
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
                People in Paddocks
              </Badge>
            </div>

            {/* Title and Subtitle */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                How We Rescued & Scaled a{" "}
                <span className="text-gradient-primary">Mission-Critical Farm Management Platform</span>
              </h1>
              <p className="hidden md:block text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                People in Paddocks (Pipa) was built on a powerful vision: to bring order to the chaos of managing a mobile farm workforce. They had a promising initial application, but it was plagued by critical bugs and an unstable backend that stalled their growth. We partnered with them to take over the project, transforming their unreliable app into a professional, scalable business asset.
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative pt-12">
              <div className="relative max-w-4xl mx-auto">
                <Card className="bg-gradient-card border border-border/10 overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="/lovable-uploads/6bf601b4-a24e-442c-9f60-25a4a6ec00db.png"
                    alt="Pipa Farm Management Platform Dashboard"
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
              Pipa was running on an application that couldn't support its business goals. The system was creating constant frustration for users with frequent crashes, data inconsistencies, and a slow, confusing user experience. This technical instability created a massive business problem: it <strong>prevented the Pipa team from confidently onboarding new farms and scaling their operations</strong>, threatening the entire venture.
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
            We conducted a deep audit and executed a three-phase mission: <strong>Stabilize, Rebuild, and Enhance.</strong> The result was a robust platform with the critical features farm managers need to operate with clarity and confidence.
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
                      
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Results Section */}
      <section className="px-6 py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Measurable Impact on Business Growth
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              The transformation delivered measurable business results
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
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We chose the right tools for reliability, performance, and cross-platform compatibility
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
                Ready to Build (or Rescue) Your Next{" "}
                <span className="text-primary">Platform?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can create a solution that drives real business impact, just like we did with Pipa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base rounded-xl font-semibold group"
                  onClick={() => window.open('https://cal.com/mbilal/cubiler-tech', '_blank')}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b2c5f819-1256-4a43-892f-c6b656d73bf5.png" 
                alt="CUBILER Technologies" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; 2024 CUBILER Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PipaCaseStudy;