'use client';

import { useState } from 'react';
import { FaUserGraduate, FaBookOpen, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';
import Tiles from './components/Tiles';

export default function Dashboard() {
  return (
    <div className="p-6">
      <Tiles/>
      
    </div>
  );
}

