import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mada Chaland",
  description: "Agence de voyage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative">
          <Header />
          <main className="bg-surface text-onSurace">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
