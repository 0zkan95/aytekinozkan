
import { Metadata } from "next";



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
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
