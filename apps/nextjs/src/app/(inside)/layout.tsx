import type { Metadata } from "next";

import "~/styles/globals.css";

import type { FC, PropsWithChildren, ReactNode } from "react";

import { DrawerInside } from "~/components/drawer/inside";
import { NavbarInside } from "~/components/navbar/inside";

export const metadata: Metadata = {
  title: "Create T3 Turbo",
  description: "Simple monorepo with shared backend for web & mobile apps",
};

const Layout: FC<PropsWithChildren & { modal: ReactNode }> = ({
  children,
  modal,
}) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />{" "}
      <div className="drawer-content box-border flex min-h-[100vh] flex-col p-3 sm:p-4 lg:p-6">
        <NavbarInside />
        <main>
          {children}
          {modal}
        </main>
      </div>
      <DrawerInside />
    </div>
  );
};

export default Layout;
