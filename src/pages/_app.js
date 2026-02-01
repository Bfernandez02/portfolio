import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="transition-colors duration-300">
        <Navbar />
      </div>

      <div className="min-h-screen transition-colors duration-300">
        <Component {...pageProps} />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
