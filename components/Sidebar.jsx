import Link from 'next/link';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { HiHome } from 'react-icons/hi';

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>
      <Link
        href="/"
        className="flex items-center justify-center p-3 hover:bg-gray-200 rounded-full transition-all duration-200 gap-2 w-fit"
      >
        <HiHome className="h-7 w-7" />
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>
      <button className="bg-blue-400 text-white font-bold rounded-full hover:bg-blue-500 transition-all duration-200 w-48 h-10 shadow-md hidden xl:inline">
        Sign In
      </button>
    </div>
  );
}
