"use client";

import React from "react";
import { useTheme } from "next-themes";

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <input
      onChange={() => changeThemeHandler()}
      type="checkbox"
      className="toggle bg-primary"
      checked={theme === "dark"}
    />
  );
}
