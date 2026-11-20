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
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-WVPV9HRL"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var observer = new MutationObserver(function(mutations) {
                    for (var i = 0; i < mutations.length; i++) {
                      var m = mutations[i];
                      if (m.type === 'attributes' && m.attributeName === 'bis_skin_checked') {
                        m.target.removeAttribute('bis_skin_checked');
                      }
                    }
                  });
                  observer.observe(document.documentElement, {
                    attributes: true,
                    subtree: true,
                    attributeFilter: ['bis_skin_checked']
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="home" suppressHydrationWarning>
        <Script id="resolution-cookie" strategy="afterInteractive">
          {`document.cookie = 'resolution=' + Math.max(screen.width, screen.height) + '; path=/';`}
        </Script>
        <ScrollObserver />
        <Header />
        {children}
        <Footer />
        <elevenlabs-convai agent-id="agent_1801m59qba7ffd4beafxmgjefdz4"></elevenlabs-convai>
        <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async type="text/javascript"></script>
      </body>
    </html>
  );
}
