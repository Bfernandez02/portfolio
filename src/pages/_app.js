import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/globals.css';
import DesktopNav from '@/components/DesktopNav';
import { ThemeButton } from '@/components/ThemeButton';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      Theme Button: <ThemeButton />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;