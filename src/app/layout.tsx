import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ReUsa - Reutilizar es cuidar",
  description: "Plataforma colaborativa para intercambiar, donar, vender o comprar artículos infantiles de forma sostenible y solidaria.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
  themeColor: "#059669",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ReUsa",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#059669" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ReUsa" />
        <meta name="format-detection" content="telephone=no" />
        <script defer data-domain="reusa.space" src="https://plausible.io/js/script.pageview-props.tagged-events.js"></script>
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
