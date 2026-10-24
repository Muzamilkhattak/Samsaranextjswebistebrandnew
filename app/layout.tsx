import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollObserver from "./components/ScrollObserver";

export const metadata: Metadata = {
  title: "Med Spa Plantation, FL | Samsara Aesthetics & Wellness",
  description: "Reawaken your best self with synergistic aesthetic and wellness treatments in Plantation, FL at our beautiful Med Spa, Samsara Aesthetics & Wellness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className="no-js" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="home" suppressHydrationWarning>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WBL5L7W9');
          `}
        </Script>
        <Script id="resolution-cookie" strategy="afterInteractive">
          {`document.cookie = 'resolution=' + Math.max(screen.width, screen.height) + '; path=/';`}
        </Script>
        <ScrollObserver />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
