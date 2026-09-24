"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-green-950 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900 via-green-950 to-slate-950 opacity-90" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 mb-4">
            <Sparkles size={14} /> Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Contact Administration
          </h1>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-green-100/90 text-sm sm:text-base leading-relaxed">
            Have inquiries regarding Form 1 or Lower 6 admissions, school fees, campus visits, or academic programs? We are here to assist you.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID (FORM & CONTACT INFO) */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Contact Cards & Office Details (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-md">
                <span className="text-xs font-bold text-green-800 uppercase tracking-widest bg-green-100 px-3 py-1 rounded-full border border-green-200">
                  Direct Channels
                </span>
                <h2 className="text-2xl font-extrabold text-green-950 mt-3">
                  Reach Our Office
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Our administrative desk is open Monday through Friday during active school terms.
                </p>

                <div className="mt-6 space-y-5">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold shrink-0 mt-1">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-green-900">
                        Physical Address
                      </p>
                      <p className="text-sm text-slate-700 mt-0.5 font-medium">
                        Chegato High School, Mberengwa District
                      </p>
                      <p className="text-xs text-slate-500">
                        Midlands Province, Zimbabwe
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-100 text-green-900 flex items-center justify-center font-bold shrink-0 mt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-green-900">
                        Telephone & Inquiries
                      </p>
                      <p className="text-sm text-slate-700 mt-0.5 font-semibold">
                        +263 (0) 51 8000 / +263 77 000 0000
                      </p>
                      <p className="text-xs text-slate-500">
                        Mon - Fri: 8:00 AM – 4:30 PM
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold shrink-0 mt-1">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-green-900">
                        Email Address
                      </p>
                      <p className="text-sm text-slate-700 mt-0.5 font-semibold">
                        info@chegatohigh.ac.zw
                      </p>
                      <p className="text-xs text-slate-500">
                        admissions@chegatohigh.ac.zw
                      </p>
                    </div>
                  </div>

                  {/* Church Affiliation */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold shrink-0 mt-1">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-green-900">
                        Responsible Authority
                      </p>
                      <p className="text-sm text-slate-700 mt-0.5 font-medium">
                        Evangelical Lutheran Church in Zimbabwe (ELCZ)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours Card */}
              <div className="p-6 rounded-3xl bg-green-950 text-white border border-green-800 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-green-950 flex items-center justify-center font-bold">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Visiting Hours</h3>
                    <p className="text-xs text-green-100/80">Boarding & Campus Visits</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-green-900/80 text-xs text-green-100/90 space-y-2">
                  <div className="flex justify-between">
                    <span>Term-time Consultations:</span>
                    <span className="font-bold text-amber-300">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Parent Visiting Days:</span>
                    <span className="font-bold text-amber-300">Published Termly</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Send a Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-green-950 mt-3">
                Online Message Portal
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Fill out the form below and our administrative team will respond to your email shortly.
              </p>

              {submitted ? (
                <div className="mt-8 p-8 bg-green-50 border border-green-200 rounded-2xl text-center">
                  <CheckCircle2 size={48} className="text-green-800 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-green-950">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-green-800 mt-2">
                    Thank you for reaching out to Chegato High School. An administrative officer will get back to you within 24 to 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-green-950 hover:bg-green-900 text-white px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tendai Moyo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-950 transition-all bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. tendai@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-950 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +263 77 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-950 transition-all bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Inquiry Subject *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-950 transition-all bg-slate-50/50 font-medium text-slate-700"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Form 1 Admission">Form 1 Admission</option>
                        <option value="Lower 6 Admission">Lower 6 Admission</option>
                        <option value="School Fees & Accounts">School Fees & Accounts</option>
                        <option value="Boarding & Welfare">Boarding & Welfare</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your message or detailed inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-950 transition-all bg-slate-50/50"
                    />
                  </div>

                  {/* Matching Contact Us / Submit Button Style */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-green-950 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. CALL TO ACTION (Pure Green Background) */}
      <section className="py-16 sm:py-20 bg-green-950 text-white relative overflow-hidden border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Looking for Immediate Admissions?
          </h2>
          <p className="mt-4 text-green-100/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Review our complete enrollment requirements, entry qualifications, and application forms online.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/admissions"
              className="bg-amber-400 hover:bg-amber-300 text-green-950 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              Go to Admissions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}