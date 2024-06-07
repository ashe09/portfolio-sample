import { config } from "@fortawesome/fontawesome-svg-core";
import { Noto_Sans, Noto_Sans_JP } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ThemeProvider } from "next-themes";

config.autoAddCss = false;
import { Footer } from "@/app/components/base/Footer";
import { Header } from "@/app/components/base/Header";

import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
  preload: false,
  weight: ["400", "500", "700"]
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
  preload: false,
  weight: ["400", "500", "700"]
});

const template = "%s | My Portfolio";
const titleDefault = "My Portfolio";
const description = "ポートフォリオサイトです。Webサイト、アプリケーション、グラフィックデザイン作品を掲載しています。";
const url = "https://works-lists.vercel.app";
const images = `${url}/ogp.png`;

export const metadata: Metadata = {
  title: {
    template,
    default: titleDefault
  },
  description,
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL(url),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: {
      template,
      default: titleDefault
    },
    description,
    url,
    siteName: titleDefault,
    images,
    type: "website"
  },
  robots: {
    index: false,
    follow: false
  },
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/icon.svg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: {
      template,
      default: titleDefault
    },
    description,
    images
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`${notoSans.variable} ${notoSansJP.variable} font-sansJP`}>
        <ThemeProvider attribute="class">
          <Header />
          <main className="bg-white text-textNormal dark:bg-bgDark dark:text-gray">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
