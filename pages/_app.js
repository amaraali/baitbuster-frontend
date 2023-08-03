import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import dynamic from "next/dynamic";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
