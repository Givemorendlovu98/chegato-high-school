"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Calendar,
  User,
  Tag,
  ArrowRight,
  Search,
  FileText,
  Download,
  X,
  ChevronRight,
  Megaphone,
  Clock,
  BookOpen,
} from "lucide-react";

interface NewsArticle {
  id: number;
  title: string;
  category: "Academics" | "Sports & Arts" | "ELCZ & Mission" | "Notices";
  date: string;
  author: string;
  image: string;
  summary: string;
  content: string[];
  isFeatured?: boolean;
}

const newsData: NewsArticle[] = [
  {
    id: 1,
    title: "Chegato High Records Exceptional Performance in ZIMSEC Examinations",
    category: "Academics",
    date: "February 12, 2026",
    author: "Academic Registrar",
    image: "/images/programs/advanced.jpg",
    isFeatured: true,
    summary:
      "Our Advanced Level and Ordinary Level cohorts achieved stellar pass rates across STEM subjects, humanities, and commercial streams.",
    content: [
      "Chegato High School is proud to announce another landmark achievement in the recently released ZIMSEC examination results. The A-Level class achieved an impressive pass rate exceeding 95%, with several students scoring maximum points in Mathematics, Physics, Chemistry, and Agriculture.",
      "The Headmaster commended both the teaching staff for their unwavering dedication and the parents for their continuous support through the ELCZ education committee.",
      "Preparations are already underway to reward top-performing learners during the upcoming Annual Speech and Prize Giving Day.",
    ],
  },
  {
    id: 2,
    title: "Upgrades Completed for ICT Computer Labs & E-Learning Portal",
    category: "Academics",
    date: "January 28, 2026",
    author: "ICT Department",
    image: "/images/programs/ict1.jpg",
    summary:
      "New high-speed internet infrastructure and updated computer hardware have been deployed to bolster digital literacy.",
    content: [
      "In line with the ministry's thrust on digital literacy and practical STEM education, Chegato High School has upgraded its primary ICT laboratory.",
      "The lab now features 50 new workstations, high-speed fiber internet, and dedicated software for programming, graphic design, and computer science courses.",
      "Students across Form 1 through Upper 6 will now enjoy extended lab hours for research and e-learning access.",
    ],
  },
  {
    id: 3,
    title: "Practical Agricultural Innovations at the Chegato School Farm",
    category: "Academics",
    date: "January 15, 2026",
    author: "Agriculture Dept.",
    image: "/images/programs/agri.jpg",
    summary:
      "Agriculture students implement climate-smart drip irrigation techniques to supply fresh produce to the boarding kitchen.",
    content: [
      "Our Agriculture department has launched a new climate-smart farming initiative. Combining modern drip irrigation with sustainable soil management, learners are getting practical enterprise experience.",
      "The farm currently produces maize, green vegetables, and poultry, significantly lowering boarding operating costs while giving students real-world business skills.",
    ],
  },
  {
    id: 4,
    title: "Notice to Parents: Term 1 Newsletter & Fees Settlement Circular",
    category: "Notices",
    date: "January 08, 2026",
    author: "Bursar's Office",
    image: "/images/programs/ordin.jpeg",
    summary:
      "Important administrative notice detailing termly fee clearance deadlines, boarding logistics, and essential pupil requirements.",
    content: [
      "All parents and guardians are kindly requested to review the official Term 1 administrative circular.",
      "Fee settlements or approved payment plan arrangements must be finalized with the Bursar's Office prior to the opening week.",
      "For boarding pupils, mandatory personal requirements lists are available for download in the circulars section below.",
    ],
  },
  {
    id: 5,
    title: "Annual ELCZ Lutheran Schools Fellowship & Cultural Festival",
    category: "ELCZ & Mission",
    date: "December 18, 2025",
    author: "Chaplaincy Team",
    image: "/images/programs/stemm.jpeg",
    summary:
      "Chegato hosted neighboring mission schools for a weekend of spiritual growth, choral music, and cultural exchange.",
    content: [
      "Chegato High School proudly hosted the annual ELCZ Youth & Mission Festival, bringing together students from across the Midlands and Matabeleland South dioceses.",
      "Events included choir competitions, Bible quiz tournaments, traditional dance displays, and sports fixtures.",
    ],
  },
];

