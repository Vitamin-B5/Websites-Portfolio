import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-12 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Have a mission-critical project in mind? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* Contact Info */}
          <div className="bg-blue-600 text-white p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-blue-100 mb-12 text-lg">
                Fill up the form and our Team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-300 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-blue-100">+1 (703) 200-2192</p>
                    <p className="text-blue-100">+1 (703) 665-6536</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-300 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-blue-100">info@gnrsystems.com</p>
                    <p className="text-blue-100 text-sm mt-1">For Sales and General Info</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-300 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-lg">Headquarters</h4>
                    <p className="text-blue-100">
                      209 Elden St, Suite 203<br/>
                      Herndon, VA - 20170
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <p className="text-blue-200 font-medium italic">Reach our team anytime</p>
            </div>
          </div>

          {/* Contact Form Link */}
          <div className="p-10 lg:p-16 flex flex-col items-center justify-center text-center">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 w-full max-w-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Get in Touch</h3>
              <p className="text-slate-600 mb-8">
                Fill this and our team member will reach you soon.
              </p>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                Fill Contact Form <Send size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
