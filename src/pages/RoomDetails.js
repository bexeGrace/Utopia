import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';

import AdultsDropdown from '../components/AdultsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import KidsDropdown from '../components/KidsDropdown';

import { RoomContext } from '../context/RoomContext';
import { FaCheck } from 'react-icons/fa';
import ScrollToTop from '../components/ScrollTop';
import ImageGallery from "react-image-gallery";

import MyGallery from '../components/MyGallery';

const RoomDetails = () => {
  const {rooms} = useContext(RoomContext);
  const {id} = useParams();
  
  const room = rooms.find((room)=> {
    return room.id === Number(id);
  })
  const {name, description, facilities, imageLg, price} = room


  return <section >
  <ScrollToTop/>
  <div style={{ backgroundImage: `url('${imageLg}')` }} className=' bg-cover h-[400px] bg-center relative flex justify-center items-center'>
    <div className='absolute w-full h-full bg-black/30'></div>
    <h1 className='text-5xl text-white z-20 font-primary flex items-center justify-center text-center'>{name} Details</h1>
  </div>
  <div className='container mx-auto'>
  <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-24'>
    <div className='flex flex-col justify-center'>
      <h2 className='text-3xl font-bold mb-4'>{name}</h2>
      <p className='text-lg text-gray-700 mb-8'>{description}</p>
      <div className='overflow-hidden rounded-lg shadow-lg'>
        <MyGallery img={imageLg} />
      </div>
      <div className='mt-12'>
        <h3 className='text-2xl font-bold mb-3'>Room Facilities</h3>
        <div className='grid grid-cols-3 gap-4'>
          {facilities.map((item, index) => (
            <div className='flex items-center gap-x-3' key={index}>
              <div className='text-2xl text-accent'>{item.icon}</div>
              <div className='text-lg'>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='flex flex-col justify-center'>
      <div className='py-8 px-6 bg-blue-200 mb-12 rounded-lg shadow-lg'>
        <h3 className='text-2xl font-bold mb-4'>Your Reservation</h3>
        <div className='space-y-4'>
          <div className='h-[60px]'>
            <CheckIn />
          </div>
          <div className='h-[60px]'>
            <CheckOut />
          </div>
          <div className='h-[60px]'>
            <AdultsDropdown />
          </div>
          <div className='h-[60px]'>
            <KidsDropdown />
          </div>
        </div>
        <button className='btn btn-lg btn-primary w-full mt-6'>Book Now for ${price}</button>
      </div>
      <div className='py-6 px-4 bg-gray-100 rounded-lg shadow-lg'>
        <h3 className='text-2xl font-bold mb-4'>Hotel Rules</h3>
        <p className='text-lg text-gray-700 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, urna id posuere fermentum, mauris nunc sodales risus, sit amet vehicula lectus metus id est.</p>
        <ul className='list-disc list-inside'>
          <li className='text-lg text-gray-700 mb-2'>
            <FaCheck className='inline-block mr-2 text-green-500' />
            Check-in: 1:00 PM - 9:00 PM
          </li>
          <li className='text-lg text-gray-700 mb-2'>
            <FaCheck className='inline-block mr-2 text-green-500' />
            Check-out: 10:30 AM
          </li>
          <li className='text-lg text-gray-700 mb-2'>
            <FaCheck className='inline-block mr-2 text-green-500' />
            No Pets Allowed
          </li>
          <li className='text-lg text-gray-700'>
            <FaCheck className='inline-block mr-2 text-green-500' />
            No Smoking
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  
  </section>;
};

export default RoomDetails;
