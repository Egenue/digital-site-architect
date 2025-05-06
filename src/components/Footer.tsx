
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">DigitalArch</h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Creating beautiful digital experiences that help businesses grow and connect with their audience.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-300 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-white transition-colors">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-white transition-colors">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <span>info@digitalarch.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 WebDev Lane, Digital City, 10001</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DigitalArch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
