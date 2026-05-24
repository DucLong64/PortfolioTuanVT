"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PHOTOS = [
  { src: "/images/anh-ca-nhan-1.jpg", alt: "Ảnh cá nhân 1" },
  { src: "/images/anh-ca-nhan-2.jpg", alt: "Ảnh cá nhân 2" },
];

const INTERVAL_MS = 5000;
const FADE_MS = 1400;

export default function ProfileImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHOTOS.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="profile-slider" aria-label="Ảnh cá nhân">
      {PHOTOS.map((photo, i) => (
        <div
          key={photo.src}
          className={`profile-slider-slide${i === index ? " is-active" : ""}`}
          aria-hidden={i !== index}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </div>
      ))}

      <div className="profile-slider-dots" aria-hidden="true">
        {PHOTOS.map((_, i) => (
          <span key={i} className={`profile-slider-dot${i === index ? " active" : ""}`} />
        ))}
      </div>

      <style>{`
        .profile-slider {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0 24px 48px rgba(0, 77, 138, 0.12);
          border: 1px solid var(--border);
          background: var(--surface2);
        }
        .profile-slider::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(
            160deg,
            rgba(0, 102, 179, 0.08) 0%,
            transparent 45%,
            rgba(0, 166, 81, 0.06) 100%
          );
        }
        .profile-slider-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          z-index: 0;
          transform: scale(1.05);
          will-change: opacity, transform;
          transition:
            opacity ${FADE_MS}ms cubic-bezier(0.65, 0, 0.35, 1),
            transform ${FADE_MS}ms cubic-bezier(0.65, 0, 0.35, 1);
        }
        .profile-slider-slide.is-active {
          opacity: 1;
          z-index: 1;
          transform: scale(1);
        }
        .profile-slider-dots {
          position: absolute;
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          z-index: 3;
        }
        .profile-slider-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.45);
          transition:
            background 0.5s cubic-bezier(0.65, 0, 0.35, 1),
            transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
        }
        .profile-slider-dot.active {
          background: var(--on-primary);
          transform: scale(1.2);
        }
        @media (prefers-reduced-motion: reduce) {
          .profile-slider-slide {
            transition: none;
            transform: none;
          }
          .profile-slider-slide.is-active {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
