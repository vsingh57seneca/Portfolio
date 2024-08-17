import Navbar from "@/components/Navigation/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
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
