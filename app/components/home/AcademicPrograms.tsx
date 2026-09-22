"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
    {
        title: "O-Level Studies",
        description:
            "A strong academic foundation preparing learners for future success and national examinations.",
        image: "/images/programs/ordin.jpeg",
    },
    {
        title: "A-Level Studies",
        description:
            "Advanced learning pathways leading to university admission and professional careers.",
        image: "/images/programs/advanced.jpg",
    },
    {
        title: "STEM Education",
        description:
            "Science, Technology, Engineering and Mathematics programmes that foster innovation.",
        image: "/images/programs/stemm.jpeg",
    },
    {
        title: "Agriculture",
        description:
            "Practical agricultural studies focused on modern farming and entrepreneurship.",
        image: "/images/programs/agri.jpg",
    },
    {
        title: "ICT & Innovation",
        description:
            "Digital literacy, computing and technology skills for the modern world.",
        image: "/images/programs/ict1.jpg",
    },
];

export default function AcademicPrograms() {
    return (
        <section className="py-28 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-green-700 uppercase tracking-widest font-semibold">
                        Academic Excellence
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
                        Academic Programmes
                    </h2>

                    <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>

                    <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
                        Discover our diverse academic pathways that empower learners
                        with knowledge, practical skills and leadership qualities.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={program.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            whileHover={{ y: -10 }}
                            className="group overflow-hidden rounded-3xl bg-white shadow-xl"
                        >
                            {/* Image Area */}
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="
   via-black/50 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                    <h3 className="text-2xl font-bold mb-2">
                                        {program.title}
                                    </h3>

                                    <p className="text-sm text-gray-200">
                                        {program.description}
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6">
                                <button className="text-green-700 font-semibold hover:text-green-900 transition">
                                    Learn More →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}