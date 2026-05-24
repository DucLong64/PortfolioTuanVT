"use client";

import { useState } from "react";
import type { AssignmentSection } from "@/data/assignments";

interface AssignmentSectionsProps {
  sections: AssignmentSection[];
}

export default function AssignmentSections({ sections }: AssignmentSectionsProps) {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [openStep, setOpenStep] = useState<string | null>(null);

  const stepKey = (sectionIndex: number, stepIndex: number) =>
    `${sectionIndex}-${stepIndex}`;

  return (
    <>
      {sections.map((section, i) =>
        section.steps?.length ? (
          <div key={i}>
            <div
              style={{
                padding: "1.5rem 2rem",
                borderBottom: "1px solid var(--border)",
                background: "var(--surface2)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Merriweather', serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  marginBottom: "0.35rem",
                }}
              >
                {section.title}
              </div>
              {section.subtitle && (
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-dim)",
                  }}
                >
                  {section.subtitle}
                </div>
              )}
            </div>

            {section.steps.map((step, stepIndex) => {
              const key = stepKey(i, stepIndex);
              const isOpen = openStep === key;
              const expandLabel = section.expandLabel ?? "Xem chi tiết";

              return (
                <div key={key} style={{ borderBottom: "1px solid var(--border)" }}>
                  <button
                    type="button"
                    onClick={() => setOpenStep(isOpen ? null : key)}
                    style={{
                      width: "100%",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "1.1rem 2rem",
                      display: "grid",
                      gridTemplateColumns: "auto 1fr auto",
                      gap: "1rem",
                      alignItems: "center",
                      textAlign: "left",
                      transition: "background 0.2s",
                      backgroundColor: isOpen ? "var(--surface2)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isOpen)
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "var(--surface2)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isOpen)
                        (e.currentTarget as HTMLElement).style.backgroundColor =
                          "transparent";
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.72rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--primary)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Source Sans 3', serif",
                        fontSize: "1rem",
                        color: isOpen ? "var(--text)" : "var(--text-muted)",
                        fontWeight: isOpen ? 600 : 400,
                        lineHeight: 1.4,
                      }}
                    >
                      {step.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: isOpen ? "var(--primary)" : "var(--text-dim)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {expandLabel}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{
                          transition: "transform 0.3s",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? "560px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.35s ease",
                    }}
                  >
                    <div
                      style={{
                        padding: "0 2rem 1.25rem 2rem",
                        borderTop: "1px solid var(--border)",
                        paddingTop: "1rem",
                        paddingLeft: "5.5rem",
                        background: "var(--surface2)",
                        maxHeight: "520px",
                        overflowY: "auto",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "'Source Sans 3', serif",
                          fontSize: "0.95rem",
                          color: "var(--text-muted)",
                          lineHeight: 1.8,
                          margin: 0,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
            <button
              type="button"
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
                backgroundColor: openSection === i ? "var(--surface2)" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (openSection !== i)
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--surface2)";
              }}
              onMouseLeave={(e) => {
                if (openSection !== i)
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "transparent";
              }}
            >
              <span
                style={{
                  fontFamily: "'Source Sans 3', serif",
                  fontSize: "1rem",
                  color: openSection === i ? "var(--text)" : "var(--text-muted)",
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
                  color: openSection === i ? "var(--primary)" : "var(--text-dim)",
                }}
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

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
                  borderTop: "1px solid var(--border)",
                  paddingTop: "1.2rem",
                  background: "var(--surface2)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Source Sans 3', serif",
                    fontSize: "0.95rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  {section.detail}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
