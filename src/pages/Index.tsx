
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  Rocket, 
  Building2, 
  Plus, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Target,
  Search,
  MapPin,
  Zap,
  ArrowRight,
  Quote,
  Menu,
  X,
  Play
} from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      id: 1,
      quote: "Working with this team was a game-changer. They didn't just write code; they understood our business goals and built a platform that was scalable from day one. I finally have a technical partner I can trust.",
      name: "John Doe",
      company: "Founder of AfterHire",
      initials: "JD",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      quote: "The development process was smooth and transparent. They delivered exactly what we needed on time and within budget. Our SaaS platform now handles thousands of users without any issues.",
      name: "Sarah Chen",
      company: "CEO of TechFlow",
      initials: "SC",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      quote: "I was impressed by their technical expertise and business understanding. They helped us pivot our MVP into a product that actually resonates with our target market.",
      name: "Michael Rodriguez",
      company: "Founder of DataSync",
      initials: "MR",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-500/5 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-20 w-96 h-96 bg-gradient-to-l from-green-500/3 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-t from-green-500/3 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Transparent Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-white">
              SaaS Partner
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('services')}
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors"
              >
                Process
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
              >
                Get Started
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg glass-effect"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-4">
              <button 
                onClick={() => {
                  scrollToSection('services');
                  setIsMenuOpen(false);
                }}
                className="block text-sm font-medium text-gray-300 hover:text-green-400 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => {
                  scrollToSection('case-studies');
                  setIsMenuOpen(false);
                }}
                className="block text-sm font-medium text-gray-300 hover:text-green-400 transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => {
                  scrollToSection('process');
                  setIsMenuOpen(false);
                }}
                className="block text-sm font-medium text-gray-300 hover:text-green-400 transition-colors"
              >
                Process
              </button>
              <Button 
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium"
              >
                Get Started
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-32 lg:py-40 overflow-hidden bg-gradient-hero bg-mesh">
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-effect border border-green-500/20 mb-8">
              <span className="text-sm font-medium text-green-400">✨ Trusted by 30+ SaaS Founders</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Go From <span className="text-green-400">MVP</span> to{" "}
              <br className="hidden md:block" />
              <span className="text-white">Scalable SaaS</span>, Faster.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              You have a powerful vision for a SaaS product. You need more than just freelancers—you need a reliable technical partner to build a robust platform that wins customers and attracts investors. 
              <span className="text-green-400 font-medium"> We are that partner.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 group"
              >
                Book a Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('case-studies')}
                className="glass-effect border-white/20 text-white px-6 py-4 text-lg font-medium rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section 
        id="social-proof" 
        data-animate 
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('social-proof') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Founders, Backed by{" "}
              <span className="text-green-400">Proven Results</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 items-start">
            {/* Testimonial Carousel - Takes 3 columns */}
            <div className="lg:col-span-3">
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                      <Card className="bg-gradient-card card-blur hover-glow group">
                        <CardContent className="p-8">
                          <Quote className="h-8 w-8 text-green-400 mb-6" />
                          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4">
                                {testimonial.initials}
                              </div>
                              <div>
                                <p className="font-semibold text-white">{testimonial.name}</p>
                                <p className="text-green-400 text-sm">{testimonial.company}</p>
                              </div>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button 
                                  variant="outline" 
                                  className="glass-effect border-green-500/30 text-green-400 hover:bg-green-500/10 rounded-lg px-4 py-2 text-sm group"
                                >
                                  <Play className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                                  Watch Video
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="max-w-4xl w-full bg-gray-900 border-gray-800">
                                <div className="aspect-video w-full bg-gray-800 rounded-lg flex items-center justify-center">
                                  <div className="text-center">
                                    <Play className="h-16 w-16 text-green-400 mx-auto mb-4" />
                                    <p className="text-white text-lg mb-2">Video Testimonial</p>
                                    <p className="text-gray-400 text-sm">{testimonial.name} - {testimonial.company}</p>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="glass-effect border-green-500/30 text-green-400 hover:bg-green-500/10" />
                <CarouselNext className="glass-effect border-green-500/30 text-green-400 hover:bg-green-500/10" />
              </Carousel>
            </div>

            {/* Proven Results - Takes 1 column */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Rocket className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1">30+ SaaS & Web Apps Launched</h3>
                  <p className="text-gray-400 text-xs">We have a proven playbook for taking products to market.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1">8+ Years of Experience</h3>
                  <p className="text-gray-400 text-xs">Senior-level expertise in building complex, reliable systems.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-1">100% Client Success Rate</h3>
                  <p className="text-gray-400 text-xs">We operate as a long-term partner, not a one-time vendor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        data-animate 
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Worrying About Technology.{" "}
              <span className="text-green-400">Focus on Your Business.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We offer clear, packaged solutions designed to meet you where you are—from a fresh idea to a growing platform.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-white/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">MVP Development</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Have a brilliant idea? We'll take it from a concept to a launch-ready, high-quality Minimum Viable Product in a fixed timeframe. Our focus is on building the core features that deliver immediate value.
                </p>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1 text-sm">
                  Best for: Founders at the idea or pre-seed stage
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-white/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Feature Expansion & Scaling</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Your product has traction, but your roadmap is long and your current team is stretched thin. We integrate seamlessly with your existing developers to accelerate your feature velocity.
                </p>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1 text-sm">
                  Best for: Funded startups needing to build faster
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card hover-glow group overflow-hidden border border-white/10">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Plus className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Dedicated Team Partner</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Need dedicated senior talent without the headache of hiring? We provide experienced Next.js and Node.js developers who act as a true extension of your team.
                </p>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1 text-sm">
                  Best for: Teams needing to add senior capacity quickly
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        id="case-studies" 
        data-animate 
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('case-studies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Work: From Complex Problems to{" "}
              <span className="text-green-400">Elegant Solutions</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-card card-blur hover-glow group overflow-hidden border border-white/10">
              <div className="h-48 bg-gradient-to-br from-green-500/10 to-green-500/5 flex items-center justify-center relative overflow-hidden">
                <Users className="h-16 w-16 text-green-400 relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-2 py-1 text-xs">
                    AfterHire
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">Building a Multi-Tenant HR Onboarding SaaS Platform</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  AfterHire needed a robust platform to help companies automate their employee onboarding workflows. We architected and built the entire system from the ground up.
                </p>
                <Button variant="outline" className="w-full glass-effect border-green-500/30 text-green-400 hover:bg-green-500/10 rounded-lg py-2 text-sm">
                  View Full Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card card-blur hover-glow group overflow-hidden border border-white/10">
              <div className="h-48 bg-gradient-to-br from-green-500/10 to-green-500/5 flex items-center justify-center relative overflow-hidden">
                <Target className="h-16 w-16 text-green-400 relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-2 py-1 text-xs">
                    PriceUp
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">Developing an End-to-End Estimation & Invoicing Platform</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  We built a full-fledged system for the service industry to manage complex quotes, project tracking, and invoicing, turning chaos into streamlined operations.
                </p>
                <Button variant="outline" className="w-full glass-effect border-green-500/30 text-green-400 hover:bg-green-500/10 rounded-lg py-2 text-sm">
                  View Full Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card card-blur hover-glow group overflow-hidden border border-white/10">
              <div className="h-48 bg-gradient-to-br from-green-500/10 to-green-500/5 flex items-center justify-center relative overflow-hidden">
                <MapPin className="h-16 w-16 text-green-400 relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-2 py-1 text-xs">
                    Pipa
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">Creating a Custom CRM & Task Management System</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  We developed a specialized CRM for the agriculture industry to manage farm employees, coordinate tasks, and track project progress in one platform.
                </p>
                <Button variant="outline" className="w-full glass-effect border-green-500/30 text-green-400 hover:bg-green-500/10 rounded-lg py-2 text-sm">
                  View Full Case Study
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        id="process" 
        data-animate 
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              No Chaos. No Surprises.{" "}
              <span className="text-green-400">Just a Professional Process.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We believe that building great software requires a great system. This is our four-step promise to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Search className="h-8 w-8 text-green-400" />
              </div>
              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Step 1
              </div>
              <h3 className="text-lg font-bold mb-3">Deep Discovery & Strategy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We start by becoming experts in your business. We dive deep into your goals, your users, and your metrics for success.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-green-400" />
              </div>
              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Step 2
              </div>
              <h3 className="text-lg font-bold mb-3">Architecture & Roadmapping</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We design a scalable and secure technical architecture, then map out a clear feature roadmap broken into two-week sprints.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Step 3
              </div>
              <h3 className="text-lg font-bold mb-3">Agile Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                You get constant visibility with regular check-ins and direct access to a project manager. Working software every two weeks.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Step 4
              </div>
              <h3 className="text-lg font-bold mb-3">Quality Assurance & Launch</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rigorous testing ensures your platform is reliable, bug-free, and ready for your first users. We handle the deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        id="contact" 
        data-animate 
        className={`px-6 py-20 transition-all duration-1000 ${isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-card card-blur rounded-2xl p-10 lg:p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Turn Your Vision into a{" "}
              <span className="text-green-400">High-Growth SaaS Business?</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's have a conversation. We offer a free, no-obligation 30-minute strategy session where we can dive into your project, offer some initial technical insights, and see if we're the right partner to help you succeed.
            </p>
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 group mb-4"
            >
              Book Your Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-gray-500">
              No high-pressure sales tactics. Just a genuine conversation about building great software.
            </p>
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-3">
            SaaS Partner
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 SaaS Development Partner. Ready to build something amazing together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
