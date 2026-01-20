"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Tech YouTuber",
    avatar: "SJ",
    content: "Digitalhub transformed my channel completely. My views increased by 300% in just 3 months! The thumbnail designs are incredible and the SEO strategy actually works.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Cooking Channel",
    avatar: "MC",
    content: "The thumbnail designs are incredible. My click-through rate doubled overnight. The team really understands what makes people click on videos.",
    rating: 5,
  },
  {
    name: "Emma Davis",
    role: "Fitness Coach",
    avatar: "ED",
    content: "Professional service and amazing results. Highly recommend for any YouTuber looking to grow. They took my channel from 10K to 100K subscribers!",
    rating: 5,
  },
  {
    name: "Alex Rivera",
    role: "Gaming Channel",
    avatar: "AR",
    content: "The automation tools they set up saved me hours every week. Now I can focus on creating content while they handle everything else.",
    rating: 5,
  },
  {
    name: "Jessica Park",
    role: "Beauty & Lifestyle",
    avatar: "JP",
    content: "I was struggling to grow for years. Within 6 months with Digitalhub, I got monetized and now YouTube is my full-time income!",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Education Channel",
    avatar: "DK",
    content: "Their content strategy completely changed how I approach my videos. The analytics insights helped me understand my audience better.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-32 bg-gradient-to-b from-card/30 via-background to-card/30 overflow-hidden w-[100%]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-yellow-400">Client Reviews</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="text-foreground">What Our </span>
            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Don't just take our word for it. Here's what creators say about working with us.
          </p>
        </motion.div>

        {/* Infinite Scrolling Testimonials */}
        <div
          className="relative flex overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-8 pr-8"
            animate={{
              x: isPaused ? 0 : [0, -2400], // Adjust based on card width + gap
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="shrink-0 w-full max-w-md group"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="relative h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-yellow-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/20 via-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                  <CardContent className="relative p-8">
                    {/* Quote Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="mb-6"
                    >
                      <Quote className="h-10 w-10 text-yellow-500/40 group-hover:text-yellow-500/60 transition-colors duration-300" />
                    </motion.div>

                    {/* Content */}
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg italic">
                      "{testimonial.content}"
                    </p>

                    {/* Rating */}
                    <div className="flex gap-1 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      >
                        {testimonial.avatar}
                      </motion.div>
                      <div>
                        <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                        <div className="text-sm text-yellow-400 font-medium">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}