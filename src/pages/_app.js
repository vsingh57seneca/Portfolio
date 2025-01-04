import Navbar from "@/components/Navigation/Navbar";
import "@/styles/globals.css";
import { useState, useEffect } from 'react'
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0">
        <Navbar />
      </div>
      <div className="flex-grow overflow-hidden lg:mx-20">
        <Component {...pageProps} />
        <Toaster />
      </div>
    </div>
  );
}
