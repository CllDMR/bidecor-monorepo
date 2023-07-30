import type { FC } from "react";
import { auth } from "@acme/auth";

import { SignOutButton } from "../auth";
import AsideLinks from "./asidelinks/asidelinks";

export const DrawerInside: FC = async () => {
  const session = await auth();

  return (
    <aside className="drawer-side lg:my-auto lg:ml-10 lg:h-[95vh] lg:min-w-[250px] lg:rounded-2xl  lg:shadow-xl">
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

      <ul className="sidebar menu h-full w-[250px] gap-y-3 p-4 lg:w-full ">
        <h1 className="flex justify-center px-4 pb-6 text-lg text-primary ">
          Dashboard Title
        </h1>
        <AsideLinks />
        {session && (
          <div className="mb-4 mt-auto">
            <SignOutButton />
          </div>
        )}
      </ul>
    </aside>
  );
};
