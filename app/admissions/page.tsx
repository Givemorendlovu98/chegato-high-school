"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  Send,
  Calendar,
  Clock,
  HelpCircle,
  Sparkles,
} from "lucide-react";

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    level: "Form 1",
    residenceType: "Boarding",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Back Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-green-800 font-semibold mb-8 hover:underline"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>

        {/* Hero Header */}
        <div className="bg-gradient-to-r from-green-950 via-green-900 to-green-800 text-white p-8 md:p-12 rounded-3xl shadow-xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 mb-4">
            <Sparkles size={14} /> Enrollment Open
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Chegato High School Admissions
          </h1>
          <p className="text-green-100 max-w-2xl text-base md:text-lg mt-3 leading-relaxed">
            Join a community dedicated to academic rigor, spiritual values, and leadership excellence. Apply today for Form 1, Form 5 (L6), or transfer placements.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Entry Requirements & Checklist */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Requirements Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="text-green-800" size={22} />
                Required Documents
              </h2>
              <ul className="space-y-3.5 text-sm text-gray-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-700 shrink-0 mt-0.5" />
                  <span>Certified copy of Grade 7 Result Slip (for Form 1) or ZIMSEC O-Level Results (for L6).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-700 shrink-0 mt-0.5" />
                  <span>Certified copy of Student's National Birth Certificate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-700 shrink-0 mt-0.5" />
                  <span>Most recent official academic report from previous school.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-green-700 shrink-0 mt-0.5" />
                  <span>Parent / Guardian National ID copy & active contact details.</span>
                </li>
              </ul>
            </div>

            {/* Application Timelines */}
            <div className="bg-green-900 text-white p-8 rounded-3xl shadow-md">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-amber-400">
                <Calendar size={20} /> Admission Deadlines
              </h3>
              <div className="space-y-4 text-sm text-green-100">
                <div className="border-b border-green-800 pb-3">
                  <p className="font-semibold text-white">Form 1 Boarding Intake</p>
                  <p className="text-xs text-green-200 mt-0.5">Applications processed via eMAP system & direct school registration.</p>
                </div>
                <div className="border-b border-green-800 pb-3">
                  <p className="font-semibold text-white">Lower Sixth (Form 5)</p>
                  <p className="text-xs text-green-200 mt-0.5">Opens immediately following ZIMSEC O-Level result releases.</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Day Scholar Registrations</p>
                  <p className="text-xs text-green-200 mt-0.5">Open ongoing based on available classroom capacity.</p>
                </div>
              </div>
            </div>

            {/* Download Prospectus Helper */}
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-amber-950 text-sm">Need the fee structure & guidelines?</p>
                <p className="text-xs text-amber-800 mt-0.5">Download our complete school prospectus PDF.</p>
              </div>
              <a
                href="/prospectus.pdf"
                target="_blank"
                className="shrink-0 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold px-4 py-2 rounded-xl text-xs transition"
              >
                Download PDF
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Application Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Online Placement Inquiry
              </h2>
              <p className="text-sm text-gray-600 mb-8">
                Submit your details to reserve a placement spot or receive official application instructions from our administration office.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-900 p-8 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-green-800 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-xl font-bold">Inquiry Submitted Successfully!</h3>
                  <p className="text-sm text-gray-700 max-w-md mx-auto">
                    Thank you for applying to Chegato High School. Our admissions officer will review your information and reach out via telephone/email within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-green-800 hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tendai Moyo"
                        value={formData.studentName}
                        onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mr. S. Moyo"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+263 77 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                        Applying For Grade / Form *
                      </label>
                      <select
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm"
                      >
                        <option value="Form 1">Form 1 (Grade 7 Entry)</option>
                        <option value="Form 2">Form 2 Transfer</option>
                        <option value="Form 3">Form 3 Transfer</option>
                        <option value="Form 5 (L6)">Lower Sixth (Form 5)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                        Accommodation Type *
                      </label>
                      <select
                        value={formData.residenceType}
                        onChange={(e) => setFormData({ ...formData, residenceType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm"
                      >
                        <option value="Boarding">Boarding Student</option>
                        <option value="Day Scholar">Day Scholar</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-900 hover:bg-green-800 text-amber-400 font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                  >
                    Submit Application Inquiry <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}