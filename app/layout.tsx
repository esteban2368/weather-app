import type { Metadata } from "next"
import { raleway } from "@/fonts"
import "@/styles/globals.scss"
import "material-symbols"

import Providers from "@/components/Providers"

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
        <Providers>
          {modal}  
          {children}
        </Providers>
      </body>
    </html>
  );
}
