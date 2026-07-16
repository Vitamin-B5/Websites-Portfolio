import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Careers at GNR Systems
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Join a global team of innovators, problem solvers, and tech enthusiasts.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Why Join Us */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Join Us?</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At GNR Systems, we believe our greatest asset is our people. We foster an environment of continuous learning, diversity, and technological excellence.
            </p>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="font-bold text-slate-900">Global Exposure</span>
                <span className="text-slate-600 text-sm">Work with Fortune 500 clients across the globe.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-slate-900">Continuous Growth</span>
                <span className="text-slate-600 text-sm">Dedicated budgets for certifications and training.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-bold text-slate-900">Health & Wellness</span>
                <span className="text-slate-600 text-sm">Comprehensive benefits package and flexible working hours.</span>
              </li>
            </ul>
          </div>

          {/* Join Our Team */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-50 border border-blue-100 p-8 md:p-12 rounded-3xl text-center flex flex-col items-center justify-center h-full"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">We are always looking for awesome talent to be our team member</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                Use the form below to contact us and share your details and resume, and we will get back to you for any open position in our company.
              </p>
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                Submit Your Resume <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Careers;
