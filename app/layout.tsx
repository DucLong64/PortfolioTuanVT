import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio — Sinh viên Y Dược",
  description: "Portfolio cá nhân — Trường Đại học Y Dược, ĐHQG Hà Nội",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
