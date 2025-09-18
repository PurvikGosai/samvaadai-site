"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Phone,
  ShoppingCart,
  ArrowRight,
  Bot,
  Users,
  Clock,
} from "lucide-react";

const Products = () => {
  const products = [
    {
      icon: MessageCircle,
      title: "AI Chatbots",
      description:
        "Intelligent conversational agents that provide personalized support across WhatsApp, websites, and mobile apps.",
      features: [
        "Multi-platform integration",
        "24/7 customer support",
        "Context-aware responses",
        "Easy deployment",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "AI Calling Agents",
      description:
        "Human-like voice agents that handle calls with advanced speech-to-text and text-to-speech capabilities.",
      features: [
        "Natural voice synthesis",
        "Real-time conversation",
        "Call scheduling & routing",
        "Performance analytics",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: ShoppingCart,
      title: "AI Store Managers",
      description:
        "E-commerce automation solutions that manage recommendations, orders, and customer interactions.",
      features: [
        "Smart recommendations",
        "Order management",
        "Inventory tracking",
        "Customer insights",
      ],
      gradient: "from-emerald-500 to-teal-500",
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
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-gradient">AI Products</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business
            operations and enhance customer experiences across all touchpoints.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div key={product.title} variants={itemVariants}>
              <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <CardHeader className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-slate-50 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
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
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
            <Bot className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-slate-900 mb-2">99.9%</div>
            <div className="text-sm text-slate-600">Uptime Guarantee</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-slate-900 mb-2">1M+</div>
            <div className="text-sm text-slate-600">Conversations Handled</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100">
            <Clock className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-slate-900 mb-2">&lt;2s</div>
            <div className="text-sm text-slate-600">Average Response Time</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
