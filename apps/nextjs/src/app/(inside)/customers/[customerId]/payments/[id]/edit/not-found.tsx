import type { FC } from "react";
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/customer-payments">all customer-payments</Link>
      </p>
    </div>
  );
};

export default NotFound;
