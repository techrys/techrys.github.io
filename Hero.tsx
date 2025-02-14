import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['PC Repairs', 'Security Checkups', 'Tech Support', 'Data Recovery'],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"
        animate={{
          background: [
            "linear-gradient(to bottom right, rgba(30,64,175,0.2), rgba(147,51,234,0.2), rgba(6,182,212,0.2))",
            "linear-gradient(to bottom right, rgba(6,182,212,0.2), rgba(30,64,175,0.2), rgba(147,51,234,0.2))",
            "linear-gradient(to bottom right, rgba(147,51,234,0.2), rgba(6,182,212,0.2), rgba(30,64,175,0.2))"
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Professional
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Technical Solutions
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl mb-4 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Expert technical support and solutions. Specializing in <span ref={typedRef}></span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-64}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg opacity-70 group-hover:opacity-100 blur transition duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
              <button className="relative px-8 py-4 bg-gray-900 rounded-lg text-lg font-semibold text-white">
                Explore Services
              </button>
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-64}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-70 group-hover:opacity-100 blur transition duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
              <button className="relative px-8 py-4 bg-gray-900 rounded-lg text-lg font-semibold text-white">
                Get Started
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;