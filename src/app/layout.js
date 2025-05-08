
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from './Footer/page';
import Navbar from './Navbar/page';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
         <ToastContainer 
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"/>
         <Footer/>
      </body>
    </html>
  );
}
