import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Laptop, 
  Apple, 
  BarChart2, 
  ChevronRight,
  Quote 
} from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary pt-16 pb-20 md:py-24">
        <div className="container-siwa">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                Premium Vending Solutions for Your Space
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Bring smart, touchscreen vending machines with premium snacks and healthy options to your business, hotel, apartment building, or office.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-md">
                    Get a Machine at Your Location
                  </Button>
                </Link>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="w-full sm:w-auto border-primary text-primary hover:bg-secondary"
                  onClick={() => {
                    document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1625044446053-2673224dd030?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Modern touchscreen vending machine" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-white">
        <div className="container-siwa">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Trusted by Businesses Across Toronto</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <p className="font-semibold text-muted-foreground">Luxury Apartments</p>
              </div>
              <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <p className="font-semibold text-muted-foreground">Tech Offices</p>
              </div>
              <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <p className="font-semibold text-muted-foreground">Indoor Golf Center</p>
              </div>
              <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <p className="font-semibold text-muted-foreground">Corporate Buildings</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-secondary">
        <div className="container-siwa">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose Siwa Vending?</h2>
            <p className="section-description">
              Our premium vending solutions combine cutting-edge technology with quality products to provide the best experience for your space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="benefit-card">
              <div className="text-primary text-4xl mb-4">
                <Laptop />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Technology</h3>
              <p className="text-muted-foreground">
                27-inch HD touchscreen displays with intuitive interfaces for an enhanced user experience.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="benefit-card">
              <div className="text-primary text-4xl mb-4">
                <Apple />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Products</h3>
              <p className="text-muted-foreground">
                Curated selection of premium snacks and healthy options to satisfy all preferences.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="benefit-card">
              <div className="text-primary text-4xl mb-4">
                <BarChart2 />
              </div>
              <h3 className="text-xl font-semibold mb-3">Remote Monitoring</h3>
              <p className="text-muted-foreground">
                Real-time inventory tracking and performance analytics for maximum uptime and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vending Machines Showcase */}
      <section className="py-16 bg-white">
        <div className="container-siwa">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Premium Machines</h2>
            <p className="section-description">
              State-of-the-art vending machines designed to enhance any space while providing quality refreshments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Machine 1 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Modern vending machine with touchscreen" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Touchscreen Vending Experience</h3>
                  <p className="text-white/90">Interactive 27-inch display with cashless payment options</p>
                </div>
              </div>
            </div>
            
            {/* Machine 2 */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Vending machine with premium healthy snacks" 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Premium Product Selection</h3>
                  <p className="text-white/90">Variety of healthy options and premium snacks</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-md">
                Request Our Machines Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Locations Showcase */}
      <section className="py-16 bg-secondary">
        <div className="container-siwa">
          <div className="text-center mb-12">
            <h2 className="section-title">Perfect for Any Location</h2>
            <p className="section-description">
              Our vending machines enhance various spaces while providing convenience to your customers, residents, or employees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern office space" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Office Spaces</h3>
                <p className="text-muted-foreground mb-4">
                  Keep your team energized and productive with convenient access to quality refreshments.
                </p>
                <Link href="/contact">
                  <a className="text-primary hover:text-primary/90 font-medium inline-flex items-center">
                    Learn more 
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </Link>
              </div>
            </div>
            
            {/* Location 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Apartment building lobby" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Apartment Buildings</h3>
                <p className="text-muted-foreground mb-4">
                  Provide added convenience and value to your residents with 24/7 access to quality snacks.
                </p>
                <Link href="/contact">
                  <a className="text-primary hover:text-primary/90 font-medium inline-flex items-center">
                    Learn more 
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-siwa">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-description">
              Hear from businesses that have partnered with Siwa Vending.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-secondary p-8 rounded-lg">
              <div className="text-primary text-2xl mb-4">
                <Quote />
              </div>
              <p className="text-muted-foreground mb-6">
                "Siwa Vending's machines have been a great addition to our apartment building. Our residents love the healthy options and touchscreen interface."
              </p>
              <div>
                <p className="font-semibold">Sarah Thompson</p>
                <p className="text-muted-foreground text-sm">Property Manager, The Residences</p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-secondary p-8 rounded-lg">
              <div className="text-primary text-2xl mb-4">
                <Quote />
              </div>
              <p className="text-muted-foreground mb-6">
                "The remote monitoring feature is a game-changer. We never run out of popular items, and Siwa's team is always responsive to our needs."
              </p>
              <div>
                <p className="font-semibold">Michael Chen</p>
                <p className="text-muted-foreground text-sm">Office Manager, TechSolutions Inc.</p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-secondary p-8 rounded-lg">
              <div className="text-primary text-2xl mb-4">
                <Quote />
              </div>
              <p className="text-muted-foreground mb-6">
                "Our customers appreciate having quality snack options while they play. The machines look great in our space and have been very reliable."
              </p>
              <div>
                <p className="font-semibold">James Wilson</p>
                <p className="text-muted-foreground text-sm">Owner, Downtown Golf Center</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-siwa">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Space?</h2>
            <p className="text-xl mb-8 text-white/90">
              Get a premium vending machine at your location today. No upfront costs, just increased value and convenience.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white hover:bg-secondary text-primary">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
