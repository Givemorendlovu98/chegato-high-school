"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Target,
  Compass,
  Heart,
  GraduationCap,
  Sparkles,
  ArrowRight,
  MapPin,
  Building2,
} from "lucide-react";

const coreValues = [
  {
    title: "Christian Integrity",
    desc: "Grounded in ELCZ Lutheran principles, building moral uprightness and strong spiritual foundations.",
    icon: Heart,
  },
  {
    title: "Academic Rigour",
    desc: "Uncompromising commitment to high ZIMSEC standards and innovative STEM learning.",
    icon: Award,
  },
  {
    title: "Discipline & Respect",
    desc: "Fostering an environment of mutual respect, self-control, and responsibility in every learner.",
    icon: ShieldCheck,
  },
  {
    title: "Holistic Growth",
    desc: "Nurturing academic, co-curricular, sports, and leadership talent in equal measure.",
    icon: Compass,
  },
];

const stats = [
  { label: "Years of Excellence", value: "70+" },
  { label: "Enrolled Learners", value: "1,200+" },
  { label: "Pass Rate Average", value: "90%+" },
  { label: "Dedicated Staff", value: "60+" },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative bg-green-950 text-white py-20 lg:py-28 overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900 via-green-950 to-slate-950 opacity-90" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 mb-4">
              <Sparkles size={14} /> Our Heritage & Vision
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Shaping Leaders of Integrity & Excellence
            </h1>
            <p className="mt-6 text-base sm:text-lg text-green-100/90 leading-relaxed">
              Located in Mberengwa, Chegato High School stands as a beacon of academic quality, holistic Christian values, and community transformation under the Evangelical Lutheran Church in Zimbabwe (ELCZ).
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="bg-amber-400 hover:bg-amber-300 text-green-950 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105"
              >
                Join Our Community
              </Link>
              <a
                href="#history"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-6 sm:p-8 rounded-3xl shadow-xl border border-slate-200/80">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-2 border-r last:border-r-0 border-slate-100">
              <p className="text-3xl sm:text-4xl font-extrabold text-green-950">{stat.value}</p>
              <p className="text-xs sm:text-sm font-medium text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HISTORY & MISSION SECTION */}
      <section id="history" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Grid */}
            <div className="relative">
              <div className="relative h-96 sm:h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/programs/ordin.jpeg"
                  alt="Chegato High School Campus"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <MapPin size={14} /> Mberengwa, Zimbabwe
                  </div>
                  <p className="text-xl font-bold mt-1">A Legacy of Education</p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-green-900 text-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-xs border border-green-700">
                <Building2 size={28} className="text-amber-400 mb-2" />
                <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">ELCZ Institution</p>
                <p className="text-sm font-medium mt-1 leading-snug">
                  Guided by Christian values, discipline, and devotion to duty.
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-xs font-bold text-green-800 uppercase tracking-widest bg-green-100 px-3 py-1 rounded-full border border-green-200">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-green-950 mt-3 leading-tight">
                Empowering Learners Since the Mission Founding
              </h2>
              <div className="w-16 h-1 bg-amber-400 mt-4 rounded-full" />

              <p className="mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                Chegato High School is a premier boarding school situated in Mberengwa District. Founded under the auspices of the Evangelical Lutheran Church in Zimbabwe (ELCZ), the institution has spent decades cultivating academic excellence and high moral standards.
              </p>
              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                From our comprehensive O-Level and A-Level curriculums to state-of-the-art STEM initiatives and practical agricultural programs, Chegato prepares students not just for national examinations, but for university life and global leadership.
              </p>

              {/* Vision & Mission Cards */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-900 flex items-center justify-center font-bold mb-2">
                    <Target size={18} />
                  </div>
                  <h3 className="font-bold text-green-950 text-sm">Our Mission</h3>
                  <p className="text-xs text-gray-600 mt-1">To provide holistic, high-quality Christian education that fosters intellectual growth and integrity.</p>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 flex items-center justify-center font-bold mb-2">
                    <GraduationCap size={18} />
                  </div>
                  <h3 className="font-bold text-green-950 text-sm">Our Vision</h3>
                  <p className="text-xs text-gray-600 mt-1">To remain a leading secondary institution known for academic excellence, innovation, and character building.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-green-800 uppercase tracking-widest bg-green-100 px-3 py-1 rounded-full border border-green-200">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-green-950 mt-3">Our Core Values</h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              The foundational pillars that guide every student, teacher, and administrator at Chegato High.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-green-950 hover:text-white transition-all group duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-400 text-green-950 flex items-center justify-center font-bold mb-4 group-hover:bg-white group-hover:text-green-950 transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-green-950 group-hover:text-white transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-gray-600 group-hover:text-green-100/80 mt-2 leading-relaxed transition-colors">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION (Updated with Deep Green & Amber Brand Scheme) */}
      {/* 5. CALL TO ACTION (Pure Deep Green Background) */}
      <section className="py-16 sm:py-20 bg-green-950 text-white relative overflow-hidden border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Ready to Join the Chegato Family?
          </h2>
          <p className="mt-4 text-green-100/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discover our enrollment process for Form 1 and Lower 6 entry or schedule a school visit today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/admissions"
              className="bg-amber-400 hover:bg-amber-300 text-green-950 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              Apply Online Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}