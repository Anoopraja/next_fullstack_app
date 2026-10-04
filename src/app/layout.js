import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";



export default function RootLayout({ children }) {
  return (
    <html>
      <Navbar /> 
      <body>{children}</body>
      <Footer />
    </html>
  );
}
