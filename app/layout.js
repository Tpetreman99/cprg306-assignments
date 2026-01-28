import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shopping List",
  description: "Created by Tanner Peatreman for CPRG 306 class",
};

const headerStyle = {
  padding: "1.5rem",
  backgroundColor: "#1f2933",
  color: "white",
  borderBottom: "4px solid #3b82f6",
};

const pageTitleStyle = {
  margin: 0,
  fontSize: "2rem",
};

function SiteHeader() {
  return (
    <header style={headerStyle}>
      <Link href={"/"}>
      <h1 style={pageTitleStyle}>CPRG 306 Assignments</h1>
      </Link>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}

