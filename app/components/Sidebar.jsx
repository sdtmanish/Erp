'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUserGraduate, FaBook, FaChalkboardTeacher, FaCalendarAlt, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';


export default function Sidebar() {
  const [isAcademicOpen, setIsAcademicOpen] = useState(true);

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-lg flex flex-col justify-between z-50">
      <div>
        {/* Logo */}
        <div className="flex items-center space-x-2 px-6 py-4 border-b">
          <Image src="/assets/logo.png" alt="Logo" width={30} height={30} />
          <span className="text-lg font-semibold">College ERP</span>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-4 space-y-2 text-gray-700 text-sm">
          <SectionTitle title="HOME" />

          <NavItem href="/dashboard" icon={<FaUserGraduate />}>Dashboard</NavItem>

          <SectionTitle title="ACADEMICS" />

          <Collapsible
            title="Academics"
            isOpen={isAcademicOpen}
            onToggle={() => setIsAcademicOpen(!isAcademicOpen)}
            icon={<FaBook />}
          >
            <SubItem href="/students">Students</SubItem>
            <SubItem href="/courses">Courses</SubItem>
            <SubItem href="/faculty">Faculty</SubItem>
            <SubItem href="/timetable">Timetable</SubItem>
            <SubItem href="/attendance">Attendance</SubItem>
          </Collapsible>

          <SectionTitle title="OTHERS" />
          <NavItem href="/events" icon={<FaCalendarAlt />}>Events</NavItem>
        </nav>
      </div>

      {/* Bottom Profile */}
      <div className="p-4 bg-blue-50 rounded-t-xl flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/assets/facebook-icon.svg" alt="User" width={32} height={32} className="rounded-full" />
          <div>
            <p className="text-sm font-medium">Mike</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
        </div>
        <FaChevronRight className="text-gray-400" />
      </div>
    </aside>
  );
}

function NavItem({ href, icon, children }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-100 transition"
    >
      {icon}
      <span>{children}</span>
    </Link>
  );
}

function SubItem({ href, children }) {
  return (
    <li className="ml-6 text-gray-600 hover:text-blue-600">
      <Link href={href}>{children}</Link>
    </li>
  );
}

function SectionTitle({ title }) {
  return <p className="px-3 pt-4 text-xs text-gray-400 uppercase tracking-widest">{title}</p>;
}

function Collapsible({ title, icon, isOpen, onToggle, children }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-100 transition"
      >
        <div className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </div>
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
      </button>
      {isOpen && <ul className="mt-1 space-y-1">{children}</ul>}
    </div>
  );
}
