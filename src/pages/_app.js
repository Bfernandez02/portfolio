import { ThemeProvider } from '@/components/ThemeProvider';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;