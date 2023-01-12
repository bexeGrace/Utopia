

import React, { useState } from 'react';

const AddRoom = () => {
  const [newRoom, setNewRoom] = useState({
    room_number: '',
    room_type: '',
    price: '',
    images: '',
    max_people: '',
    facilities: '', 
    size: '',
    description: '',
  });

  const handleNewRoomChange = (e) => {
    setNewRoom({ ...newRoom, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    setNewRoom({ ...newRoom, photo: e.target.files[0] });
  };

  const submitData = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/rooms/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRoom)
    })
    if (!res.ok){
      console.log(res.status)
    }else {
      const data = await res.json()
      console.log(data)
    }
  }

  const handleNewRoomSubmit = (e) => {
    e.preventDefault();
    console.log('New Room:', newRoom);
    submitData()

    setNewRoom({ 
      room_number: '', 
      room_type: '', 
      price: '',
      images: '', 
      max_people: '',
      facilities: '',
      size: '',
      description: '', 
    });
  };

  return (
    <div className='px-4 h-screen pt-12'>
      <h1 className="text-3xl font-semibold mb-4">Add New Room</h1>
      <form onSubmit={handleNewRoomSubmit} className="flex pt-8 flex-col gap-4">
        <input
          type="number"
          name="room_number"
          placeholder="Room Number"
          value={newRoom.room_number}
          onChange={handleNewRoomChange}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          name="size"
          placeholder="Area of the room"
          value={newRoom.size}
          onChange={handleNewRoomChange}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          name="facilities"
          placeholder="Facilities(Comma separated!)"
          value={newRoom.facilities}
          onChange={handleNewRoomChange}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newRoom.description}
          onChange={handleNewRoomChange}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="number"
          name="max_people"
          placeholder="Max People The Room can Accomodate"
          value={newRoom.max_people}
          onChange={handleNewRoomChange}
          className="border border-gray-300 rounded-md p-2"
        />
        <select
          name="room_type"
          value={newRoom.room_type}
          onChange={handleNewRoomChange}
          className="border border-gray-300 rounded-md p-2"
        >
          <option value="">Select Room Type</option>
          <option value="Regular">Regular</option>
          <option value="Double Bed">Double Bed</option>
          <option value="Couple's">Couples</option>
          <option value="VIP">VIP</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newRoom.price}
          onChange={handleNewRoomChange}
          className="border border-gray-300 rounded-md p-2"
        />
        <input
          type="text"
          name="images"
          placeholder='Images url'
          value={newRoom.images}
          onChange={handleNewRoomChange}
          className="border border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoom;
