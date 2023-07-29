import type { FC } from "react";
import Link from "next/link";

export const DrawerInside: FC = () => (
  <aside className="drawer-side lg:my-auto lg:ml-10 lg:h-[95vh] lg:min-w-[250px] lg:rounded-2xl  lg:shadow-xl">
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

    <ul className="sidebar menu h-screen w-[250px] gap-y-3 p-4 lg:w-full ">
      <h1 className="flex justify-center px-4 py-6 text-lg  text-white ">
        Dashboard Title
      </h1>
      <li className="text-white">
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li className="text-white">
        <Link href="/customer-checkouts">CustomerCheckouts</Link>
      </li>
      <li className="text-white">
        <Link href="/customer-payments">CustomerPayments</Link>
      </li>
      <li className="text-white">
        <Link href="/customers">Customers</Link>
      </li>
      <li className="text-white">
        <Link href="/products">Products</Link>
      </li>
      <li className="text-white">
        <Link href="/supplier-checkouts">SupplierCheckouts</Link>
      </li>
      <li className="text-white">
        <Link href="/supplier-payments">SupplierPayments</Link>
      </li>
      <li className="text-white">
        <Link href="/suppliers">Suppliers</Link>
      </li>
    </ul>
  </aside>
);
