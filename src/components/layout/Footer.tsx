
import React from "react";
import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">DUBAI SHOES</h3>
            <p className="text-white/80 max-w-xs">
              Celebrating Pakistani craftsmanship with modern designs and premium quality footwear since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/collection/men" className="text-white/80 hover:text-white transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/collection/women" className="text-white/80 hover:text-white transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/collection/kids" className="text-white/80 hover:text-white transition-colors">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/collection/casual" className="text-white/80 hover:text-white transition-colors">
                  Casual
                </Link>
              </li>
              <li>
                <Link href="/collection/formal" className="text-white/80 hover:text-white transition-colors">
                  Formal
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-white/80 hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="shrink-0 mt-1" />
                <span className="text-white/80">
                  123 Jinnah Avenue, Islamabad, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} />
                <span className="text-white/80">+92 123 4567890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} />
                <span className="text-white/80">contact@pakshoes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} DUBAI SHOES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
