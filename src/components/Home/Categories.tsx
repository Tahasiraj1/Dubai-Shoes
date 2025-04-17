import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  {
    name: "Men's Collection",
    description: "Sophisticated styles for the modern man",
    image: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?auto=format&fit=crop&w=800&q=80",
    path: "/collection/men",
  },
  {
    name: "Women's Collection",
    description: "Elegant designs for every occasion",
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=800&q=80",
    path: "/collection/women",
  },
  {
    name: "Formal Collection",
    description: "Premium footwear for formal settings",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    path: "/collection/formal",
  },
  {
    name: "Casual Collection",
    description: "Comfortable styles for everyday wear",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=800&q=80",
    path: "/collection/casual",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-4">Shop by Category</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our diverse collections crafted for every style and occasion
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/80 mb-4">{category.description}</p>
                  <Button className="bg-white text-emerald hover:bg-white/90 transition-colors">
                    <Link href={category.path}>Explore Collection</Link>
                  </Button>
                </div>
              </div>
              <CardContent className="p-0"></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
