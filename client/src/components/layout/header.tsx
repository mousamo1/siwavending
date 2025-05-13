import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-siwa">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-primary font-bold text-2xl md:text-3xl">Siwa Vending</span>
              </a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a className={`text-foreground hover:text-primary font-medium ${
                  location === item.path ? "border-b-2 border-primary" : ""
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Get a Machine
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.path} href={item.path}>
                      <a 
                        className={`text-foreground hover:text-primary font-medium px-4 py-2 ${
                          location === item.path ? "bg-secondary rounded-md" : ""
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white mt-4"
                      onClick={() => setIsOpen(false)}
                    >
                      Get a Machine
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
