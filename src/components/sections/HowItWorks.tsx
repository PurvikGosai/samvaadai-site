"use client";

import { motion } from "framer-motion";
import { Settings, Upload, Rocket, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Settings,
      title: "Choose Your AI Agent",
      description:
        "Select from our range of AI solutions - Chatbots, Calling Agents, or Store Managers based on your business needs.",
      details: [
        "Browse our product catalog",
        "Compare features and pricing",
        "Select the perfect solution",
      ],
    },
    {
      step: "02",
      icon: Upload,
      title: "Train in Your Language",
      description:
        "Upload your scripts, FAQs, and workflows. Our AI learns your business context and language preferences.",
      details: [
        "Upload training data",
        "Configure language settings",
        "Fine-tune AI responses",
      ],
    },
    {
      step: "03",
      icon: Rocket,
      title: "Deploy Anywhere",
      description:
        "Launch your AI agent across websites, WhatsApp, phone systems, and mobile apps with a single click.",
      details: [
        "One-click deployment",
        "Multi-platform integration",
        "Monitor performance",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Get your AI agent up and running in just three simple steps. No
            technical expertise required.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-300 to-transparent transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div key={step.step} variants={itemVariants} className="flex">
                <div className="relative group flex-1">
                  {/* Step Number */}
                  <div className="absolute z-20 -top-4 left-1/2 transform -translate-x-1/2 lg:left-8 lg:translate-x-0">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-8 pt-12 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-blue-600" />
                    </div>

                    {/* Step Number Display */}
                    <div className="text-4xl font-bold text-slate-200 mb-4">
                      {step.step}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 flex-grow">{step.description}</p>

                    {/* Details */}
                    <ul className="space-y-2 mt-auto">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center space-x-2 text-sm text-slate-500"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow for large screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-30">
                      <div className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md">
                        <ArrowRight className="h-4 w-4 text-slate-400" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Join the revolution of AI-powered business automation. Set up your
            first AI agent in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-black font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105">
              Start Your Free Trial
            </button>
            <button className="px-8 py-3 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors">
              Watch Demo Video
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
