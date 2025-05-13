import { Link } from "wouter";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin 
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-siwa">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Siwa Vending</h3>
            <p className="max-w-xs text-white/80">
              Premium vending solutions for businesses across Toronto. Quality products, smart technology.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/">
                    <a className="text-white/80 hover:text-white transition-colors duration-200">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="text-white/80 hover:text-white transition-colors duration-200">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text-white/80 hover:text-white transition-colors duration-200">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/contact">
                    <a className="text-white/80 hover:text-white transition-colors duration-200">Office Vending</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text-white/80 hover:text-white transition-colors duration-200">Residential Vending</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="text-white/80 hover:text-white transition-colors duration-200">Custom Solutions</a>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Mail className="text-white/80 mt-1 mr-3 h-4 w-4" />
                  <span>info@siwavending.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-white/80 mt-1 mr-3 h-4 w-4" />
                  <span>(416) 555-7890</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-white/80 mt-1 mr-3 h-4 w-4" />
                  <span>Toronto, Ontario</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">
            &copy; {currentYear} Siwa Vending. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
