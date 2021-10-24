import "../styles/globals.css";
import "../sass/main.scss";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showSidebar = router.pathname === "/" ? true : false;

  return (
    <UserProvider>
      {showSidebar ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </UserProvider>
  );
}
export default MyApp;
