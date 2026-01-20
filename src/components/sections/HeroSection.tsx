"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

const floatingCardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900/30 to-purple-950/20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-500/4 via-blue-500/2 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/5 to-cyan-500/5 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      <div className="relative w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main Content */}
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-12 backdrop-blur-sm"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <Star className="h-4 w-4 text-red-500 fill-red-500" />
            <span className="text-xs font-medium text-red-400 tracking-wide">Trusted by 500+ YouTubers</span>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
          </motion.div>

          {/* Main Heading with Enhanced Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-[0.9] tracking-tight"
          >
            <span className="text-foreground block">Scale Your</span>
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent block">
              YouTube Channel
            </span>
            <span className="text-foreground block">Like a Pro</span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light"
          >
            Professional YouTube growth services: automation, SEO, thumbnails, editing,
            and analytics to boost your channel to millions of views.
          </motion.p>

          {/* Premium CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white rounded-full px-8 h-14 text-sm font-semibold shadow-2xl shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"
            >
              <Link href="#contact" className="flex items-center gap-3">
                Get Started Today
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-red-500/30 text-foreground hover:bg-red-500/10 hover:border-red-500/50 rounded-full px-8 h-14 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Link href="#services" className="flex items-center gap-3">
                <Play className="h-4 w-4 text-red-500" />
                View Our Work
              </Link>
            </Button>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-4 gap-6 max-w-md mx-auto lg:mx-0"
          >
            {[
              { number: "500+", label: "Channels Grown", icon: "📈" },
              { number: "10M+", label: "Views Generated", icon: "👁️" },
              { number: "50K+", label: "Subscribers Added", icon: "👥" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: "easeOut" }}
                className="text-center group"
              >
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-black text-foreground mb-1 group-hover:text-red-500 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
          </div>

          {/* Right: Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {[
              {
                title: "Proven Growth Strategies",
                description: "Data-driven approaches that actually work, backed by real results from successful channels.",
                gradient: "from-red-600 to-pink-600",
                position: "top-0 left-0",
              },
              {
                title: "Complete Video Production",
                description: "From concept to upload-ready content, we handle scripting, editing, and thumbnail design.",
                gradient: "from-pink-600 to-red-700",
                position: "top-0 right-0",
              },
              {
                title: "Advanced Automation Tools",
                description: "Streamline your workflow with custom tools for scheduling, analytics, and content management.",
                gradient: "from-red-700 to-pink-800",
                position: "bottom-0 left-0",
              },
              {
                title: "SEO & Analytics Mastery",
                description: "Optimize for YouTube algorithm changes and track performance with detailed insights.",
                gradient: "from-pink-600 to-red-600",
                position: "bottom-0 right-0",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={floatingCardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`absolute ${card.position} w-64 p-6 rounded-3xl shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 hover:border-red-500/50 transition-all duration-300`}
                style={{
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                <motion.div
                  animate={floatingAnimation}
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} mb-4 flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                >
                  {i + 1}
                </motion.div>
                <h3 className="font-bold text-base mb-3 text-white">{card.title}</h3>
                <p className="text-xs text-white/80 leading-relaxed">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-red-500/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-red-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}