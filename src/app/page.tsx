import FoundersSection from "@/components/landing-page/Founders";
import Herosection from "@/components/landing-page/Herosection";
import WisenOverview from "@/components/landing-page/wisenOverview";
import React from "react";

export default function page() {
  return (
    <div className="">
      <Herosection />
      <WisenOverview />
      <FoundersSection />
    </div>
  );
}
