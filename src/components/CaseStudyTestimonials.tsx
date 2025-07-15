
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

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Michael Thompson",
      role: "Operations Manager",
      company: "PriceUp Glass Solutions",
      content: "This platform completely transformed how we handle quotes and scheduling. We've eliminated errors and our team is so much more efficient now.",
      type: "text"
    },
    {
      id: "2",
      name: "Sarah Chen",
      role: "Project Coordinator",
      company: "PriceUp Glass Solutions",
      content: "The scheduling system has been a game-changer. No more confusion about crew assignments, and our clients love the professional invoices.",
      videoUrl: "/placeholder-video.mp4",
      type: "video"
    },
    {
      id: "3",
      name: "David Rodriguez",
      role: "Sales Director",
      company: "PriceUp Glass Solutions",
      content: "Our quote accuracy has improved dramatically. What used to take hours now takes minutes, and we're winning more contracts because of our professional presentation.",
      type: "text"
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gradient-card hover-glow">
              <CardContent className="p-6">
                {testimonial.type === 'video' && testimonial.videoUrl ? (
                  <div className="space-y-4">
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
                  <div className="space-y-4">
                    <blockquote className="text-muted-foreground leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyTestimonials;
