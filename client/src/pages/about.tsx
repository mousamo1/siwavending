import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Award, 
  Handshake, 
  Leaf,
} from "lucide-react";

const About = () => {
  return (
    <>
      {/* About Hero */}
      <section className="bg-secondary pt-16 pb-20 md:py-24">
        <div className="container-siwa">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">About Siwa Vending</h1>
            <p className="text-xl text-muted-foreground mb-8">
              A Toronto-based, family-run business dedicated to bringing premium vending solutions to businesses across the Greater Toronto Area.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container-siwa">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Siwa Vending family business" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Siwa Vending was founded in 2015 by the Siwa family with a simple mission: to modernize the vending machine experience with smart technology and quality products.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a small operation with just two machines has grown into a trusted vending solution provider across Toronto, serving various businesses, residential buildings, and public spaces.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we remain committed to our family values of quality, service, and reliability while embracing innovation to provide the best vending experience possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary">
        <div className="container-siwa">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-description">
              The principles that guide everything we do at Siwa Vending.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on the quality of our products or machines. From premium snacks to state-of-the-art technology, excellence is our standard.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">
                <Handshake className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Service</h3>
              <p className="text-muted-foreground">
                We believe in building lasting relationships through exceptional service. Our team is always ready to support our clients and address their needs.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-primary text-4xl mb-4">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We're committed to reducing our environmental impact through energy-efficient machines, reduced packaging, and responsible business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Toronto Focus */}
      <section className="py-16 bg-white">
        <div className="container-siwa">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1517090504586-fde19ea6066f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Toronto skyline" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Proudly Toronto-Based</h2>
              <p className="text-lg text-muted-foreground mb-6">
                As a Toronto-based business, we take pride in serving our local community and contributing to the city's vibrant business ecosystem.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We understand the unique needs of Toronto's diverse spaces, from downtown office towers to neighborhood apartment buildings, and tailor our services accordingly.
              </p>
              <p className="text-lg text-muted-foreground">
                Our local presence means we can provide prompt service and maintain close relationships with our clients across the Greater Toronto Area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="container-siwa">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-description">
              The dedicated people behind Siwa Vending working to provide the best service possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">JS</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">John Siwa</h3>
                <p className="text-muted-foreground mb-3">Founder & CEO</p>
                <p className="text-muted-foreground text-sm">
                  Leading our vision to transform vending experiences across Toronto.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">MS</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">Maria Siwa</h3>
                <p className="text-muted-foreground mb-3">Operations Director</p>
                <p className="text-muted-foreground text-sm">
                  Ensuring our machines are stocked with the best products and running smoothly.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-primary">DS</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">David Siwa</h3>
                <p className="text-muted-foreground mb-3">Technical Director</p>
                <p className="text-muted-foreground text-sm">
                  Overseeing our smart technology and remote monitoring systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-siwa">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl mb-8 text-white/90">
              Join the many Toronto businesses that trust Siwa Vending for their refreshment needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white hover:bg-secondary text-primary">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
