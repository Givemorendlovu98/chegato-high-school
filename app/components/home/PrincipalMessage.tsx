"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Quote,
  Sparkles,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function PrincipalMessage() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Ambient Glows - Constrained to prevent mobile overflow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-green-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Adaptive Aspect Ratio */}
          <div className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none">
            {/* Outer Accent Frame */}
            <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-green-900 via-green-800 to-amber-400/40 rounded-2xl sm:rounded-3xl transform -rotate-1 opacity-70 blur-sm" />

            <div className="relative rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-slate-200/80 bg-white">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full">
                <Image
                  src="/images/principal.png"
                  alt="School Headmaster - Chegato High School"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>

              {/* Top Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-md border border-slate-200 flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-green-950">
                <ShieldCheck size={14} className="text-amber-500 shrink-0" />
                <span>ELCZ Mission Head</span>
              </div>

              {/* Bottom Leadership Banner */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-gradient-to-r from-green-950/95 to-green-900/90 backdrop-blur-md border border-green-700/60 p-3 sm:p-4 rounded-xl text-white shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-300 font-semibold truncate">
                    School Leadership
                  </p>
                  <p className="text-xs text-green-100/90 mt-0.5 font-medium truncate">
                    Fostering Academic Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content Section */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Header Badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-green-800 bg-green-100/80 border border-green-200 shadow-sm mb-3 sm:mb-4">
                <Sparkles size={13} className="text-amber-500 shrink-0" /> Executive Welcome
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-green-950 tracking-tight leading-tight mb-4 sm:mb-6">
              A Message From The Headmaster
            </h2>

            {/* Quote Box */}
            <div className="relative bg-white p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border-l-4 border-l-amber-400 border-y border-r border-slate-200/80 shadow-sm mb-5 sm:mb-6">
              <Quote
                size={32}
                className="text-amber-400/25 absolute top-3 right-3 sm:top-4 sm:right-4 pointer-events-none"
              />
              <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed italic font-medium relative z-10">
                "Welcome to Chegato High School—a distinguished center of academic rigor, discipline, and Christian ethics. We are devoted to developing self-reliant leaders prepared to shape society."
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-6 text-xs sm:text-sm lg:text-base">
              Our dedicated teaching faculty, modern STEM laboratories, active school farm, and structured boarding life create an ideal environment for complete character formation. Whether in ZIMSEC examinations or regional athletics, Chegato students consistently excel.
            </p>

            {/* Core Commitments Checklist - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8 pt-4 border-t border-slate-200/80 text-xs sm:text-sm font-semibold text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-700 shrink-0" />
                <span>100% ZIMSEC Certified Teachers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-700 shrink-0" />
                <span>Supervised Night & Weekend Prep</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-700 shrink-0" />
                <span>ELCZ Christian Faith & Values</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-700 shrink-0" />
                <span>Practical Agriculture & STEM Labs</span>
              </div>
            </div>

            {/* Signature Block & Action Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-5 pt-2 sm:pt-4 border-t border-slate-100 lg:border-t-0">
              <div>
                <p className="font-serif italic text-lg sm:text-xl text-green-950 font-bold tracking-wide">
                  Office of the Headmaster
                </p>
                <p className="text-[11px] sm:text-xs uppercase tracking-widest text-green-800 font-bold mt-0.5">
                  Chegato High School • Mberengwa
                </p>
              </div>

              {/* Mobile-Full-Width / Desktop-Auto Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-green-950 font-bold bg-amber-400 hover:bg-amber-300 px-5 py-3 rounded-xl shadow-md transition-all w-full sm:w-auto min-h-[44px]"
                >
                  Apply Placement <ArrowRight size={14} />
                </Link>
                <Link
                  href="/academics"
                  className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-green-900 font-semibold bg-green-50 hover:bg-green-100 px-4 py-3 rounded-xl border border-green-200 transition-all w-full sm:w-auto min-h-[44px]"
                >
                  <BookOpen size={14} /> Academic Vision
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}