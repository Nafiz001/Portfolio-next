import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  weight: ['400', '600', '700', '900'],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Md. Nafiz Ahmed - React Developer Portfolio",
  description: "Frontend Developer specializing in React, Next.js, and modern web technologies. Building responsive and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300`}>
        {children}
      </body>
    </html>
  );
}
