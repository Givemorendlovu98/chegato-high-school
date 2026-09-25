"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Users,
  CreditCard,
  Bell,
  CheckCircle2,
  XCircle,
  Search,
  Plus,
  ArrowUpRight,
  ShieldAlert,
  LogOut,
  TrendingUp,
  FileSpreadsheet,
  Building,
} from "lucide-react";

// Mock Data for Admin Panel
const mockStudents = [
  { id: "CHS-2024-0892", name: "Tinashe Moyo", grade: "Form 4 STEM", status: "Boarder", balance: "$0.00", feeStatus: "Cleared" },
  { id: "CHS-2024-0411", name: "Chipo Ndlovu", grade: "Form 3 Commercials", status: "Day Scholar", balance: "$150.00", feeStatus: "Partial" },
  { id: "CHS-2024-0105", name: "Kudzai Zhou", grade: "Lower 6 Arts", status: "Boarder", balance: "$650.00", feeStatus: "Unpaid" },
  { id: "CHS-2024-0988", name: "Bled Sango", grade: "Form 2", status: "Boarder", balance: "$0.00", feeStatus: "Cleared" },
];

const mockPayments = [
  { id: "TXN-88219", student: "Chipo Ndlovu (CHS-2024-0411)", method: "EcoCash", amount: "$100.00", date: "Today, 08:30 AM", status: "Pending" },
  { id: "TXN-88218", student: "Tinashe Moyo (CHS-2024-0892)", method: "CBZ RTGS", amount: "$650.00", date: "Yesterday", status: "Approved" },
];

export default function AdminDashboardPage() {
  const currentYear = new Date().getFullYear();
  const [activeTab, setActiveTab] = useState<"students" | "payments" | "announcements">("students");
  const [searchTerm, setSearchTerm] = useState("");
  const [announcementText, setAnnouncementText] = useState("");

  const filteredStudents = mockStudents.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-100 min-h-screen text-slate-900">
      
      {/* 1. TOP ADMIN BAR */}
      <header className="bg-slate-950 text-white border-b border-slate-800 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400 text-green-950 flex items-center justify-center font-black text-sm">
              CHS
            </div>
            <div>
              <h1 className="text-sm font-extrabold tracking-tight">Admin Portal</h1>
              <p className="text-[10px] text-slate-400">Chegato High School Management System</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
              Logged in as <strong className="text-amber-400">Bursar Office</strong>
            </span>
            <Link
              href="/parents"
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <LogOut size={14} /> Exit Admin
            </Link>
          </div>
        </div>
      </header>

      {/* 2. DASHBOARD BODY */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Enrolled</p>
              <h3 className="text-2xl font-black text-slate-900 mt-1">1,240</h3>
              <p className="text-[10px] text-green-700 font-bold mt-1 flex items-center gap-1">
                <TrendingUp size={12} /> Term 1 Academic Year {currentYear}
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center">
              <Users size={22} />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Fees Cleared Rate</p>
              <h3 className="text-2xl font-black text-green-950 mt-1">78.4%</h3>
              <p className="text-[10px] text-slate-500 font-medium mt-1">
                218 Outstanding Balances
              </p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-800 flex items-center justify-center">
              <CreditCard size={22} />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Boarding Capacity</p>
              <h3 className="text-2xl font-black text-slate-900 mt-1">850 / 900</h3>
              <p className="text-[10px] text-slate-500 font-medium mt-1">Kilimanjaro & Chegato Houses</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Building size={22} />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pending Proofs</p>
              <h3 className="text-2xl font-black text-amber-600 mt-1">12 Receipts</h3>
              <p className="text-[10px] text-amber-700 font-bold mt-1">Requires Approval</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
              <ShieldAlert size={22} />
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab("students")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "students"
                ? "bg-slate-950 text-amber-400 shadow"
                : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
            }`}
          >
            <Users size={14} /> Student Database
          </button>
          <button
            onClick={() => setActiveTab("payments")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "payments"
                ? "bg-slate-950 text-amber-400 shadow"
                : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
            }`}
          >
            <CreditCard size={14} /> Verify Payments
          </button>
          <button
            onClick={() => setActiveTab("announcements")}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeTab === "announcements"
                ? "bg-slate-950 text-amber-400 shadow"
                : "bg-white text-slate-200 hover:bg-slate-200/70 border border-slate-200"
            }`}
          >
            <Bell size={14} /> Broadcast Notices
          </button>
        </div>

        {/* TAB 1: STUDENT DATABASE */}
        {activeTab === "students" && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Student Directory</h2>
                <p className="text-xs text-slate-500">Manage student profiles and term balance ledgers.</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search by ID or Name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-slate-950"
                  />
                </div>
                <button 
                  onClick={() => alert("Exporting student directory CSV...")}
                  className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0"
                >
                  <FileSpreadsheet size={14} /> Export CSV
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="p-3.5 rounded-l-xl">Student Code</th>
                    <th className="p-3.5">Full Name</th>
                    <th className="p-3.5">Grade / Stream</th>
                    <th className="p-3.5">Boarding Type</th>
                    <th className="p-3.5">Fee Balance</th>
                    <th className="p-3.5 rounded-r-xl">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 font-bold text-slate-900">{student.id}</td>
                      <td className="p-3.5">{student.name}</td>
                      <td className="p-3.5 text-slate-600">{student.grade}</td>
                      <td className="p-3.5">{student.status}</td>
                      <td className="p-3.5 font-bold text-slate-900">{student.balance}</td>
                      <td className="p-3.5">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                            student.feeStatus === "Cleared"
                              ? "bg-green-100 text-green-800"
                              : student.feeStatus === "Partial"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {student.feeStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: PAYMENTS APPROVAL */}
        {activeTab === "payments" && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Verify Payment Receipts</h2>
              <p className="text-xs text-slate-500">Approve EcoCash and RTGS transaction references uploaded by parents.</p>
            </div>

            <div className="space-y-4">
              {mockPayments.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 text-sm">{item.student}</span>
                      <span className="text-[10px] font-bold bg-slate-200 text-slate-700 px-2 py-0.5 rounded">
                        {item.method}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Ref: <strong>{item.id}</strong> • Submitted {item.date}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    <span className="text-base font-black text-slate-900">{item.amount}</span>
                    {item.status === "Pending" ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => alert(`Payment ${item.id} approved`)}
                          className="px-3 py-1.5 bg-green-900 hover:bg-green-800 text-white rounded-lg text-xs font-bold flex items-center gap-1"
                        >
                          <CheckCircle2 size={14} /> Approve
                        </button>
                        <button
                          onClick={() => alert(`Payment ${item.id} rejected`)}
                          className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg text-xs font-bold flex items-center gap-1"
                        >
                          <XCircle size={14} /> Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-lg border border-green-200">
                        ✓ Approved
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BROADCAST NOTICES */}
        {activeTab === "announcements" && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 max-w-2xl space-y-6">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Publish Parent Announcement</h2>
              <p className="text-xs text-slate-500">Broadcast urgent notifications directly to the Parent Gateway portal.</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (announcementText.trim()) {
                  alert("Notice successfully published to Parent Gateway!");
                  setAnnouncementText("");
                }
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Notice Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="e.g. Mid-term consultation meetings scheduled for March 18..."
                  value={announcementText}
                  onChange={(e) => setAnnouncementText(e.target.value)}
                  className="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-950 font-medium"
                />
              </div>

              <button
                type="submit"
                className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-green-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-all flex items-center gap-2"
              >
                <Plus size={16} /> Broadcast Announcement
              </button>
            </form>
          </div>
        )}

      </main>
    </div>
  );
}