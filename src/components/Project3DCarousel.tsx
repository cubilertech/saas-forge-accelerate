
import { useEffect, useState, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';

interface ProjectData {
  id: number;
  name: string;
  tagline: string;
  description: string;
  keyMetric: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  caseStudyUrl?: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    name: "AfterHire",
    tagline: "HR onboarding platform that automates workflows",
    description: "A comprehensive HR platform that streamlines employee onboarding with automated workflows, digital document management, and progress tracking for enterprise clients.",
    keyMetric: "50% faster onboarding",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "TypeScript"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    liveUrl: "https://afterhire.com"
  },
  {
    id: 2,
    name: "PriceUp",
    tagline: "Intelligent estimation platform for service industries",
    description: "AI-powered pricing platform that helps service businesses generate accurate quotes instantly using machine learning algorithms and industry data analysis.",
    keyMetric: "40% more accurate quotes",
    techStack: ["React", "Python", "AI/ML", "MongoDB"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    liveUrl: "https://priceup.com",
    caseStudyUrl: "/case-study/priceup"
  },
  {
    id: 3,
    name: "Pipa",
    tagline: "CRM and task management for agriculture",
    description: "Specialized CRM solution for agricultural businesses with inventory tracking, crop management, and automated task scheduling for farm operations.",
    keyMetric: "60% improved efficiency",
    techStack: ["Vue.js", "Laravel", "MySQL", "AWS"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    liveUrl: "https://pipa.com"
  }
];

const Project3DCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
    containScroll: 'trimSnaps'
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || !isAutoPlaying) return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [emblaApi, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const getCardTransform = (index: number) => {
    const diff = index - selectedIndex;
    const absIndex = Math.abs(diff);
    
    if (absIndex === 0) {
      // Center card - larger and prominent
      return {
        transform: 'translateX(0) translateZ(50px) rotateY(0deg) scale(1.1)',
        opacity: 1,
        zIndex: 20,
        width: '400px'
      };
    } else if (absIndex === 1) {
      // Adjacent cards - visible but smaller
      const direction = diff > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 60}px) translateZ(-50px) rotateY(${-direction * 20}deg) scale(0.75)`,
        opacity: 0.7,
        zIndex: 15,
        width: '320px'
      };
    } else {
      // Background cards - barely visible
      const direction = diff > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 100}px) translateZ(-120px) rotateY(${-direction * 35}deg) scale(0.5)`,
        opacity: 0.3,
        zIndex: 10,
        width: '280px'
      };
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div 
        className="overflow-visible py-16"
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="flex items-center justify-center min-h-[600px]"
          style={{ 
            perspective: '1200px',
            perspectiveOrigin: 'center center'
          }}
        >
          {projects.map((project, index) => {
            const cardStyle = getCardTransform(index);
            const isCenter = index === selectedIndex;
            
            return (
              <div
                key={project.id}
                className="flex-shrink-0 mx-4 transition-all duration-700 ease-out cursor-pointer"
                style={{
                  ...cardStyle,
                  transformStyle: 'preserve-3d'
                }}
                onClick={() => !isCenter && scrollTo(index)}
              >
                <Card className={`bg-gradient-card border border-border/10 overflow-hidden group hover:shadow-2xl transition-all duration-500 ${isCenter ? 'shadow-2xl shadow-primary/20' : ''}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.name} project preview`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    {/* Tech Stack Chips */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech}
                          className="bg-white/20 text-white border-white/30 text-xs backdrop-blur-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge className="bg-white/20 text-white border-white/30 text-xs backdrop-blur-sm">
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-primary/90 text-primary-foreground border-primary/30 mb-3 text-xs font-medium">
                        {project.keyMetric}
                      </Badge>
                      <h3 className="text-white font-bold text-2xl mb-2">{project.name}</h3>
                      <p className="text-white/90 text-sm font-medium mb-2">{project.tagline}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm rounded-lg font-medium group/btn flex-1"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveUrl, '_blank');
                        }}
                      >
                        View Live
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      {project.caseStudyUrl && (
                        <Button 
                          variant="outline" 
                          className="glass-effect border-primary/30 text-primary hover:bg-primary/10 px-4 py-2 text-sm rounded-lg font-medium flex-1"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = project.caseStudyUrl!;
                          }}
                        >
                          Case Study
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-center items-center mt-8 space-x-6">
        <Button
          variant="outline"
          size="sm"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          className="glass-effect border-primary/30 text-primary hover:bg-primary/10 rounded-full p-3 h-12 w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Dot Indicators */}
        <div className="flex space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === selectedIndex 
                  ? 'bg-primary w-8 h-3' 
                  : 'bg-muted hover:bg-primary/50 w-3 h-3'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={scrollNext}
          disabled={!canScrollNext}
          className="glass-effect border-primary/30 text-primary hover:bg-primary/10 rounded-full p-3 h-12 w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Project3DCarousel;
