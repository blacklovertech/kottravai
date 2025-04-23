import React, { useState } from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  seller: string;
  location: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Hand-Embroidered Cotton Kurti",
    seller: "Priya's Crafts",
    location: "Jaipur",
    category: "clothing",
    price: 1299,
    rating: 4.8,
    reviews: 156,
    image: "https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Organic Coconut Oil (500ml)",
    seller: "Nature's Bounty",
    location: "Kochi",
    category: "food",
    price: 349,
    rating: 4.9,
    reviews: 213,
    image: "https://images.pexels.com/photos/725998/pexels-photo-725998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Handwoven Bamboo Basket Set",
    seller: "EcoArtisans",
    location: "Assam",
    category: "home",
    price: 899,
    rating: 4.7,
    reviews: 89,
    image: "https://images.pexels.com/photos/6044226/pexels-photo-6044226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Pure Silk Banarasi Saree",
    seller: "Varanasi Heritage",
    location: "Varanasi",
    category: "clothing",
    price: 5999,
    rating: 5.0,
    reviews: 72,
    image: "https://images.pexels.com/photos/9463135/pexels-photo-9463135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "Handmade Terracotta Jewelry Set",
    seller: "Clay Crafters",
    location: "Kolkata",
    category: "jewelry",
    price: 799,
    rating: 4.6,
    reviews: 124,
    image: "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    name: "Traditional Brass Wall Decor",
    seller: "Heritage Artisans",
    location: "Moradabad",
    category: "home",
    price: 1599,
    rating: 4.8,
    reviews: 65,
    image: "https://images.pexels.com/photos/6587862/pexels-photo-6587862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 7,
    name: "Organic Honey Gift Set",
    seller: "Mountain Apiaries",
    location: "Uttarakhand",
    category: "food",
    price: 849,
    rating: 4.9,
    reviews: 192,
    image: "https://images.pexels.com/photos/8102667/pexels-photo-8102667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 8,
    name: "Hand-Painted Madhubani Art",
    seller: "Bihar Art Collective",
    location: "Bihar",
    category: "art",
    price: 1299,
    rating: 5.0,
    reviews: 48,
    image: "https://images.pexels.com/photos/6487771/pexels-photo-6487771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const MarketplacePreview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Items" },
    { id: "clothing", name: "Clothing" },
    { id: "food", name: "Food & Spices" },
    { id: "home", name: "Home Decor" },
    { id: "jewelry", name: "Jewelry" },
    { id: "art", name: "Art" }
  ];
  
  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="section-padding bg-background-light" id="marketplace">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Discover Unique <span className="text-primary">Local Products</span>
          </h2>
          <p className="section-subtitle">
            Browse a curated selection of handcrafted items from women entrepreneurs across India.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all 
                ${activeCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="card group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm">
                  <Heart size={18} className="text-gray-400 hover:text-accent-pink" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center text-white">
                    <span className="bg-primary px-2 py-1 rounded text-xs font-medium">
                      AI Enhanced
                    </span>
                    <div className="flex items-center ml-auto">
                      <Star size={14} className="text-accent-yellow fill-accent-yellow" />
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <span>{product.seller}</span>
                  <span className="mx-1">•</span>
                  <span>{product.location}</span>
                </div>
                <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">₹{product.price}</span>
                  <button className="p-2 bg-background-lavender rounded-full text-primary hover:bg-primary hover:text-white transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="btn btn-secondary">View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;