import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <div className="pt-12 pb-24">
      <div className="bg-blue-600 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Core Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
          >
            Our vision is to deliver on our commitment to provide excellence in recruiting talent, technology, and strategy. Cultures and economies are rapidly merging into a single global endeavour, changing the face of business in the process. The competitive advantage and success of a company relies on its personnel, and we deliver people resources in a variety of forms. We support our Clients to forecast workforce demand and to develop staffing strategies. Being a true technology company, we leverage our internal team members in a rigorous recruiting process to deliver vetted resources across multiple technology disciplines.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 space-y-32">
        {/* Information Technology Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900">Information Technology</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              A decade of working experience with technology leaders like you, and we have learned one thing that is one size doesn’t fit all. That’s why when you partner with GNRSystems Solutions you will find a tailored approach for all your technology objectives. Whether you are looking for a few resources for a short-term engagement, an end to end project deliverable or expert consulting, we have a solution to fit your need.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our technology recruiters are adept at sourcing both active and passive candidates. Don’t let identifying and acquiring the right talent act as a distraction when delivering on IT projects that support your key business initiatives. Focus on your core while we deliver the right talent – when, where and how you need. Talk to our information technology talent consultants.
            </p>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                "Application Development",
                "Application Maintenance",
                "Business Intelligence (BI)",
                "Infrastructure Architect",
                "Project Analyst",
                "Project Management",
                "Cloud Services AWS / AZURE/ GCP"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                alt="Information Technology" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Operations Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Operations Management" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900">Operations</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              GNRsystems brings the expertise of various administration of business & Best practices to create the highest level of efficiency possible within our organization. Our team handles various strategic issues, including determining the size of implementing the structure of information technology networks and services as efficiently as possible to maximize the profit of an organization.
            </p>
            
            <ul className="space-y-4 mt-8">
              {[
                "Application and infrastructure optimization",
                "Operations Management",
                "Enterprise Application Framework"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Infrastructure Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900">Infrastructure</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              GNRSystems helps customers benchmark their IT organizations against best run companies. The result is an IT Roadmap with a prioritized set of initiatives that will result in a more agile and processed organization. In addition to the IT assessment, we have helped companies with the execution of IT initiatives, identification of specialized staff for project work or ongoing maintenance and management. Whether it’s moving your applications to the cloud, implementing analytics to improve help desk and applications management performance or seeking opportunities to adopt best practice and reduce costs, consider us a partner for these and other infrastructure related activities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="IT Infrastructure" 
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

export default Solutions;
