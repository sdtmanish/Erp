'use client';

import { useEffect, useState } from 'react';
import { FiGrid } from 'react-icons/fi';

const tileColors = [
  'from-pink-100 to-pink-200 text-pink-800',
  'from-green-100 to-green-200 text-green-800',
  'from-yellow-100 to-yellow-200 text-yellow-800',
  'from-indigo-100 to-indigo-200 text-indigo-800',
  'from-blue-100 to-blue-200 text-blue-800',
  'from-purple-100 to-purple-200 text-purple-800',
  'from-red-100 to-red-200 text-red-800',
];

export default function Tiles() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const storedTiles = localStorage.getItem('tiles');
    if (storedTiles) {
      setTiles(JSON.parse(storedTiles));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-6">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800">Welcome to Your Dashboard</h1>

      {tiles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {tiles.map((tile, index) => {
            const color = tileColors[index % tileColors.length];

            return (
              <div
                key={index}
                className={`group p-5 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition duration-300 ease-in-out cursor-pointer hover:scale-[1.02] bg-gradient-to-br ${color}`}
                onClick={() => tile.navurl && window.open(tile.navurl, '_blank')}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-full bg-white bg-opacity-70 text-inherit">
                    <FiGrid size={20} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold group-hover:underline">
                  {tile.WebModuleName}
                </h3>
                {tile.navurl && (
                  <p className="text-sm mt-1 opacity-80 truncate">{tile.navurl}</p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500">No tiles found. Please login again.</p>
      )}
    </div>
  );
}
