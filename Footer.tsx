import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {

return (

<footer className="bg-white border-t border-gray-200">
  <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <span className="text-xl font-semibold text-gray-900">EthicsAI</span>
        <p className="mt-2 text-gray-600 max-w-md">
          Empowering better decision-making through AI-powered ethical analysis and simulations.
        </p>
        <div className="mt-4 flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h3>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">Documentation</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">Case Studies</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
        <ul className="mt-4 space-y-2">
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-8 pt-8 border-t border-gray-200">
      <p className="text-center text-gray-400">
        © {new Date().getFullYear()} EthicsAI. All rights reserved.
      </p>
    </div>
  </div>
</footer>
);

};

export default Footer;