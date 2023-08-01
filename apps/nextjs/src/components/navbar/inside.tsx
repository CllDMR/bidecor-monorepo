import type { FC } from "react";
import Link from "next/link";

import SwitchTheme from "./switch-theme/switch-theme";

export const NavbarInside: FC = () => {
  return (
    <header>
      <nav className="sidebar navbar mt-1 h-8 w-full rounded-lg py-3 shadow-xl">
        <div className="mx-2 flex-1 px-2">
          <Link href="/">Logo</Link>
        </div>
        <div className="mr-4 flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            className="flex cursor-pointer flex-col gap-[6px]"
          >
            <span className="h-[2px] w-[26px] bg-primary "></span>
            <span className="h-[2px] w-[26px] bg-primary "></span>
            <span className="h-[2px] w-[26px] bg-primary "></span>
          </label>
        </div>
        <div>
          <SwitchTheme />
        </div>
      </nav>
    </header>
  );
};
