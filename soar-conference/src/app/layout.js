import { Geist, Geist_Mono } from "next/font/google";
import { Jersey_10 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import classNames from "classnames";

const jersey = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SOAR Conference 2025",
  description: "SOAR Leadership Conference",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={classNames(jersey.className, 'overflow-x-hidden')} 
      >
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
