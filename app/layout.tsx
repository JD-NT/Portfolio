import type { Metadata } from "next";
import NavBar from './components/NavBar/NavBar';
import "./globals.css";
import Footer from "./components/Footer/Footer";
import localFont from 'next/font/local'
 

export const metadata: Metadata = {
  title: "Dale's Warren",
  description: "I'm Dale, a Pixel Artist and Character Designer.. this site is best viewed on desktop but will work on other devices ^_^",
};

const UbuntuMono = localFont({
  src: '../public/assets/Fonts/UbuntuMono-Regular.ttf',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={UbuntuMono.className}>
      <head>
        <link rel="icon" href="/assets/sprite-0002.ico" type="images/x-icon" sizes="any" />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
