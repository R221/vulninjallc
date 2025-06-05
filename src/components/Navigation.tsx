
import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-primary mr-2" />
            <span className="text-2xl font-bold">VUL<span className="text-primary">.</span>NINJA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary"
            >
              Services
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('blog')}
              className="text-foreground hover:text-primary"
            >
              Blog
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
