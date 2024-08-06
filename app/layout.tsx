"use client"
import "../styles/global.css"
import "../styles/index.scss";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import { useEffect, ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import Seo from "../components/Seo";
import ScrollToTop from "../components/ScrollToTop";
import React from "react";
import Footer from "../components/footer/Footer"
import Header from "../components/header/HeaderHorizontal"
// Dynamic import for AnimatedCursor component
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});



export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      
      <body>
        <div className="page-wrapper">
          
          <AnimatedCursor
            innerSize={8}
            outerSize={44}
            color="153,153,255"
            outerAlpha={0.3}
            innerScale={0.7}
            outerScale={1.4}
          />
          {children}
          <ToastContainer />
          <ScrollToTop />
          <Header />
          <Footer />

        </div>
      </body>
    </html>
  );
}
