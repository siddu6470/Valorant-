import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";

import { toast } from "sonner";

const ContactSection = () => {

const [formData, setFormData] = useState({

name: "",
email: "",
message: ""
});

const handleSubmit = (e: React.FormEvent) => {

e.preventDefault();
toast.success("Thank you for your message! We'll get back to you soon.");
setFormData({ name: "", email: "", message: "" });
};

return (

<div id="contact" className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Get in Touch
      </h2>
      <p className="text-lg text-gray-600">
        Have questions about our platform? We'd love to hear from you.
      </p>
    </div>
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="w-full"
          />
        </div>
        <div>
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full min-h-[150px]"
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </div>
  </div>
</div>
);

};

export default ContactSection;