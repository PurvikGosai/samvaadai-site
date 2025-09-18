"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react"

const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-white/5 pattern-dots"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-16 h-16 border border-white/20 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-12 h-12 border border-white/20 rounded-lg"
        ></motion.div>
        <motion.div
          animate={{ y: [-10, 30, -10], x: [-10, 10, -10] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-20 w-8 h-8 bg-white/10 rounded-full"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Scale Your Business with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
                Multilingual AI?
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
              Join hundreds of Indian businesses that are already using our AI solutions to transform their operations, improve customer satisfaction, and drive growth.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              <MessageCircle className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Setup Fees</h3>
              <p className="text-blue-100 text-sm">Start immediately with zero upfront costs</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-100 text-sm">Expert assistance whenever you need it</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
              <ArrowRight className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quick Integration</h3>
              <p className="text-blue-100 text-sm">Deploy in minutes, not months</p>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/20"
          >
            <p className="text-blue-200 text-sm mb-6">Trusted by 500+ businesses across India</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {/* Mock company logos */}
              <div className="flex items-center justify-center w-28 h-10 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <span className="text-white/80 font-bold text-sm">TechCorp</span>
              </div>
              <div className="flex items-center justify-center w-32 h-10 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <span className="text-white/80 font-bold text-sm">FreshMart</span>
              </div>
              <div className="flex items-center justify-center w-24 h-10 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <span className="text-white/80 font-bold text-sm">EduPlus</span>
              </div>
              <div className="flex items-center justify-center w-36 h-10 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <span className="text-white/80 font-bold text-sm">HealthCare+</span>
              </div>
              <div className="flex items-center justify-center w-28 h-10 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <span className="text-white/80 font-bold text-sm">RetailPro</span>
              </div>
              <div className="flex items-center justify-center w-30 h-10 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                <span className="text-white/80 font-bold text-sm">FinTech</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA