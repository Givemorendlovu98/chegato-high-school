"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  Send,
  Calendar,
  Sparkles,
  Upload,
  Paperclip,
  X,
  Loader2,
  AlertCircle,
  Home,
  UserCheck,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function AdmissionsPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    level: "Form 1",
    residenceType: "Boarding",
  });

  // Single Combined Document File
  const [applicationDocument, setApplicationDocument] = useState<File | null>(null);

  const handleFile = (file: File) => {
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage("File exceeds 10MB limit. Please attach a smaller file.");
      return;
    }
    setErrorMessage("");
    setApplicationDocument(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const validateStep1 = () => {
    if (!formData.studentName || !formData.parentName || !formData.phone || !formData.email) {
      setErrorMessage("Please complete all required fields before continuing.");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!applicationDocument) {
      setErrorMessage("Please attach your combined application document file.");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      data.append("studentName", formData.studentName);
      data.append("parentName", formData.parentName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("level", formData.level);
      data.append("residenceType", formData.residenceType);
      data.append("applicationDocument", applicationDocument);

      const res = await fetch("/api/admissions", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("Submission failed. Please try again.");

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit placement inquiry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100/70 py-10 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-green-900 font-semibold mb-6 hover:text-green-700 transition"
        >
          <ArrowLeft size={16} /> Return to Main Portal
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-950 via-green-900 to-emerald-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl mb-10 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/20 mb-4 backdrop-blur-md">
              <Sparkles size={14} /> Admissions Open
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Chegato High School Placement
            </h1>
            <p className="text-green-100 text-base md:text-lg mt-3 leading-relaxed opacity-90">
              Complete student details, select accommodation status, and attach your single verification document to submit your application.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column Guidance */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-green-800" size={20} />
                Required Checklist
              </h2>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Scan or combine these into <strong>one single document</strong> (PDF or Image):
              </p>
              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 size={16} className="text-green-700 shrink-0 mt-0.5" />
                  <span>Grade 7 / ZIMSEC O-Level Result Slip</span>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 size={16} className="text-green-700 shrink-0 mt-0.5" />
                  <span>Parent / Guardian National ID Copy</span>
                </div>
                <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 size={16} className="text-green-700 shrink-0 mt-0.5" />
                  <span>Birth Certificate or Academic Report</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900 to-green-950 text-white p-7 rounded-3xl shadow-sm">
              <h3 className="text-base font-bold mb-2 flex items-center gap-2 text-amber-400">
                <ShieldCheck size={18} /> Official Verification
              </h3>
              <p className="text-xs text-green-100/80 leading-relaxed">
                Once submitted, our admissions team validates your details. Expect feedback via email or phone within 24 to 48 hours.
              </p>
            </div>
          </div>

          {/* Right Main Application Wizard */}
          <div className="lg:col-span-8">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200/90 shadow-xl">
              
              {/* Stepper Progress Bar */}
              {!submitted && (
                <div className="mb-8">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    <span className={step >= 1 ? "text-green-900" : ""}>1. Details & Contact</span>
                    <span className={step >= 2 ? "text-green-900" : ""}>2. Document Upload</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-green-800 h-full transition-all duration-300 ease-out"
                      style={{ width: step === 1 ? "50%" : "100%" }}
                    />
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-2xl flex items-center gap-3 text-xs font-medium">
                  <AlertCircle size={18} className="shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {submitted ? (
                <div className="bg-emerald-50/50 border border-emerald-200 text-emerald-950 p-10 rounded-3xl text-center space-y-4">
                  <div className="w-16 h-16 bg-green-900 text-amber-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-black">Application Submitted!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your details and attached application file have been registered successfully.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                      setApplicationDocument(null);
                    }}
                    className="mt-4 text-xs font-bold text-green-900 bg-white border border-green-200 px-5 py-2.5 rounded-xl hover:bg-green-50 transition shadow-sm"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* STEP 1: Applicant Details & Options */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="border-b border-slate-100 pb-4">
                        <h2 className="text-xl font-extrabold text-slate-900">Student & Guardian Details</h2>
                        <p className="text-xs text-slate-500">Provide accurate contact details for official communication.</p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Student Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Tendai Moyo"
                            value={formData.studentName}
                            onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm bg-slate-50/50 focus:bg-white transition"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Parent / Guardian Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Mr. S. Moyo"
                            value={formData.parentName}
                            onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm bg-slate-50/50 focus:bg-white transition"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Phone Number (WhatsApp) *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+263 77 123 4567"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm bg-slate-50/50 focus:bg-white transition"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="parent@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm bg-slate-50/50 focus:bg-white transition"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-5 pt-2">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Applying For Form / Level *
                          </label>
                          <select
                            value={formData.level}
                            onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-800 text-sm bg-slate-50/50 focus:bg-white transition"
                          >
                            <option value="Form 1">Form 1 (Grade 7 Entry)</option>
                            <option value="Form 2">Form 2 Transfer</option>
                            <option value="Form 3">Form 3 Transfer</option>
                            <option value="Form 5 (L6)">Lower Sixth (Form 5)</option>
                          </select>
                        </div>

                        {/* Interactive Visual Choice Cards for Student Type */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Student Accommodation *
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, residenceType: "Boarding" })}
                              className={`p-3 rounded-xl border text-left transition flex items-center gap-2 ${
                                formData.residenceType === "Boarding"
                                  ? "border-green-800 bg-green-50 text-green-950 font-bold shadow-sm"
                                  : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                              }`}
                            >
                              <Home size={16} className={formData.residenceType === "Boarding" ? "text-green-800" : "text-slate-400"} />
                              <span className="text-xs">Boarder</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, residenceType: "Day Scholar" })}
                              className={`p-3 rounded-xl border text-left transition flex items-center gap-2 ${
                                formData.residenceType === "Day Scholar"
                                  ? "border-green-800 bg-green-50 text-green-950 font-bold shadow-sm"
                                  : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                              }`}
                            >
                              <UserCheck size={16} className={formData.residenceType === "Day Scholar" ? "text-green-800" : "text-slate-400"} />
                              <span className="text-xs">Day Scholar</span>
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => validateStep1() && setStep(2)}
                        className="w-full bg-green-900 hover:bg-green-800 text-amber-300 font-bold py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-xs uppercase tracking-wider mt-4"
                      >
                        Proceed to Document Upload <ChevronRight size={16} />
                      </button>
                    </div>
                  )}

                  {/* STEP 2: File Upload */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div className="border-b border-slate-100 pb-4">
                        <h2 className="text-xl font-extrabold text-slate-900">Upload Application Document</h2>
                        <p className="text-xs text-slate-500">Attach ONE file containing Result Slip & Parent ID.</p>
                      </div>

                      {/* Interactive Drag and Drop Upload Area */}
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-2xl p-8 text-center transition ${
                          isDragging
                            ? "border-green-800 bg-green-50/80 scale-[0.99]"
                            : applicationDocument
                            ? "border-emerald-500 bg-emerald-50/30"
                            : "border-slate-300 bg-slate-50 hover:border-green-800"
                        }`}
                      >
                        <input
                          id="single-file-input"
                          type="file"
                          accept=".pdf,image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />

                        {applicationDocument ? (
                          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200 shadow-sm max-w-md mx-auto text-left">
                            <div className="flex items-center gap-3 truncate">
                              <div className="p-2.5 bg-green-100 text-green-800 rounded-xl shrink-0">
                                <Paperclip size={20} />
                              </div>
                              <div className="truncate">
                                <p className="text-sm font-bold text-slate-800 truncate">
                                  {applicationDocument.name}
                                </p>
                                <p className="text-xs text-slate-400">
                                  {(applicationDocument.size / (1024 * 1024)).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => setApplicationDocument(null)}
                              className="text-slate-400 hover:text-rose-600 p-2 rounded-lg hover:bg-rose-50 transition shrink-0"
                            >
                              <X size={18} />
                            </button>
                          </div>
                        ) : (
                          <label htmlFor="single-file-input" className="cursor-pointer block space-y-3">
                            <div className="w-12 h-12 bg-white text-green-900 rounded-2xl flex items-center justify-center mx-auto shadow-sm border border-slate-200">
                              <Upload size={22} />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-green-900 underline">
                                Click to select file
                              </span>
                              <span className="text-sm text-slate-500"> or drag & drop file here</span>
                            </div>
                            <p className="text-xs text-slate-400">PDF, JPG, or PNG (Max 10MB)</p>
                          </label>
                        )}
                      </div>

                      <div className="flex items-center gap-3 pt-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 rounded-xl transition text-xs uppercase tracking-wider"
                        >
                          Back
                        </button>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-2/3 bg-green-900 hover:bg-green-800 disabled:bg-slate-300 text-amber-300 font-bold py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                        >
                          {loading ? (
                            <>
                              <Loader2 size={16} className="animate-spin" /> Submitting...
                            </>
                          ) : (
                            <>
                              Submit Application <Send size={16} />
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}