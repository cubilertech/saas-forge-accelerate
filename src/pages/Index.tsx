
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Quote
} from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
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

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative px-4 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 opacity-30"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
              Go From MVP to 
              <span className="text-green-400"> Scalable SaaS</span>, Faster.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              You have a powerful vision for a SaaS product. You need more than just freelancers—you need a reliable technical partner to build a robust platform that wins customers and attracts investors. 
              <span className="text-green-400 font-semibold"> We are that partner.</span>
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
            >
              Book a Free Strategy Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section 
        id="social-proof" 
        data-animate 
        className={`px-4 py-20 transition-all duration-1000 ${isVisible('social-proof') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Founders, Backed by 
              <span className="text-green-400"> Proven Results</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-green-400 mb-4" />
                <p className="text-lg text-gray-300 mb-6 italic">
                  "Working with this team was a game-changer. They didn't just write code; they understood our business goals and built a platform that was scalable from day one. I finally have a technical partner I can trust."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-white">John Doe</p>
                    <p className="text-green-400">Founder of AfterHire</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">30+ SaaS & Web Apps Launched</h3>
                  <p className="text-gray-400">We have a proven playbook for taking products to market.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">8+ Years of Experience</h3>
                  <p className="text-gray-400">Senior-level expertise in building complex, reliable systems.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">100% Client Success Rate</h3>
                  <p className="text-gray-400">We operate as a long-term partner, not a one-time vendor.</p>
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
        className={`px-4 py-20 transition-all duration-1000 ${isVisible('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop Worrying About Technology. 
              <span className="text-green-400"> Focus on Your Business.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer clear, packaged solutions designed to meet you where you are—from a fresh idea to a growing platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <Rocket className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">MVP Development</h3>
                <p className="text-gray-300 mb-6">
                  Have a brilliant idea? We'll take it from a concept to a launch-ready, high-quality Minimum Viable Product in a fixed timeframe. Our focus is on building the core features that deliver immediate value.
                </p>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  Best for: Founders at the idea or pre-seed stage
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <Building2 className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Feature Expansion & Scaling</h3>
                <p className="text-gray-300 mb-6">
                  Your product has traction, but your roadmap is long and your current team is stretched thin. We integrate seamlessly with your existing developers to accelerate your feature velocity.
                </p>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                  Best for: Funded startups needing to build faster
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                  <Plus className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Dedicated Team Partner</h3>
                <p className="text-gray-300 mb-6">
                  Need dedicated senior talent without the headache of hiring? We provide experienced Next.js and Node.js developers who act as a true extension of your team.
                </p>
                <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
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
        className={`px-4 py-20 transition-all duration-1000 ${isVisible('case-studies') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Work: From Complex Problems to 
              <span className="text-green-400"> Elegant Solutions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                <Users className="h-16 w-16 text-green-400" />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">AfterHire</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">Building a Multi-Tenant HR Onboarding SaaS Platform</h3>
                <p className="text-gray-300 mb-4">
                  AfterHire needed a robust platform to help companies automate their employee onboarding workflows. We architected and built the entire system from the ground up.
                </p>
                <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10">
                  View Full Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <Target className="h-16 w-16 text-green-400" />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">PriceUp</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">Developing an End-to-End Estimation & Invoicing Platform</h3>
                <p className="text-gray-300 mb-4">
                  We built a full-fledged system for the service industry to manage complex quotes, project tracking, and invoicing, turning chaos into streamlined operations.
                </p>
                <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10">
                  View Full Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <MapPin className="h-16 w-16 text-green-400" />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Pipa</Badge>
                </div>
                <h3 className="text-xl font-bold mb-3">Creating a Custom CRM & Task Management System</h3>
                <p className="text-gray-300 mb-4">
                  We developed a specialized CRM for the agriculture industry to manage farm employees, coordinate tasks, and track project progress in one platform.
                </p>
                <Button variant="outline" className="w-full border-green-500/30 text-green-400 hover:bg-green-500/10">
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
        className={`px-4 py-20 transition-all duration-1000 ${isVisible('process') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              No Chaos. No Surprises. 
              <span className="text-green-400"> Just a Professional Process.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe that building great software requires a great system. This is our four-step promise to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-green-400" />
              </div>
              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Step 1
              </div>
              <h3 className="text-xl font-bold mb-4">Deep Discovery & Strategy</h3>
              <p className="text-gray-300">
                We start by becoming experts in your business. We dive deep into your goals, your users, and your metrics for success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-green-400" />
              </div>
              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Step 2
              </div>
              <h3 className="text-xl font-bold mb-4">Architecture & Roadmapping</h3>
              <p className="text-gray-300">
                We design a scalable and secure technical architecture, then map out a clear feature roadmap broken into two-week sprints.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-green-400" />
              </div>
              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Step 3
              </div>
              <h3 className="text-xl font-bold mb-4">Agile Development</h3>
              <p className="text-gray-300">
                You get constant visibility with regular check-ins and direct access to a project manager. Working software every two weeks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <div className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Step 4
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Assurance & Launch</h3>
              <p className="text-gray-300">
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
        className={`px-4 py-20 transition-all duration-1000 ${isVisible('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Turn Your Vision into a 
            <span className="text-green-400"> High-Growth SaaS Business?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's have a conversation. We offer a free, no-obligation 30-minute strategy session where we can dive into your project, offer some initial technical insights, and see if we're the right partner to help you succeed.
          </p>
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 mb-4"
          >
            Book Your Free Strategy Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-gray-400">
            No high-pressure sales tactics. Just a genuine conversation about building great software.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 SaaS Development Partner. Ready to build something amazing together.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
