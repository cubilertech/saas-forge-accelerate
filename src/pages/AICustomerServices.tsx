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
      icon: <div className="flex items-center space-x-2"><Phone className="h-8 w-8" /><MessageCircle className="h-8 w-8" /></div>,
      title: "Missed Calls & Delayed Replies",
      description: "Your phone rings, your WhatsApp buzzes, and a website chat pops up—often while you're busy. Every missed or delayed response is a potential lost job."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Wasted Time on Repetitive Questions",
      description: "Your team spends hours typing and saying the same things all day: \"What are your hours?\", \"Can I book a time?\", \"Do you service my area?\"."
    },
    {
      icon: <ArrowRightLeft className="h-8 w-8" />,
      title: "Chaotic, Disconnected Systems",
      description: "A lead's info comes in via Telegram, their appointment is in Google Calendar, and their customer history is in your CRM. Nothing is connected, leading to manual data entry and costly mistakes."
    }
  ];

  const features = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: "Be Everywhere for Your Customers, 24/7",
      subtitle: "Multi-Channel AI Agent",
      description: "We deploy your custom AI agent across all the channels your customers use: Voice Calls, Website Chat, WhatsApp, Telegram, Facebook Messenger, and more. No matter how they contact you, they get an instant, intelligent, and professional response."
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Stop Wasting Time on Unqualified Leads",
      subtitle: "Automated Lead Qualification",
      description: "The AI agent acts as your perfect front desk, asking the right questions to qualify leads based on your specific criteria (like service area, budget, or job type). It then automatically creates and tags these qualified leads in your CRM for your sales team to prioritize."
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "Book Appointments & Update Records, Instantly",
      subtitle: "Seamless CRM & Calendar Integration",
      description: "Once a lead is qualified, the AI can book them directly into your calendar and simultaneously update their record in your CRM with the conversation transcript and appointment details. This eliminates all manual data entry and ensures your customer data is always perfectly in sync."
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Automate Your Client Journey, from First Contact to Final Invoice",
      subtitle: "Intelligent Follow-ups & Reminders",
      description: "Our system can trigger intelligent follow-ups across any channel. We can send appointment reminders via SMS, follow up with a quote on WhatsApp, and even re-engage past clients with a new offer via email, all automatically."
    }
  ];

  const steps = [
    {
      number: 1,
      title: "The Conversation Deep Dive",
      description: "In our 30-minute discovery call, we map out your ideal customer conversation. We learn your most common questions, your qualification process, and the channels you want to automate."
    },
    {
      number: 2,
      title: "We Build & Integrate Your AI System",
      description: "Our team builds your custom AI agent and connects it securely to your communication channels (phone, WhatsApp, etc.) and your core business software (CRM, Calendar)."
    },
    {
      number: 3,
      title: "Go Live & Unify Your Communication",
      description: "Your system goes live. You now have a single, unified engine handling your client intake across all channels, freeing up your team to focus on high-value work."
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
              Never Miss a Lead Again.{" "}
              <span className="text-primary">Automate Your Customer Conversations</span>{" "}
              on Any Channel.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              Your customers are trying to reach you everywhere—phone calls, website chat, WhatsApp, and social media. 
              We build a single, intelligent AI system that manages all these conversations for you, 24/7. 
              It qualifies leads, books appointments, and updates your CRM, ensuring no customer ever falls through the cracks.
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
              Are You <span className="text-primary">Drowning in Customer Inquiries?</span>
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
              One Intelligent System to Manage{" "}
              <span className="text-primary">All Your Customer Conversations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We deploy a powerful Conversational AI that acts as your central hub for client intake, 
              integrating seamlessly with all your communication channels and business software.
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <Card className="bg-gradient-card hover-glow group overflow-hidden border border-border/10 h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="text-primary group-hover:scale-110 transition-transform mr-4">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-1">{feature.subtitle}</h4>
                          <h3 className="text-2xl font-bold">{feature.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="text-primary opacity-20">
                      {feature.icon}
                      <div className="text-6xl mt-4 font-bold">AI</div>
                    </div>
                  </div>
                </div>
              </div>
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
              <span className="text-primary">Live in a Few Weeks</span>, Automated Forever
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
                Ready to See Your Business{" "}
                <span className="text-primary">Run on Autopilot?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Book a free, 15-minute live demo. We'll show you exactly how a single AI system can manage 
                your phone calls, website chat, and WhatsApp messages to save you time and grow your business.
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