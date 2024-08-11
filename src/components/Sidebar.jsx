import Link from "next/link";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href="/">
        <FaSquareXTwitter className="w-16 h-16 cursor-pointer p3 hover:bg-gray-100 rounded-full transition-all duration-200" />{" "}
      </Link>
      <Link
        href="/"
        className="flex items-center p-3 hover:bg-grey-100 rounded-full transition-all duration-200 gap-2 w-fit"
      >
        <HiHome className="w-7 h-7 cursor-pointer p3 hover:bg-gray-100 rounded-full transition-all duration-200" />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>
      <button
        type="button"
        class=" w-48 h-9 shadow-md text-white bg-blue-400 hover:brightness-95 rounded-full transition-all duration-200 hidden xl:inline"
      >
        Sign In
      </button>
    </div>
  );
}
