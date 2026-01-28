import { useState } from "react";

const VerticalPortfolioSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      name: "AfterHire",
      tagline: "HR Onboarding Platform",
      image: "/lovable-uploads/dashboard-afterHire.png",
    },
    {
      id: 2,
      name: "PriceUp",
      tagline: "Smart Pricing Engine",
      image: "/lovable-uploads/cde0d446-bc0e-4104-a6a4-fdd973f8ef18.png",
    },
    {
      id: 3,
      name: "Pipa",
      tagline: "AgriTech CRM Solution",
      image: "/lovable-uploads/aa7e3655-ae93-4d12-9d84-a267b0cb2e02.png",
    },
    {
      id: 4,
      name: "Workflow Builder",
      tagline: "Process Automation",
      image: "/lovable-uploads/workflow-builder.png",
    },
    {
      id: 5,
      name: "Multi-Location",
      tagline: "Business Management",
      image: "/lovable-uploads/multi-location.png",
    },
    {
      id: 6,
      name: "Task Automation",
      tagline: "Productivity Suite",
      image: "/lovable-uploads/task-automation.png",
    },
  ];

  // Duplicate for seamless loop
  const duplicatedItems = [...portfolioItems, ...portfolioItems];

  return (
    <div 
      className="relative h-full w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient fade at top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div 
        className={`flex flex-col gap-5 animate-scroll-vertical ${isPaused ? 'pause-animation' : ''}`}
        style={{ willChange: 'transform' }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="relative flex-shrink-0 w-full group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/30 bg-card shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] hover:border-primary/30">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.name} project preview`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-bold text-lg mb-0.5">{item.name}</h3>
                <p className="text-white/70 text-sm">{item.tagline}</p>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-6 bg-primary/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalPortfolioSlider;
