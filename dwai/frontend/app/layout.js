import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Deaf Women Aloud Initiative (DWAI)",
  description: "Empowering Deaf women and girls in Nigeria through advocacy, education, and leadership development.",
  keywords: ["DWAI", "Deaf Women", "Inclusion", "Accessibility", "Nigeria", "Deaf Empowerment"],
  icons: {
    icon: '/dwai_logo2.png', // path to your favicon/logo file
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Optional: add custom favicon for different devices */}
        <link rel="icon" href="/dwai_logo2.png" sizes="any" />
        <link rel="apple-touch-icon" href="/dwai_logo2.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
