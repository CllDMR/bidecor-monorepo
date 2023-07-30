import type { FC } from "react";
import Link from "next/link";
import { auth } from "@bidecor/auth";

import { SignOutButton } from "../auth";

export const NavbarInside: FC = async () => {
  const session = await auth();

  return (
    <header>
      <nav className="navbar h-20 w-full bg-base-300 px-5 py-3">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>

        <div className="mx-2 flex-1 px-2">
          <Link href="/">Logo</Link>
        </div>

        {session && (
          <div className="flex items-center justify-end gap-4">
            <span>{session.user.name ?? session.user.email ?? ""}</span>
            <SignOutButton />
          </div>
        )}
      </nav>
    </header>
  );
};
