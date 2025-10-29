/**
 * Root Layout Component
 * Provides the HTML structure, metadata, and global styles.
 * Includes JSON-LD schema for SEO.
 */

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "STERA Pharmacy - Your Trusted Healthcare Partner in Kenya",
  description: "STERA Pharmacy offers quality medications, health supplements, medical equipment, and professional pharmaceutical services in Kenya. Visit us for consultations, home delivery, and prescription management.",
  keywords: ["pharmacy", "medication", "healthcare", "Kenya", "STERA", "medical supplies", "consultation"],
  authors: [{ name: "STERA Pharmacy" }],
  openGraph: {
    title: "STERA Pharmacy - Your Trusted Healthcare Partner",
    description: "Quality medications and professional pharmaceutical services in Kenya",
    type: "website",
    locale: "en_KE",
    siteName: "STERA Pharmacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "STERA Pharmacy",
    description: "Your trusted healthcare partner in Kenya",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://stera-pharmacy.example.com",
              name: "STERA Pharmacy",
              description: "Professional pharmaceutical services and quality medications in Kenya",
              image: "https://stera-pharmacy.example.com/logo.png",
              telephone: "+254-7XX-XXX-XXX",
              email: "info@sterapharmacy.co.ke",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main Street",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
