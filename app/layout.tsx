import type { Metadata } from "next"
import { raleway } from "@/fonts"
import "@/styles/globals.scss"
import "material-symbols"

export const metadata: Metadata = {
  title: "Weather app",
  description: "This app for forecast weather",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        {children}
        {modal}  
      </body>
    </html>
  );
}
