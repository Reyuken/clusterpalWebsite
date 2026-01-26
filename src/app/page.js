"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { 
  Menu, X, Phone, Mail, MapPin, Headphones, Users, 
  TrendingUp, Award, Shield, Clock, Target, Eye, Heart, Zap
} from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const videoRef = useRef(null);
  const [currentValueIndex, setCurrentValueIndex] = useState(0);

  const coreValues = [
    { title: "Competence", description: "We are competent individuals who deliver quality work with skill and professionalism." },
    { title: "Level-Headedness", description: "We remain calm, thoughtful, and objective in every situation." },
    { title: "Understanding", description: "We take time to understand our clients’ needs and business goals." },
    { title: "Stewardship", description: "We act as responsible stewards of our clients’ business processes." },
    { title: "Teamwork", description: "We believe collaboration creates stronger and more effective results." },
    { title: "Equality", description: "We promote fairness, inclusivity, and equal opportunity for everyone." },
    { title: "Respect", description: "We treat colleagues, clients, and partners with dignity and respect." },
    { title: "Passion", description: "We bring passion and commitment to everything we do." },
    { title: "Accountability", description: "We take full ownership of our actions and responsibilities." },
    { title: "Leadership", description: "We lead with purpose and serve the common good." }
  ];


  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentValueIndex((prev) => (prev + 1) % coreValues.length);
  }, 3000);
    return () => clearInterval(interval);
  }, [coreValues.length]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // Slow motion (75% of normal speed)
    }
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Video */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/clusterpal-bg.mp4" type="video/mp4" />
        </video>

        {/* Overlay (optional for darker tint) */}
        <div className="absolute inset-0 bg-black/5 bg-opacity-50"></div>

        {/* Foreground Content */}
        <div className="relative flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center justify-center space-x-3">
            <Image
              src="/images/clusterpalLogo.png"
              alt="ClusterPal Logo"
              width={180}
              height={60}
              priority
            />
            <h2
              className="text-4xl md:text-5xl font-bold text-orange-400"
              style={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              CLUSTERPAL
            </h2>
          </div>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
            We provide reliable and scalable BPO solutions that help companies focus on growth while we handle the rest.
          </p>

          <a
            href="#contact"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>



      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-black mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Finance & Accounting</h3>
            <p className="text-gray-600">
              Comprehensive financial management services, including reporting, analysis, and process optimization to help streamline your operations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Bookkeeping Services</h3>
            <p className="text-gray-600">
              Accurate and timely bookkeeping to ensure your business maintains transparency, compliance, and reliable financial records.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Recruitment</h3>
            <p className="text-gray-600">
              End-to-end recruitment support — from sourcing to onboarding — to help you build a competent and dependable workforce.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">
          We also offer other related <span className="font-semibold">non-voice business support solutions</span> tailored to your organization’s needs.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center mb-16">
              Why Choose Us
            </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative w-full h-80"> 
              <Image
                src="/images/office.jfif"
                alt="Office worker consulting with client at desk"
                fill
                className="rounded-lg shadow-xl object-cover"
                priority
              />
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Customer-First Approach
                  </h3>
                  <p className="text-gray-600">
                    Your success is our priority. We build solutions around your unique needs, ensuring every interaction adds value to your business and customers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Global Expertise
                  </h3>
                  <p className="text-gray-600">
                    Leverage our international experience and diverse talent pool to access world-class service delivery across multiple markets and industries.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Commitment to Excellence
                  </h3>
                  <p className="text-gray-600">
                    We don't just meet expectations — we exceed them. Our rigorous quality standards and continuous improvement drive exceptional results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Operations Into Opportunities
                  </h3>
                  <p className="text-gray-600">
                    We transform routine processes into strategic advantages, helping you scale efficiently while unlocking new growth potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in business process outsourcing
            </p>
          </div>

          {/* Our Story */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Story
                </h3>
                <p className="text-gray-600 mb-4">
                  Founded in January 2023 with an ambition to support workforce requirements from International Companies to the Philippines and thus providing job opportunities to Filipinos through Outsourcing.
                </p>
                <p className="text-gray-600 mb-4">
                  The name <span className="font-semibold text-black">Clusterpal </span>  
                  comes from the words <em>“Cluster”</em> and <em>“Pal”</em> — representing 
                  our belief in unity and partnership. Just as clusters are groups that 
                  work better together, we see every client as a pal — a trusted ally in 
                  achieving shared success.
                </p>
                <p className="text-gray-600">
                  We pride ourselves with honesty, integrity and bringing the right people together to support clients worldwide.      What started as a simple idea — to help organizations focus on what they do
                  best — has evolved into a mission to redefine how outsourcing supports
                  business success.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/images/office.jfif"
                  alt="Modern office workspace"
                  className="rounded-lg shadow-xl"
                  width={70}
                  height={70}
                />
              </div>
            </div>
          </div>

          {/* Mission, Vision, Core Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To help our clients grow their businesses by providing exceptional outsourcing services in a cost-efficient platform.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be one of the most trusted business process outsourcing companies in the Philippines.
              </p>
            </div>
            {/* Core Values */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Core Values
              </h3>
              <div className="relative h-40 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentValueIndex}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl text-green-600 font-bold">
                        {currentValueIndex + 1}
                      </span>
                      <h4 className="text-2xl font-bold text-gray-900">
                        {coreValues[currentValueIndex].title}
                      </h4>
                    </div>
                    <p className="text-lg text-gray-600">
                      {coreValues[currentValueIndex].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Progress indicators */}
              <div className="flex gap-2 mt-6 justify-center">
                {coreValues.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentValueIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentValueIndex 
                        ? 'w-8 bg-green-600' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to value ${index + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Closing Quote */}
        <p className="text-gray-600 italic text-center ">
          Empowering businesses. Enabling people. Elevating performance.
        </p>
      
      </section>



      {/* Call to Action */}
      <section id="contact" className="bg-gradient-to-r from-red-900 to-red-950 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* Further Inquiries (Left Side) */}
          <div className="text-left max-w-md">
            <h2 className="text-lg font-semibold text-yellow-300 mb-2">
              For Further Inquiries, Contact:
            </h2>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <span className="font-medium text-yellow-200">Email:</span> admin@clusterpal.com
              </li>
              <li>
                <span className="font-medium text-yellow-200">Phone Number:</span> +63 918 929 3205
              </li>
              <li>
                <span className="font-medium text-yellow-200">Facebook Page:</span>{" "}
                <Link 
                  href="https://www.facebook.com/p/Clusterpal-100093008121350/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-orange-400 hover:text-blue-600"
                >
                  Clusterpal PH
                </Link>
              </li>

              <li>
                <span className="font-medium text-yellow-200">Office Address:</span> Unit 37G, 37th floor, Cebu Exchange Tower, Salinas Drive, Lahug, Cebu City
              </li>
            </ul>
          </div>

          {/* Get in Touch (Right Side) */}
          <div className="flex flex-col justify-center md:items-end text-center md:text-right flex-1">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Grow with Us?</h2>
              <a
                href="#contact"
                className="bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition inline-block"
              >
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-4 text-sm">
        © {new Date().getFullYear()} Clusterpal BPO. All rights reserved.
      </footer>
    </>
  );
}
