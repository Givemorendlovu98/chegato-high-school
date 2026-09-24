"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Tag,
  ArrowRight,
} from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "Campus" | "Academics" | "Sports" | "Culture" | "STEM";
  image: string;
  caption: string;
  date: string;
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Science & Chemistry Lab",
    category: "STEM",
    image: "/images/programs/stemm.jpeg",
    caption: "Students conducting advanced chemistry experiments in our modern STEM laboratory.",
    date: "Term 1, 2026",
  },
  {
    title: "O-Level Classrooms & Main Quad",
    id: 2,
    category: "Campus",
    image: "/images/programs/ordin.jpeg",
    caption: "Learners outside the primary classroom block during academic intermission.",
    date: "Term 1, 2026",
  },
  {
    title: "Advanced Level Seminar",
    id: 3,
    category: "Academics",
    image: "/images/programs/advanced.jpg",
    caption: "Upper Six students engaging in collaborative study for university preparation.",
    date: "Term 3, 2025",
  },
  {
    title: "Agricultural Enterprise Project",
    id: 4,
    category: "Academics",
    image: "/images/programs/agri.jpg",
    caption: "Practical hands-on modern farming techniques at the Chegato school farm.",
    date: "Term 1, 2026",
  },
  {
    title: "ICT & Digital Literacy Innovation Hub",
    id: 5,
    category: "STEM",
    image: "/images/programs/ict1.jpg",
    caption: "Computer science learners working on programming and digital literacy skills.",
    date: "Term 1, 2026",
  },
];

const categories = ["All", "Campus", "Academics", "STEM", "Sports", "Culture"] as const;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-green-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900 via-green-950 to-slate-950 opacity-90" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 mb-4">
            <Sparkles size={14} /> Life at Chegato
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            School Photo Gallery
          </h1>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-green-100/90 text-sm sm:text-base leading-relaxed">
            Explore moments of academic rigor, athletic achievements, spiritual fellowship, and vibrant campus life at Chegato High School.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY FILTER BAR */}
      <section className="py-8 bg-white border-b border-slate-200/80 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-green-950 text-amber-400 shadow-md scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-green-950"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GALLERY GRID */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImageIndex(index)}
                >
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                    {/* Tag Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 text-green-950 backdrop-blur-md shadow-sm">
                        <Tag size={12} className="text-amber-500" />
                        {item.category}
                      </span>
                    </div>

                    {/* Zoom Icon Button */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={16} />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 p-5 text-white w-full">
                      <p className="text-[11px] text-amber-300 font-bold uppercase tracking-wider mb-1">
                        {item.date}
                      </p>
                      <h3 className="text-lg font-bold leading-snug group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <Camera size={48} className="mx-auto text-slate-300 mb-4" />
              <p className="text-lg font-bold text-green-950">No photos in this category yet</p>
              <p className="text-xs text-gray-500 mt-1">Select another category to view campus photos.</p>
            </div>
          )}
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredItems[selectedImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
            >
              <X size={24} />
            </button>

            {/* Navigation - Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Navigation - Next */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
            >
              <ChevronRight size={28} />
            </button>

            {/* Lightbox Image & Info */}
            <div className="max-w-5xl w-full flex flex-col items-center">
              <div className="relative h-[60vh] sm:h-[70vh] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={filteredItems[selectedImageIndex].image}
                  alt={filteredItems[selectedImageIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-center text-white max-w-2xl px-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  {filteredItems[selectedImageIndex].category}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold mt-2">
                  {filteredItems[selectedImageIndex].title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                  {filteredItems[selectedImageIndex].caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. CALL TO ACTION (Pure Green Background) */}
      <section className="py-16 sm:py-20 bg-green-950 text-white relative overflow-hidden border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Experience Chegato in Person
          </h2>
          <p className="mt-4 text-green-100/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Interested in visiting our campus in Mberengwa? Get in touch with our administrative office to schedule a guided tour.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-400 hover:bg-amber-300 text-green-950 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}