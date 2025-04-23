import React from 'react';
import { Github, Code, Users, BookOpen } from 'lucide-react';

interface DeveloperCardProps {
  name: string;
  role: string;
  avatar: string;
  github: string;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ name, role, avatar, github }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-card">
      <img 
        src={avatar} 
        alt={name} 
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="ml-4">
        <h4 className="font-medium text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
      <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer"
        className="ml-auto p-2 rounded-full hover:bg-background-lavender text-gray-600 hover:text-primary transition-colors"
      >
        <Github size={20} />
      </a>
    </div>
  );
};

const Community: React.FC = () => {
  const partners = [
    { name: "TechFounders India", logo: "https://images.pexels.com/photos/1337382/pexels-photo-1337382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Women Entrepreneurs Alliance", logo: "https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Digital Village Initiative", logo: "https://images.pexels.com/photos/3747139/pexels-photo-3747139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
    { name: "Rural Innovation Hub", logo: "https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  ];

  const developers = [
    {
      name: "Priya Sharma",
      role: "Frontend Lead",
      avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "https://github.com"
    },
    {
      name: "Aditya Patel",
      role: "Backend Developer",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "https://github.com"
    },
    {
      name: "Lakshmi Narayanan",
      role: "AI Engineer",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "https://github.com"
    },
  ];

  return (
    <section className="section-padding" id="community">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Join Our <span className="text-primary">Community</span>
          </h2>
          <p className="section-subtitle">
            Kottravai is supported by leading organizations and talented developers dedicated to empowering local sellers.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-card flex items-center justify-center">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-16 h-16 object-cover rounded-full"
                />
                <span className="ml-3 font-medium text-gray-800">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Developer Community</h3>
            <p className="text-gray-600 mb-6">
              Our open-source platform is built by a community of passionate developers who contribute their expertise to support local businesses.
            </p>
            
            <div className="space-y-4">
              {developers.map((dev, index) => (
                <DeveloperCard 
                  key={index}
                  name={dev.name}
                  role={dev.role}
                  avatar={dev.avatar}
                  github={dev.github}
                />
              ))}
            </div>
            
            <div className="mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Github className="inline-block w-4 h-4 mr-2" />
                Join on GitHub
              </a>
            </div>
          </div>
          
          <div className="bg-background-lavender rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Help Center</h3>
            
            <div className="space-y-4">
              <a href="#" className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full text-primary mr-4">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Documentation</h4>
                  <p className="text-sm text-gray-600">Comprehensive guides for sellers and partners</p>
                </div>
              </a>
              
              <a href="#" className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full text-primary mr-4">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Developer Resources</h4>
                  <p className="text-sm text-gray-600">APIs, SDKs, and integration guides</p>
                </div>
              </a>
              
              <a href="#" className="flex items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full text-primary mr-4">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Community Forums</h4>
                  <p className="text-sm text-gray-600">Connect with other sellers and developers</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;