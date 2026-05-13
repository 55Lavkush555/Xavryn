"use client";

import styles from "./ThemeToggle.module.css";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {

    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }

  };

  return (
    <button
      className={styles.themeBtn}
      onClick={toggleTheme}
    >
      {!mounted
        ? "🌙"
        : theme === "dark"
        ? "☀️"
        : "🌙"}
    </button>
  );
}