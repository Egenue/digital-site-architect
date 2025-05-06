
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "info@digitalarch.com",
      link: "mailto:info@digitalarch.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Office",
      details: "123 WebDev Lane, Digital City, 10001",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Hours",
      details: "Mon-Fri: 9am - 5pm",
    },
  ];

  return (
    <div className="page-transition">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-accent/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-gray-600">
                Have questions or ready to start your project? Get in touch with our team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <ContactForm />
              </div>
              
              <div>
                <div className="bg-secondary/50 p-8 rounded-lg h-full">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">{item.title}</h4>
                          {item.link ? (
                            <a href={item.link} className="text-gray-600 hover:text-primary transition-colors">
                              {item.details}
                            </a>
                          ) : (
                            <p className="text-gray-600">{item.details}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12">
                    <h4 className="font-medium text-lg mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="https://twitter.com" className="bg-white p-2 rounded-full shadow-sm hover:bg-primary hover:text-white transition-all" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </a>
                      <a href="https://facebook.com" className="bg-white p-2 rounded-full shadow-sm hover:bg-primary hover:text-white transition-all" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="https://instagram.com" className="bg-white p-2 rounded-full shadow-sm hover:bg-primary hover:text-white transition-all" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="https://linkedin.com" className="bg-white p-2 rounded-full shadow-sm hover:bg-primary hover:text-white transition-all" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
            <div className="h-[400px] w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              {/* Replace with actual map or embed a Google Maps iframe */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600">Map Placeholder - In a real project, embed a Google Map here.</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Note: For this demo, we've included a placeholder for the map. In a real project, you would integrate Google Maps or another mapping service.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
