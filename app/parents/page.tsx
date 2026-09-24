"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Lock,
  User,
  GraduationCap,
  FileText,
  CreditCard,
  Calendar,
  AlertCircle,
  Download,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Bell,
  LogOut,
  PhoneCall,
  Search,
} from "lucide-react";

// Mock Student Data for Authenticated State
const mockStudent = {
  name: "Tinashe Moyo",
  studentId: "CHS-2024-0892",
  grade: "Form 4 STEM",
  house: "Kilimanjaro House",
  status: "Boarder",
  termFeeStatus: "Cleared",
  balanceDue: 0.0,
  term2026PassRate: "84%",
  recentGrades: [
    { subject: "Mathematics", grade: "A", score: "88%" },
    { subject: "Physics", grade: "A", score: "85%" },
    { subject: "Chemistry", grade: "B", score: "78%" },
    { subject: "Agriculture", grade: "A", score: "92%" },
    { subject: "English Language", grade: "B", score: "74%" },
  ],
  announcements: [
    {
      id: 1,
      title: "Mid-Term Consultation Day",
      date: "March 18, 2026",
      urgent: true,
      msg: "Parents are invited for Form 4 and Upper 6 progress review meetings starting at 09:00 AM in the Main Assembly Hall.",
    },
    {
      id: 2,
      title: "Term 2 Fee Clearance Notice",
      date: "March 02, 2026",
      urgent: false,
      msg: "Early clearance discounts apply for settlements completed before April 15, 2026.",
    },
  ],
};

