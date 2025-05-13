import ContactForm from "@/components/ui/contact-form";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Plus,
  Minus
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    if (openFaq === id) {
      setOpenFaq(null);
    } else {
      setOpenFaq(id);
    }
  };

  const faqs = [
    {
      id: "faq-1",
      question: "How much does it cost to host a vending machine?",
      answer: "There's no cost to host our vending machines. We handle all installation, maintenance, and stocking. Your location simply needs to provide the space and electrical outlet."
    },
    {
      id: "faq-2",
      question: "How often are the machines restocked?",
      answer: "Thanks to our remote monitoring technology, we know exactly when machines need restocking. Typically, we service machines weekly, but high-traffic locations may receive more frequent visits to ensure products are always available."
    },
    {
      id: "faq-3",
      question: "What types of payment do your machines accept?",
      answer: "Our modern machines accept multiple payment methods, including credit/debit cards, mobile payments (Apple Pay, Google Pay), and traditional cash/coins. The touchscreen interface makes transactions quick and easy."
    },
    {
      id: "faq-4",
      question: "Can we request specific products for our machine?",
      answer: "Absolutely! We work with each location to customize the product selection based on your preferences and the needs of your users. We regularly review sales data to optimize the selection for maximum satisfaction."
    }
  ];

  return (
    <>
      {/* Contact Hero */}
      <section className="bg-secondary pt-16 pb-12 md:py-20">
        <div className="container-siwa">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in getting a premium vending machine at your location? Contact us today to discuss how we can serve your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-white">
        <div className="container-siwa">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/5">
                <div className="bg-secondary p-8 rounded-lg h-full">
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Toronto, Ontario</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">info@siwavending.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">(416) 555-7890</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-primary mr-4 mt-1">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-muted-foreground">Monday - Friday: 9am - 5pm</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-primary hover:text-primary/90">
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-primary hover:text-primary/90">
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-primary hover:text-primary/90">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container-siwa">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-description">
                Find answers to the most common questions about our vending services.
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <button 
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    {openFaq === faq.id ? (
                      <Minus className="text-primary transition-transform duration-200" />
                    ) : (
                      <Plus className="text-primary transition-transform duration-200" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="mt-4">
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
