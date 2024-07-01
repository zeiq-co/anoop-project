import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <main className={`flex min-h-screen ${inter.className}`}>
      {children}
    </main>
  );
}