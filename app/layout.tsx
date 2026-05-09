import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ananda valentino zaky - Frontend Developer",
  description: "A Frontend Developer with a passion for building responsive and interactive web applications. With expertise in HTML, CSS, JavaScript, React, and Next.js, I create modern user interfaces and seamless user experiences. Let’s collaborate to bring your ideas to life!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased font-sans bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
