import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Send, Book, Users, Lightbulb, Mail, ArrowUp, Star, Shield, Award, Layers } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Glass Card Component
const GlassCard = ({ children, className = '' }) => (
  <div className={`backdrop-blur-md bg-white/80 rounded-xl shadow-xl ${className}`}>
    {children}
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [policyQuestion, setPolicyQuestion] = useState('');
  const [scenarios, setScenarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState('scenario');
  const [feedback, setFeedback] = useState([]);
  const [progress, setProgress] = useState(0);

  // Sample chart data
  const chartData = [
    { name: 'Week 1', decisions: 40, accuracy: 65 },
    { name: 'Week 2', decisions: 60, accuracy: 75 },
    { name: 'Week 3', decisions: 80, accuracy: 85 },
    { name: 'Week 4', decisions: 100, accuracy: 90 }
  ];

  // Stats counter hook
  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return count;
  };

  const stats = {
    decisions: useCounter(1500),
    users: useCounter(750),
    accuracy: useCounter(98)
  };

  // Scroll to top functionality
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Progress bar animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const generateScenarios = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const mockScenarios = [
      {
        id: 1,
        scenario: "Data Privacy Breach Analysis",
        consequences: ["Customer Trust Impact", "Legal Ramifications", "Financial Consequences"],
        riskLevel: "high",
        stakeholders: ["Customers", "Employees", "Shareholders"]
      },
      {
        id: 2,
        scenario: "Environmental Impact Assessment",
        consequences: ["Community Health", "Economic Viability", "Sustainability Metrics"],
        riskLevel: "medium",
        stakeholders: ["Local Community", "Environment", "Business"]
      }
    ];
    
    setScenarios(mockScenarios);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Modern Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/75 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                EthicalDecisions
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Features', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Navigate Complex Ethical Decisions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            AI-powered simulations for confident decision-making
          </p>
          <button 
            onClick={() => document.getElementById('simulation').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Book, label: 'Decisions Made', value: stats.decisions },
              { icon: Users, label: 'Active Users', value: stats.users },
              { icon: Award, label: 'Accuracy Rate', value: stats.accuracy, suffix: '%' }
            ].map(({ icon: Icon, label, value, suffix = '' }) => (
              <GlassCard key={label} className="p-8 text-center transform hover:scale-105 transition-all duration-300">
                <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  {value.toLocaleString()}{suffix}
                </div>
                <div className="text-gray-600">{label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation Interface */}
      <section id="simulation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <GlassCard className="p-8">
            <div className="flex space-x-4 mb-8">
              {['Scenario', 'History', 'Analytics'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.toLowerCase()
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === 'scenario' && (
              <div className="space-y-6">
                <textarea
                  value={policyQuestion}
                  onChange={(e) => setPolicyQuestion(e.target.value)}
                  placeholder="Describe your ethical dilemma..."
                  className="w-full h-40 p-6 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                />
                <button
                  onClick={generateScenarios}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Analyzing...</span>
                    </div>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Generate Ethical Analysis
                    </span>
                  )}
                </button>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="decisions" stroke="#3B82F6" strokeWidth={2} />
                    <Line type="monotone" dataKey="accuracy" stroke="#8B5CF6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </GlassCard>

          {/* Scenarios Display */}
          {scenarios.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {scenarios.map((scenario) => (
                <GlassCard
                  key={scenario.id}
                  className="p-6 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold">{scenario.scenario}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      scenario.riskLevel === 'high' ? 'bg-red-100 text-red-800' :
                      scenario.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {scenario.riskLevel.toUpperCase()} RISK
                    </span>
                  </div>
                  
                  <div className="grid gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Consequences</h5>
                      <ul className="list-disc pl-6">
                        {scenario.consequences.map((consequence, index) => (
                          <li key={index} className="text-gray-600">{consequence}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Stakeholders</h5>
                      <div className="flex flex-wrap gap-2">
                        {scenario.stakeholders.map((stakeholder, index) => (
                          <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {stakeholder}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default App;
