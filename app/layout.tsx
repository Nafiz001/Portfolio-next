import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Md. Nafiz Ahmed - Software Engineer Portfolio",
  description: "Software Engineer specializing in modern web technologies, building performant, robust and scalable applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} bg-[#050505] text-white selection:bg-[#00f0ff]/30 crt overflow-hidden`}>
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
