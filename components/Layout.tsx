import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-white py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="GNR Systems Logo" className="h-10 w-auto" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }} />
              <div className="hidden flex items-center">
                <span className="font-black text-4xl tracking-tighter text-[#0a2351]">
                  GNR
                </span>
                <div className="flex flex-col ml-1 mr-2 mt-1">
                   <div className="flex">
                     <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#40b0d8] border-b-[6px] border-b-transparent rotate-[-30deg] translate-y-1"></div>
                     <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#ff9900] border-b-[6px] border-b-transparent rotate-[30deg] -translate-x-1 -translate-y-1"></div>
                   </div>
                   <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-[#0a2351] border-b-[6px] border-b-transparent ml-2 -translate-y-1"></div>
                </div>
                <span className="font-light text-2xl text-[#6b85a3] tracking-tight mt-2">
                  systems
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-3 border-l border-slate-200 pl-4 ml-1">
                <a href="https://www.facebook.com/GNRSystemsInc/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://x.com/GNRSystemsInc" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="https://www.linkedin.com/company/gnrsystems/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.instagram.com/gnrsystems/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm ml-2"
              >
                Get in Touch
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-slate-600 hover:text-slate-900 transition-colors p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[72px] left-0 right-0 bg-white border-b border-slate-100 shadow-lg z-40 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Corporate Headquarters</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-300 text-sm leading-relaxed">
                    209, ELDEN ST., Suite# 203<br />
                    HERNDON, VA - 20170.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-slate-400 flex-shrink-0" size={18} />
                  <div className="text-slate-300 text-sm">
                    <div>BOARD: +1 (703) 357-1978 EXT: 101</div>
                    <div>PHONE: +1 (703) 200-2192</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Illinois Branch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-300 text-sm leading-relaxed">
                    2404, E EMPIRE ST,<br />
                    BLOOMINGTON, ILLINOIS - 61704
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-slate-400 flex-shrink-0" size={18} />
                  <div className="text-slate-300 text-sm">
                    <div>BOARD: +1 (703) 357-1978 EXT: 102</div>
                    <div>PHONE: +1 (571) 500-5886</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">Canada Headquarters</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-300 text-sm leading-relaxed">
                    225 DAVISVILLE AVENUE,<br />
                    TORONTO, ON - M4S1G9
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-slate-400 flex-shrink-0" size={18} />
                  <div className="text-slate-300 text-sm">
                    <div>BOARD: +1 (703) 665-6536</div>
                    <div>PHONE: +1 (437) 777-8956</div>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-blue-400">India Headquarters</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-300 text-sm leading-relaxed">
                    PLOT N0. 13, GUTTALA BEGUMPET,<br />
                    KAVURI HILLS, PHASE 1,<br />
                    MADHAPUR, HYDERABAD.<br />
                    TELANGANA - 500 033.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-slate-400 flex-shrink-0 mt-1" size={18} />
                  <div className="text-slate-300 text-sm">
                    <div>BOARD: +91 (040) 48515273</div>
                    <div>PHONE: +91 97058-66633</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              Copyright &copy; 2024 GNRSystems. All Rights Reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/GNRSystemsInc/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://x.com/GNRSystemsInc" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://www.linkedin.com/company/gnrsystems/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/gnrsystems/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white transition-colors">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
