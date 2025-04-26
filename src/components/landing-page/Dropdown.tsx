import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Dropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-none outline-none focus:ring-0 focus:outline-none text-sm text-[#3262ff] font-medium">
        WiseIN
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => window.open("https://www.wisein.in/pricing", "_blank")}
        >
          wiseIN Pricing
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => window.open("/terms-conditions", "_blank")}
        >
          Terms & Conditions
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => window.open("/privacy-policy", "_blank")}
        >
          Privacy & Policy
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => window.open("/cancellation-refund", "_blank")}
        >
          Cancellation & Refund
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => window.open("/contact-us", "_blank")}>
          Contact-us
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
