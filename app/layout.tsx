import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header/page";
import Footer from "./component/Footer/page";
import Providers from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
<body className={inter.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
        </body>
      </Providers>
      
      
    </html>
  );
}
