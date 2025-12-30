import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Alexandria, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import "./globals.css";

const alexandria = Alexandria({
  variable: "--font-alexandria",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "arabic"],
});

const gulf = localFont({
  src: [
    {
      path: "../../public/fonts/Gulf-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gulf-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gulf",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahfaza",
  description: "Mahfaza Web Application",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${alexandria.className} ${alexandria.variable} ${gulf.variable} ${geistMono.variable} font-sans`}
    >
      <body className={`antialiased bg-white`}>{children}</body>
    </html>
  );
}
