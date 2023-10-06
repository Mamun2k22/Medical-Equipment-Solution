import React from "react";

const Governance = () => {
  return (
    <div className="w-10/12 mx-auto overflow-x-auto">
    
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="border-b border-gray-200 px-4 py-2">Name</th>
              <th className="border-b border-gray-200 px-4 py-2">Age</th>
              <th className="border-b border-gray-200 px-4 py-2">Country</th>
              <th className="border-b border-gray-200 px-4 py-2">Country</th>
              <th className="border-b border-gray-200 px-4 py-2">Country</th>
              <th className="border-b border-gray-200 px-4 py-2">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-200 px-4 py-2">John Doe</td>
              <td className="border-b border-gray-200 px-4 py-2">30</td>
              <td className="border-b border-gray-200 px-4 py-2">USA</td>
              <td className="border-b border-gray-200 px-4 py-2">USA</td>
              <td className="border-b border-gray-200 px-4 py-2">USA</td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 px-4 py-2">Jane Smith</td>
              <td className="border-b border-gray-200 px-4 py-2">25</td>
              <td className="border-b border-gray-200 px-4 py-2">Canada</td>
              <td className="border-b border-gray-200 px-4 py-2">Canada</td>
              <td className="border-b border-gray-200 px-4 py-2">Canada</td>
            </tr>
            <tr>
              <td className="border-b border-gray-200 px-4 py-2">Jane Smith</td>
              <td className="border-b border-gray-200 px-4 py-2">25</td>
              <td className="border-b border-gray-200 px-4 py-2">Canada</td>
              <td className="border-b border-gray-200 px-4 py-2">Canada</td>
              <td className="border-b border-gray-200 px-4 py-2">Canada</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
   
    </div>
  );
};

export default Governance;
