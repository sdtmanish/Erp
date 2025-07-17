'use client';

import { useState } from 'react';
import { FaUserGraduate, FaBookOpen, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">College ERP Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <StatCard title="Students" count="1,024" icon={<FaUserGraduate className="text-blue-500 text-3xl" />} />
        <StatCard title="Courses" count="58" icon={<FaBookOpen className="text-green-500 text-3xl" />} />
        <StatCard title="Professors" count="120" icon={<FaChalkboardTeacher className="text-purple-500 text-3xl" />} />
        <StatCard title="Events" count="12" icon={<FaCalendarAlt className="text-yellow-500 text-3xl" />} />
      </div>

      {/* Upcoming Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Upcoming Events</h2>
        <ul className="text-gray-600 space-y-2">
          <li>🎓 Convocation Ceremony - 25th July</li>
          <li>📋 Mid Term Exams - Starting 1st August</li>
          <li>🏆 Sports Week - 15th August</li>
        </ul>
      </div>
    </div>
  );
}

function StatCard({ title, count, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex items-center justify-between">
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-semibold text-gray-800">{count}</p>
      </div>
      <div>{icon}</div>
    </div>
  );
}
