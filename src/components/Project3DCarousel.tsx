
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
  keyMetric: string;
  image: string;
  liveUrl: string;
  caseStudyUrl?: string;
}

const projects: ProjectData[] = [
  {
    id: 1,
    name: "AfterHire",
    tagline: "HR onboarding platform that automates workflows",
    keyMetric: "50% faster onboarding",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    liveUrl: "https://afterhire.com"
  },
  {
    id: 2,
    name: "PriceUp",
    tagline: "Intelligent estimation platform for service industries",
    keyMetric: "40% more accurate quotes",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    liveUrl: "https://priceup.com",
    caseStudyUrl: "/case-study/priceup"
  },
  {
    id: 3,
    name: "Pipa",
    tagline: "CRM and task management for agriculture",
    keyMetric: "60% improved efficiency",
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
    }, 4000);

    return () => clearInterval(interval);
  }, [emblaApi, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const getCardTransform = (index: number) => {
    const diff = index - selectedIndex;
    const absIndex = Math.abs(diff);
    
    if (absIndex === 0) {
      // Center card
      return {
        transform: 'translateX(0) translateZ(0) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 10
      };
    } else if (absIndex === 1) {
      // Adjacent cards
      const direction = diff > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 20}px) translateZ(-100px) rotateY(${-direction * 25}deg) scale(0.85)`,
        opacity: 0.8,
        zIndex: 8
      };
    } else {
      // Background cards
      const direction = diff > 0 ? 1 : -1;
      return {
        transform: `translateX(${direction * 40}px) translateZ(-200px) rotateY(${-direction * 45}deg) scale(0.7)`,
        opacity: 0.4,
        zIndex: 6
      };
    }
  };

  return (
    <div className="relative w-full">
      <div 
        className="overflow-hidden"
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="flex items-center justify-center"
          style={{ 
            perspective: '1000px',
            perspectiveOrigin: 'center center'
          }}
        >
          {projects.map((project, index) => {
            const cardStyle = getCardTransform(index);
            return (
              <div
                key={project.id}
                className="flex-shrink-0 w-full max-w-lg mx-4 transition-all duration-700 ease-out"
                style={{
                  ...cardStyle,
                  transformStyle: 'preserve-3d'
                }}
              >
                <Card className="bg-gradient-card border border-border/10 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.name} project preview`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-primary/20 text-primary border-primary/30 mb-3 text-xs">
                        {project.keyMetric}
                      </Badge>
                      <h3 className="text-white font-bold text-xl mb-1">{project.name}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">{project.tagline}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm rounded-lg font-medium group/btn flex-1"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        View Live
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      {project.caseStudyUrl && (
                        <Button 
                          variant="outline" 
                          className="glass-effect border-primary/30 text-primary hover:bg-primary/10 px-4 py-2 text-sm rounded-lg font-medium flex-1"
                          onClick={() => window.location.href = project.caseStudyUrl!}
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
          className="glass-effect border-primary/30 text-primary hover:bg-primary/10 rounded-full p-2"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Dot Indicators */}
        <div className="flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex 
                  ? 'bg-primary w-6' 
                  : 'bg-muted hover:bg-primary/50'
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
          className="glass-effect border-primary/30 text-primary hover:bg-primary/10 rounded-full p-2"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Project3DCarousel;
