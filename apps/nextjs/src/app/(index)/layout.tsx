import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "~/styles/globals.css";

import type { FC, PropsWithChildren } from "react";

import { DrawerRoot } from "~/components/drawer/root";
import { NavbarRoot } from "~/components/navbar/root";
import { TRPCReactProvider } from "~/components/providers";

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
      <body className={["font-sans", fontSans.variable].join(" ")}>
        <TRPCReactProvider>
          <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              <NavbarRoot />
              <main className="bg-slate-700">{children}</main>
            </div>
            <DrawerRoot />
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
};

export default Layout;
