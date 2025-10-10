import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import teamImage from "/images/business-team.jpg";
import { benefits } from "@/constants";
import { Link } from "react-router-dom";

const TeamCTASection = () => {
  return (
    <section className="py-20 overflow-hidden ">
      <div className="container mx-auto px-6 max-w-7xl ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={teamImage}
                alt="Happy team celebrating together on a beach"
                className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float"></div>
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          {/* Content Section */}
          <div className="text-white animate-delayed-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-scale-in">
              Ready to Turn Your Vision into a{" "}
              <span className="text-primary">High-Growth SaaS Business?</span>
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed animate-delayed-fade-in">
              Let's have a conversation. We offer a free, no-obligation
              30-minute strategy session where we can dive into your project,
              offer some initial technical insights, and see if we're the right
              partner to help you succeed.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 animate-delayed-fade-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <div className="animate-delayed-scale-in">
              <Button
                variant="link"
                className="text-primary hover:text-primary-glow text-lg font-semibold p-0 h-auto group"
              >
                <Link to="https://cal.com/mbilal/cubiler-tech">
                  Free Strategy Session
                </Link>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCTASection;
