import { Brain, Shield, Users, Zap } from "lucide-react";

const features = [

{

icon: Brain,
title: "Advanced AI Analysis",
description: "Leverage cutting-edge AI to analyze complex ethical scenarios and their potential outcomes."
},

{

icon: Shield,
title: "Ethical Framework Integration",
description: "Incorporate established ethical frameworks into your decision-making process."
},

{

icon: Users,
title: "Collaborative Decision Making",
description: "Work together with team members to explore different perspectives and solutions."
},

{

icon: Zap,
title: "Real-time Simulations",
description: "Generate and analyze scenarios in real-time for immediate insights and feedback."
}

];

const FeaturesSection = () => {

return (

<div id="features" className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Powerful Features for Ethical Decision-Making
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Our platform provides the tools you need to make informed ethical decisions
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300"
        >
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
            <feature.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>
);

};

export default FeaturesSection;

