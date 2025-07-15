
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Project3DCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const portfolioItems = [
    {
      id: 1,
      name: "Lahebo",
      description: "Streamlines Governance, Risk, and Compliance management with an all-in-one platform",
      techStack: ["Vue.js", "NestJS", "PostgreSQL", "Stripe"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      bgColor: "from-amber-500/20 to-orange-500/20"
    },
    {
      id: 2,
      name: "QuickSteps",
      description: "Web application for accounting and operational management, eliminating fragmented tools",
      techStack: ["Next.js", "NestJS", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      bgColor: "from-purple-500/20 to-indigo-500/20"
    },
    {
      id: 3,
      name: "PriceUp",
      description: "Intelligent estimation and invoicing platform with dynamic pricing and analytics",
      techStack: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 4,
      name: "Pipa",
      description: "CRM and task management system for agriculture with real-time coordination",
      techStack: ["React Native", "Express.js", "MySQL", "Firebase"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      bgColor: "from-green-500/20 to-emerald-500/20"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, portfolioItems.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getSlideStyle = (index: number) => {
    const diff = index - currentSlide;
    const totalSlides = portfolioItems.length;
    
    // Handle wrap-around for smooth infinite scroll
    let position = diff;
    if (diff > totalSlides / 2) position = diff - totalSlides;
    if (diff < -totalSlides / 2) position = diff + totalSlides;

    if (position === 0) {
      // Active slide
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        zIndex: 30,
        opacity: 1,
        filter: 'blur(0px)'
      };
    } else if (position === 1) {
      // Next slide
      return {
        transform: 'translateX(60%) scale(0.8) rotateY(-15deg)',
        zIndex: 20,
        opacity: 0.7,
        filter: 'blur(1px)'
      };
    } else if (position === -1) {
      // Previous slide
      return {
        transform: 'translateX(-60%) scale(0.8) rotateY(15deg)',
        zIndex: 20,
        opacity: 0.7,
        filter: 'blur(1px)'
      };
    } else {
      // Hidden slides
      return {
        transform: `translateX(${position > 0 ? '120%' : '-120%'}) scale(0.6) rotateY(${position > 0 ? '-30deg' : '30deg'})`,
        zIndex: 10,
        opacity: 0.3,
        filter: 'blur(2px)'
      };
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Carousel Container */}
      <div 
        className="relative h-[500px] overflow-hidden"
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className="absolute top-1/2 left-1/2 w-80 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out cursor-pointer"
            style={getSlideStyle(index)}
            onClick={() => index !== currentSlide && goToSlide(index)}
          >
            <Card className={`bg-gradient-to-br ${item.bgColor} border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 backdrop-blur-sm`}>
              <CardContent className="p-0 overflow-hidden">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {item.techStack.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-background/50 text-foreground/80 border-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {item.techStack.length > 3 && (
                      <Badge 
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-background/50 text-foreground/80 border-0"
                      >
                        +{item.techStack.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full glass-effect border-primary/30 text-primary hover:bg-primary/10 group"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="flex items-center justify-center gap-6 mt-8">
        {/* Previous Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="w-10 h-10 rounded-full glass-effect border-primary/30 hover:bg-primary/10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Progress Indicators */}
        <div className="flex gap-2">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="w-10 h-10 rounded-full glass-effect border-primary/30 hover:bg-primary/10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-muted/30 h-1 rounded-full mt-4 overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / portfolioItems.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default Project3DCarousel;
