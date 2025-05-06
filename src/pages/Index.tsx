
import Hero from "@/components/Hero";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Monitor, Palette, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Web Design",
      description: "Beautiful, responsive websites tailored to your brand and business needs.",
      icon: <Palette className="h-8 w-8 text-primary" />,
    },
    {
      title: "Web Development",
      description: "Custom-built web applications with clean code and modern technologies.",
      icon: <Monitor className="h-8 w-8 text-primary" />,
    },
    {
      title: "Mobile Responsive",
      description: "Websites that look great and work perfectly on all devices and screen sizes.",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
    },
  ];

  const features = [
    "Beautiful responsive designs",
    "SEO optimization",
    "Fast loading times",
    "User-friendly interfaces",
    "Modern frameworks",
    "Ongoing support"
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Computer with code on screen",
      caption: "Modern web development solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Programming code",
      caption: "Clean, efficient code for your projects"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Person working on a laptop",
      caption: "Creating digital experiences"
    }
  ];

  return (
    <div className="page-transition">
      <Navbar />
      
      <main>
        <Hero
          title="Building Digital Experiences That Stand Out"
          subtitle="We create modern, responsive websites and web applications that help businesses grow online."
          ctaText="Get Started"
          ctaLink="/contact"
          imageUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          imageAlt="Computer with code"
        />
        
        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive web solutions to help your business thrive in the digital world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="pb-2">
                    {service.icon}
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <ImageGallery 
          images={images}
          title="Our Work"
          subtitle="Take a look at some of our recent projects and see what we can do for you."
        />
        
        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
                <p className="text-gray-600 mb-8">
                  We combine technical expertise with creative design to deliver websites that not only look great but also perform exceptionally well.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="bg-primary/10 rounded-full p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button asChild className="mt-8">
                  <NavLink to="/about">Learn More About Us</NavLink>
                </Button>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/40 rounded-lg blur-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Person working on laptop"
                  className="relative w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get in touch today and let's discuss how we can help bring your vision to life.
            </p>
            <Button asChild size="lg" variant="secondary" className="px-8">
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
