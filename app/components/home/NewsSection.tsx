"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  ChevronRight,
  Bell,
} from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: "Academics" | "Admissions" | "Sports" | "Notice";
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const newsArticles: NewsItem[] = [
  {
    id: "zimsec-2026-results",
    title: "Chegato High Secures Top Pass Rates in Midlands Province",
    excerpt:
      "Our Form 4 and Upper 6 cohorts have achieved stellar ZIMSEC results, led by exceptional performances in STEM subjects and Commercials.",
    category: "Academics",
    date: "Sep 18, 2026",
    readTime: "3 min read",
    image: "/images/principal.png",
    featured: true,
  },
  {
    id: "form-1-admissions-open",
    title: "Form 1 & Lower 6 Boarding Applications Open for 2027",
    excerpt:
      "Parents and guardians are invited to submit online entrance applications for the upcoming academic year before the deadline.",
    category: "Admissions",
    date: "Sep 10, 2026",
    readTime: "2 min read",
    image: "/images/hero-campus1.png",
  },
  {
    id: "sports-regional-champions",
    title: "Chegato Athletics Team Triumphs at Inter-Schools Tournament",
    excerpt:
      "Congratulations to our track and field athletes for bringing home 14 gold medals from the provincial championships.",
    category: "Sports",
    date: "Aug 28, 2026",
    readTime: "4 min read",
    image: "/images/principal1.png",
  },
];

export default function NewsSection() {
  const featuredArticle = newsArticles.find((a) => a.featured) || newsArticles[0];
  const regularArticles = newsArticles.filter((a) => a.id !== featuredArticle.id);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-green-800 bg-green-100 border border-green-200 shadow-sm mb-3">
              <Sparkles size={14} className="text-amber-500" /> School Updates
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-950 tracking-tight">
              Latest News & Notices
            </h2>
            <p className="mt-2 text-gray-600 text-sm md:text-base max-w-xl">
              Stay informed about academic achievements, upcoming school events, and administrative announcements.
            </p>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-bold text-green-900 hover:text-green-700 transition-colors group self-start md:self-auto"
          >
            <span>View All News</span>
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-800 group-hover:text-amber-400 transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </div>

        {/* News Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          
          {/* FEATURED HERO ARTICLE (Spans 7 columns on Desktop) */}
          <article className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group">
            <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden bg-slate-100">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Category Pill */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-xl text-xs font-bold bg-green-950/90 text-amber-400 backdrop-blur-md border border-green-800/50 shadow-md flex items-center gap-1.5">
                  <Tag size={12} /> {featuredArticle.category}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-green-800" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-amber-600" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-green-900 transition-colors leading-snug mb-3">
                  <Link href={`/news/${featuredArticle.id}`}>
                    {featuredArticle.title}
                  </Link>
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/news/${featuredArticle.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-green-900 group-hover:text-amber-600 transition-colors"
                >
                  Read Full Story <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </article>

          {/* SECONDARY ARTICLES COLUMN (Spans 5 columns on Desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {regularArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row gap-5 group"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] sm:aspect-square sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 150px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-green-50 text-green-900 border border-green-200">
                        {article.category}
                      </span>
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <Calendar size={12} /> {article.date}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-gray-900 group-hover:text-green-900 transition-colors line-clamp-2 leading-snug">
                      <Link href={`/news/${article.id}`}>{article.title}</Link>
                    </h4>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock size={12} /> {article.readTime}
                    </span>
                    <Link
                      href={`/news/${article.id}`}
                      className="text-xs font-bold text-green-900 group-hover:text-amber-600 flex items-center gap-1 transition-colors"
                    >
                      Read <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {/* Quick Notice Card */}
            <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-3xl p-5 border border-amber-200/60 flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-green-950 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Bell size={20} />
              </div>
              <div>
                <h5 className="text-sm font-bold text-green-950">
                  Parent-Teacher Consultation Day
                </h5>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  Scheduled for next month. All boarding parents are encouraged to check the portal for session slots.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}