// components/Header.jsx
import { FaSearch, FaBell } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-between px-6 border-b border-gray-200 z-20">
      
      {/* Left Side: Search */}
      <div className="flex items-center w-full space-x-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center space-x-6">
        {/* Admin Info */}
        <div className="hidden md:flex flex-col justify-center leading-tight text-sm text-right">
          <p className="font-medium text-gray-800">Mike Nielsen</p>
          <span className="text-xs text-gray-500">Admin</span>
        </div>

        {/* Profile Image */}
        <Image
          src="/assets/logo.png"
          alt="User"
          width={40}
          height={40}
          className="rounded-full border border-gray-300"
        />

        {/* Notification Icon */}
        <div className="relative">
          <FaBell className="text-gray-500 hover:text-blue-500 text-lg cursor-pointer transition" />
          <span className="absolute -top-1 -right-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-red-500 rounded-full">
            3
          </span>
        </div>
      </div>
    </header>
  );
}
