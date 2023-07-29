"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function SwitchTheme() {
  const { theme, setTheme } = useTheme();

  const changeThemeHandler = () => {
    if (theme === "light") return setTheme("dark");
    return setTheme("light");
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
