
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Alex has over 10 years of experience in web development and specializes in React and Node.js."
    },
    {
      name: "Sarah Williams",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Sarah creates beautiful, intuitive interfaces that enhance user experience and engagement."
    },
    {
      name: "Michael Chen",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      bio: "Michael is passionate about creating scalable applications with modern technologies."
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "DigitalArch was established with a mission to create beautiful digital experiences."
    },
    {
      year: "2019",
      title: "Team Expansion",
      description: "Our team grew to include talented designers and developers from diverse backgrounds."
    },
    {
      year: "2020",
      title: "New Services",
      description: "Expanded our offerings to include mobile app development and digital marketing."
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple awards for our innovative web solutions and client success."
    }
  ];

  return (
    <div className="page-transition">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-accent/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About DigitalArch</h1>
              <p className="text-lg text-gray-600">
                We're a team of passionate designers and developers creating exceptional digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2018, DigitalArch began with a simple mission: to create websites that not only look beautiful but also deliver real business results.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small team of passionate developers has grown into a full-service web development agency serving clients across various industries.
                </p>
                <p className="text-gray-600">
                  We believe in the power of the web to transform businesses and connect people. Every project we undertake is an opportunity to create something meaningful and impactful.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/40 rounded-lg blur-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
                  alt="Our office"
                  className="relative w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="mb-12 relative">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white text-sm font-bold py-1 px-3 rounded">
                      {item.year}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  <div className="ml-12 pl-6 border-l-2 border-primary/20">
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Meet the talented people behind DigitalArch who work tirelessly to bring your digital vision to life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg">
                  <CardContent className="p-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary mb-3">{member.role}</p>
                      <Separator className="my-3" />
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Have a project in mind? We'd love to discuss how we can help bring your vision to life.
            </p>
            <Button asChild size="lg" variant="secondary" className="px-8">
              <NavLink to="/contact">Get in Touch</NavLink>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