export default function ParentsPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nationalId, setNationalId] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [activeTab, setActiveTab] = useState<"overview" | "academics" | "fees" | "notices">("overview");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentCode.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  // Explicitly clear form inputs on logout
  const handleLogout = () => {
    setStudentCode("");
    setNationalId("");
    setIsLoggedIn(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. HERO HEADER */}
      <section className="relative bg-green-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-900 via-green-950 to-slate-950 opacity-90" />
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 mb-4">
            <Sparkles size={14} /> Parent & Guardian Portal
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Chegato Parent Gateway
          </h1>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-green-100/90 text-sm sm:text-base leading-relaxed">
            Access student academic performance records, official ZIMSEC progress reports, fee statements, and boarding announcements.
          </p>
        </div>
      </section>

      {/* 2. AUTHENTICATION / PORTAL CONTENT */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {!isLoggedIn ? (
            /* --- LOGIN FORM --- */
            <div className="max-w-xl mx-auto bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8 bg-slate-900 text-white border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Lock size={18} className="text-amber-400" /> Portal Login
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Enter student credentials provided by the Bursar&apos;s desk.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                  <ShieldCheck size={20} />
                </div>
              </div>

              <form onSubmit={handleLogin} autoComplete="off" className="p-6 sm:p-8 space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Student Registration Code *
                  </label>
                  <div className="relative">
                    <GraduationCap
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      name="student-code-off"
                      autoComplete="off"
                      required
                      placeholder="e.g. CHS-2024-0892"
                      value={studentCode}
                      onChange={(e) => setStudentCode(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-950 transition-all bg-slate-50/50 font-medium"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1.5">
                    Found on your student&apos;s admission letter or term report.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Parent / Guardian National ID Number *
                  </label>
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      name="national-id-off"
                      autoComplete="off"
                      required
                      placeholder="e.g. 26-1234567-X-26"
                      value={nationalId}
                      onChange={(e) => setNationalId(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-900/20 focus:border-green-950 transition-all bg-slate-50/50 font-medium"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-amber-400 hover:bg-amber-300 text-green-950 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <span>Access Student Dashboard</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                <div className="pt-4 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-500">
                    Having trouble logging in?{" "}
                    <Link href="/contact" className="text-green-900 font-bold hover:underline">
                      Contact Accounts Office
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          ) : (
            /* --- DASHBOARD WHEN LOGGED IN --- */
            <div className="space-y-8">
              
              {/* Top Student Header Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-green-950 text-amber-400 flex items-center justify-center font-extrabold text-2xl shadow-md shrink-0">
                    TM
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-extrabold text-green-950">
                        {mockStudent.name}
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-100 text-amber-900 border border-amber-200">
                        {mockStudent.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      ID: {mockStudent.studentId} • {mockStudent.grade} • {mockStudent.house}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <div className="px-4 py-2 bg-green-50 border border-green-200 rounded-xl text-left">
                    <p className="text-[10px] font-bold text-green-800 uppercase tracking-wider">Fees Status</p>
                    <p className="text-xs font-bold text-green-950 flex items-center gap-1 mt-0.5">
                      <CheckCircle2 size={12} className="text-green-600" /> Cleared (0.00 Balance)
                    </p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <LogOut size={14} /> Log Out
                  </button>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar">
                {[
                  { id: "overview", label: "Dashboard Overview", icon: Sparkles },
                  { id: "academics", label: "Academic Progress", icon: GraduationCap },
                  { id: "fees", label: "Fee Statements & Online Pay", icon: CreditCard },
                  { id: "notices", label: "Boarding & Notices", icon: Bell },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap transition-all ${
                        isActive
                          ? "bg-green-950 text-amber-400 shadow-md"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                      }`}
                    >
                      <Icon size={14} /> {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* TAB CONTENT */}
              {activeTab === "overview" && (
                <div className="grid lg:grid-cols-12 gap-6">
                  {/* Left Column: Grade Summary & Quick Actions */}
                  <div className="lg:col-span-8 space-y-6">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                      <h3 className="font-bold text-green-950 text-base mb-4 flex items-center gap-2">
                        <GraduationCap size={18} className="text-amber-500" /> Current Term Academic Summary
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {mockStudent.recentGrades.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between"
                          >
                            <div>
                              <p className="text-xs font-bold text-slate-800">{item.subject}</p>
                              <p className="text-[11px] text-slate-500 mt-0.5">Continuous Assessment</p>
                            </div>
                            <div className="text-right">
                              <span className="text-lg font-extrabold text-green-950">{item.grade}</span>
                              <p className="text-[10px] text-slate-500 font-semibold">{item.score}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                      <h3 className="font-bold text-green-950 text-base mb-4 flex items-center gap-2">
                        <Download size={18} className="text-amber-500" /> Available Term Downloads
                      </h3>
                      <div className="space-y-3">
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <FileText size={20} className="text-green-900" />
                            <div>
                              <p className="text-xs font-bold text-slate-800">Term 1 ZIMSEC Mid-Term Assessment Report</p>
                              <p className="text-[10px] text-slate-500">PDF Document • Issued Feb 2026</p>
                            </div>
                          </div>
                          <button
                            onClick={() => alert("Downloading Report...")}
                            className="px-3 py-1.5 bg-green-950 text-amber-400 rounded-lg text-xs font-bold hover:bg-green-900 transition-all"
                          >
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Notices & Administrative Support */}
                  <div className="lg:col-span-4 space-y-6">
                    <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm">
                      <h3 className="font-bold text-green-950 text-base mb-4 flex items-center gap-2">
                        <Bell size={18} className="text-amber-500" /> Priority Announcements
                      </h3>
                      <div className="space-y-4">
                        {mockStudent.announcements.map((item) => (
                          <div
                            key={item.id}
                            className={`p-4 rounded-2xl border ${
                              item.urgent
                                ? "bg-amber-50 border-amber-200 text-amber-950"
                                : "bg-slate-50 border-slate-200 text-slate-800"
                            }`}
                          >
                            <p className="text-xs font-bold">{item.title}</p>
                            <p className="text-[10px] text-slate-500 mt-0.5">{item.date}</p>
                            <p className="text-xs mt-2 leading-relaxed">{item.msg}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-950 text-white p-6 rounded-3xl border border-green-800">
                      <h3 className="font-bold text-white text-base mb-2">Bursar & Accounts Help</h3>
                      <p className="text-xs text-green-100/80 leading-relaxed mb-4">
                        Need assistance with Ecocash transfers, Bank RTGS payments, or fee statements?
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300"
                      >
                        <PhoneCall size={14} /> Contact Accounts Desk
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "academics" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                  <h3 className="text-xl font-extrabold text-green-950 mb-2">Detailed Academic Transcripts</h3>
                  <p className="text-xs text-slate-500 mb-6">Continuous Assessment Learning Activity (CALA) & Exam Scores</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-700">
                      <thead className="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-[10px]">
                        <tr>
                          <th className="p-3.5 rounded-l-xl">Subject Name</th>
                          <th className="p-3.5">Coursework / CALA</th>
                          <th className="p-3.5">Main Exam Score</th>
                          <th className="p-3.5">Final Grade</th>
                          <th className="p-3.5 rounded-r-xl">Teacher Remark</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {mockStudent.recentGrades.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/80">
                            <td className="p-3.5 font-bold text-green-950">{row.subject}</td>
                            <td className="p-3.5">82%</td>
                            <td className="p-3.5">{row.score}</td>
                            <td className="p-3.5 font-extrabold text-amber-600">{row.grade}</td>
                            <td className="p-3.5 text-slate-500">Exhibits strong analytical competence.</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "fees" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
                  <div>
                    <h3 className="text-xl font-extrabold text-green-950">Fee Ledger & Online Payment</h3>
                    <p className="text-xs text-slate-500 mt-1">Official receipts and online transaction portal for Chegato High School.</p>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-green-50 border border-green-200">
                      <p className="text-[10px] font-bold text-green-800 uppercase">Term 1 2026 Fee</p>
                      <p className="text-2xl font-extrabold text-green-950 mt-1">$650.00 USD</p>
                      <p className="text-[11px] text-green-800 font-semibold mt-1">Status: Paid in Full</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <p className="text-[10px] font-bold text-slate-500 uppercase">Outstanding Balance</p>
                      <p className="text-2xl font-extrabold text-slate-900 mt-1">$0.00 USD</p>
                      <p className="text-[11px] text-slate-500 mt-1">No arrears on record</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-bold text-slate-900 text-sm mb-3">Approved Payment Banking Channels</h4>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                      For electronic transfers, please state student ID <strong>({mockStudent.studentId})</strong> in the reference field.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "notices" && (
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                  <h3 className="text-xl font-extrabold text-green-950 mb-4">Boarding & Welfare Updates</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All boarders in Kilimanjaro House are required to adhere to published weekend study schedules and visiting hours.
                  </p>
                </div>
              )}

            </div>
          )}

        </div>
      </section>

      {/* 3. CALL TO ACTION (Pure Green Background) */}
      <section className="py-16 sm:py-20 bg-green-950 text-white relative overflow-hidden border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Need Direct Support From School Authorities?
          </h2>
          <p className="mt-4 text-green-100/90 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Get in touch with the Chaplaincy, Headmaster&apos;s office, or boarding master for student guidance and welfare.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-400 hover:bg-amber-300 text-green-950 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              Contact School Desk <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}