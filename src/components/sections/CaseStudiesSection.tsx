"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Eye } from "lucide-react";

const caseStudies = [
  {
    title: "Tech Reviews Channel",
    category: "Technology",
    image: "🎬",
    beforeSubs: "5K",
    afterSubs: "50K",
    beforeViews: "10K/mo",
    afterViews: "500K/mo",
    duration: "6 months",
    description: "Complete channel rebrand with optimized SEO and thumbnail strategy.",
  },
  {
    title: "Cooking Tutorials",
    category: "Food & Lifestyle",
    image: "🍳",
    beforeSubs: "2K",
    afterSubs: "25K",
    beforeViews: "5K/mo",
    afterViews: "200K/mo",
    duration: "4 months",
    description: "Content optimization, keyword targeting, and consistent branding.",
  },
  {
    title: "Fitness Motivation",
    category: "Health & Fitness",
    image: "💪",
    beforeSubs: "10K",
    afterSubs: "100K",
    beforeViews: "50K/mo",
    afterViews: "1M/mo",
    duration: "8 months",
    description: "Full production services including editing, thumbnails, and growth strategy.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-400">Success Stories</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="text-foreground">Real </span>
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            See how we've helped YouTubers transform their channels and achieve massive growth.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-green-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <CardContent className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="text-6xl group-hover:scale-110 transition-transform duration-300"
                    >
                      {study.image}
                    </motion.div>
                    <Badge variant="outline" className="text-green-400 border-green-400/30 bg-green-500/5">
                      {study.category}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">{study.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">{study.description}</p>

                  {/* Stats */}
                  <div className="space-y-6">
                    {/* Subscribers */}
                    <div className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/30">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Users className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium">Subscribers</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-red-400 text-sm font-medium">{study.beforeSubs}</span>
                        <TrendingUp className="h-5 w-5 text-green-500" />
                        <span className="text-green-500 font-bold text-lg">{study.afterSubs}</span>
                      </div>
                    </div>

                    {/* Views */}
                    <div className="flex items-center justify-between p-4 bg-card/50 rounded-lg border border-border/30">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Eye className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-medium">Monthly Views</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-red-400 text-sm font-medium">{study.beforeViews}</span>
                        <TrendingUp className="h-5 w-5 text-green-500" />
                        <span className="text-blue-500 font-bold text-lg">{study.afterViews}</span>
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <span className="text-sm text-muted-foreground">
                      Results achieved in{" "}
                      <span className="text-green-400 font-semibold">{study.duration}</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}