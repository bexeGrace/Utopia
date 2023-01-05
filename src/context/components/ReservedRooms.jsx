import React, { useEffect, useState } from 'react';
import Image1 from '../assets/img/photos/image2.jpg';
import Image2 from '../assets/img/photos/image3.jpg';
import Image3 from '../assets/img/photos/image4.jpg';
import { IsArray } from 'class-validator';

const ReservedRooms = () => {
  // Sample data for reserved rooms
  const [data, setData] = useState(false)
  const images = [Image1, Image2, Image3, Image1, Image2]
  const fetchData = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/rooms/reserved/`)
    if (!res.ok){
      console.log(`THere is error fetching the data from the server! ${res.status}`)
    }else{
      const data = await res.json()
      const arrD = Object.values(data)
      setData(arrD)
    }
  }


useEffect(()=>{
  fetchData()
},[data])
  const reservedRooms = [
    { roomNumber: 101, type: 'Standard', price: 100, reservedBy: 'John Doe', checkInDate: '2024-03-28', checkOutDate: '2024-03-30', image: Image1 },
    { roomNumber: 201, type: 'Deluxe', price: 150, reservedBy: 'Jane Smith', checkInDate: '2024-04-01', checkOutDate: '2024-04-05', image: Image2 },
    { roomNumber: 301, type: 'Suite', price: 200, reservedBy: 'Alice Johnson', checkInDate: '2024-04-10', checkOutDate: '2024-04-15', image: Image3 },
    { roomNumber: 401, type: 'VIP', price: 300, reservedBy: 'Bob Williams', checkInDate: '2024-04-20', checkOutDate: '2024-04-25', image: Image1 },
    { roomNumber: 501, type: 'Standard', price: 100, reservedBy: 'Emily Brown', checkInDate: '2024-04-27', checkOutDate: '2024-04-30', image: Image2 },
    { roomNumber: 601, type: 'Deluxe', price: 150, reservedBy: 'Michael Davis', checkInDate: '2024-05-01', checkOutDate: '2024-05-05', image: Image3 },
    { roomNumber: 701, type: 'Suite', price: 200, reservedBy: 'Sophia Wilson', checkInDate: '2024-05-10', checkOutDate: '2024-05-15', image: Image1 },
    { roomNumber: 801, type: 'VIP', price: 300, reservedBy: 'William Martinez', checkInDate: '2024-05-20', checkOutDate: '2024-05-25', image: Image2 },
    // Add more reserved rooms data as needed
  ];

  return (
    <div className="px-4">
      <h1 className="text-3xl font-semibold mb-8 pt-12">Reserved Rooms</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data && data.map((room, index) => (
          <div key={index} className="relative overflow-hidden bg-white rounded-lg hover:shadow-2xl shadow-lg">
            <img src={images[room.id % images.length]} alt={`Room ${room.id}`} className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-110" />
            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold mb-2">Room {room.id}</h2>
              <p className="text-gray-600 mb-2"><strong>Type:</strong> {room.package}</p>
              <p className="text-gray-600 mb-2"><strong>Price:</strong> ${room.price}</p>
              <p className="text-gray-600 mb-2"><strong>Reserved By:</strong> {room.booked_name}</p>
              <p className="text-gray-600 mb-2"><strong>Check-in Date:</strong> {room.check_in_date}</p>
              <p className="text-gray-600 mb-2"><strong>Check-out Date:</strong> {room.check_out_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservedRooms;
