import type { Metadata } from "next"
import { raleway } from "@/fonts"
import "@/styles/globals.scss"

export const metadata: Metadata = {
  title: "Weather app",
  description: "This app for forecast weather",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
