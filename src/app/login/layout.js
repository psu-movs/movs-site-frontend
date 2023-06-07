import "../globals.css";
import { Inter } from "next/font/google";
import GlobalMUIStyles from "@/app/globalMUIStyles";
import ThemeRegistry from "@/components/themeRegistry/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Вход",
  description: "Кафедра МОВС ПГНИУ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry>
          <GlobalMUIStyles />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
