import { Plus_Jakarta_Sans } from "next/font/google";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import ScrollUp from "../components/ScrollUp";
import AccessibilityWidget from "../components/AccessibilityWidget";
import Providers from "./providers";
import { fetchGlobalData, GlobalDataProvider } from "../context/GlobalDataContext";

// import { LanguageProvider } from "../context/LanguageContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Deaf Women Aloud Initiative (DWAI)",
  description: "Empowering Deaf women and girls in Nigeria through advocacy, education, and leadership development.",
  keywords: ["DWAI", "Deaf Women", "Inclusion", "Accessibility", "Nigeria", "Deaf Empowerment"],
  icons: {
    icon: '/dwai_logo2.png',
    apple: '/dwai_logo2.png',
  },
};

export default async function RootLayout({ children }) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["globalData"],
    queryFn: fetchGlobalData,
  });

  return (
    <html lang="en">
      <body
        className={`${jakarta.className} antialiased text-gray-900 bg-gray-50`}
      >
        <Providers>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <GlobalDataProvider>
              {/* <LanguageProvider> */}
              {/* Accessibility: Skip to main content for keyboard users */}
              <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-purple-900 px-6 py-3 rounded-lg z-[100] font-bold shadow-xl ring-4 ring-purple-500 transition-all">
                Skip to main content
              </a>

              <Navbar />
              {/* Main Content Region */}
              <main id="main-content" className="pt-20 min-h-screen">{children}</main>
              <AccessibilityWidget />
              <Footer />
              <ScrollUp />
              {/* </LanguageProvider> */}
            </GlobalDataProvider>
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
