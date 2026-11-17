"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  Phone,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Globe,
  MapPin,
  ChevronDown,
  Layers,
  Cloud,
  Wrench,
  Lightbulb,
  Users,
} from "lucide-react";
import { PngFlagIcon } from "@/components/ui/PngFlagIcon";
import { heroBranchInfo } from "@/data/hero";

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export function HeroSection({ onOpenQuoteModal }: HeroSectionProps) {
  const [isIntlHighlighted, setIsIntlHighlighted] = useState(false);
  const [branchAddressOpen, setBranchAddressOpen] = useState(false);

  useEffect(() => {
    const handleHighlight = (e: Event) => {
      const customEvent = e as CustomEvent<boolean>;
      setIsIntlHighlighted(Boolean(customEvent.detail));
    };
    window.addEventListener("highlight-intl-branch", handleHighlight);
    return () => window.removeEventListener("highlight-intl-branch", handleHighlight);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-76px)] flex flex-col justify-between bg-[#faf8ff] text-slate-900 overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-6 sm:pb-8">

      {/* Edge-to-Edge Ambient Pastel Glows matching reference aesthetic */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/35 via-blue-100/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-28 w-[500px] h-[500px] bg-gradient-to-bl from-pink-200/30 via-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-28 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100/35 via-indigo-50/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#004aad08_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      {/* Main Full-Width Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex-1 flex flex-col justify-between gap-8 lg:gap-10">

        {/* Upper Row: Left Typography & CTAs + Right Connected Constellation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center flex-1 my-auto">

          {/* Left Hero Column */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6 text-center lg:text-left">

            {/* Pill Badge matching reference "✦ For Creators & Builders" */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-100/90 text-indigo-700 text-xs sm:text-sm font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600/20" />
              <span>Enterprise IT, SAP &amp; Cloud Consulting</span>
            </div>

            {/* Expansive Headline matching 3-line cadence with center gradient */}
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[4.25rem] font-display font-extrabold text-[#191b22] tracking-tight leading-[1.1]">
              SAP E2E Implementation, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-indigo-600 to-action-orange">
                Cloud & Complete
              </span> <br />
              IT Solutions
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Backed by <strong className="font-semibold text-slate-900">10+ years of SAP E2E implementation</strong>, global rollouts, and cloud architectures — we deliver full-stack enterprise engineering, complete system infrastructure, and 24/7 proactive AMC support.
            </p>

            {/* Action Buttons (Large Black Pill + Soft Play Circle) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5">

              {/* Primary Pill Button */}
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2.5 bg-[#191b22] hover:bg-brand-blue text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-md shadow-slate-900/10 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary Play Button */}
              <a
                href="#sap-training"
                className="inline-flex items-center gap-3 text-slate-700 hover:text-brand-blue font-semibold text-sm sm:text-base transition-colors group cursor-pointer"
              >
                <span className="w-11 sm:w-12 h-11 sm:h-12 rounded-full bg-indigo-50 group-hover:bg-indigo-100 border border-indigo-200/70 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-all shadow-xs">
                  <Play className="w-4 sm:w-5 h-4 sm:h-5 fill-indigo-600 ml-0.5" />
                </span>
                <span>Explore 10 SAP Modules</span>
              </a>

            </div>

            {/* Trust Subtext & Direct Enterprise Phone */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-4 h-4" /> 100% Verified Business
              </span>
              <span className="h-3 w-px bg-slate-200 hidden sm:inline" />
              <a
                href="tel:8122196279"
                className="flex items-center gap-1.5 text-slate-600 hover:text-brand-blue transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-action-orange" />
                <span>Call Direct: <strong className="text-slate-800">81221 96279</strong></span>
              </a>
            </div>

          </div>

          {/* Right Hero Column — Spacious Connected Constellation */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center w-full">

            {/* Soft organic pastel background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tr from-indigo-200/40 via-blue-100/40 to-pink-100/30 rounded-full blur-3xl" />
            </div>

            {/* Desktop / Laptop Constellation (md:block) with Full Proportions */}
            <div className="relative w-full max-w-[620px] xl:max-w-[680px] h-[480px] sm:h-[520px] xl:h-[550px] hidden md:block">

              {/* SVG Connecting Paths with Nodes */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 680 550"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Path to Top-Left: SAP */}
                <path
                  d="M 340 240 C 290 150, 200 130, 140 90"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="opacity-60"
                />
                <circle cx="140" cy="90" r="4" fill="#004aad" />
                <circle cx="240" cy="150" r="3" fill="#818cf8" />

                {/* Path to Top-Right: Papua New Guinea Branch */}
                <path
                  d="M 380 230 C 450 170, 520 150, 560 100"
                  stroke="#818cf8"
                  strokeWidth="1.5"
                  className="opacity-70"
                />
                <circle cx="560" cy="100" r="4" fill="#f39200" />
                <circle cx="460" cy="175" r="3" fill="#6366f1" />

                {/* Path to Middle-Left: Cloud & DevOps */}
                <path
                  d="M 280 290 C 200 300, 150 310, 90 320"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="opacity-60"
                />
                <circle cx="90" cy="320" r="4" fill="#0284c7" />

                {/* Path to Middle-Right: Hardware & AMC */}
                <path
                  d="M 400 300 C 470 310, 520 320, 580 330"
                  stroke="#94a3b8"
                  strokeWidth="1.5"
                  className="opacity-60"
                />
                <circle cx="580" cy="330" r="4" fill="#f39200" />
                <circle cx="480" cy="315" r="3" fill="#f39200" />

                {/* Path to Bottom: 10 SAP Modules */}
                <path
                  d="M 340 360 C 360 430, 440 460, 490 490"
                  stroke="#818cf8"
                  strokeWidth="1.5"
                  className="opacity-70"
                />
                <circle cx="490" cy="490" r="4" fill="#a855f7" />
              </svg>

              {/* Floating decorative accents matching reference image */}
              <div className="absolute top-10 left-[42%] w-9 h-9 rounded-full bg-white/95 border border-indigo-100 shadow-md flex items-center justify-center text-indigo-500 z-20 hover:scale-110 transition-transform">
                <Lightbulb className="w-4 h-4" />
              </div>

              <div className="absolute top-20 right-[28%] w-9 h-9 rounded-full bg-white/95 border border-blue-100 shadow-md flex items-center justify-center text-brand-blue z-20 hover:scale-110 transition-transform">
                <Users className="w-4 h-4" />
              </div>

              {/* Floating 3D Pastel Spheres */}
              <div className="absolute bottom-28 left-4 w-6 h-6 rounded-full bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-200 shadow-md blur-[0.5px] pointer-events-none animate-pulse" />
              <div className="absolute top-32 right-2 w-5 h-5 rounded-full bg-gradient-to-tr from-sky-300 to-blue-400 shadow-md blur-[0.5px] pointer-events-none" />

              {/* ============================================================== */}
              {/* 1. Center Card matching reference "Better Minds / Bigger Dreams" */}
              {/* ============================================================== */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-64 bg-gradient-to-b from-white/95 via-blue-50/75 to-purple-50/45 backdrop-blur-xl border border-white/90 rounded-[32px] p-6 shadow-[0_25px_60px_rgba(99,102,241,0.18)] z-10 text-center transition-all hover:scale-[1.03]">

                {/* Organic Dual Droplet Icon Motif */}
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-7 h-9 rounded-full bg-gradient-to-tr from-brand-blue to-blue-400 shadow-xs" />
                  <div className="w-7 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-400 shadow-xs" />
                </div>

                <h3 className="text-base sm:text-lg font-display font-extrabold text-[#191b22] leading-tight">
                  Better Systems <br />
                  Bigger Ambitions
                </h3>
                <p className="text-[11px] text-slate-500 font-semibold tracking-wider uppercase mt-1.5">
                  End-to-End Enterprise Delivery
                </p>
              </div>

              {/* ============================================================== */}
              {/* 2. Top-Left Satellite: SAP S/4HANA & E2E */}
              {/* ============================================================== */}
              <div className="absolute top-4 left-0 z-20 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center font-bold text-xs shrink-0">
                    <Cpu className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                      SAP S/4HANA &amp; E2E
                    </p>
                    <p className="text-[11px] text-slate-500">10+ Yrs Consulting</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-semibold text-emerald-600">Active Deployment</span>
                </div>
              </div>

              {/* ============================================================== */}
              {/* 3. Top-Right Satellite: Papua New Guinea Branch (Interactive) */}
              {/* ============================================================== */}
              <div
                id="hero-intl-branch"
                onClick={() => setBranchAddressOpen((v) => !v)}
                className={`absolute top-6 right-0 z-30 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-300 group max-w-[230px] ${isIntlHighlighted
                  ? "ring-4 ring-action-orange/70 shadow-[0_0_35px_rgba(243,146,0,0.45)] scale-105 border-action-orange"
                  : "border border-slate-100 hover:border-action-orange/40 hover:-translate-y-1"
                  }`}
                title="Click to view Papua New Guinea branch address"
              >
                <div className="flex items-center gap-2.5">
                  <PngFlagIcon className="w-6 h-4 shrink-0 shadow-xs" />
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      Papua New Guinea
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">Sherina Moka • Intl Desk</p>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-action-orange" />
                    <span className="text-[10px] font-semibold text-action-orange">Global Trade Desk</span>
                  </div>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${branchAddressOpen ? "rotate-180" : ""}`} />
                </div>

                {/* Expandable address */}
                {branchAddressOpen && (
                  <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] leading-snug text-slate-600 space-y-1 animate-fade-in">
                    <div className="flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-action-orange shrink-0 mt-0.5" />
                      <span>{heroBranchInfo.address}, {heroBranchInfo.addressLine2}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* ============================================================== */}
              {/* 4. Left Satellite: Cloud & DevOps */}
              {/* ============================================================== */}
              <div className="absolute top-[280px] left-0 z-20 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs shrink-0">
                    <Cloud className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
                      Cloud &amp; DevOps
                    </p>
                    <p className="text-[11px] text-slate-500">Azure, Java &amp; .NET</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span className="text-[10px] font-semibold text-sky-600">99.9% Uptime SLA</span>
                </div>
              </div>

              {/* ============================================================== */}
              {/* 5. Right Satellite: Hardware & AMC */}
              {/* ============================================================== */}
              <div className="absolute top-[290px] right-0 z-20 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-50 text-action-orange flex items-center justify-center font-bold text-xs shrink-0">
                    <Wrench className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-action-orange transition-colors">
                      Hardware &amp; AMC
                    </p>
                    <p className="text-[11px] text-slate-500">Doorstep Maintenance</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-action-orange" />
                  <span className="text-[10px] font-semibold text-action-orange">24/7 SLA Support</span>
                </div>
              </div>

              {/* ============================================================== */}
              {/* 6. Bottom Satellite: 10 SAP Modules */}
              {/* ============================================================== */}
              <div className="absolute bottom-2 right-10 z-20 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs shrink-0">
                    <GraduationCap className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                      10 SAP Modules
                    </p>
                    <p className="text-[11px] text-slate-500">SD, MM, FICO, ABAP...</p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span className="text-[10px] font-semibold text-purple-600">Placements Open</span>
                </div>
              </div>

            </div>

            {/* Mobile View (< md): Clean Responsive Touch Layout */}
            <div className="md:hidden w-full space-y-3.5 pt-2">

              {/* Center Core Card */}
              <div className="bg-gradient-to-b from-white via-blue-50/50 to-purple-50/40 border border-slate-200/80 rounded-2xl p-5 shadow-sm text-center">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <div className="w-5 h-7 rounded-full bg-gradient-to-tr from-brand-blue to-blue-400" />
                  <div className="w-5 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-400" />
                </div>
                <h3 className="text-base font-display font-bold text-slate-900">
                  Better Systems, Bigger Ambitions
                </h3>
                <p className="text-xs text-slate-500 mt-1">End-to-End Enterprise Consulting &amp; Delivery</p>
              </div>

              {/* Mobile Satellite Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">

                {/* PNG Branch */}
                <div
                  id="hero-intl-branch"
                  onClick={() => setBranchAddressOpen((v) => !v)}
                  className={`bg-white rounded-xl p-3 border shadow-xs transition-all ${isIntlHighlighted
                    ? "border-action-orange ring-2 ring-action-orange/60 bg-orange-50/40"
                    : "border-slate-200"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <PngFlagIcon className="w-5 h-3.5" />
                      <div>
                        <p className="text-xs font-bold text-slate-900">Papua New Guinea</p>
                        <p className="text-[10px] text-slate-500">Sherina Moka • Intl Branch</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-action-orange uppercase">Intl Desk</span>
                  </div>
                  {branchAddressOpen && (
                    <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-600">
                      {heroBranchInfo.address}, {heroBranchInfo.addressLine2}
                    </div>
                  )}
                </div>

                {/* SAP Consulting */}
                <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">SAP S/4HANA &amp; E2E</p>
                      <p className="text-[10px] text-slate-500">10+ Yrs Consulting</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-600">Active</span>
                </div>

                {/* Cloud Architecture */}
                <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
                      <Cloud className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Cloud &amp; DevOps</p>
                      <p className="text-[10px] text-slate-500">Azure, Java &amp; .NET</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-sky-600">99.9% Uptime</span>
                </div>

                {/* Hardware & AMC */}
                <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-amber-50 text-action-orange flex items-center justify-center">
                      <Wrench className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Hardware &amp; AMC</p>
                      <p className="text-[10px] text-slate-500">Doorstep Maintenance</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-action-orange">24/7 SLA</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ============================================================== */}
        {/* Bottom Full-Width Stats Shelf matching reference 4-metric row */}
        {/* ============================================================== */}
        <div className="w-full pt-4 sm:pt-6 border-t border-slate-200/80">
          <div className="bg-white/85 backdrop-blur-md border border-slate-200/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xs">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

              {/* Stat 1: 500+ Projects Delivered (Emerald) */}
              <div className="pt-3 lg:pt-0 lg:px-6 first:pt-0 first:lg:pl-0 flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#191b22] tracking-tight">
                    500+
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-500">
                    Enterprise Projects
                  </p>
                </div>
              </div>

              {/* Stat 2: 10+ Yrs SAP Consulting (Purple/Indigo) */}
              <div className="pt-3 lg:pt-0 lg:px-6 flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 shadow-xs">
                  <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#191b22] tracking-tight">
                    10+ Yrs
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-500">
                    SAP Consulting Exp.
                  </p>
                </div>
              </div>

              {/* Stat 3: 10 Modules SAP Academy (Amber/Orange) */}
              <div className="pt-3 lg:pt-0 lg:px-6 flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-50 text-action-orange flex items-center justify-center shrink-0 shadow-xs">
                  <Layers className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#191b22] tracking-tight">
                    10 Modules
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-500">
                    SAP Certifications
                  </p>
                </div>
              </div>

              {/* Stat 4: 2 Nations Global Footprint (Blue) */}
              <div className="pt-3 lg:pt-0 lg:px-6 flex items-center gap-3.5 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 shadow-xs">
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#191b22] tracking-tight">
                    2 Nations
                  </h4>
                  <p className="text-xs sm:text-sm font-medium text-slate-500">
                    India &amp; Papua New Guinea
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
