import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-12 pb-24">
      {/* Header */}
      <div className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            About GNR Systems
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            GNRSystems Inc., is an IT products and services company specializing in mission critical, value-based, IT services and solutions for businesses worldwide. With more than two decades of growth and unparalleled expertise spanning the tech spectrum, GNR sets a new benchmark for IT consulting. We provide open embedded software and web-based solutions customized to meet customer requirements.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-24">
        {/* Our Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Our team works across tech platforms, operating systems and infrastructures to deliver implementations, technical and functional upgrades, optimization projects, full-service staffing and more.
            </p>
            
            <ul className="space-y-4">
              {[
                "Client-centric approach to problem solving",
                "Commitment to quality and mission-critical reliability",
                "Global delivery model with local expertise",
                "Continuous innovation and skill development"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Our Mission - Team Collaboration" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
              <div className="text-4xl font-bold text-blue-600 mb-1">20+</div>
              <div className="text-slate-600 font-medium">Years of Excellence</div>
            </div>
          </motion.div>
        </div>

        {/* Diversity & Inclusion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Diversity & Inclusion" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Diversity & Inclusion</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Diversity and inclusive leadership plays a vital role in the advancement of a workforce. GNRSystems focuses on getting the best talent out of an individual regardless of age, sex and other demographic differences. It is seen that more diversity in the work place can provide more ideas and clues to solve problems and make better decisions. Moreover, a diverse workplace aims to create an inclusive culture that values and uses the talents of all its employees. Also, diversity and inclusion are nothing but respecting, appreciating and understanding the varying characteristics of individuals.
            </p>
            <ul className="space-y-4">
              {[
                "Maximize the productivity",
                "Enhance the creativity",
                "Increase the loyalty of employees",
                "Getting competitive advantage",
                "Improve decision making",
                "Satisfy diverse needs of customers"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Corporate Responsibilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Corporate Responsibilities</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At GNRSystems, our main goal is to provide strong people centric culture, helping people to realize about their potential in terms of personal and professional growth in order to work with a purpose. We believe in building strong partnership-based relationships and deliver high performing team with exceptional customer service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Corporate Responsibilities" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
