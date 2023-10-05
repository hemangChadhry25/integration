"use client";

import React from "react";
import * as PortalPrimitive from "@radix-ui/react-portal";
import dynamic from "next/dynamic";

const Search = dynamic(() => import("./search"));
const Dropdown = dynamic(() => import("./dropdown"));
const Toggle = dynamic(() => import("./toggle"));

const Portal = ({
  search,
  dropdown,
  toggle,
}: {
  search: React.ReactNode;
  dropdown: React.ReactNode;
  toggle: React.ReactNode;
}) => {
  return (
    <PortalPrimitive.Portal>
      {search}
      {dropdown}
      {toggle}
    </PortalPrimitive.Portal>
  );
};

export default function Sidebar() {
  return (
    <Portal search={<Search />} dropdown={<Dropdown />} toggle={<Toggle />} />
  );
}
