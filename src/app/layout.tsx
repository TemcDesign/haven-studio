import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haven Studio",
  description: "Pagina para el agendamiento de citas en Haven Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