const officialCirculars = [
  {
    title: "Term 1 School Calendar & Key Events",
    size: "1.2 MB",
    date: "Jan 2026",
    type: "PDF",
  },
  {
    title: "Form 1 Boarding Requirement List",
    size: "850 KB",
    date: "Dec 2025",
    type: "PDF",
  },
  {
    title: "Lower 6 Entry Requirements & Subject Combinations",
    size: "1.0 MB",
    date: "Feb 2026",
    type: "PDF",
  },
];

const categories = ["All", "Academics", "Notices", "ELCZ & Mission", "Sports & Arts"] as const;

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const featuredArticle = newsData.find((a) => a.isFeatured) || newsData[0];

  const filteredNews = newsData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-green-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900 via-green-950 to-slate-950 opacity-90" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 mb-4">
            <Sparkles size={14} /> School Updates & Announcements
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Chegato News & Notices
          </h1>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-green-100/90 text-sm sm:text-base leading-relaxed">
            Stay informed with the latest academic achievements, official school circulars, upcoming events, and campus developments.
          </p>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE SPOTLIGHT */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl grid lg:grid-cols-12 gap-0">
          <div className="relative lg:col-span-7 h-64 sm:h-80 lg:h-auto min-h-[300px]">
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-green-950 uppercase tracking-wider shadow-md">
                Featured Spotlight
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-3">
                <span className="inline-flex items-center gap-1 text-green-900 font-bold bg-green-100 px-2.5 py-1 rounded-md">
                  <Tag size={12} /> {featuredArticle.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={13} /> {featuredArticle.date}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-green-950 leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="mt-4 text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                {featuredArticle.summary}
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                <User size={13} /> By {featuredArticle.author}
              </span>
              <button
                onClick={() => setActiveArticle(featuredArticle)}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-900 hover:text-amber-600 transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FILTER & SEARCH BAR */}
      <section className="py-6 bg-white border-y border-slate-200/80 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto no-scrollbar py-1">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-green-950 text-amber-400 shadow-md scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-green-950"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search news & updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs font-medium rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-950 transition-all bg-slate-50"
            />
          </div>

        </div>
      </section>

      {/* 4. NEWS GRID */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredNews.map((article) => (
              <motion.div
                key={article.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-green-950 backdrop-blur-md shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User size={12} /> {article.author}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-green-950 group-hover:text-amber-600 transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-gray-600 mt-2 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-900 hover:text-amber-600 transition-colors"
                  >
                    <span>Read Article</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
              <Megaphone size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-lg font-bold text-green-950">No news articles found</p>
              <p className="text-xs text-gray-500 mt-1">
                Try adjusting your search query or selecting a different category.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* 5. OFFICIAL CIRCULARS & DOWNLOADS */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-green-800 uppercase tracking-widest bg-green-100 px-3 py-1 rounded-full border border-green-200">
                Official Documents
              </span>
              <h2 className="text-3xl font-extrabold text-green-950 mt-3">
                School Circulars & Downloads
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md">
              Download official administrative PDFs, termly fee schedules, and academic requirement lists.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {officialCirculars.map((doc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 transition-all flex items-start justify-between gap-4 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-950 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <FileText size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-950 text-sm group-hover:text-amber-600 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {doc.type} • {doc.size} • {doc.date}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => alert(`Downloading: ${doc.title}`)}
                  className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-green-950 hover:bg-amber-400 hover:border-amber-400 transition-all flex items-center justify-center shrink-0 shadow-sm"
                  title="Download File"
                >
                  <Download size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ARTICLE READER MODAL */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-all"
              >
                <X size={20} />
              </button>

              {/* Cover Image */}
              <div className="relative h-64 sm:h-80 w-full bg-slate-900">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-green-950 uppercase tracking-wider">
                    {activeArticle.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 leading-tight">
                    {activeArticle.title}
                  </h2>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 pb-4 border-b border-slate-100 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-amber-500" /> {activeArticle.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User size={14} className="text-green-800" /> By {activeArticle.author}
                  </span>
                </div>

                <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                  {activeArticle.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="bg-green-950 hover:bg-green-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Close Article
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 7. CALL TO ACTION (Pure Green Background) */}
      <section className="py-16 sm:py-20 bg-green-950 text-white relative overflow-hidden border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Have an Official Announcement to Make?
          </h2>
          <p className="mt-4 text-green-100/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Contact the Chegato administration office or Chaplaincy for official circular submissions and press inquiries.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-400 hover:bg-amber-300 text-green-950 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              Contact Administration <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}