
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "The custom quoting engine has completely transformed our business operations. We've eliminated pricing errors and saved countless hours on estimates.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "PriceUp Glass Solutions",
      rating: 5
    },
    {
      content: "UBiLER delivered exactly what we needed - a comprehensive platform that handles everything from quotes to invoicing seamlessly.",
      author: "Sarah Rodriguez",
      role: "Business Owner",
      company: "Premier Glass Services",
      rating: 5
    },
    {
      content: "The multi-location management features have been game-changing for our growing business. We can now scale confidently.",
      author: "David Thompson",
      role: "CEO",
      company: "Elite Glass Installation",
      rating: 5
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-3">What Our Clients Say</h3>
        <p className="text-muted-foreground">Real feedback from businesses using our solutions</p>
      </div>
      
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-gradient-card hover-glow">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 text-yellow-400 fill-current">
                      ⭐
                    </div>
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t border-border/20 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.company}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
