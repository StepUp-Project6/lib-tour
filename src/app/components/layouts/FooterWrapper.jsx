"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterWrapper = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) return null;
  return <Footer />;
};

export default FooterWrapper;