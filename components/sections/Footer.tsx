"use client";
import React from "react";
import { motion } from "motion/react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const helpLinks = [
    { name: "Support", href: "#support" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "FAQ", href: "#faq" },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Logo & Social */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/icons/nutrisight.png"
                alt="NutriSight"
                width={40}
                height={40}
              />
              <span className="font-bold text-2xl text-foreground">
                NutriSight
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your personal nutrition guide in your pocket. Track your
              nutrition, get personalized recommendations, and stay on track
              with your goals.
            </p>
          </div>

          {/* Column 2 - Help */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-foreground">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-6 text-foreground">
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href="mailto:nutrisight@example.com"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    nutrisight@example.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Pampanga, Philippines
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} NutriSight. A thesis project. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#privacy"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Privacy
              </a>
              <a
                href="#terms"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Terms
              </a>
              <a
                href="#cookies"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
