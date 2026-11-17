"use client";

import React, { useState } from "react";
import { ShieldCheck, Copy, Check, Sparkles } from "lucide-react";
import { PngFlagIcon } from "@/components/ui/PngFlagIcon";

/**
 * Ultra-clean trust & credentials micro-bar matching the modern SaaS aesthetic.
 * Sits at the top of the page displaying business registration, GSTIN, and the PNG International Branch.
 */
export function GstinBar() {
  const [copied, setCopied] = useState(false);

  const setIntlHighlight = (active: boolean) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("highlight-intl-branch", { detail: active }));
    }
  };

  const scrollToHeroIntl = () => {
    const el = document.getElementById("hero-intl-branch");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setIntlHighlight(true);
      setTimeout(() => setIntlHighlight(false), 2500);
    }
  };

  const handleCopyGstin = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("33BCCPM5639JIZH");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200/70 text-slate-600 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-1.5 flex flex-col md:flex-row items-center justify-between gap-2">

        {/* Left — Registered Entity Identity */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <p className="text-[11px] sm:text-xs text-slate-600 font-medium tracking-tight">
            <span className="font-semibold text-slate-800">TechBig Solutions Consulting Services</span>
            <span className="text-slate-400 mx-1.5 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-slate-500">Registered Enterprise, Ambattur, Chennai</span>
          </p>
        </div>

        {/* Right — Dual Clean Pills: International Branch + GSTIN */}
        <div className="flex flex-wrap items-center justify-center gap-2">

          {/* Papua New Guinea International Branch Pill */}
          <button
            type="button"
            onMouseEnter={() => setIntlHighlight(true)}
            onMouseLeave={() => setIntlHighlight(false)}
            onClick={scrollToHeroIntl}
            className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-50 hover:bg-orange-50/80 border border-slate-200/90 hover:border-action-orange/60 text-slate-700 transition-all cursor-pointer group shadow-xs"
            title="Click or hover to highlight Papua New Guinea International Branch"
          >
            <PngFlagIcon className="w-4 h-2.5" />
            <span className="text-[10px] font-bold text-action-orange uppercase tracking-wider">
              Intl Branch:
            </span>
            <span className="text-[11px] font-semibold text-slate-800 group-hover:text-action-orange transition-colors">
              Papua New Guinea
            </span>
            <Sparkles className="w-2.5 h-2.5 text-action-orange opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* GSTIN Verification Pill with One-Click Copy */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-50 border border-slate-200/90 text-slate-700 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="text-[10px] font-bold text-slate-500 tracking-wider">GSTIN</span>
            <span className="h-3 w-px bg-slate-200" />
            <span className="text-[11px] font-mono font-bold text-slate-800 tracking-wider">
              33BCCPM5639JIZH
            </span>
            <button
              type="button"
              onClick={handleCopyGstin}
              className="ml-1 p-0.5 text-slate-400 hover:text-brand-blue rounded transition-colors cursor-pointer"
              title="Copy GSTIN"
              aria-label="Copy GSTIN"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold">
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="hidden xs:inline">Copied</span>
                </span>
              ) : (
                <Copy className="w-3 h-3 hover:scale-110 transition-transform" />
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
