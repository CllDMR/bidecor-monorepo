import type { Metadata } from "next";

import "~/styles/globals.css";

import type { FC, PropsWithChildren } from "react";

import { DrawerRoot } from "~/components/drawer/root";
import { NavbarRoot } from "~/components/navbar/root";

export const metadata: Metadata = {
  title: "Create T3 Turbo",
  description: "Simple monorepo with shared backend for web & mobile apps",
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <NavbarRoot />
        <main>{children}</main>
      </div>
      <DrawerRoot />
    </div>
  );
};

export default Layout;
