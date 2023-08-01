import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "~/styles/globals.css";

import type { FC, PropsWithChildren } from "react";

import { Provider } from "~/components/providers";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create T3 Turbo",
  description: "Simple monorepo with shared backend for web & mobile apps",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${["font-sans", fontSans.variable].join(" ")} base-100`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
};

export default Layout;
