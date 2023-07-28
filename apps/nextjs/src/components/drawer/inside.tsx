import type { FC } from "react";
import Link from "next/link";

export const DrawerInside: FC = () => (
  <aside className="drawer-side">
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
    <ul className="menu h-full w-80 gap-y-3 bg-base-200 p-4">
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link href="/customer-checkouts">CustomerCheckouts</Link>
      </li>
      <li>
        <Link href="/customer-payments">CustomerPayments</Link>
      </li>
      <li>
        <Link href="/customers">Customers</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/supplier-checkouts">SupplierCheckouts</Link>
      </li>
      <li>
        <Link href="/supplier-payments">SupplierPayments</Link>
      </li>
      <li>
        <Link href="/suppliers">Suppliers</Link>
      </li>
    </ul>
  </aside>
);
