import "../styles/globals.css";
import "../sass/main.scss";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}
export default MyApp;
