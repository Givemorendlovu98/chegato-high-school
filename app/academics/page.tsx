import Link from "next/link";
import { ArrowLeft, BookOpen, Award, CheckCircle2 } from "lucide-react";

export default function AcademicsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Navigation Back Home */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-green-800 font-semibold mb-8 hover:underline"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Page Header */}
        <div className="bg-gradient-to-r from-green-900 to-green-800 text-white p-10 rounded-3xl shadow-xl mb-12">
          <span className="text-amber-400 font-semibold uppercase tracking-wider text-xs">
            Academic Performance
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-4">
            Pass Rates & Standards
          </h1>
          <p className="text-green-100 max-w-2xl text-lg">
            Chegato High School consistently maintains high academic standings across ZIMSEC Ordinary and Advanced Level examinations.
          </p>
        </div>

        {/* Detailed Statistics Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 text-green-800 mb-4">
              <Award size={28} />
              <h2 className="text-2xl font-bold text-gray-900">A-Level Performance</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Our Advanced Level students excel in Sciences, Commercials, and Arts, with a high percentage qualifying for university admission.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" /> Over 95% overall pass rate
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" /> Top performance in STEM & Agriculture
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 text-green-800 mb-4">
              <BookOpen size={28} />
              <h2 className="text-2xl font-bold text-gray-900">O-Level Performance</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Strong foundational learning ensures high pass rates across core subjects including Mathematics, English, Sciences, and ICT.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" /> ZIMSEC accredited syllabus
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-600" /> Comprehensive practical labs
              </li>
            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}