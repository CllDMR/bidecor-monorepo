"use client";

import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong! 22222</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default Error;