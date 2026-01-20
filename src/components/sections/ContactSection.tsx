"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Calendar, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-card/30 via-background to-card/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-cyan-400">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
            <span className="text-foreground">Ready to </span>
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Grow Your Channel?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Let's discuss how we can help you achieve YouTube success. Get in touch today!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-3xl font-bold mb-8">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-background/50 border-border/50 focus:border-cyan-500/50 h-12 text-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-background/50 border-border/50 focus:border-cyan-500/50 h-12 text-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="channel" className="block text-sm font-semibold mb-3 text-foreground">
                      YouTube Channel URL
                    </label>
                    <Input
                      id="channel"
                      placeholder="https://youtube.com/@yourchannel"
                      className="bg-background/50 border-border/50 focus:border-cyan-500/50 h-12 text-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">
                      Tell us about your goals
                    </label>
                    <Textarea
                      id="message"
                      placeholder="What are you looking to achieve with your YouTube channel?"
                      rows={6}
                      className="bg-background/50 border-border/50 focus:border-cyan-500/50 text-lg resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white rounded-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            {/* Contact Cards */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-xl">Email Us</h4>
                  <p className="text-muted-foreground mb-1 text-lg">contact@digitalhub.agency</p>
                  <p className="text-muted-foreground text-lg">support@digitalhub.agency</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-green-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 group">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8 text-green-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-xl">Call Us</h4>
                  <p className="text-muted-foreground mb-1 text-lg">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri 9am-6pm PST</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-8 w-8 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-xl">Visit Us</h4>
                  <p className="text-muted-foreground mb-1 text-lg">123 Growth Street</p>
                  <p className="text-muted-foreground text-lg">San Francisco, CA 94102</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <Button variant="outline" className="h-16 rounded-2xl border-2 border-green-500/30 hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                <MessageCircle className="mr-3 h-6 w-6 text-green-500" />
                <span className="font-semibold">WhatsApp Chat</span>
              </Button>
              <Button variant="outline" className="h-16 rounded-2xl border-2 border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <Calendar className="mr-3 h-6 w-6 text-blue-500" />
                <span className="font-semibold">Book a Call</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}