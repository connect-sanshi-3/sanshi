import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/globals/Navbar";
import Footer from "@/components/globals/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className={`font-sans ${inter.variable} min-h-screen bg-[#EFF3F6] ${inter.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
