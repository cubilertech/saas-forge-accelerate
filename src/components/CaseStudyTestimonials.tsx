
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  videoUrl?: string;
  type: 'text' | 'video';
}

const CaseStudyTestimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  // Single testimonial for the case study
  const testimonial: Testimonial = {
    id: "1",
    name: "Michael Thompson",
    role: "Operations Manager",
    company: "PriceUp Glass Solutions",
    content: "This platform completely transformed how we handle quotes and scheduling. We've eliminated errors and our team is so much more efficient now. The ROI was immediate and continues to grow every month.",
    type: "text"
  };

  const handleVideoToggle = (videoId: string) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <section className="px-6 py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear directly from the PriceUp team about how the platform has transformed their business operations
          </p>
        </div>

        {/* Single centered testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card hover-glow">
            <CardContent className="p-8 md:p-12">
              {testimonial.type === 'video' && testimonial.videoUrl ? (
                <div className="space-y-6">
                  <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                    {playingVideo === testimonial.id ? (
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        controls
                        onEnded={() => setPlayingVideo(null)}
                      >
                        <source src={testimonial.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                        <Button
                          variant="outline"
                          size="lg"
                          onClick={() => handleVideoToggle(testimonial.id)}
                          className="bg-white/90 hover:bg-white text-primary border-primary/20"
                        >
                          <Play className="h-6 w-6 mr-2" />
                          Play Video
                        </Button>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3">
                            <p className="text-white text-sm font-medium">{testimonial.name}</p>
                            <p className="text-white/80 text-xs">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-8">
                  <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-xl">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                      <p className="text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTestimonials;
