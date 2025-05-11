import { Metadata } from "next";
import { Poppins, Inter } from 'next/font/google'; // Import fonts
import "./globals.scss";

// Configure Poppins for headings
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Weights for headings
  variable: '--font-poppins',
  display: 'swap', // Ensures text remains visible during font loading
});

// Configure Inter for body text
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Weights for body text
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Aytekin Özkan",
  description: "Portfolio, projects and experiments by Aytekin Özkan",
  icons: {
    icon: "/icon1.png",
  },
};

export default function Rootlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}> {/* Apply font variables */}
      <body>{children}</body>
    </html>
  );
}
