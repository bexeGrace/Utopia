

// // import AddRoom from '../components/AddRoom';

// // import React, { useState } from 'react';

// // const AdminDashboard = () => {
// //   const [sidebarItem, setSidebarItem] = useState('addRoom');

// //   const handleSidebarItemClick = (item) => {
// //     setSidebarItem(item);
// //   };

// //   return (
// //     <div className="flex">
// //       {/* Sidebar */}
// //       <div className="bg-gray-200  w-1/4 h-screen p-4">
// //         <h2 className="text-lg mt-32 font-semibold mb-4">Admin Panel</h2>
// //         <ul>
// //           <li className={`cursor-pointer mb-2 ${sidebarItem === 'addRoom' ? 'font-bold' : ''}`} onClick={() => handleSidebarItemClick('addRoom')}>
// //             Add New Room
            
            
// //           </li>
// //           <li className={`cursor-pointer ${sidebarItem === 'reservedRooms' ? 'font-bold' : ''}`} onClick={() => handleSidebarItemClick('reservedRooms')}>
// //             Reserved Rooms
// //           </li>
// //         </ul>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-1 p-4">
// //         {sidebarItem === 'addRoom' && (
// //           <div>
// //             {/* Add New Room Section */}
// //             <h1 className="text-3xl font-semibold mb-4">Add New Room</h1>
// //             <AddRoom/>
// //             {/* Your Add New Room Form Goes Here */}
// //           </div>
// //         )}

// //         {sidebarItem === 'reservedRooms' && (
// //           <div>
// //             {/* Reserved Rooms Section */}
// //             <h1 className="text-3xl font-semibold mb-4">Reserved Rooms</h1>
// //             {/* Your Reserved Rooms List Goes Here */}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;

// import React, { useState } from 'react';
// import AddRoom from '../components/AddRoom';

// const AdminDashboard = () => {
//   const [sidebarItem, setSidebarItem] = useState('addRoom');

//   const handleSidebarItemClick = (item) => {
//     setSidebarItem(item);
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="bg-gray-200 w-1/4 h-screen p-4">
//         <h2 className="text-lg font-semibold mb-4">Admin Panel</h2>
//         <ul>
//           <li className={`cursor-pointer mb-2 ${sidebarItem === 'addRoom' ? 'font-bold' : ''}`} onClick={() => handleSidebarItemClick('addRoom')}>
//             Add New Room
//           </li>
//           <li className={`cursor-pointer ${sidebarItem === 'reservedRooms' ? 'font-bold' : ''}`} onClick={() => handleSidebarItemClick('reservedRooms')}>
//             Reserved Rooms
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4">
//         {sidebarItem === 'addRoom' && <AddRoom />}

//         {sidebarItem === 'reservedRooms' && (
//           <div>
//             {/* Reserved Rooms Section */}
//             <h1 className="text-3xl font-semibold mb-4">Reserved Rooms</h1>
//             {/* Your Reserved Rooms List Goes Here */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import  AddRoom from '../components/AddRoom' ; // Import your AddRoom component here
import ReservedRooms from '../components/ReservedRooms';
const AdminDashboard = () => {
  const [sidebarItem, setSidebarItem] = useState('addRoom');

  const handleSidebarItemClick = (item) => {
    setSidebarItem(item);
  };

  return (
    <div className="flex  ">
      {/* Sidebar */}
      <Sidebar handleSidebarItemClick={handleSidebarItemClick} />

      {/* Main Content */}
      <div className="flex-1 p-4  ">
        {sidebarItem === 'addRoom' && <AddRoom   />}
        {sidebarItem === 'reservedRooms' && <ReservedRooms />} {/* Render ReservedRooms component */}
      </div>
    </div>
  );
};

export default AdminDashboard;
