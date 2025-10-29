/**
 * Footer Component
 * Site footer with contact info, quick links, and copyright.
 * 
 * Props: None
 */

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  // NEXT_AGENT_NOTE: Replace placeholder contact details with real STERA Pharmacy information
  return (
    <footer className="bg-steraBgDark text-steraWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-steraGold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-steraGold" />
                <span>+254 7XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-steraGold" />
                <span>info@sterapharmacy.co.ke</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-steraGold mt-1" />
                <span>123 Main Street<br />Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-steraGold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-steraGold transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-steraGold transition-colors">Products</Link></li>
              <li><Link href="/services" className="hover:text-steraGold transition-colors">Services</Link></li>
              <li><Link href="/blog" className="hover:text-steraGold transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-steraGold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-steraGold">Business Hours</h3>
            <div className="space-y-2 mb-6">
              <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
              <p>Saturday: 9:00 AM - 6:00 PM</p>
              <p>Sunday: 10:00 AM - 4:00 PM</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-steraGold transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-steraGold transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-steraGold transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-steraGray/30 mt-8 pt-8 text-center text-steraGray">
          <p>&copy; {new Date().getFullYear()} STERA Pharmacy. All rights reserved.</p>
          <p className="text-sm mt-2">Licensed Pharmacist | Trusted Healthcare Partner</p>
        </div>
      </div>
    </footer>
  );
}
