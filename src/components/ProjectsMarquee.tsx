
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsMarquee = () => {
  const projects = [
    {
      id: 1,
      name: "AfterHire",
      tagline: "HR Onboarding Platform",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      category: "SaaS Platform"
    },
    {
      id: 2,
      name: "PriceUp",
      tagline: "Smart Pricing Engine",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      category: "Business Tool"
    },
    {
      id: 3,
      name: "Pipa",
      tagline: "AgriTech CRM Solution",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      category: "Industry Platform"
    },
    {
      id: 4,
      name: "DataSync",
      tagline: "Analytics Dashboard",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      category: "Data Platform"
    },
    {
      id: 5,
      name: "TechFlow",
      tagline: "Workflow Automation",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      category: "Automation"
    },
    {
      id: 6,
      name: "CloudVault",
      tagline: "Document Management",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      category: "Enterprise"
    },
    {
      id: 7,
      name: "StreamLine",
      tagline: "Project Management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Productivity"
    }
  ];

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section className="relative -mt-16 pb-8 overflow-hidden bg-gradient-to-b from-transparent to-background/50">
      {/* Gradient overlays for smooth fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10"></div>
      
      {/* Marquee Container */}
      <div className="relative">
        <div className="flex animate-marquee hover:pause-marquee">
          {duplicatedProjects.map((project, index) => (
            <Card 
              key={`${project.id}-${index}`} 
              className="flex-shrink-0 w-80 h-48 mx-3 bg-gradient-card card-blur hover-glow group cursor-pointer border border-border/20 overflow-hidden transform hover:scale-105 transition-all duration-500"
              style={{
                transform: `rotate(${(index % 3 - 1) * 2}deg)`,
                zIndex: index % 2 === 0 ? 2 : 1
              }}
            >
              <div className="relative w-full h-full">
                <img 
                  src={project.image} 
                  alt={`${project.name} project preview`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-primary/20 text-primary border-primary/30 mb-2 text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="text-white font-bold text-lg mb-1">{project.name}</h3>
                  <p className="text-white/80 text-sm">{project.tagline}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom section info */}
      <div className="text-center mt-8 px-6">
        <p className="text-muted-foreground text-sm">
          <span className="text-primary font-medium">30+ Projects Delivered</span> • Trusted by Founders Worldwide
        </p>
      </div>
    </section>
  );
};

export default ProjectsMarquee;
