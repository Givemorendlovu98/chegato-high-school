"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Users,
  Trophy,
  ShieldCheck,
  Home,
  LucideIcon,
  Sparkles,
  ArrowRight,
  FileText,
} from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight: string;
  quote?: string;
}

const features: FeatureItem[] = [
  {
    title: "Academic Excellence",
    description:
      "Consistent top-tier ZIMSEC pass rates driven by structured learning and rigorous academic mentorship.",
    highlight: "95% Pass Average",
    quote: "Ranked among the top ZIMSEC centers in Midlands Province.",
    icon: GraduationCap,
  },
  {
    title: "Safe & Modern Boarding",
    description:
      "Comfortable hostel accommodation, nutritious balanced meals, 24/7 security, and supervised evening prep.",
    highlight: "Full Boarding & Day Option",
    quote: "Dedicated matrons and housemasters on site.",
    icon: Home,
  },
  {
    title: "Qualified & Dedicated Staff",
    description:
      "Accomplished educators and subject specialists committed to nurturing individual student potential.",
    highlight: "Degreed Specialists",
    icon: Users,
  },
  {
    title: "Holistic Sports & Culture",
    description:
      "State-level athletic facilities, music, and extracurricular clubs fostering well-rounded champions.",
    highlight: "Regional Champions",
    icon: Trophy,
  },
  {
    title: "Character & Leadership",
    description:
      "Rooted in ELCZ Christian ethics, discipline, self-reliance, and servant leadership values.",
    highlight: "Values-Based Education",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="pt-12 pb-10 md:pt-20 md:pb-16 bg-slate-50 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-green-800 bg-green-100 border border-green-200 shadow-sm mb-4">
            <Sparkles size={14} className="text-amber-500" /> The Chegato Advantage
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-green-950 tracking-tight">
            Why Choose Chegato High School?
          </h2>

          <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
            Empowering generations of Zimbabwean leaders through holistic education, safe boarding facilities, and rich heritage.
          </p>
        </div>

        {/* Feature Grid - Fully Responsive & Mobile Guaranteed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group relative bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-green-300 transition-all duration-300 flex flex-col justify-between ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Icon Badge */}
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center text-green-800 group-hover:bg-green-900 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300 shadow-sm mb-5 md:mb-6">
                    <IconComponent size={28} />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-green-900 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {feature.quote && (
                    <p className="mt-4 text-xs italic text-green-900/80 bg-green-50/60 p-3 rounded-xl border border-green-100">
                      "{feature.quote}"
                    </p>
                  )}
                </div>

                {/* Highlight Badge */}
                <div className="mt-6 md:mt-8 pt-4 border-t border-slate-100">
                  <span className="text-xs font-semibold text-green-800 uppercase tracking-wider">
                    • {feature.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call To Action Banner */}
        <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-950 text-white rounded-3xl p-6 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-3xl font-bold">
              Ready to give your child the Chegato advantage?
            </h3>
            <p className="text-green-100/90 mt-2 max-w-xl text-xs md:text-sm">
              Applications for Form 1 and Lower 6 boarding placements are open. Explore our admission requirements or download the prospectus.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-green-950 font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all text-sm w-full sm:w-auto"
            >
              Apply For Admission <ArrowRight size={16} />
            </Link>
            <Link
              href="/prospectus.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all text-sm backdrop-blur-sm w-full sm:w-auto"
            >
              <FileText size={16} /> Download Prospectus
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}