import React from 'react';
import { 
  Image, 
  Languages, 
  Users, 
  BarChart, 
  Truck, 
  MessageSquare, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="card p-6 flex flex-col items-start">
      <div className="p-3 bg-background-lavender rounded-lg text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Image size={24} />,
      title: "AI Product Listings",
      description: "Automatically enhance your product photos and generate professional descriptions in seconds.",
    },
    {
      icon: <Languages size={24} />,
      title: "Local Language Support",
      description: "Sell in 12+ Indian languages, reaching more customers in their preferred language.",
    },
    {
      icon: <Users size={24} />,
      title: "Zero-Code Onboarding",
      description: "Get started in minutes with simple, guided setup – no technical knowledge required.",
    },
    {
      icon: <BarChart size={24} />,
      title: "Smart Analytics",
      description: "Understand your business performance with easy-to-read reports and AI insights.",
    },
    {
      icon: <Truck size={24} />,
      title: "Local Delivery Network",
      description: "Connect with nearby delivery services optimized for your location and products.",
    },
    {
      icon: <MessageSquare size={24} />,
      title: "AI Customer Support",
      description: "Automated responses to common questions in multiple languages for 24/7 support.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Secure Payments",
      description: "Trusted payment processing with support for UPI, cards, and cash-on-delivery.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Community Workshops",
      description: "Learn from successful sellers through regular online training and networking events.",
    },
  ];

  return (
    <section className="section-padding bg-white relative" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            AI-Powered Tools for <span className="text-primary">Local Sellers</span>
          </h2>
          <p className="section-subtitle">
            Our platform combines powerful technology with simplicity, making e-commerce accessible to everyone.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#marketplace" className="btn btn-primary">
            Explore the Marketplace
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;