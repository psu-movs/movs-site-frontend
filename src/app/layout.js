import "./globals.css";
import { Inter } from "next/font/google";
import ThemeRegistry from "../components/themeRegistry/ThemeRegistry";
import GlobalMUIStyles from "@/app/globalMUIStyles";
import AuthContextProvider from "@/app/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "КафедраМОВС",
  description: "Кафедра МОВС ПГНИУ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <GlobalMUIStyles />
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
