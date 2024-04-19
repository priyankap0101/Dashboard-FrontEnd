/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-md p-4 md:p-6 rounded-md flex flex-col items-center">
      <div className="mb-4">
        {icon}
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}

export default DashboardCard;
