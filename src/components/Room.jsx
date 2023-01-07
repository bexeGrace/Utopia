import React from 'react'
import { FaHome, FaPersonBooth } from 'react-icons/fa';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import {Link} from "react-router-dom"
import { BsPerson, BsPeople, } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';

const  Room  = ({room}) => {


    const {id, name, image, size, maxPerson, description, price} = room;
   
  return (
    <div className= ' '><a href="#" className="block rounded-lg p-2 shadow-sm shadow-indigo-100">
  <div className='overflow-hidden group'>
      <img className='group-hover:scale-110 transition-all  duration-300 w-full' src={image} 
      alt=""/>
    </div>
  
    <div className="mt-2 flex flex-col  ">
      <dl>
        <div>
          <dt className="sr-only">Price</dt>
  
          <dd className="text-sm text-gray-500">${price}</dd>
        </div>
  
        <div>
          <dt className="sr-only">Address</dt>
  
          <dd className="font-medium">{name}</dd>
        </div>
      </dl>
  
      <div className="mt-6 flex items-center gap-8 text-xs">
        
  
        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <FaBath className=' w-6 h-6 text-indigo-700 '/>
  
          <div className="mt-1.5 sm:mt-0">
            <p className="text-gray-500">Size</p>
  
            <p className="font-medium">{size} m2</p>
          </div>
        </div>
  
        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <BsPeople className='w-6 h-6 text-indigo-700'/>
  
          <div className="mt-1.5 sm:mt-0">
    
            <p className="text-gray-500">Maxim Person</p>
  
            <p className="font-medium">{maxPerson} people</p>
          </div>
        </div>
        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
          
          <FaDollarSign className='w-6 h-6 text-indigo-700'/>
          <div className="mt-1.5 sm:mt-0">
            <p className="text-gray-500">Price</p>
  
            <p className="font-medium">${price}</p>
          </div>
        </div>
      </div>
      
    {/* btn */}
    <Link to={`/room/${id}`}  class="btn btn-primary rounded-full px-6 m-4 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out">
  Book Now
</Link>
    </div>
  </a></div>
  )
}

export default Room