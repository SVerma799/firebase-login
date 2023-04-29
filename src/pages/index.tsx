import Image from "next/image";
import { Inter } from "next/font/google";
import SignInScreen from "./auth";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="h-full">
      <h1>Sign From Firebase</h1>
      {/* .//<SignInScreen /> */}
    </main>
  );
}
