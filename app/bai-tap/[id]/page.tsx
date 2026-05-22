"use client";
import { useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { assignments } from "@/data/assignments";
import { notFound } from "next/navigation";

export default function BaiTapDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const index = assignments.findIndex((a) => a.id === id);

  if (index === -1) notFound();

  const assignment = assignments[index];
  const prev = index > 0 ? assignments[index - 1] : null;
  const next = index < assignments.length - 1 ? assignments[index + 1] : null;
  const isLast = index === assignments.length - 1;

  const [openSection, setOpenSection] = useState<number | null>(0);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "72px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 2rem" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
          <Link href="/bai-tap" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#555248", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#c9a84c"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#555248"; }}>
            ← Danh sách
          </Link>
          <span style={{ color: "#2a2a26" }}>/</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c" }}>
            Bài {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title block */}
        <div style={{ borderBottom: "1px solid #1a1a17", paddingBottom: "2.5rem", marginBottom: "3rem" }}>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.2rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#c9a84c", background: "rgba(201,168,76,0.08)", padding: "0.25rem 0.75rem", border: "1px solid rgba(201,168,76,0.2)" }}>
              {assignment.subject}
            </span>
            {assignment.tools.map((tool) => (
              <span key={tool} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#555248", background: "#111110", padding: "0.2rem 0.6rem", border: "1px solid #1a1a17" }}>
                {tool}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem" }}>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: "#e8e4d8", lineHeight: 1.1, marginBottom: "1rem" }}>
                {assignment.title}
              </h1>
              <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.05rem", color: "#8a8678", lineHeight: 1.8, maxWidth: "580px" }}>
                {assignment.summary}
              </p>
            </div>
            <a
              href={assignment.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.4)", padding: "0.75rem 1.5rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem", whiteSpace: "nowrap", transition: "all 0.2s", flexShrink: 0 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Xem tài liệu gốc
            </a>
          </div>
        </div>

        {/* Main content: 2 columns */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "#1a1a17", marginBottom: "4rem" }} className="detail-grid">
          {/* Column 1: Sections */}
          <div style={{ background: "var(--bg)", padding: "0" }}>
            <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid #1a1a17" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#555248" }}>
                Nội dung chính
              </span>
            </div>

            {assignment.sections.map((section, i) => (
              <div key={i} style={{ borderBottom: "1px solid #1a1a17" }}>
                {/* Section header - clickable */}
                <button
                  onClick={() => setOpenSection(openSection === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "1.2rem 2rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    textAlign: "left",
                    transition: "background 0.2s",
                    backgroundColor: openSection === i ? "#111110" : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (openSection !== i)
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#0d0d0b";
                  }}
                  onMouseLeave={(e) => {
                    if (openSection !== i)
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Crimson Pro', serif",
                      fontSize: "1rem",
                      color: openSection === i ? "#e8e4d8" : "#8a8678",
                      fontWeight: openSection === i ? 600 : 400,
                      transition: "color 0.2s",
                      lineHeight: 1.4,
                    }}
                  >
                    {section.title}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{
                      flexShrink: 0,
                      transition: "transform 0.3s",
                      transform: openSection === i ? "rotate(180deg)" : "rotate(0deg)",
                      color: openSection === i ? "#c9a84c" : "#555248",
                    }}
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Section detail - expandable */}
                <div
                  style={{
                    maxHeight: openSection === i ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 2rem 1.5rem 2rem",
                      borderTop: "1px solid #1a1a17",
                      paddingTop: "1.2rem",
                      background: "#111110",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Crimson Pro', serif",
                        fontSize: "0.95rem",
                        color: "#8a8678",
                        lineHeight: 1.8,
                      }}
                    >
                      {section.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: PDF Preview */}
          <div style={{ background: "var(--bg)", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid #1a1a17" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#555248" }}>
                Xem trước tài liệu
              </span>
            </div>
            <div style={{ flex: 1, position: "relative", minHeight: "600px" }}>
              <iframe
                src={assignment.pdfEmbedLink}
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "600px",
                  border: "none",
                  display: "block",
                }}
                title={`PDF: ${assignment.title}`}
                allow="autoplay"
              />
              {/* Fallback overlay if iframe fails */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#0d0d0b",
                  zIndex: -1,
                  gap: "1rem",
                }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#555248" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#555248", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Không thể tải PDF
                </span>
                <a href={assignment.driveLink} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#c9a84c", textDecoration: "none", border: "1px solid rgba(201,168,76,0.3)", padding: "0.5rem 1rem" }}>
                  Mở trên Drive
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1a1a17",
            paddingTop: "2.5rem",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Back or Prev */}
          {isLast ? (
            <div style={{ display: "flex", gap: "1rem" }}>
              {prev && (
                <Link href={`/bai-tap/${prev.id}`}
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8678", border: "1px solid #2a2a26", padding: "0.75rem 1.5rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#555248"; (e.currentTarget as HTMLElement).style.color = "#e8e4d8"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2a2a26"; (e.currentTarget as HTMLElement).style.color = "#8a8678"; }}>
                  ← Bài trước
                </Link>
              )}
              <Link href="/bai-tap"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8678", border: "1px solid #2a2a26", padding: "0.75rem 1.5rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#555248"; (e.currentTarget as HTMLElement).style.color = "#e8e4d8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2a2a26"; (e.currentTarget as HTMLElement).style.color = "#8a8678"; }}>
                ↩ Ra danh sách
              </Link>
            </div>
          ) : (
            <Link href="/bai-tap"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8a8678", border: "1px solid #2a2a26", padding: "0.75rem 1.5rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#555248"; (e.currentTarget as HTMLElement).style.color = "#e8e4d8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#2a2a26"; (e.currentTarget as HTMLElement).style.color = "#8a8678"; }}>
              ← Danh sách
            </Link>
          )}

          {/* Center: progress */}
          <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
            {assignments.map((_, i) => (
              <Link key={i} href={`/bai-tap/${assignments[i].id}`}
                style={{ width: i === index ? 24 : 8, height: 3, background: i === index ? "#c9a84c" : "#2a2a26", display: "block", transition: "all 0.3s", borderRadius: 2 }} />
            ))}
          </div>

          {/* Right: Next */}
          {!isLast && next && (
            <Link href={`/bai-tap/${next.id}`}
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#0a0a08", background: "#c9a84c", padding: "0.75rem 1.5rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "background 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#e8c76a"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#c9a84c"; }}>
              Bài tiếp theo →
            </Link>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
