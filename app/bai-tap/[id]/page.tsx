"use client";
import { use } from "react";
import Link from "next/link";
import { assignments } from "@/data/assignments";
import AssignmentSections from "@/components/AssignmentSections";
import { notFound } from "next/navigation";

export default function BaiTapDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const index = assignments.findIndex((a) => a.id === id);

  if (index === -1) notFound();

  const assignment = assignments[index];
  const prev = index > 0 ? assignments[index - 1] : null;
  const next = index < assignments.length - 1 ? assignments[index + 1] : null;
  const isLast = index === assignments.length - 1;

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "72px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 2rem" }}>

        {/* Breadcrumb */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
          <Link href="/bai-tap" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-dim)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-dim)"; }}>
            ← Danh sách
          </Link>
          <span style={{ color: "var(--border-strong)" }}>/</span>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary)" }}>
            Bài {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Title block */}
        <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "2.5rem", marginBottom: "3rem" }}>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.2rem", flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", background: "var(--primary-muted)", padding: "0.25rem 0.75rem", border: "1px solid var(--primary-border)" }}>
              {assignment.subject}
            </span>
            {assignment.tools.map((tool) => (
              <span key={tool} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)", background: "var(--surface2)", padding: "0.2rem 0.6rem", border: "1px solid var(--border)" }}>
                {tool}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem" }}>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <h1 style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, color: "var(--text)", lineHeight: 1.1, marginBottom: "1rem" }}>
                {assignment.title}
              </h1>
              <p style={{ fontFamily: "'Source Sans 3', serif", fontSize: "1.05rem", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: "580px" }}>
                {assignment.summary}
              </p>
            </div>
            <a
              href={assignment.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary)", border: "1px solid var(--primary-border)", padding: "0.75rem 1.5rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem", whiteSpace: "nowrap", transition: "all 0.2s", flexShrink: 0 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary-muted)"; }}
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
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", background: "var(--border)", marginBottom: "4rem", boxShadow: "var(--shadow)" }} className="detail-grid">
          {/* Column 1: Sections */}
          <div style={{ background: "var(--surface)", padding: "0" }}>
            <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dim)" }}>
                Nội dung thực hành
              </span>
            </div>

            <AssignmentSections sections={assignment.sections} />
          </div>

          {/* Column 2: PDF Preview */}
          <div style={{ background: "var(--surface)", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "1.5rem 2rem", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-dim)" }}>
                Báo cáo
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
                  background: "var(--surface2)",
                  zIndex: -1,
                  gap: "1rem",
                }}
              >
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Không thể tải PDF
                </span>
                <a href={assignment.driveLink} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary)", textDecoration: "none", border: "1px solid var(--primary-border)", padding: "0.5rem 1rem" }}>
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
            borderTop: "1px solid var(--border)",
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
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", border: "1px solid var(--border-strong)", padding: "0.75rem 1.5rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)"; (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                  ← Bài trước
                </Link>
              )}
              <Link href="/bai-tap"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", border: "1px solid var(--border-strong)", padding: "0.75rem 1.5rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)"; (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
                ↩ Ra danh sách
              </Link>
            </div>
          ) : (
            <Link href="/bai-tap"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", border: "1px solid var(--border-strong)", padding: "0.75rem 1.5rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "all 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)"; (e.currentTarget as HTMLElement).style.color = "var(--primary)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-strong)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}>
              ← Danh sách
            </Link>
          )}

          {/* Center: progress */}
          <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
            {assignments.map((_, i) => (
              <Link key={i} href={`/bai-tap/${assignments[i].id}`}
                style={{ width: i === index ? 24 : 8, height: 3, background: i === index ? "var(--primary)" : "var(--border-strong)", display: "block", transition: "all 0.3s", borderRadius: 2 }} />
            ))}
          </div>

          {/* Right: Next */}
          {!isLast && next && (
            <Link href={`/bai-tap/${next.id}`}
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--on-primary)", background: "var(--primary)", padding: "0.75rem 1.5rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", transition: "background 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary-light)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; }}>
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
