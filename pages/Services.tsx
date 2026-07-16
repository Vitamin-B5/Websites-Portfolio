import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Settings, PieChart, TrendingUp, Users, Handshake, Network, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const servicesData = [
  {
    id: 'program-management',
    title: 'Program Management',
    icon: PieChart,
    description: 'End-to-end management of complex IT programs, ensuring alignment with your strategic business objectives and timely delivery across multiple work streams.'
  },
  {
    id: 'delivery-management',
    title: 'Delivery Management',
    icon: Briefcase,
    description: 'Streamlined oversight of project execution, focusing on quality, risk mitigation, and exceeding client expectations through proven methodologies.'
  },
  {
    id: 'process-management',
    title: 'Process Management',
    icon: Settings,
    description: 'Optimization and engineering of business and IT processes to improve efficiency, reduce costs, and enhance overall operational agility.'
  },
  {
    id: 'business-development',
    title: 'Business Development',
    icon: TrendingUp,
    description: 'Strategic consulting to identify new market opportunities, expand service offerings, and drive sustainable revenue growth.'
  },
  {
    id: 'recruitment-and-training',
    title: 'Recruitment & Training',
    icon: Users,
    description: 'Comprehensive talent acquisition and skill development programs to build high-performing, future-ready IT teams.'
  },
  {
    id: 'partners-and-alliance',
    title: 'Partners & Alliance Management',
    icon: Handshake,
    description: 'Cultivating and managing strategic relationships with technology partners to deliver integrated, best-in-class solutions.'
  },
  {
    id: 'staff-augmentation',
    title: 'Staff Augmentation',
    icon: Network,
    description: 'Providing highly skilled IT professionals to seamlessly integrate with your in-house teams, scaling your capabilities on demand.'
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Comprehensive IT services tailored to support mission-critical operations and drive business value.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <Link key={service.id} to={`/services/${service.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all h-full group flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
