import type { Metadata } from "next";
// import localFont from "next/font/local";
import HeaderMenu from "./components/navmenu";
import "./globals.css";



export const metadata: Metadata = {
  title: "Взять кредит на выгодных условиях | ⚡Одобрим заявку быстро⚡",
  description: "Взять кредит на выгодных условиях | ⚡Одобрим заявку быстро⚡",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        <HeaderMenu/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
