import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Terminal, Shield, Database, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies',
      price: 'Starting at $500',
      hasDigitalServices: false,
    },
    {
      icon: <Globe size={32} />,
      title: 'E-commerce Solutions',
      description: 'Full-featured online stores and marketplaces',
      price: 'Starting at $800',
      hasDigitalServices: true,
    },
    {
      icon: <Terminal size={32} />,
      title: 'Custom Software',
      description: 'Tailored software solutions for your business',
      price: 'Custom pricing',
      hasDigitalServices: true,
    },
    {
      icon: <Shield size={32} />,
      title: 'Security Services',
      description: 'Protect your digital assets and data',
      price: 'Starting at $300',
      hasDigitalServices: true,
    },
    {
      icon: <Database size={32} />,
      title: 'Database Design',
      description: 'Efficient and scalable database solutions',
      price: 'Starting at $400',
      hasDigitalServices: false,
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure and deployment',
      price: 'Starting at $600',
      hasDigitalServices: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Services
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className="text-blue-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="mt-auto">
                <p className="text-sm text-blue-400 mb-3">{service.price}</p>
                {service.hasDigitalServices && (
                  <Link
                    to="/digital-services"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500/20 border border-blue-500/50 rounded-lg hover:bg-blue-500/30 transition-colors group w-full"
                  >
                    Explore Remote Solutions
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;