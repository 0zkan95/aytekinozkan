
import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "Aytekin Özkan",
  description: "Portfolio, projects and experiments by Aytekin Özkan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
