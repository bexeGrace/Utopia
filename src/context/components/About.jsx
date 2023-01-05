// ScrollReveal
import ScrollReveal from 'scrollreveal';
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import Image1 from "../assets/img/photos/image4.jpg"
import Vedio from "../assets/img/heroSlider/myfile.MOV"
import { FaMailBulk } from 'react-icons/fa';
export default function About() {

    ScrollReveal().reveal(".about__text", {
        origin: "left",
        distance: "100px",
        duration: 3000,
        delay: 600,
    })

    ScrollReveal().reveal(".about__img", {
        origin: "right",
        distance: "100px",
        duration: 3000,
        delay: 800,
    })

    return (
        <section className=" about mt-[80px] xl:mt-[200px] relative z-20" id="about">
            <div className="container mx-auto xl:px-0">
               
                
<div className="flex flex-col xl:flex-row items-center justify-between text-center xl:text-left">
  {/* text */}
  <div className="about__text w-full xl:w-1/2 max-w-xl xl:max-w-[410px] flex flex-col items-center xl:items-start gap-8">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-samibold text-gray-800">Welcome to Daily Love </h2>
    <p className="text-lg text-gray-600">Unlock endless possibilities for your next adventure with us.</p>
    {/* contact */}
    <div className="flex flex-col xl:flex-row items-center xl:items-start gap-4">
      {/* phone */}
      <div className="bg-blue-200 w-8 h-8 rounded-full flex justify-center items-center">
        <FaPhone className='size-4 rotate-180'/>
      </div>
      <div className="text-left">
        <div className="text-sm text-gray-800 font-semibold">+41 760 6789</div>
        <div className="text-gray-600">Call Us Anytime</div>
      </div>
      {/* email */}
      <div className="bg-green-200 w-8 h-8 rounded-full flex justify-center items-center">
        <FaMailBulk className='size-4'/>
      </div>
      <div className="text-left">
        <div className="text-sm text-gray-800 font-semibold">dailylove@gmail.com</div>
        <div className="text-gray-600">Send Us an Email</div>
      </div>
    </div>
    {/* btn */}
    <button className="btn btn-primary bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 py-3 px-8 rounded-lg text-lg font-semibold text-white shadow-md hover:shadow-lg transition duration-300 ease-in-out">
      Get Free Estimation <i className="ri-arrow-right-line ml-2"></i>
    </button>
  </div>
  {/* img */}
  <div className="w-full xl:w-1/2 mt-8 xl:mt-0">
    <video className="w-full rounded-lg" controls>
      <source src={Vedio} type="video/quicktime" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>



            </div>
        </section>
    )
}
