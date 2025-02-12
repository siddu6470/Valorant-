import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

const NavBar = () => {

const scrollToSection = (id: string) => {

const element = document.getElementById(id);
if (element) {
  element.scrollIntoView({ behavior: "smooth" });
}
};

return (

<nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <span className="text-xl font-semibold text-gray-900">EthicsAI</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <button onClick={() => scrollToSection("home")} className="text-gray-700 hover:text-gray-900 transition-colors">
          Home
        </button>
        <button onClick={() => scrollToSection("features")} className="text-gray-700 hover:text-gray-900 transition-colors">
          Features
        </button>
        <button onClick={() => scrollToSection("how-it-works")} className="text-gray-700 hover:text-gray-900 transition-colors">
          How It Works
        </button>
        <button onClick={() => scrollToSection("contact")} className="text-gray-700 hover:text-gray-900 transition-colors">
          Contact
        </button>
        <Button className="bg-primary text-white hover:bg-primary/90">
          Get Started
        </Button>
      </div>
      <div className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </div>
  </div>
</nav>
);

};

export default NavBar;

