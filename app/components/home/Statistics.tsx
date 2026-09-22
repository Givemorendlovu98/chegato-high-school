"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Users,
  GraduationCap,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface StatItem {
  numericValue: number;
  suffix: string;
  label: string;
  tooltip: string;
  icon: LucideIcon;
}

interface AnimatedNumberProps {
  numericValue: number;
  suffix: string;
}

const stats: StatItem[] = [
  {
    numericValue: 1500,
    suffix: "+",
    label: "Enrolled Students",
    tooltip: "Both Boarding & Day School Learners",
    icon: Users,
  },
  {
    numericValue: 60,
    suffix: "+",
    label: "Qualified Educators",
    tooltip: "Degreed Specialists & Experienced Tutors",
    icon: GraduationCap,
  },
  {
    numericValue: 95,
    suffix: "%",
    label: "Pass Rate",
    tooltip: "ZIMSEC O & A Level Combined Average",
    icon: Award,
  },
  {
    numericValue: 30,
    suffix: "+",
    label: "Years of Excellence",
    tooltip: "Serving Mberengwa & Zimbabwe Community",
    icon: Clock,
  },
];

// Helper Component for Count-Up Animation
function AnimatedNumber({ numericValue, suffix }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <span className="inline-flex items-center">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="relative -mt-16 z-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Outer Card with Ambient Light Background */}
        <div className="relative bg-gradient-to-r from-green-900 via-green-800 to-green-900 border border-green-700/50 text-white rounded-2xl shadow-2xl backdrop-blur-md overflow-hidden p-2 md:p-4">
          
          {/* 3. Ambient Glow Effect */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full pointer-events-none" />

          {/* Main Grid Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-green-700/60">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group relative text-center py-8 px-4 transition-all duration-300 hover:bg-white/5 flex flex-col items-center justify-center rounded-xl"
                >
                  {/* Top Gold Bar on Hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-amber-400 rounded-b opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon Container */}
                  <div className="mb-4 p-3 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-xl group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-green-950 transition-all duration-300">
                    <IconComponent size={24} />
                  </div>

                  {/* Animated Counter */}
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-amber-400 tracking-tight drop-shadow-sm">
                    <AnimatedNumber
                      numericValue={stat.numericValue}
                      suffix={stat.suffix}
                    />
                  </h2>

                  <p className="text-xs uppercase tracking-widest text-green-100/90 font-medium mt-2">
                    {stat.label}
                  </p>

                  {/* 1. Interactive Tooltip Card on Hover */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-[11px] bg-green-950/90 border border-green-700/60 text-amber-200/90 px-2.5 py-1 rounded-md shadow-md">
                      {stat.tooltip}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 2. Trust Badges Sub-Bar */}
          <div className="mt-4 pt-4 border-t border-green-700/40 flex flex-wrap justify-center items-center gap-6 text-xs text-green-200/90">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 size={15} className="text-amber-400" /> Ministry Registered
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 size={15} className="text-amber-400" /> Official ZIMSEC Exam Centre
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 size={15} className="text-amber-400" /> ELCZ Mission School
            </span>
          </div>

        </div>

        {/* 4. Call-to-Action Link below the card */}
        <div className="text-center mt-5">
          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-green-800 font-semibold hover:text-green-950 transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-sm hover:shadow"
          >
            Explore Academic Performance & Pass Rates <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}