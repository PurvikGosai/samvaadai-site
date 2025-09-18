"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Shield, TrendingUp } from "lucide-react";

const USP = () => {
  const features = [
    {
      icon: Globe,
      title: "Multilingual First",
      description:
        "Native support for Hindi, Tamil, Bengali, Gujarati, Marathi, and 10+ Indian languages with cultural context understanding.",
      highlight: "10+ Languages",
    },
    {
      icon: Zap,
      title: "Plug & Play",
      description:
        "Seamless integration with your existing tools and platforms. Deploy in minutes, not months, with our intuitive setup process.",
      highlight: "5-Min Setup",
    },
    {
      icon: Shield,
      title: "Industry Ready",
      description:
        "Purpose-built solutions for Retail, Healthcare, EdTech, and more. Compliant with Indian data protection regulations.",
      highlight: "100% Secure",
    },
    {
      icon: TrendingUp,
      title: "Cost-Effective AI",
      description:
        "Scalable pricing that grows with your business. From startups to enterprises, our solutions fit your budget and needs.",
      highlight: "50% Savings",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Why Choose <span className="text-gradient">SamvaadAI</span>?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Built specifically for the Indian market, our AI solutions
            understand local languages, cultural nuances, and business
            requirements.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <div className="group relative">
                {/* Card */}
                <div className="relative p-8 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Highlight Badge */}
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                      {feature.highlight}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of Indian businesses that are already using our AI
              solutions to scale their operations and improve customer
              satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default USP;
