"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
const Togglar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <></>;
  }
  return (
    <div className="text-black dark:text-white">
      {theme === "light" ? (
        <button
          onClick={() => {
            setTheme("dark");
          }}
        >
          {" "}
          apply dark mode
        </button>
      ) : (
        <button
          onClick={() => {
            setTheme("light");
          }}
        >
          {" "}
          apply light mode
        </button>
      )}
    </div>
  );
};

export default Togglar;
