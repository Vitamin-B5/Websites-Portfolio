import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Zap, Target, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Full Screen Scroll Section 1 */}
      <section className="relative h-screen flex items-center justify-center bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-slate-900/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-semibold mb-6 backdrop-blur-sm">
              Welcome to GNR Systems
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 drop-shadow-lg leading-tight max-w-5xl mx-auto">
              We are small enough to know you and <span className="text-blue-400">large enough to serve all your needs</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-md font-light">
              As we are a dynamic, cutting-edge staffing and solutions firm specializing in value-based, enterprise-grade IT services and solutions for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/services"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2"
              >
                Explore Services <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-lg font-medium text-lg hover:bg-white/20 transition-colors shadow-sm flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </section>

      {/* Full Screen Scroll Section 2 */}
      <section className="relative h-screen flex items-center bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
              Global Reach. <br/><span className="text-blue-400">Local Expertise.</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
              Delivering seamless implementations, technical upgrades, and full-service staffing across continents. We bridge the gap between technology and operational success.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              Learn About Us <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Full Screen Scroll Section 3 */}
      <section className="relative h-screen flex items-center justify-end bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-slate-900/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-right mt-16 flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 drop-shadow-lg">
              Secure & Scalable <br/><span className="text-blue-400">Infrastructure</span>
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-light">
              Transform your business with cutting-edge cloud architectures, cybersecurity protocols, and robust enterprise software designed for the future.
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View IT Solutions <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: "Global Reach", desc: "Delivering solutions to businesses worldwide." },
              { icon: Target, title: "Value-Based", desc: "Focusing on ROI and operational efficiency." },
              { icon: Shield, title: "Mission Critical", desc: "Robust systems you can rely on 24/7." },
              { icon: Zap, title: "Agile Delivery", desc: "Rapid deployment and continuous integration." }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview with Images */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold text-slate-900">Comprehensive IT Services</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At GNR Systems, we provide end-to-end IT services tailored to your business needs. 
                From Program and Delivery Management to Staff Augmentation and beyond, our expert teams 
                are equipped to handle your most complex challenges. We focus on value-driven results 
                and mission-critical reliability to ensure your technology infrastructure supports your 
                strategic goals.
              </p>
              <div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20"
                >
                  See all services <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            <div className="lg:w-1/2 relative w-full h-[500px] mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 right-0 w-[70%] h-64 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white"
              >
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tech Consulting" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 left-0 w-[70%] h-64 rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white"
              >
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Server Infrastructure" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </motion.div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to transform your IT infrastructure?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses worldwide that trust GNR Systems for their most critical IT needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg"
          >
            Get a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
