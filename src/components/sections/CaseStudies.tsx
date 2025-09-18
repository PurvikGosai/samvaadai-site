"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, TrendingUp, Users, Clock } from "lucide-react";

const CaseStudies = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO, FreshMart",
      company: "E-commerce",
      image: "/api/placeholder/60/60",
      quote:
        "SamvaadAI's store manager increased our sales by 35% in just 3 months. The multilingual support helped us connect with customers across India.",
      metrics: [
        { label: "Sales Increase", value: "35%", icon: TrendingUp },
        { label: "Customer Satisfaction", value: "4.8/5", icon: Star },
      ],
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Director, HealthCare Plus",
      company: "Healthcare",
      image: "/api/placeholder/60/60",
      quote:
        "Our AI calling agent handles 80% of appointment bookings automatically. Patients love speaking in their native language.",
      metrics: [
        { label: "Automation Rate", value: "80%", icon: Users },
        { label: "Response Time", value: "2 sec", icon: Clock },
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Arun Patel",
      position: "Founder, EduTech Solutions",
      company: "Education Technology",
      image: "/api/placeholder/60/60",
      quote:
        "The chatbot helped us reduce support tickets by 60% while providing 24/7 assistance to students and parents in multiple languages.",
      metrics: [
        { label: "Ticket Reduction", value: "60%", icon: TrendingUp },
        { label: "Availability", value: "24/7", icon: Clock },
      ],
      gradient: "from-purple-500 to-pink-500",
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
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            See how businesses across India are transforming their operations
            and achieving remarkable results with our AI solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <CardContent className="p-8 relative z-10 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-700 text-lg mb-8 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {testimonial.metrics.map((metric, metricIndex) => (
                      <div
                        key={metricIndex}
                        className="text-center p-3 rounded-lg bg-white/50 border border-slate-200"
                      >
                        <metric.icon className="h-5 w-5 text-slate-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-slate-900">
                          {metric.value}
                        </div>
                        <div className="text-xs text-slate-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                      <span className="text-slate-600 font-semibold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonial.position}
                      </div>
                      <div className="text-xs text-slate-500">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              500+
            </div>
            <div className="text-slate-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              95%
            </div>
            <div className="text-slate-600">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              50%
            </div>
            <div className="text-slate-600">Average ROI</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              24/7
            </div>
            <div className="text-slate-600">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
