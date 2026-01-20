"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Video, 
  Image, 
  TrendingUp, 
  Settings, 
  BarChart3, 
  Target,
  Sparkles,
  FileText,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "YouTube Channel Setup & Branding",
    description: "Complete channel design including logo, banner, professional branding, and optimized about section.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Video,
    title: "Video Creation & Editing",
    description: "Full video production, motion graphics, color grading, sound design, and professional editing.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: FileText,
    title: "Scriptwriting & Strategy",
    description: "Engaging hook writing, audience-centric scripts, and comprehensive content strategy.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Image,
    title: "Thumbnail & Graphic Design",
    description: "High CTR thumbnails, A/B tested designs, and custom graphics for maximum engagement.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: TrendingUp,
    title: "SEO & YouTube Growth",
    description: "Keyword research, metadata optimization, playlist strategy, and proven growth tactics.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Detailed growth insights, KPI dashboards, and actionable performance reports.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Target,
    title: "Audience Targeting",
    description: "Identify and reach your ideal viewers with data-driven audience targeting strategies.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Sparkles,
    title: "Custom Automation",
    description: "Streamline your workflow with custom automation for uploads, scheduling, and engagement.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 bg-gradient-to-b from-card/30 via-background to-card/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-blue-400">Our Services</span>
          </motion.div>

          <h2 className="text-3xl font-black mb-8 leading-tight">
            <span className="text-foreground">What We </span>
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Do
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive YouTube services to skyrocket your growth and take your channel to the next level.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-red-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <CardHeader className="relative pb-6 pt-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-center leading-tight mb-4">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative px-6 pb-8">
                  <CardDescription className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </CardDescription>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-16 transition-all duration-500" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-muted-foreground mb-8 text-lg">
            Ready to transform your YouTube channel?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white rounded-full px-8 h-14 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Link href="#contact" className="flex items-center gap-3">
              Start Your Growth Journey
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}