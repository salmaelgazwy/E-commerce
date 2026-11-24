"use client";

import React from "react";
import {
  Mail,
  Leaf,
  Truck,
  Tag,
  ArrowRight,
  Smartphone,
  Star,
} from "lucide-react";

export default function NewsletterAppBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
      <div className="bg-gradient-to-br from-[#f2fcf7] via-[#f6fdf9] to-[#eefaf4] border border-emerald-100 rounded-[2rem] p-6 sm:p-10 lg:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Side: Newsletter */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header Badge */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#00b074] flex items-center justify-center shadow-lg shadow-emerald-500/25 shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-wider text-[#009e66] uppercase">
                  NEWSLETTER
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  50,000+ subscribers
                </p>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 tracking-tight leading-tight">
                Get the Freshest Updates{" "}
                <span className="text-[#00a86b]">Delivered Free</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500">
                Weekly recipes, seasonal offers &amp; exclusive member perks.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 bg-white border border-emerald-100 rounded-full px-3.5 py-2 shadow-2xs">
                <span className="w-6 h-6 rounded-full bg-emerald-100/80 flex items-center justify-center text-[#00a86b]">
                  <Leaf size={13} />
                </span>
                <span className="text-xs font-medium text-slate-700">
                  Fresh Picks Weekly
                </span>
              </div>

              <div className="inline-flex items-center gap-2 bg-white border border-emerald-100 rounded-full px-3.5 py-2 shadow-2xs">
                <span className="w-6 h-6 rounded-full bg-emerald-100/80 flex items-center justify-center text-[#00a86b]">
                  <Truck size={13} />
                </span>
                <span className="text-xs font-medium text-slate-700">
                  Free Delivery Codes
                </span>
              </div>

              <div className="inline-flex items-center gap-2 bg-white border border-emerald-100 rounded-full px-3.5 py-2 shadow-2xs">
                <span className="w-6 h-6 rounded-full bg-emerald-100/80 flex items-center justify-center text-[#00a86b]">
                  <Tag size={13} />
                </span>
                <span className="text-xs font-medium text-slate-700">
                  Members-Only Deals
                </span>
              </div>
            </div>

            {/* Subscription Form */}
            <div className="space-y-2.5 pt-1">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-xl"
              >
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 bg-white border border-slate-200/90 rounded-2xl px-4 py-3.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#00a86b] focus:ring-2 focus:ring-emerald-500/15 transition-all shadow-2xs"
                />
                <button
                  type="submit"
                  className="bg-[#00a86b] hover:bg-[#00925d] text-white font-semibold text-sm px-6 py-3.5 rounded-2xl inline-flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20 cursor-pointer shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight size={16} />
                </button>
              </form>

              <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <span>✨</span>
                <span>Unsubscribe anytime. No spam, ever.</span>
              </p>
            </div>
          </div>

          {/* Right Side: Mobile App Card */}
          <div className="lg:col-span-5 lg:border-l lg:border-emerald-200/60 lg:pl-10">
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0f1c24] via-[#13222b] to-[#0d1920] rounded-3xl p-6 sm:p-8 text-white shadow-xl">
              {/* Subtle Ambient Glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full bg-emerald-500/15 blur-2xl" />

              <div className="relative space-y-5">
                {/* Mobile App Pill */}
                <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 text-[#10b981] text-[11px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full">
                  <Smartphone size={13} />
                  <span>MOBILE APP</span>
                </div>

                {/* App Heading */}
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Shop Faster on Our App
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Get app-exclusive deals &amp; 15% off your first order.
                  </p>
                </div>

                {/* Store Buttons */}
                <div className="space-y-3 pt-1">
                  {/* App Store */}
                  <a
                    href="#"
                    className="flex items-center gap-3.5 bg-white/8 hover:bg-white/12 border border-white/10 rounded-2xl px-4 py-3 transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-white shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.96 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.78-.96 2.84 1.04.08 2.08-.52 2.72-1.3z" />
                    </svg>
                    <div className="leading-tight">
                      <span className="block text-[10px] uppercase tracking-wider text-slate-400">
                        DOWNLOAD ON
                      </span>
                      <span className="block text-sm font-semibold text-white">
                        App Store
                      </span>
                    </div>
                  </a>

                  {/* Google Play */}
                  <a
                    href="#"
                    className="flex items-center gap-3.5 bg-white/8 hover:bg-white/12 border border-white/10 rounded-2xl px-4 py-3 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-white shrink-0 ml-0.5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
                    </svg>
                    <div className="leading-tight">
                      <span className="block text-[10px] uppercase tracking-wider text-slate-400">
                        GET IT ON
                      </span>
                      <span className="block text-sm font-semibold text-white">
                        Google Play
                      </span>
                    </div>
                  </a>
                </div>

                {/* Rating Footer */}
                <div className="flex items-center gap-2 pt-1 text-xs text-slate-300">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-medium text-slate-300">
                    4.9 &bull; 100K+ downloads
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}