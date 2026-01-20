import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Channel Setup", href: "#" },
    { name: "Video Editing", href: "#" },
    { name: "Thumbnail Design", href: "#" },
    { name: "YouTube SEO", href: "#" },
    { name: "Analytics", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Youtube className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                Digitalhub Agency
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              We help YouTubers and businesses scale their channels with professional 
              growth strategies, video production, and marketing services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-red-500" />
                <span>contact@digitalhub.agency</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-red-500" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Digitalhub Agency. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-red-500 transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-red-500 transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-red-500 transition-colors">
              YouTube
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-red-500 transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}