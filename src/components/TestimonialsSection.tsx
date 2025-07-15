
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonial = {
    content: "The custom quoting engine has completely transformed our business operations. We've eliminated pricing errors and saved countless hours on estimates.",
    author: "Michael Chen",
    role: "Operations Manager",
    company: "PriceUp Glass Solutions",
    rating: 5
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-card hover-glow">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <div key={i} className="w-4 h-4 text-yellow-400 fill-current">
                  ⭐
                </div>
              ))}
            </div>
            
            <blockquote className="text-muted-foreground italic text-lg leading-relaxed">
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
    </div>
  );
};

export default TestimonialsSection;
