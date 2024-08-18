import Navbar from "@/components/Navigation/Navbar";
import "@/styles/globals.css";
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow overflow-hidden">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
