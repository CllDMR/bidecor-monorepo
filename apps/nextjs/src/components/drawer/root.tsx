import type { FC } from "react";

import AsideLinks from "./asidelinks/asidelinks";

export const DrawerRoot: FC = () => (
  <aside className="drawer-side">
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
    <ul className="menu h-full w-80 bg-base-200 p-4">
      <AsideLinks />
    </ul>
  </aside>
);
