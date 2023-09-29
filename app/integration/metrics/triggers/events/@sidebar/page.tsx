"use client";

import * as PortalPrimitive from "@radix-ui/react-portal";
import dynamic from "next/dynamic";

const SearchSidebar = dynamic(() => import("./search"));

const Portal = ({ searchSidebar }: { searchSidebar: React.ReactNode }) => {
  return <PortalPrimitive.Portal>{searchSidebar}</PortalPrimitive.Portal>;
};

export default function Page() {
  return <Portal searchSidebar={<SearchSidebar />} />;
}
