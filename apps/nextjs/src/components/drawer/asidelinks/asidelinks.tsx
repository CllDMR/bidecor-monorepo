"use client";

import React from "react";
import Link from "next/link";

export default function AsideLinks() {
  return (
    <>
      {" "}
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
    </>
  );
}
