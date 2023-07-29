"use client";

import React, { useEffect, useState } from "react";

export default function Switch() {
  const [theme, setTheme] = useState<boolean>(true);

  useEffect(() => {
    // eslint-disable-next-line no-var
    var root = document.getElementsByTagName("html")[0];

    if (theme) {
      return root?.setAttribute("data-theme", "dark");
    }
    return root?.setAttribute("data-theme", "light");
  }, [theme]);

  return (
    <input
      onChange={() => setTheme(!theme)}
      type="checkbox"
      className="toggle"
      checked={!theme}
    />
  );
}
