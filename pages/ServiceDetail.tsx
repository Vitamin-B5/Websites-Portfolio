import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { servicesData } from './Services';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const service = servicesData.find(s => s.id === id);

  if (!service) {
    return (
      <div className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Service Not Found</h1>
        <p className="text-xl text-slate-600 mb-8">The service you are looking for does not exist or has been removed.</p>
        <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          <ArrowLeft size={18} /> Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="pt-12 pb-24">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft size={18} /> Back to all services
          </Link>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-20 h-20 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <Icon size={40} />
            </div>
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
              >
                {service.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-slate-300 max-w-3xl leading-relaxed font-light"
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold text-slate-900">Transforming Operations</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At GNR Systems, our approach to {service.title} is designed to integrate seamlessly with your existing enterprise architecture while propelling your business capabilities forward. We leverage industry best practices and deep technical expertise to ensure that our solutions not only meet your immediate requirements but also scale with your future growth.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you are looking to streamline operations, enhance security, or drive digital transformation, our specialized teams are equipped to deliver mission-critical reliability and value-driven outcomes every step of the way.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Accelerated time-to-market for critical projects",
                  "Enhanced operational efficiency and cost optimization",
                  "Scalable solutions tailored to enterprise needs",
                  "Dedicated support and continuous monitoring",
                  "Alignment with strategic business objectives"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt={`${service.title} implementation`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="aspect-square rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Analytics and Reporting" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
               </div>
               <div className="aspect-square rounded-2xl overflow-hidden shadow-md border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-blue-50 rounded-3xl p-12 text-center border border-blue-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to optimize your {service.title}?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact our specialists today to discuss how we can tailor our services to meet your specific business challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
