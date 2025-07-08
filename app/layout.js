import "./globals.css";
import localFont from "next/font/local";
import NavBar from "./Components/Navbar";

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins-sans",
  weight: "100 500",
});

export const metadata = {
  title: "Sparkers Academy",
  description: "Sparkles Academy the place where your child learns and grows",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NavBar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
