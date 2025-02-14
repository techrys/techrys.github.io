import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Globe, Terminal, Shield, Database, Cloud, Download, MessageSquare } from 'lucide-react';

const DigitalServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      icon: <Globe className="text-blue-400 w-8 h-8 mr-4" />,
      title: 'E-commerce Solutions',
      description: 'Remote setup and management of online stores',
      features: [
        'Store Setup & Configuration',
        'Payment Gateway Integration',
        'Product Management System',
        'Analytics & Reporting Setup'
      ],
      price: 'Starting at $800'
    },
    {
      icon: <Terminal className="text-blue-400 w-8 h-8 mr-4" />,
      title: 'Custom Software Development',
      description: 'Remote development and deployment of custom software',
      features: [
        'Requirements Analysis',
        'Development & Testing',
        'Remote Deployment',
        'Documentation & Training'
      ],
      price: 'Custom pricing'
    },
    {
      icon: <Shield className="text-blue-400 w-8 h-8 mr-4" />,
      title: 'Security Services',
      description: 'Remote security implementation and monitoring',
      features: [
        'Security Audit',
        'Firewall Configuration',
        'Antivirus Setup',
        'Ongoing Monitoring'
      ],
      price: 'Starting at $300'
    },
    {
      icon: <Cloud className="text-blue-400 w-8 h-8 mr-4" />,
      title: 'Cloud Solutions',
      description: 'Remote cloud infrastructure setup and management',
      features: [
        'Cloud Migration',
        'Infrastructure Setup',
        'Performance Optimization',
        'Backup Solutions'
      ],
      price: 'Starting at $600'
    }
  ];

  const supportServices = [
    {
      icon: <MessageSquare className="text-blue-400 w-8 h-8 mr-4" />,
      title: 'Remote Technical Support',
      description: 'Professional remote assistance for all your technical needs',
      tiers: [
        {
          name: 'Quick Support',
          duration: '30-minute session',
          price: '$25',
          features: [
            'Quick Problem Resolution',
            'Basic Troubleshooting',
            'Software Issues'
          ]
        },
        {
          name: 'Standard Support',
          duration: '1-hour session',
          price: '$50',
          features: [
            'In-depth Problem Solving',
            'System Optimization',
            'Security Checkup',
            'Performance Tuning'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center mb-8">
          <Link to="/services" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
            <ArrowLeft className="mr-2" size={20} />
            Back to Services
          </Link>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Digital & Remote Services
        </motion.h1>

        {/* Main Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-blue-400">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <span className="text-blue-400 font-bold">{service.price}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Support Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          {supportServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-xl hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-blue-400">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <div className="grid md:grid-cols-2 gap-6">
                {service.tiers.map((tier, idx) => (
                  <div key={idx} className="p-6 bg-gray-800/50 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">{tier.name}</h4>
                    <p className="text-sm text-gray-300 mb-2">{tier.duration}</p>
                    <ul className="space-y-2 mb-4">
                      {tier.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="text-blue-400 font-bold">{tier.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Required Software Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Required Software
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'AnyDesk',
                description: 'Secure remote desktop software for support sessions.',
                url: 'https://anydesk.com/download'
              },
              {
                name: 'Discord',
                description: 'Communication platform for collaboration and support.',
                url: 'https://discord.com/download'
              },
              {
                name: 'TeamViewer',
                description: 'Alternative remote access software for support.',
                url: 'https://www.teamviewer.com/download'
              }
            ].map((software, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="glass-card p-6 rounded-xl hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Download className="text-blue-400 w-6 h-6 mr-3" />
                    <h4 className="font-semibold text-blue-400">{software.name}</h4>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{software.description}</p>
                  <a
                    href={software.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalServices;