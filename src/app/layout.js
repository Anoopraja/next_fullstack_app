import "./globals.css";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Navbar /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}
