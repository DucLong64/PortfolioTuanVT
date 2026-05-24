import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio — Vũ Anh Tuấn",
  description:
    "Portfolio cá nhân — Vũ Anh Tuấn, sinh viên Răng Hàm Mặt, Trường Đại học Y Dược, ĐHQG Hà Nội",
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
