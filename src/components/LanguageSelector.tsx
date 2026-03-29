"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Globe, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/get-dictionary";

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export default function LanguageSelector({ 
  lang,
  upward = false
}: { 
  lang: Locale; 
  upward?: boolean;
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  const getRedirectPath = (targetLang: string) => {
    if (!pathname) return `/${targetLang}`;
    const segments = pathname.split("/");
    // segments[0] is "", segments[1] is the current lang (or could be empty if root)
    if (segments.length > 1) {
      segments[1] = targetLang;
    } else {
      segments.push(targetLang);
    }
    return segments.join("/") || `/${targetLang}`;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="language-selector" ref={dropdownRef} style={{ position: "relative" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="glass-panel"
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "0.75rem",
          fontSize: "0.85rem",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          cursor: "pointer",
          color: "var(--foreground)",
          transition: "all 0.2s ease",
          outline: "none"
        }}
      >
        <Globe size={16} />
        <span>{currentLang.code.toUpperCase()}</span>
        <ChevronDown 
          size={14} 
          style={{ 
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
          }} 
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            [upward ? "bottom" : "top"]: "calc(100% + 0.5rem)",
            left: upward ? "50%" : 0,
            right: "auto",
            transform: upward ? "translateX(-50%)" : "none",
            width: "140px",
            borderRadius: "1.25rem",
            padding: "0.5rem",
            zIndex: 2100,
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            overflow: "hidden"
          }}
        >
          {languages.map((l) => (
            <Link
              key={l.code}
              href={getRedirectPath(l.code)}
              onClick={() => setIsOpen(false)}
              style={{
                padding: "0.6rem 0.8rem",
                borderRadius: "0.5rem",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: lang === l.code ? "var(--primary)" : "var(--foreground)",
                background: lang === l.code ? "rgba(99, 102, 241, 0.1)" : "transparent",
                fontWeight: lang === l.code ? 600 : 500,
                transition: "all 0.2s ease",
                textDecoration: "none"
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{l.flag}</span>
              <span>{l.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
