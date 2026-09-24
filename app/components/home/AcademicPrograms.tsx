"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Atom,
  Sprout,
  Laptop,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface Program {
  title: string;
  description: string;
  image: string;
  icon: React.ElementType;
  tag: string;
}

const programs: Program[] = [
  {
    title: "O-Level Studies",
    description:
      "A strong academic foundation preparing learners for future success and ZIMSEC national examinations.",
    image: "/images/programs/ordin.jpeg",
    icon: BookOpen,
    tag: "Forms 1 - 4",
  },
  {
    title: "A-Level Studies",
    description:
      "Advanced learning pathways leading to university admission, professional careers, and leadership.",
    image: "/images/programs/advanced.jpg",
    icon: GraduationCap,
    tag: "Lower & Upper 6",
  },
  {
    title: "STEM Education",
    description:
      "Science, Technology, Engineering, and Mathematics programmes that foster critical thinking and innovation.",
    image: "/images/programs/stemm.jpeg",
    icon: Atom,
    tag: "Practical Labs",
  },
  {
    title: "Agriculture",
    description:
      "Practical agricultural studies focused on modern farming techniques, sustainability, and entrepreneurship.",
    image: "/images/programs/agri.jpg",
    icon: Sprout,
    tag: "School Farm",
  },
  {
    title: "ICT & Innovation",
    description:
      "Digital literacy, computer science, and practical technology skills designed for the modern digital era.",
    image: "/images/programs/ict1.jpg",
    icon: Laptop,
    tag: "E-Learning",
  },
];

export default function AcademicPrograms() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-green-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-green-800 bg-green-100 border border-green-200 shadow-sm mb-3">
            <Sparkles size={14} className="text-amber-500" /> Academic Excellence
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-950 tracking-tight">
            Academic Programmes
          </h2>

          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />

          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Discover our diverse educational pathways that empower learners with core knowledge, practical skills, and leadership qualities.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Area with Overlay */}
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />

                    {/* Dark Gradient Overlay for High Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                    {/* Top Tag Pill */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-green-950 backdrop-blur-md shadow-sm border border-white/20">
                        {program.tag}
                      </span>
                    </div>

                    {/* Icon Floating Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-amber-400 text-green-950 flex items-center justify-center font-bold shadow-lg">
                      <Icon size={20} />
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 p-5 sm:p-6 text-white w-full">
                      <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-1">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description Body */}
                  <div className="p-5 sm:p-6">
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-5 sm:px-6 pb-6 pt-0">
                  <Link
                    href="/academics"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-900 hover:text-amber-600 transition-colors group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}