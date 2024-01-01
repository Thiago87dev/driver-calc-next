"use client";

import Link from "next/link";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle("md:transform-none");
  };

  return (
    <header className="bg-mainColorLight h-20 flex justify-between items-center py-0 px-8 text-textColor">
      <h3 className="text-4xl font-bold">Logo</h3>
      <nav
        className="nav"
        ref={navRef}
      >
        <Link className="link" href="#">
          Home
        </Link>
        <Link className="link" href="#">
          Products
        </Link>
        <Link className="link" href="#">
          Blog
        </Link>
        <Link className="link" href="#">
          About
        </Link>
        <button
          className="btn md:absolute md:top-8 md:right-8"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="btn"
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
