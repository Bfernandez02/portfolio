import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "../ThemeProvider";

export default function Logo({ width, height, version }) {
  const { theme, toggleTheme } = useTheme();

  let logo = "/logo-light.svg";
  if (version === "dark" || theme === "dark") {
    logo = "/logo-dark.svg";
  }

  if (!width) width = 204;
  if (!height) height = 104;

  return (
    <Link href="/" className={`flex items-center fit justify-center`}>
      <img
        className="flex items-center fit justify-center  transition-all"
        src={logo}
        alt="Logo"
        width={width}
        height={height}
        style={{ objectFit: "contain" }}
      />
    </Link>
  );
}
