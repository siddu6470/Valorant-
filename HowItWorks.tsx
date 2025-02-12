import { ArrowRight } from "lucide-react";

const steps = [

{

number: "01",
title: "Enter Your Scenario",
description: "Describe the ethical dilemma or policy question you want to analyze."
},

{

number: "02",
title: "Generate Analysis",
description: "Our AI processes your scenario and generates potential outcomes and considerations."
},

{

number: "03",
title: "Review Insights",
description: "Explore different perspectives and potential consequences of each decision path."
},

{

number: "04",
title: "Make Informed Decisions",
description: "Use the comprehensive analysis to make well-reasoned ethical decisions."
}

];

const HowItWorks = () => {

return (

<div id="how-it-works" className="py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        How It Works
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Simple steps to navigate complex ethical decisions
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          <div className="glass rounded-xl p-6 h-full">
            <div className="text-4xl font-bold text-primary/20 mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
          {index < steps.length - 1 && (
            <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-400" />
          )}
        </div>
      ))}
    </div>
  </div>
</div>
);

};

export default HowItWorks;

