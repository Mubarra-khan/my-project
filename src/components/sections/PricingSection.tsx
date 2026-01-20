"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for new YouTubers getting started",
    price: "$99",
    period: "/month",
    features: [
      "Channel SEO Optimization",
      "Basic Thumbnail Design (3)",
      "Keyword Research",
      "Monthly Analytics Report",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    description: "For creators ready to scale their channel",
    price: "$399",
    period: "/month",
    features: [
      "Everything in Starter",
      "Advanced Thumbnails (10)",
      "Content Strategy Planning",
      "Video Editing (2 videos)",
      "Weekly Analytics",
      "Priority Support",
      "A/B Thumbnail Testing",
    ],
    popular: true,
  },
  {
    name: "Pro",
    description: "Full-service solution for serious creators",
    price: "$699",
    period: "/month",
    features: [
      "Everything in Growth",
      "Full Channel Branding",
      "Unlimited Thumbnails",
      "Video Production (5 videos)",
      "Custom Automation Setup",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Monthly Strategy Calls",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-32 bg-gradient-to-b from-background via-card/20 to-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-purple-400">Pricing Plans</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="text-foreground">Choose Your </span>
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Choose the perfect plan for your YouTube growth. All plans include our proven strategies.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {pricingPlans.map((plan, index) => (
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
              <Card className={`relative h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 overflow-hidden ${
                plan.popular ? 'ring-2 ring-purple-500/20 shadow-xl shadow-purple-500/10' : ''
              }`}>
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-10"
                  >
                    <Badge className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-2 text-sm font-bold shadow-lg">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}

                <CardHeader className="text-center pb-8 pt-8 relative">
                  <CardTitle className="text-3xl font-bold mb-3">{plan.name}</CardTitle>
                  <CardDescription className="mb-8 text-muted-foreground leading-relaxed">{plan.description}</CardDescription>
                  <div className="mb-8">
                    <span className="text-5xl font-black text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-lg font-medium">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 px-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + i * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-green-500" />
                        </div>
                        <span className="text-muted-foreground leading-relaxed font-medium">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-8 pt-6">
                  <Button
                    asChild
                    className={`w-full rounded-full h-14 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-purple-500/25'
                        : 'border-2 border-purple-500/30 text-foreground hover:bg-purple-500/10 hover:border-purple-500/50'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <Link href="#contact" className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Custom Plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have unique requirements? Let's create a tailored package that fits your specific needs and goals.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-purple-500/30 text-foreground hover:bg-purple-500/10 hover:border-purple-500/50 rounded-full px-8 h-14 text-lg font-semibold"
            >
              <Link href="#contact" className="flex items-center gap-3">
                Contact for Custom Plan
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}