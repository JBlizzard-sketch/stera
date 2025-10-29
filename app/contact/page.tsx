/**
 * Contact Page
 * Contact information, form, and Google Maps embed.
 */

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // NEXT_AGENT_NOTE: This is a static frontend form. To make it functional:
    // 1. Connect to a serverless function (Netlify Functions / Vercel Serverless)
    // 2. Use a form service like Formspree, Netlify Forms, or Web3Forms
    // 3. Add an API route in Next.js to handle form submissions
    alert("This is a static form. Please implement form submission via serverless function or form service.");
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-stera-gradient py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-steraBgDark mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-steraGray max-w-3xl mx-auto">
              We&apos;re here to help. Get in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-steraBgDark mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                {/* NEXT_AGENT_NOTE: Replace placeholder contact details with real STERA Pharmacy information */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steraGold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-steraGold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steraBgDark mb-1">Phone</h3>
                    <p className="text-steraGray">+254 7XX XXX XXX</p>
                    <p className="text-sm text-steraGray">Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steraGold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-steraGold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steraBgDark mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/254XXXXXXXXX?text=Hello%20STERA%20Pharmacy%21"
                      className="text-steraGold hover:underline"
                    >
                      Chat with us on WhatsApp
                    </a>
                    <p className="text-sm text-steraGray">Quick response, 24/7 available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steraGold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-steraGold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steraBgDark mb-1">Email</h3>
                    <a href="mailto:info@sterapharmacy.co.ke" className="text-steraGray hover:text-steraGold">
                      info@sterapharmacy.co.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steraGold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-steraGold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steraBgDark mb-1">Address</h3>
                    <p className="text-steraGray">
                      123 Main Street<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steraGold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-steraGold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-steraBgDark mb-1">Business Hours</h3>
                    <div className="text-steraGray text-sm">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-steraBgDark mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-steraBgDark mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-steraGray rounded-lg focus:outline-none focus:ring-2 focus:ring-steraGold"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-steraBgDark mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-steraGray rounded-lg focus:outline-none focus:ring-2 focus:ring-steraGold"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-steraBgDark mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-steraGray rounded-lg focus:outline-none focus:ring-2 focus:ring-steraGold resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-steraGold text-white py-3 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-glow"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-steraGray text-center">
                    Note: This is a static form. Form submissions need to be connected to a backend service.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-steraBgDark mb-6 text-center">Find Us</h2>
            {/* NEXT_AGENT_NOTE: Replace with real STERA Pharmacy Google Maps location */}
            <div className="w-full h-96 bg-steraBgLight rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819894516108!2d36.817223315485646!3d-1.2864343990619482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6c3c4c5c5%3A0x5f6c4c3e5c3c5c3c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="STERA Pharmacy Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
