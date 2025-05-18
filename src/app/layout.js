import { Inter } from "next/font/google";
import "./globals.css";
import LoaderProvider from "./components/fragments/LoaderProvider";
import Navbar from "./components/layouts/Navbar";
import { headers } from "next/headers";
import Footer from "./components/layouts/Footer";
import FooterWrapper from "./components/layouts/FooterWrapper";
import { SoundProvider } from "./context/SoundContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UPT Perpustakaan UPN Veteran Yogyakarta",
  description: "Website resmi UPT Perpustakaan UPN Veteran Yogyakarta",
};

export default function RootLayout({ children }) {
  const headerList = headers();
  const pathname = headerList.get("x-pathname") || "";
  const isHomePage = pathname === "/";
  return (
    <html lang="en">
      <body className={inter.className}>
        <SoundProvider>
          <Navbar />
          <div className="pt-[89px]">{children}</div>
          <FooterWrapper />
        </SoundProvider>
      </body>
    </html>
  );
}
