
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink, imageUrl, imageAlt }: HeroProps) => {
  return (
    <div className="relative bg-gradient-to-b from-accent/30 to-background min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-gradient">{title}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              {subtitle}
            </p>
            {ctaText && ctaLink && (
              <Button asChild size="lg" className="rounded-md px-8">
                <NavLink to={ctaLink}>{ctaText}</NavLink>
              </Button>
            )}
          </div>
          
          {imageUrl && (
            <div className="relative slide-in">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/40 rounded-lg blur-lg"></div>
              <img
                src={imageUrl}
                alt={imageAlt || "Hero image"}
                className="relative w-full h-auto rounded-lg shadow-xl object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
