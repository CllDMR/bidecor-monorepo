import type { FC } from "react";
import Link from "next/link";

import { auth } from "@acme/auth";

import { SignOutButton } from "../auth";
import Switch from "./switch/switch";

export const NavbarInside: FC = async () => {
  const session = await auth();

  return (
    <header>
      <nav className="sidebar navbar mt-1 h-8 w-full rounded-lg py-3 shadow-xl">
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

        <div>
          {session && <SignOutButton />} <Switch />{" "}
        </div>
      </nav>
    </header>
  );
};
