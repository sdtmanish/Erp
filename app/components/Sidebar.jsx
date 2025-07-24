'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  FaUserGraduate,
  FaBook,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronRight,
  FaBullhorn,
  FaBookOpen,
  FaBuilding,
  FaBus,
  FaCog,
  FaUsers,
  FaFileInvoiceDollar,
  FaMoneyBill,
  FaUserTie,
} from 'react-icons/fa';
import Image from 'next/image';

export default function Sidebar() {
  const [isAcademicOpen, setIsAcademicOpen] = useState(true);
  const [isOthersOpen, setIsOthersOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);

  const router = useRouter();

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-white shadow-xl border-r border-gray-200 flex flex-col justify-between z-50">
      <div className="overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3 px-6 py-5 border-b border-gray-200">
          <Image src="/assets/logo.png" alt="Logo" width={34} height={34} />
          <span className="text-xl font-bold text-gray-800">College ERP</span>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6 space-y-4 text-sm font-medium text-gray-700">
          <SectionTitle title="Home" />
          <NavItem href="/dashboard" icon={<FaUserGraduate />}>Dashboard</NavItem>

          <Divider />

          <SectionTitle title="Academics" />
          <Collapsible
            title="Academics"
            isOpen={isAcademicOpen}
            onToggle={() => setIsAcademicOpen(!isAcademicOpen)}
            icon={<FaBook />}
          >
            <SubItem href="/students">• Students</SubItem>
            <SubItem href="/courses">• Courses</SubItem>
            <SubItem href="/faculty">• Faculty</SubItem>
            <SubItem href="/timetable">• Timetable</SubItem>
            <SubItem href="/attendance">• Attendance</SubItem>
          </Collapsible>

          <Divider />

          <SectionTitle title="Administration" />
          <Collapsible
            title="Administration"
            isOpen={isAdminOpen}
            onToggle={() => setIsAdminOpen(!isAdminOpen)}
            icon={<FaUsers />}
          >
            <SubItem href="/departments">• Departments</SubItem>
            <SubItem href="/staff-directory">• Staff Directory</SubItem>
            <SubItem href="/roles">• Roles & Permissions</SubItem>
            <SubItem href="/leaves">• Leaves & Approvals</SubItem>
          </Collapsible>

          <Divider />

          <SectionTitle title="Finance" />
          <Collapsible
            title="Finance"
            isOpen={isFinanceOpen}
            onToggle={() => setIsFinanceOpen(!isFinanceOpen)}
            icon={<FaFileInvoiceDollar />}
          >
            <SubItem href="/fees">• Fees Collection</SubItem>
            <SubItem href="/expenses">• Expenses</SubItem>
            <SubItem href="/salaries">• Salary Management</SubItem>
            <SubItem href="/transactions">• Transactions</SubItem>
          </Collapsible>

          <Divider />

          <SectionTitle title="Others" />
          <Collapsible
            title="Others"
            isOpen={isOthersOpen}
            onToggle={() => setIsOthersOpen(!isOthersOpen)}
            icon={<FaCalendarAlt />}
          >
            <SubItem href="/events">• Events</SubItem>
            <SubItem href="/notice-board">• Notice Board</SubItem>
            <SubItem href="/library">• Library</SubItem>
            <SubItem href="/hostel">• Hostel</SubItem>
            <SubItem href="/transport">• Transport</SubItem>
            <SubItem href="/settings">• Settings</SubItem>
          </Collapsible>
        </nav>
      </div>

      {/* Bottom Profile */}
      <div
        onClick={() => router.push('/login')}
        className="p-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between cursor-pointer hover:bg-gray-100"
      >
        <div className="flex items-center space-x-2">
          <Image src="/assets/facebook-icon.svg" alt="User" width={32} height={32} className="rounded-full" />
          <div>
            <p className="text-sm font-medium text-gray-800">Logout</p>
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
      className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition"
    >
      {icon}
      <span className="font-semibold">{children}</span>
    </Link>
  );
}

function SubItem({ href, children }) {
  return (
    <li className="ml-6 text-gray-600 hover:text-blue-600 transition">
      <Link href={href}>{children}</Link>
    </li>
  );
}

function SectionTitle({ title }) {
  return (
    <p className="px-3 pt-2 text-xs text-gray-500 uppercase tracking-widest font-semibold">
      {title}
    </p>
  );
}

function Divider() {
  return <hr className="my-3 border-gray-200" />;
}

function Collapsible({ title, icon, isOpen, onToggle, children }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition font-semibold"
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
