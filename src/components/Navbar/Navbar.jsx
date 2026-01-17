import React from "react";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav.jsx";
import menuItems from "./menuItems.js";

export default function Navbar() {
  return (
    <nav>
      <div className="hidden lg:flex">
        <DesktopNav menuItems={menuItems} />
      </div>
      <div className="lg:hidden">
        <MobileNav menuItems={menuItems} />
      </div>
    </nav>
  );
}
