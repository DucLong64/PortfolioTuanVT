"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Giới thiệu", href: "/#gioi-thieu" },
  { label: "Học tập & Kỹ năng", href: "/#ky-nang" },
  { label: "Bài tập", href: "/bai-tap" },
  { label: "Liên hệ", href: "/#lien-he" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.4s ease",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "'Merriweather', serif",
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "var(--primary)",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          Portfolio<span style={{ color: "var(--green)" }}>.</span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/bai-tap"
                ? pathname.startsWith("/bai-tap")
                : false;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.78rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--primary)" : "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  borderBottom: isActive ? "2px solid var(--primary)" : "2px solid transparent",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.target as HTMLElement).style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.target as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 24,
                height: 1.5,
                background: "var(--primary)",
                transition: "all 0.3s",
                transform:
                  menuOpen && i === 0
                    ? "translateY(6.5px) rotate(45deg)"
                    : menuOpen && i === 2
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : "scaleX(1)",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--nav-bg)",
            borderTop: "1px solid var(--border)",
            boxShadow: "var(--shadow)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
