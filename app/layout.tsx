import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import classNames from "classnames";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Residensi PR1MA Brickfields Owner's site - Unoffical",
  description: "Unofficial site dedicated for Residensi PR1MA Brickfields owners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutClasses = classNames({
    [robotoCondensed.className]: true,
    "flex": true,
    "flex-col": true,
    "min-h-screen": true
  });

  return (
    <html lang="en">
      <body className={layoutClasses}>
        <h1 className={`text-center text-4xl py-6 shadow-md sticky top-0 grow-0 mb-6 bg-white dark:bg-brickfields`}>
          Residensi PR1MA Brickfields
        </h1>
        {children}
      </body>
    </html>
  );
}
