import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "~/styles/globals.css";

import type { FC, PropsWithChildren, ReactNode } from "react";

import { DrawerInside } from "~/components/drawer/inside";
import { NavbarInside } from "~/components/navbar/inside";
import { TRPCReactProvider } from "~/components/providers";
import { ThemeProvider } from "~/theme-provider/theme-provider";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create T3 Turbo",
  description: "Simple monorepo with shared backend for web & mobile apps",
};

const Layout: FC<PropsWithChildren & { modal: ReactNode }> = ({
  children,
  modal,
}) => {
  return (
    <html lang="en">
      <body
        className={`${["font-sans", fontSans.variable].join(" ")} base-100`}
      >
        <TRPCReactProvider>
          <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <ThemeProvider>
              {" "}
              <div className="drawer-content box-border flex min-h-[100vh] flex-col p-3 sm:p-4 lg:p-6">
                <NavbarInside />
                <main>
                  {children}
                  {modal}
                </main>
              </div>
            </ThemeProvider>
            <DrawerInside />
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
};

export default Layout;
