import React from "react";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";
import menuItems from "./menuItems.js";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-100 w-full ">
      <div className="hidden lg:flex">
        <DesktopNav menuItems={menuItems} />
      </div>
      <div className="lg:hidden">
        <MobileNav menuItems={menuItems} />
      </div>
    </nav>
  );
}
