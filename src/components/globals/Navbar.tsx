"use client";
import React from "react";
import SanshiIcon from "@/icons/sanshiIcon";
import Image from "next/image";
import Dropdown from "../landing-page/Dropdown";
export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mb-1 flex h-[95%] w-full items-center justify-between ">
      <div className="dark: static  h-14 w-full items-center justify-around border border-white bg-white px-4 shadow flex">
        <div className="flex items-center">
          <SanshiIcon />
        </div>
        {/* <div className="flex text-xs items-center gap-3 font-semibold">
          <div>
            <Link href="/about">About Us</Link>
          </div>
          <div>
            <Link href="/about">Carrer</Link>
          </div>
          <div>
            <Link href="/about">Contact</Link>
          </div>
          <div>
            <Link href="/register">Register</Link>
          </div>
        </div> */}
        <div className="flex text-md items-center gap-4">
          <Dropdown />
          <Image
            src="/globesvg.svg"
            width={30}
            height={30}
            alt="globe image"
            onClick={() => scrollToSection("footer")}
          />
          <Image
            src="/mailsvg.svg"
            width={30}
            height={30}
            alt="mail image"
            onClick={() => scrollToSection("footer")}
          />
        </div>
      </div>
    </div>
  );
}
