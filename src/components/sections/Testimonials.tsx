import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  business: string;
  location: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Kottravai has transformed my small handicraft business. The AI-enhanced product images make my items look professional, and I've seen a 70% increase in sales since joining.",
    name: "Lakshmi Devi",
    business: "Devi Handicrafts",
    location: "Madurai",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    quote: "As a first-time entrepreneur, I was struggling to establish my online presence. Kottravai's zero-code setup and multi-language support helped me reach customers I never could before.",
    name: "Ananya Reddy",
    business: "Nature's Essence",
    location: "Hyderabad",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    quote: "The community of women sellers on Kottravai is incredible. We share tips, collaborate on products, and support each other. It's more than just a marketplace - it's a sisterhood.",
    name: "Meera Patel",
    business: "Gujarati Textiles",
    location: "Ahmedabad",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    quote: "The analytics dashboard helps me understand what products are working and when to restock. The AI suggestions for improving my listings have been spot on!",
    name: "Fatima Sheikh",
    business: "Lucknow Chikankari",
    location: "Lucknow",
    image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
      nextTestimonial();
    }, 6000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <section className="section-padding bg-white relative overflow-hidden" id="testimonials">
      {/* Background Elements */}
      <div className="absolute top-40 -right-20 w-64 h-64 bg-accent-yellow rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-72 h-72 bg-primary rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Voices of Our <span className="text-primary">Sellers</span>
          </h2>
          <p className="section-subtitle">
            Hear success stories from women entrepreneurs who have transformed their businesses with Kottravai.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-6 left-6 text-primary opacity-20">
            <Quote size={60} />
          </div>
          
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-soft p-8">
            <div 
              className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <p className="text-lg md:text-xl text-gray-700 mb-8 relative z-10">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonials[currentIndex].business} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;