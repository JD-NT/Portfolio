import type { Metadata } from "next";
import NavBar from "./components/NavBar/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "The Portfolio of John Dale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./assets/sprite-0002.ico" type="images/x-icon" sizes="any" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
