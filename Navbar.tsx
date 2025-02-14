import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = isHomePage ? [
    { name: 'Home', to: 'home', isScroll: true },
    { name: 'About', to: 'about', isScroll: true },
    { name: 'Services', to: 'services', isScroll: true },
    { name: 'Contact', to: 'contact', isScroll: true },
  ] : [
    { name: 'Home', to: '/', isScroll: false },
    { name: 'Services', to: '/services', isScroll: false },
    { name: 'Digital Services', to: '/digital-services', isScroll: false },
  ];

  const renderNavLink = (item: { name: string; to: string; isScroll: boolean }) => {
    if (item.isScroll) {
      return (
        <Link
          to={item.to}
          spy={true}
          smooth={true}
          offset={-64}
          className="hover:text-blue-400 transition-colors cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      );
    }
    return (
      <RouterLink
        to={item.to}
        className="hover:text-blue-400 transition-colors cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </RouterLink>
    );
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <RouterLink
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Techrys
            </RouterLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {renderNavLink(item)}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.to} className="block px-3 py-2 text-base font-medium rounded-md hover:bg-blue-500/10 hover:text-blue-400 transition-colors">
                    {renderNavLink(item)}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;