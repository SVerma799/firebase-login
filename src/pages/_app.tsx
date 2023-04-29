import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import { AuthContextProvider } from "../../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "@/components/ProtectedRoute";

const noAuthRequired = ["/", "/login", "/signup"];

export default function App({ Component, pageProps }: AppProps) {
  // Router here is used to either get the current path or to push to a new path
  const router = useRouter();

  return (
    // AuthContextProvider is used to wrap the entire app so that the user can be accessed from anywhere
    <AuthContextProvider>
      {/* Navbar component have the top component to login or signup*/}
      <Navbar />

      {/* noAuthRequired includes all the routes which are available with the user sign in */}
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        // In Protected Route we willm pass the component as children which are react node. In the useEffect method of this we will
        // check if the user is nul lor not. If null then we will redirect the user to the login page
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}
