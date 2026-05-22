"use client";
import { useEffect } from "react";
import Link from "next/link";

const skills = [
  { cat: "Lập trình", items: ["Python", "JavaScript", "TypeScript", "HTML/CSS"] },
  { cat: "Framework", items: ["React", "Next.js", "Node.js", "Express"] },
  { cat: "Công cụ", items: ["Git", "Figma", "VS Code", "Jupyter"] },
  { cat: "Dữ liệu", items: ["SQL", "Excel", "Power BI", "Pandas"] },
];

const directions = [
  { num: "01", title: "Phát triển Web Full-stack", desc: "Thành thạo React, Next.js và Node.js để xây dựng ứng dụng web hiện đại từ frontend đến backend." },
  { num: "02", title: "Phân tích & Khoa học Dữ liệu", desc: "Ứng dụng Python và các thư viện phân tích để khai thác insight từ dữ liệu thực tế." },
  { num: "03", title: "UI/UX & Thiết kế Giao diện", desc: "Học Figma và nguyên tắc thiết kế để tạo ra sản phẩm số vừa đẹp vừa dễ dùng." },
  { num: "04", title: "Ứng dụng AI vào Học tập", desc: "Tìm hiểu các công cụ AI/ML mới nhất để tăng hiệu suất nghiên cứu và giải quyết bài toán phức tạp." },
];

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <section id="gioi-thieu" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", paddingTop: "72px" }}>
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "4rem 2rem", width: "100%" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ width: 40, height: 1, background: "#c9a84c", display: "inline-block" }} />
            Portfolio Cá Nhân — 2024
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 900, lineHeight: 1.05, color: "#e8e4d8", marginBottom: "1.5rem", maxWidth: "900px" }}>
            Học đi đôi{" "}
            <em style={{ color: "#c9a84c", fontStyle: "italic" }}>với hành</em>
            <span style={{ color: "#2a2a26" }}>.</span>
          </h1>
          <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.25rem", color: "#8a8678", maxWidth: "620px", lineHeight: 1.8, marginBottom: "3rem" }}>
            <strong style={{ color: "#e8e4d8" }}>Nguyễn Văn An</strong> · Sinh viên ngành{" "}
            <strong style={{ color: "#e8e4d8" }}>Công nghệ Thông tin</strong> tại Đại học Bách Khoa Hà Nội. Tôi quan tâm đến{" "}
            <span style={{ color: "#c9a84c" }}>lập trình web</span>,{" "}
            <span style={{ color: "#c9a84c" }}>phân tích dữ liệu</span> và cách công nghệ tạo ra giá trị thực cho con người.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/bai-tap" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0a0a08", background: "#c9a84c", padding: "0.9rem 2rem", textDecoration: "none", display: "inline-block" }}>
              Xem Bài Tập →
            </Link>
            <a href="#lien-he" style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8678", background: "transparent", padding: "0.9rem 2rem", textDecoration: "none", border: "1px solid #2a2a26", display: "inline-block" }}>
              Liên Hệ
            </a>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #1a1a17", margin: "0 2rem" }} />

      {/* About */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 2rem", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }} className="about-grid">
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ width: 24, height: 1, background: "#c9a84c", display: "inline-block" }} />
            Thông tin
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[["Họ tên","Nguyễn Văn An"],["Vai trò","Sinh viên CNTT"],["Trường","Đại học Bách Khoa HN"],["Khoa","Viện CNTT — SOICT"],["Lớp","IT-01 K67"],["MSV","20210000"]].map(([label,value],i) => (
              <div key={i} style={{ display: "flex", borderBottom: "1px solid #1a1a17", padding: "1rem 0" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#555248", width: "40%", flexShrink: 0 }}>{label}</span>
                <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", color: "#e8e4d8" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ width: 24, height: 1, background: "#c9a84c", display: "inline-block" }} />
            Về tôi
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, color: "#e8e4d8", lineHeight: 1.3, marginBottom: "1.5rem" }}>
            Xây dựng tương lai <em style={{ color: "#c9a84c" }}>bằng code</em>
          </h2>
          <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "#8a8678", lineHeight: 1.9, marginBottom: "1.5rem" }}>
            Tôi là An, sinh viên năm 3 ngành Công nghệ Thông tin tại HUST. Ngoài việc học trên lớp, tôi có niềm đam mê với lập trình web và khoa học dữ liệu — hai lĩnh vực tôi tin sẽ định hình thế giới trong thập kỷ tới.
          </p>
          <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "#8a8678", lineHeight: 1.9 }}>
            Mục tiêu của tôi là ứng dụng kiến thức đã học để tạo ra các giải pháp công nghệ thực tế, giải quyết các bài toán của người Việt.
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #1a1a17", margin: "0 2rem" }} />

      {/* Skills */}
      <section id="ky-nang" style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 2rem" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ width: 24, height: 1, background: "#c9a84c", display: "inline-block" }} />
          Học tập &amp; Kỹ năng
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, color: "#e8e4d8", lineHeight: 1.1, marginBottom: "4rem" }}>
          Định hướng &amp; <em style={{ color: "#c9a84c" }}>Công cụ</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "#1a1a17", marginBottom: "4rem" }} className="direction-grid">
          {directions.map((d) => (
            <div key={d.num} style={{ background: "#0a0a08", padding: "2.5rem", transition: "background 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#111110"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#0a0a08"; }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.5rem", fontWeight: 300, color: "#2a2a26", marginBottom: "1rem", lineHeight: 1 }}>{d.num}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#e8e4d8", marginBottom: "0.75rem", lineHeight: 1.3 }}>{d.title}</h3>
              <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", color: "#555248", lineHeight: 1.7 }}>{d.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }} className="skills-grid">
          {skills.map((group) => (
            <div key={group.cat}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "1rem" }}>{group.cat}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {group.items.map((skill) => (
                  <div key={skill} style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", color: "#8a8678", padding: "0.4rem 0", borderBottom: "1px solid #1a1a17", transition: "color 0.2s", cursor: "default" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#e8e4d8"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8a8678"; }}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "1px solid #1a1a17", margin: "0 2rem" }} />

      {/* Contact */}
      <section id="lien-he" style={{ maxWidth: 1200, margin: "0 auto", padding: "6rem 2rem" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c9a84c", marginBottom: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ width: 24, height: 1, background: "#c9a84c", display: "inline-block" }} />
          Liên hệ
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }} className="contact-grid">
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#e8e4d8", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              Hãy kết nối<br /><em style={{ color: "#c9a84c" }}>cùng tôi</em>
            </h2>
            <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1.1rem", color: "#555248", lineHeight: 1.8 }}>
              Tôi luôn sẵn sàng trao đổi về các dự án thú vị, cơ hội học tập, hoặc đơn giản là một cuộc trò chuyện về công nghệ.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { label: "Điện thoại", value: "0912 345 678", href: "tel:0912345678" },
              { label: "Email", value: "an.nguyen@hust.edu.vn", href: "mailto:an.nguyen@hust.edu.vn" },
              { label: "LinkedIn", value: "linkedin.com/in/nguyenvanan", href: "https://linkedin.com" },
              { label: "GitHub", value: "github.com/nguyenvanan", href: "https://github.com" },
            ].map(({ label, value, href }) => (
              <a key={label} href={href} style={{ display: "flex", borderBottom: "1px solid #1a1a17", padding: "1.2rem 0", textDecoration: "none", transition: "all 0.2s", alignItems: "center" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "0.5rem"; (e.currentTarget.querySelector(".val") as HTMLElement).style.color = "#c9a84c"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.paddingLeft = "0"; (e.currentTarget.querySelector(".val") as HTMLElement).style.color = "#8a8678"; }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#555248", width: "35%", flexShrink: 0 }}>{label}</span>
                <span className="val" style={{ fontFamily: "'Crimson Pro', serif", fontSize: "1rem", color: "#8a8678", transition: "color 0.2s" }}>{value}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #1a1a17", padding: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: 1200, margin: "0 auto" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "#555248" }}>© 2024 Nguyễn Văn An</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", color: "#2a2a26" }}>Built with Next.js · Tailwind CSS</span>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .direction-grid { grid-template-columns: 1fr !important; }
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  );
}
