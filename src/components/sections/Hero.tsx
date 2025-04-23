import React from 'react';
import { ArrowRight, ShoppingBag, BarChart2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="hero">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-accent-yellow rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-20 right-40 w-72 h-72 bg-accent-pink rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Empowering Local Sellers, <span className="text-primary">One Click</span> at a Time
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join thousands of women-led businesses on Kottravai's AI-powered marketplace built for local creators and their communities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href="#seller" className="btn btn-primary w-full sm:w-auto group">
              <ShoppingBag className="inline-block w-5 h-5 mr-2" />
              Start Selling
              <ArrowRight className="inline-block w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            
            <a href="#partner" className="btn btn-secondary w-full sm:w-auto">
              <BarChart2 className="inline-block w-5 h-5 mr-2" />
              Join as Partner
            </a>
          </div>
          
          <div className="bg-white py-4 px-6 rounded-xl shadow-soft inline-block">
            <p className="text-gray-500 text-sm mb-2">Trusted by local businesses across India</p>
            <div className="flex items-center justify-center space-x-8">
              <span className="text-gray-800 font-semibold">2,500+</span>
              <span className="h-6 w-px bg-gray-200"></span>
              <span className="text-gray-800 font-semibold">50+ Cities</span>
              <span className="h-6 w-px bg-gray-200"></span>
              <span className="text-gray-800 font-semibold">₹1Cr+ Sales</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-100">
            <img 
              src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Local seller managing their online store"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="font-medium text-lg">Mari's Handwoven Textiles · Chennai</p>
                <p className="text-gray-200">Increased sales by 3.5x in just 6 months on Kottravai</p>
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-8 -right-4 sm:right-10 md:right-20 bg-white p-4 rounded-lg shadow-card transform rotate-3 hidden sm:block">
            <p className="text-sm font-medium">AI-powered photography</p>
            <p className="text-xs text-gray-500">Turn phone photos into professional images</p>
          </div>
          
          <div className="absolute -bottom-8 -left-4 sm:left-10 md:left-20 bg-white p-4 rounded-lg shadow-card transform -rotate-2 hidden sm:block">
            <p className="text-sm font-medium">Local language support</p>
            <p className="text-xs text-gray-500">Sell in your native language</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;