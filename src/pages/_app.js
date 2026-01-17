import { ThemeProvider } from "@/components/ThemeProvider";
import "@/styles/globals.css";
import { ThemeButton } from "@/components/ThemeButton";
import Navbar from "@/components/Navbar/Navbar";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <div className="transition-colors duration-300">
        <Navbar />
      </div>

      <div className="min-h-screen transition-colors duration-300">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default App;
