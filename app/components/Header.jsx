// components/Header.jsx
import { FaSearch, FaBell } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-white shadow-sm flex items-center justify-between px-6 z-20">
      <div className="flex items-center space-x-4 w-full">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Try to searching ..."
            className="w-full pl-10 pr-4 py-2 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-500 hover:text-blue-500 cursor-pointer" />

        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo.png" // Place a profile pic in /public/assets/
            alt="User"
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="text-sm">
            <p className="font-semibold">Mike Nielsen</p>
            <p className="text-gray-500 text-xs">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
