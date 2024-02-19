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
        <header className={`py-6 shadow-md sticky top-0 grow-0 mb-6 bg-white dark:bg-brickfields z-10`}>
          <h1 className={`text-center text-4xl`}>
            Residensi PR1MA Brickfields <sup className="text-sm -top-4">1</sup>
          </h1>
        </header>
        {children}
        <footer className="bg-brickfields dark:bg-pink-600 text-white min-h-36 grow-0 p-8 md:px-24">
          <div className="text-sm">
            Disclaimers:<br />
            <sup>[1]</sup> This is an unoffical page of Residensi PR1MA Brickfields, solely created by one of the homeowner for sharing information.
            <br />
            <sup>[2]</sup> The LAD Calculator is only for reference purposes, it doesn't hold any legal authority against the actual compensation presented by PR1MA.
          </div>
        </footer>
      </body>
    </html>
  );
}
