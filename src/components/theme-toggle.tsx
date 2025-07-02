"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer rounded-full border-0 bg-[#ffdfb0] hover:bg-[#f7ddb7] dark:bg-[#393128] hover:dark:bg-[#393128]"
    >
      <SunIcon className="size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 text-[#D27D2D]" />
      <MoonIcon className="absolute size-4 scale-0 rotate-0 transition-all dark:scale-100 text-[#F3D8C7]" />
    </Button>
  );
}
