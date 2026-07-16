import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "We are completely satisfied with the overall look, functionality and the user interface of our Java based applications created by GNRSystems Applications Service team. The team responded very well and very quickly understood our ideas which we wanted to implement. I am especially satisfied with the incredible level of support they offered, as our understanding of the Application development was very low and we wanted to concentrate on our business services for our customers is the primary goal. They helped us understand the intricacies of development and how developing our app in Java would be beneficial.",
      author: "Emanuel Salinas",
      company: "USDM"
    },
    {
      quote: "I will recommend working with GNRSystems Inc. Their Business Process Management (BPM) team is very flexible, talented and strives to meet your requirements completely. They stay in communication with you through a variety of channels and are very easy to work with. The Custom Business Process Management Service suite they developed for us was quite innovative and they addressed all our needs very nicely.",
      author: "Revanth",
      company: "GNRSystems Inc."
    },
    {
      quote: "Let me start by saying that I am quite impressed by the dedication of the GNR Recruiting team. The long hours, which they put to understand our recruitment process and company objectives to find us the most apt candidates impressed us greatly. The results which we have received so far are exemplary and GNR has made an outstanding contribution in our company's workforce in the mid west region. We are looking forward for a long term association with them now.",
      author: "Power Katie",
      company: "TEKSystems"
    },
    {
      quote: "Because GNRSystems Inc., is such a client-based industry, everything is person-to-person. The intensive training provided by the company was wonderful. I was able to develop my skills based on growing industry needs to meet their demands. The company really caters to the individual need which helped me to successfully land in my dream industry.",
      author: "Anand",
      company: "Google"
    }
  ];

  return (
    <div className="pt-12 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Client Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it. See how we've helped businesses worldwide achieve their mission-critical goals.
          </motion.p>
        </div>

        {/* Chairman's Message */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 relative min-h-[300px]">
              <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=1000&q=80" 
                alt="Chairman" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:col-span-3 p-10 md:p-16 flex flex-col justify-center relative">
              <Quote className="absolute top-10 left-10 text-slate-800/50 rotate-180" size={80} />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400">Chairman's Message</h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 italic text-slate-300">
                  "Greater responsibilities or obligations are never sources of pleasure, but rather causes of pain. Pleasure comes from elsewhere, from options that are less repellent."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative h-full flex flex-col"
            >
              <Quote className="absolute top-8 right-8 text-slate-100 rotate-180" size={64} />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-lg text-slate-700 leading-relaxed italic mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg flex-shrink-0">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.author}</h4>
                    <p className="text-slate-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
