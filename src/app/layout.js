// import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Automate | Workflow Automation with n8n, Make & Zapier",
  description:
    "We automate workflows using n8n, Make (Integromat), and Zapier. Save time, reduce errors, and connect your favorite apps with custom automation solutions.",
  keywords: [
    "automation",
    "workflow automation",
    "n8n",
    "make",
    "integromat",
    "zapier",
    "business automation",
    "process automation",
    "app integrations",
    "no-code automation",
    "low-code automation",
    "custom workflows"
  ],
  authors: [{ name: "Automate" }],
  openGraph: {
    title: "Automate | Workflow Automation with n8n, Make & Zapier",
    description:
      "Automate your business with powerful workflow automation using n8n, Make (Integromat), and Zapier. Streamline processes, reduce manual work, and scale faster.",
    url: "https://yourdomain.com",
    siteName: "Automate",
    images: [
      {
        url: "../assets/logo.png", // replace with your logo/banner
        width: 1200,
        height: 630,
        alt: "Automate - Workflow Automation with n8n, Make & Zapier",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automate | Workflow Automation with n8n, Make & Zapier",
    description:
      "We automate workflows using n8n, Make (Integromat), and Zapier. Build custom automation to save time and grow your business.",
    images: ["../assets/logo.png"], // replace with your image
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
