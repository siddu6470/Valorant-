import NavBar from "@/components/NavBar";

import HeroSection from "@/components/HeroSection";

import FeaturesSection from "@/components/FeaturesSection";

import HowItWorks from "@/components/HowItWorks";

import ContactSection from "@/components/ContactSection";

import Footer from "@/components/Footer";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";

import { Send } from "lucide-react";

import { useState } from "react";

const Index = () => {

const [dilemma, setDilemma] = useState("");

const handleGenerateAnalysis = () => {

// TODO: Implement analysis generation
console.log("Generating analysis for:", dilemma);
};

return (

<div className="min-h-screen">
  <NavBar />
  <HeroSection />
  <FeaturesSection />
  <HowItWorks />
  {/* Simulation Section */}
  <div id="simulation" className="min-h-screen bg-gray-50 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Start Your Ethical Analysis
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Describe your scenario and let our AI help you navigate the ethical implications
        </p>
      </div>
      <Tabs defaultValue="scenario" className="space-y-8">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
          <TabsTrigger value="scenario" className="font-semibold">
            Scenario
          </TabsTrigger>
          <TabsTrigger value="history" className="font-semibold">
            History
          </TabsTrigger>
          <TabsTrigger value="analytics" className="font-semibold">
            Analytics
          </TabsTrigger>
        </TabsList>
        <TabsContent value="scenario" className="space-y-8">
          <div className="glass rounded-xl p-6 max-w-3xl mx-auto">
            <Textarea
              placeholder="Describe your ethical dilemma..."
              className="min-h-[200px] text-lg border-0 focus-visible:ring-0 resize-none bg-transparent"
              value={dilemma}
              onChange={(e) => setDilemma(e.target.value)}
            />
          </div>
          <Button
            size="lg"
            className="w-full max-w-md mx-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
            onClick={handleGenerateAnalysis}
          >
            <Send className="w-4 h-4" />
            Generate Ethical Analysis
          </Button>
        </TabsContent>
        <TabsContent value="history">
          <div className="glass rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-gray-600">Your analysis history will appear here.</p>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="glass rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-gray-600">Analytics and insights will be shown here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
  <ContactSection />
  <Footer />
</div>
);

};

export default Index;