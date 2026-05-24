"use client";
import Link from "next/link";
import { assignments } from "@/data/assignments";

export default function BaiTapPage() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "72px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem" }}>
        {/* Header */}
        <div style={{ marginBottom: "5rem", borderBottom: "1px solid var(--border)", paddingBottom: "3rem" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--primary)", display: "inline-block" }} />
            Sản phẩm &amp; Học thuật
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <h1 style={{ fontFamily: "'Merriweather', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", fontWeight: 900, color: "var(--text)", lineHeight: 1.05 }}>
              Bài tập{" "}
              <em style={{ color: "var(--green)" }}>&amp; Dự án</em>
            </h1>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
              {assignments.length} bài tập
            </span>
          </div>
        </div>

        {/* List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {assignments.map((assignment, index) => (
            <article
              key={assignment.id}
              style={{
                borderBottom: "1px solid var(--border)",
                padding: "3rem 0",
                display: "grid",
                gridTemplateColumns: "60px 1fr auto",
                gap: "2rem",
                alignItems: "start",
                transition: "background 0.3s",
              }}
              className="assignment-row"
            >
              {/* Number */}
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.5rem", fontWeight: 300, color: "var(--border-strong)", lineHeight: 1, paddingTop: "0.3rem" }}>
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div>
                {/* Meta */}
                <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--primary)", background: "var(--primary-muted)", padding: "0.25rem 0.75rem", border: "1px solid var(--primary-border)" }}>
                    {assignment.subject}
                  </span>
                  {assignment.tools.slice(0, 3).map((tool) => (
                    <span key={tool} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-dim)" }}>
                      {tool}
                    </span>
                  ))}
                  {assignment.tools.length > 3 && (
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", color: "var(--border-strong)" }}>
                      +{assignment.tools.length - 3}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 style={{ fontFamily: "'Merriweather', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, marginBottom: "1rem" }}>
                  {assignment.title}
                </h2>

                {/* Summary */}
                <p style={{ fontFamily: "'Source Sans 3', serif", fontSize: "1rem", color: "var(--text-dim)", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "600px" }}>
                  {assignment.summary}
                </p>

                {/* Sections list */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {assignment.sections.flatMap((section) =>
                    section.steps?.length
                      ? section.steps.map((step, stepIndex) => (
                          <span
                            key={`${section.title}-${stepIndex}`}
                            style={{
                              fontFamily: "'DM Mono', monospace",
                              fontSize: "0.65rem",
                              letterSpacing: "0.06em",
                              color: "var(--text-dim)",
                              background: "var(--surface2)",
                              padding: "0.3rem 0.75rem",
                              border: "1px solid var(--border)",
                            }}
                          >
                            {String(stepIndex + 1).padStart(2, "0")}: {step.title}
                          </span>
                        ))
                      : section.title
                        ? [
                            <span
                              key={section.title}
                              style={{
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "0.65rem",
                                letterSpacing: "0.06em",
                                color: "var(--text-dim)",
                                background: "var(--surface2)",
                                padding: "0.3rem 0.75rem",
                                border: "1px solid var(--border)",
                              }}
                            >
                              {section.title}
                            </span>,
                          ]
                        : []
                  )}
                </div>
              </div>

              {/* CTA */}
              <div style={{ paddingTop: "0.3rem" }}>
                <Link
                  href={`/bai-tap/${assignment.id}`}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--on-primary)",
                    background: "var(--primary)",
                    padding: "0.75rem 1.5rem",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    whiteSpace: "nowrap",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary-light)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; }}
                >
                  Xem chi tiết + PDF
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .assignment-row { grid-template-columns: 40px 1fr !important; }
          .assignment-row > :last-child { grid-column: 2; }
        }
      `}</style>
    </div>
  );
}
