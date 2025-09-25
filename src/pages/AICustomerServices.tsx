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
  Play
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
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  const demoUrl = 'https://cal.com/mbilal/ai-demo';
  const bookDemoUrl = 'https://cal.com/mbilal/free-demo';

  const problems = [
    {
      icon: <div className="relative"><Phone className="h-8 w-8" /><div className="absolute -top-1 -right-1 text-red-500 text-2xl">✕</div></div>,
      title: "Missed Opportunities",
      description: "Every missed call and delayed WhatsApp reply is a lead given directly to your competitor. Your busiest hours are costing you the most money."
    },
    {
      icon: <div className="relative"><Clock className="h-8 w-8" /><ArrowRightLeft className="h-4 w-4 absolute -top-1 -right-1" /></div>,
      title: "Wasted Team Effort",
      description: "Your skilled team is wasting hours on repetitive, low-value work—answering basic questions and playing phone tag instead of closing deals and serving customers."
    },
    {
      icon: <ArrowRightLeft className="h-8 w-8" />,
      title: "Manual Data Chaos",
      description: "Critical customer information is lost when your team has to manually copy-paste details between your chat, calendar, and CRM. This leads to costly errors and a poor customer experience."
    }
  ];

  const features = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: "Capture Every Conversation, 24/7",
      subtitle: "Conversational AI Agents",
      description: "We build and train a custom AI agent on your business data. It answers customer inquiries instantly and professionally across any channel you use—Voice, Website Chat, WhatsApp, and more."
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Connect Your Tools, End the Chaos",
      subtitle: "Deep Software Integration", 
      description: "We integrate your AI agent directly with your CRM, calendar, and other core software. It automatically books appointments and updates customer records, eliminating manual data entry for good."
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Automate Your Growth",
      subtitle: "Proactive Follow-Up Engine",
      description: "We build proactive sequences to turn your agent into a growth engine. It can send appointment reminders to reduce no-shows, follow up on quotes, and re-engage past clients to win more business."
    }
  ];

  const customFeatures = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Perfectly Aligned with Your Business",
      description: "A pre-built bot uses generic scripts. We train your custom agent on *your* business—it learns your services, pricing, and unique brand voice for a seamless customer experience."
    },
    {
      icon: <div className="flex items-center"><Target className="h-6 w-6" /><Target className="h-6 w-6 -ml-2" /></div>,
      title: "Deep, Flexible Integrations",
      description: "Generic solutions have basic integrations. We build deep, custom connections to your specific CRM and software, triggering workflows *exactly* the way you need them to."
    },
    {
      icon: <div className="text-green-500"><Target className="h-8 w-8" /></div>,
      title: "A Scalable, Future-Proof Asset",
      description: "An off-the-shelf tool is a monthly cost. Your custom-built agent is a business asset that grows with you. As your business evolves, we can adapt and expand its capabilities."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Discovery & Strategy",
      description: "We map your current workflow to find your biggest automation opportunities and define the ideal solution for the highest immediate impact."
    },
    {
      number: 2,
      title: "Custom Build & Integration",
      description: "Our expert team builds your tailored AI agent and connects it seamlessly to your existing business tools, with your feedback at every step."
    },
    {
      number: 3,
      title: "Launch & Support",
      description: "We deploy the system, train your team, and provide ongoing support to ensure your automation runs flawlessly and continues to deliver value as you grow."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-l from-primary/3 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-t from-primary/3 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
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
              onClick={() => window.open(bookDemoUrl, '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-all duration-300"
            >
              Book Free Demo
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
              <span className="text-primary">Automate Every Customer Conversation.</span>{" "}
              Never Miss a Lead Again.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              We don't sell pre-built bots. We build custom AI agents that are tailored to your exact business workflow, 
              integrated with your tools, and ready to capture every lead across all your communication channels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => window.open(demoUrl, '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
              >
                <Play className="mr-2 h-5 w-5" />
                See a Live Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section 
        id="problems" 
        data-animate 
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('problems') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
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
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('solution') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Tailored Solution for{" "}
              <span className="text-primary">Every Business Need</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We don't do one-size-fits-all. We build the exact modules you need to solve your biggest operational headaches, starting with what matters most to you.
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
                    <div className="text-primary mr-4 opacity-80">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">{feature.subtitle}</h4>
                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
            
            {/* Callout Box */}
            <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
              <p className="text-lg text-center font-medium">
                <span className="text-primary font-semibold">Start with what you need today. Scale when you're ready.</span> We can build a simple Voice AI booking agent or a full, multi-channel automation system. The solution is tailored to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Custom Section */}
      <section 
        id="why-custom" 
        data-animate 
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('why-custom') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why a <span className="text-primary">Custom-Built Agent</span> is a Smarter Investment
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Off-the-shelf chatbots are a cheap expense. A tailored automation system is a high-ROI business asset.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {customFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-card hover-glow group overflow-hidden border border-border/10">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Simple Process</span>, Powerful Results
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full font-bold text-lg mb-6 mx-auto group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-center">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        id="cta" 
        data-animate 
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-card hover-glow overflow-hidden border border-border/10">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your{" "}
                <span className="text-primary">Custom Automation Plan?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Book a free 15-minute demo. We'll show you how a tailored AI solution can solve your specific operational challenges and grow your business.
              </p>
              
              <Button 
                onClick={() => window.open(bookDemoUrl, '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 group"
              >
                Book My Free Demo
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
          <p className="text-sm text-muted-foreground">
            © 2024 Cubiler Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AICustomerServices;