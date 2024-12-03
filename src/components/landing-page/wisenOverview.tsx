import Image from "next/image";
import React from "react";

export default function WisenOverview() {
  return (
    <div className="flex flex-col bg-white h-screen justify-center items-center">
      <h2 className="text-3xl font-semibold md:mr-auto md:ml-96 mb-1">Wisen</h2>
      <p className="text-sm font-normal text-gray-400 md:mr-auto md:ml-96 mb-3">
        A platform to connect with people in an intuitive way
      </p>
      <Image
        src="/wisenplatform.svg"
        alt="wisen"
        width={1000}
        height={1000}
        className="md:w-[80%] md:h-[80%] mx-auto"
      />
    </div>
  );
}
