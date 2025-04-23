import React from 'react';
import {
  Mail,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Github,
} from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & About */}
          <div>
            <Logo light />
            <p className="mt-4 text-gray-400">
              Empowering local sellers with AI-powered tools and a supportive
              marketplace community.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#marketplace" className="hover:text-white">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* For Sellers & Partners */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#seller" className="hover:text-white">
                  Start Selling
                </a>
              </li>
              <li>
                <a href="#partner" className="hover:text-white">
                  Join as Partner
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2 flex items-center">
              <Mail className="w-4 h-4 mr-2" /> support@kottravai.ai
            </p>
            <p className="text-gray-400">Chennai, Tamil Nadu, India</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Kottravai.ai — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
