import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Zap, Shield, MessageSquare, CheckCircle, Users, Clock, AlertTriangle, BarChart3 } from 'lucide-react';
import CaseStudyTestimonials from '@/components/CaseStudyTestimonials';

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
      icon: CheckCircle,
      title: "Task & Job Management", 
      subtitle: "Clear Visual Operations",
      description: "The old system of phone calls and text messages was a recipe for confusion. We built a clear, visual task management system that allows managers to assign jobs to specific employees, paddocks, or teams. Everyone knows exactly what they need to do and when, providing a single source of truth for the entire farm's operations and eliminating endless phone tag.",
      image: "/lovable-uploads/601f79ac-c0c7-4a7d-8b76-4f27b8481f42.png",
      benefits: [
        "Clear task assignment and tracking",
        "Elimination of phone tag communication",
        "Single source of truth for operations",
        "Visual management interface"
      ]
    },
    {
      icon: Clock,
      title: "Automated Timesheets & Reporting",
      subtitle: "Simplified Payroll Process", 
      description: "Manual paper timesheets were inefficient and prone to errors, making payroll a nightmare. We implemented a simple, in-app time tracking feature that allows employees to log their hours against specific jobs. This data feeds into automated reports, giving managers crystal-clear visibility into labor costs and dramatically simplifying the entire payroll process.",
      image: "/lovable-uploads/e8e6d3da-864c-4954-9677-42fff838a4e0.png",
      benefits: [
        "Automated time tracking",
        "Error-free payroll processing",
        "Real-time labor cost visibility", 
        "Simplified administrative tasks"
      ]
    },
    {
      icon: MessageSquare,
      title: "Centralized Team Communication",
      subtitle: "Real-time Coordination",
      description: "Communication is the lifeblood of a farm, but relying on personal text messages leads to missed information and a lack of clear records. We implemented a secure, real-time chat feature directly within the Pipa platform. This gives teams a centralized place for all job-related communication, ensuring everyone is working from the same information, at the same time.",
      image: "/lovable-uploads/98f7553d-37a5-4b43-bc7e-4cfd07404a8a.png",
      benefits: [
        "Centralized communication hub",
        "Real-time messaging",
        "Complete communication history",
        "Improved team coordination"
      ]
    },
    {
      icon: Shield,
      title: "Safety & Compliance Management", 
      subtitle: "Comprehensive Safety Culture",
      description: "Safety is paramount on a farm. We built a dedicated safety module to manage and track safety briefings, pre-start checklists, and incident reports. This creates a clear, auditable trail, reduces administrative burden, and helps farm managers foster a powerful safety culture.",
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
      description: "Application Stability Improvement"
    },
    {
      metric: "75%",
      description: "Reduction in Communication Overhead"
    },
    {
      metric: "90%",
      description: "Faster Payroll Processing"
    },
    {
      metric: "50%",
      description: "Increase in User Adoption"
    }
  ];

  const challenges = [
    {
      icon: AlertTriangle,
      text: "Unstable Application & Frequent Crashes - The app was unreliable in the field, leading to user frustration and a lack of trust in the platform."
    },
    {
      icon: BarChart3,
      text: "Blocked Business Growth - The team couldn't pursue new sales opportunities because they knew the technology couldn't handle more users."
    },
    {
      icon: Users,
      text: "Poor User Experience - A slow and confusing interface made it difficult for farm managers and workers to adopt the platform."
    },
    {
      icon: Zap,
      text: "Incomplete & Unreliable Backend - The root cause was an unfinished and poorly architected backend that couldn't support the app's core functions."
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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const featureIndex = parseInt(entry.target.getAttribute('data-feature-index') || '0');
          setVisibleFeature(featureIndex);
        }
      });
    }, observerOptions);

    keyFeatures.forEach((_, index) => {
      const element = document.querySelector(`[data-feature-index="${index}"]`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              How We Rescued & Scaled a Mission-Critical Farm Management Platform
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              People in Paddocks (Pipa) was built on a powerful vision: to bring order to the chaos of managing a mobile farm workforce. They had a promising initial application, but it was plagued by critical bugs and an unstable backend that stalled their growth. We partnered with them to take over the project, transforming their unreliable app into a professional, scalable business asset.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/lovable-uploads/6bf601b4-a24e-442c-9f60-25a4a6ec00db.png" 
              alt="Pipa Farm Management Platform Dashboard"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              onError={(e) => {
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Problem</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Pipa was running on an application that couldn't support its business goals. The system was creating constant frustration for users with frequent crashes, data inconsistencies, and a slow, confusing user experience. This technical instability created a massive business problem: it <strong>prevented the Pipa team from confidently onboarding new farms and scaling their operations</strong>, threatening the entire venture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-destructive/10">
                      <challenge.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{challenge.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Features That Drive Results</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We conducted a deep audit and executed a three-phase mission: <strong>Stabilize, Rebuild, and Enhance.</strong> The result was a robust platform with the critical features farm managers need to operate with clarity and confidence.
            </p>
          </div>

          {keyFeatures.map((feature, index) => (
            <div
              key={index}
              data-feature-index={index}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {feature.subtitle}
                  </Badge>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <img 
                  src={feature.image}
                  alt={`${feature.title} interface`}
                  className="w-full rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Impact</h2>
            <p className="text-lg text-muted-foreground">
              The transformation delivered measurable business results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {result.metric}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built with Modern Technology</h2>
            <p className="text-lg text-muted-foreground">
              We chose the right tools for reliability, performance, and cross-platform compatibility.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm font-medium">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Client Says</h2>
            <p className="text-lg text-muted-foreground">
              Hear directly from the Pipa team about how we transformed their platform.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card hover-glow">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-8">
                  <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                    "{testimonials[0].text}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-xl">
                        {testimonials[0].author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-lg">{testimonials[0].author}</p>
                      <p className="text-muted-foreground">
                        {testimonials[0].company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build (or Rescue) Your Next Platform?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a solution that drives real business impact, just like we did with Pipa.
          </p>
          <Button 
            onClick={() => window.open('https://cal.com/mbilal/cubiler-tech', '_blank')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2024 Cubiler Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PipaCaseStudy;