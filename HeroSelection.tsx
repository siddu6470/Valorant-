import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

const HeroSection = () => {

const scrollToSimulation = () => {

const element = document.getElementById('simulation');
if (element) {
  element.scrollIntoView({ behavior: 'smooth' });
}
};

return (

<div id="home" className="min-h-screen flex items-center justify-center pt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-8 animate-fade-up">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
          Navigate Complex Ethical Scenarios
          <span className="text-primary"> with Confidence</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Explore the implications of your decisions through AI-powered simulations.
          Make informed choices backed by comprehensive ethical analysis.
        </p>
      </div>
      <div className="flex justify-center gap-4">
        <Button 
          size="lg" 
          className="group"
          onClick={scrollToSimulation}
        >
          Start Your Simulation
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
      <div className="mt-12 glass rounded-2xl p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">1000+</h3>
            <p className="text-gray-600">Scenarios Analyzed</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">98%</h3>
            <p className="text-gray-600">User Satisfaction</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">24/7</h3>
            <p className="text-gray-600">AI Assistance</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);

};

export default HeroSection;