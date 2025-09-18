"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Globe, MessageCircle } from "lucide-react";

const MultilingualShowcase = () => {
  const languages = [
    { text: "नमस्ते", name: "Hindi", script: "Devanagari" },
    { text: "வணக்கம்", name: "Tamil", script: "Tamil" },
    { text: "হ্যালো", name: "Bengali", script: "Bengali" },
    { text: "નમસ્તે", name: "Gujarati", script: "Gujarati" },
    { text: "नमस्कार", name: "Marathi", script: "Devanagari" },
    { text: "ನಮಸ್ಕಾರ", name: "Kannada", script: "Kannada" },
    { text: "നമസ്കാരം", name: "Malayalam", script: "Malayalam" },
    { text: "ନମସ୍କାର", name: "Odia", script: "Odia" },
    { text: "Hello", name: "English", script: "Latin" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200 rounded-full"></div>
        <div className="absolute top-1/4 right-20 w-20 h-20 border border-purple-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-emerald-200 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-blue-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Speak Your Customer's{" "}
            <span className="text-gradient">Language</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your customers deserve to be heard in their language. Our AI
            understands cultural nuances and context, not just words.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Animated Language Display */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-80 flex items-center justify-center">
              {/* Central Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="text-center text-white"
                    >
                      <div className="text-4xl md:text-5xl font-bold mb-2">
                        {languages[currentIndex].text}
                      </div>
                      <div className="text-lg opacity-90">
                        {languages[currentIndex].name}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Orbiting Language Bubbles */}
              {languages.slice(0, 6).map((lang, index) => {
                const angle = index * 60 * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={lang.name}
                    className="absolute"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      rotate: 360,
                      scale: currentIndex === index ? 1.2 : 1,
                    }}
                    transition={{
                      rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: { duration: 0.3 },
                    }}
                  >
                    <div
                      className={`w-16 h-16 rounded-full bg-white shadow-lg border-2 flex items-center justify-center text-sm font-semibold ${
                        currentIndex === index
                          ? "border-blue-500 text-blue-600"
                          : "border-slate-200 text-slate-600"
                      }`}
                    >
                      {lang.text.slice(0, 2)}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    10+ Indian Languages
                  </h3>
                  <p className="text-slate-600">
                    Native support for major Indian languages including Hindi,
                    Tamil, Bengali, Gujarati, Marathi, and more.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Cultural Context
                  </h3>
                  <p className="text-slate-600">
                    Our AI understands cultural nuances, regional dialects, and
                    context-specific communication patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Language Grid */}
            <div className="grid grid-cols-3 gap-3">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  className={`p-4 rounded-lg border-2 text-center transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentIndex(index)}
                >
                  <div className="text-lg font-bold text-slate-900 mb-1">
                    {lang.text}
                  </div>
                  <div className="text-xs text-slate-600">{lang.name}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
              >
                Experience Multilingual AI
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultilingualShowcase;
