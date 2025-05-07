import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from './Footer/page';
import Navbar from './Navbar/page';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "eMart",
  description: "A simple Gadgets Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
        
          <Navbar/>
         {children}
         <Footer/>
      </body>
    </html>
  );
}
