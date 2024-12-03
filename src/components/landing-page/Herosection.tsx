import Link from "next/link";
import React from "react";

export default function Herosection() {
  return (
    <div className=" w-full h-[80vh] bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-start px-10 md:px-28 lg:px-40 xl:px-60">
      <div className="z-10 text-white">
        <h1 className="md:text-3xl text-xl font-bold mb-5 text-blue-900">
          Welcome to Sanshi
        </h1>
        <p className="text-3xl md:text-5xl font-bold my-2">
          It’s always about <br />
          Connecting people with verified profiles.
        </p>
        <p className="text-xs my-2">
          Meet the modern standard for public facing documentation. Beautiful
          <br />
          out of the box, easy to maintain, and optimized for user engagement.
        </p>
        <Link href="https://wisein.in/">
          <button className="px-4 py-2 mt-4 bg-white text-black rounded-md">
            Visit wisen
          </button>
        </Link>
      </div>
    </div>
  );
}
