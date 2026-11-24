import {
  CreditCard,
  Mail,
  MapPin,
  Phone,
  ShoppingCart,
  ArrowUpRight,
  Send,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import React from "react";

const shopLinks = [
  { label: "All Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Brands", href: "/brands" },
  { label: "Electronics", href: "/products?category=electronics" },
  { label: "Men's Fashion", href: "/products?category=mens-fashion" },
  { label: "Women's Fashion", href: "/products?category=womens-fashion" },
];

const accountLinks = [
  { label: "My Account", href: "/account" },
  { label: "Order History", href: "/orders" },
  { label: "Wishlist", href: "/wishlist" },
  { label: "Shopping Cart", href: "/cart" },
  { label: "Sign In", href: "/login" },
  { label: "Create Account", href: "/register" },
];

const supportLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "Help Center", href: "/help" },
  { label: "Shipping Info", href: "/shipping" },
  { label: "Returns & Refunds", href: "/returns" },
  { label: "Track Order", href: "/track-order" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1320] text-slate-300">

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="text-center lg:text-left">
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Stay in the loop
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Subscribe to get special offers and updates.
            </p>
          </div>

          <div className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="min-w-0 flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-white outline-none focus:border-green-500 placeholder:text-slate-500"
            />

            <button className="bg-green-600 hover:bg-green-700 text-white px-5 rounded-lg flex items-center gap-2 text-xs font-semibold transition-colors">
              <span>Subscribe</span>
              <Send size={14} />
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-green-600 flex items-center justify-center shadow-lg shadow-green-600/20">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>

              <span className="text-xl font-extrabold tracking-tight text-white">
                Fresh<span className="text-green-500">Cart</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-6 max-w-sm">
              FreshCart is your one-stop destination for quality products.
              From fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>

            {/* Contact */}
            <div className="space-y-4">

              <div className="flex items-center gap-3 text-xs">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-green-500" />
                </div>
                <span>+1 (800) 123-4567</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-green-500" />
                </div>
                <span>support@freshcart.com</span>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin size={14} className="text-green-500" />
                </div>
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">

              <Link
                href="https://facebook.com"
                target="_blank"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="https://twitter.com"
                target="_blank"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faYoutube} className="w-3.5 h-3.5" />
              </Link>

            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-bold text-xs mb-6">
              Shop
            </h3>

            <ul className="space-y-4">
              {shopLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-green-500 transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white font-bold text-xs mb-6">
              Account
            </h3>

            <ul className="space-y-4">
              {accountLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-green-500 transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-xs mb-6">
              Support
            </h3>

            <ul className="space-y-4">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-green-500 transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-xs mb-6">
              Legal
            </h3>

            <ul className="space-y-4">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-slate-400 hover:text-green-500 transition-colors inline-flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#080e18]">

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-[11px] text-slate-500 text-center">
            © 2026 FreshCart. All rights reserved.
          </p>

          {/* Payment Methods */}
          <div className="flex flex-wrap items-center justify-center gap-3">

            <span className="text-[11px] text-slate-500 mr-1">
              We Accept:
            </span>

            {["Visa", "Mastercard", "PayPal"].map((payment) => (
              <div
                key={payment}
                className="bg-white/5 border border-white/10 rounded-md px-3 py-2 flex items-center gap-2"
              >
                <CreditCard size={12} className="text-green-500" />
                <span className="text-[11px] text-slate-300 font-medium">
                  {payment}
                </span>
              </div>
            ))}

          </div>

        </div>
      </div>

    </footer>
  );
}