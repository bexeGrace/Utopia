// ScrollReveal
import ScrollReveal from 'scrollreveal';
import { FaFacebook, FaHome } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
export default function Footer() {

    ScrollReveal().reveal(".footer__item", {
        origin: "bottom",
        distance: "100px",
        duration: 3000,
        delay: 600,
        interval: 100
    })

    ScrollReveal().reveal(".footer__copyright", {
        origin: "bottom",
        distance: "60px",
        duration: 3000,
        delay: 600,
    })

    return (
        <footer className="footer mt-[60px] xl:mt-[70px] relative z-20">
            <div className="container mx-auto px-0">
                <div className="flex flex-col xl:flex-row xl:gap-[120px] xl:mb-[10px] pb-10">
                    <div className="footer__item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left">
                        {/* logo */}
                        <div >
                <a href="#" className="flex justify-start items-center flex-row gap-3" >
                   <FaHome className="w-6 items-start h-6 text-accent"/> 
                   <span className=" text-primary text-2xl font-primary">Daily Love</span>
                </a>

                </div>
                        <p className="mb-8 text-lg">
                            It is a long established fact that a reader will be distracted lookings.
                        </p>
                        {/* socials */}
                        <ul className="text-primary flex gap-[30px] justify-center xl:justify-start">
                            <li>
                                <a href="">
                                    <FaInstagram className='w-6 h-6'/>
                                </a>
                            </li>
                            <li>
                            <a href="">
                                    <FaTwitter className='w-6 h-6'/>
                                </a>
                            </li>
                            <li>
                            <a href="">
                                    <FaWhatsapp className='w-6 h-6'/>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                <a href="">
                                    <FaFacebook className='w-6 h-6'/>
                                </a>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end">
                        <div className="footer__item">
                            <h3 className="h3 mb-3">Pages</h3>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <a href="">About Us</a>
                                </li>
                                <li>
                                    <a href="">Testimonials</a>
                                </li>
                                <li>
                                    <a href="">Our Work</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="footer__item">
                            <h3 className="h3 mb-3">Services</h3>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <a href="">Kitchen</a>
                                </li>
                                <li>
                                    <a href="">Living Area</a>
                                </li>
                                <li>
                                    <a href="">Bathroom</a>
                                </li>
                                <li>
                                    <a href="">Bedroom</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__item max-w-[260px] mx-auto xl:mx-0">
                            <h3 className="h3 mb-3">Contact</h3>
                            <div className="flex flex-col gap-6 ">
                                <p>Geneva, Switherkand</p>
                                <p>contact@dailylove.com</p>
                                <p>(123) 456 - 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* copyright */}
            <p className="footer__copyright text-center text-lg py-10 bg-white xl:border-t">
                &copy; Copyright  2024
                All rights reserved.
            </p>
        </footer>
    )
}
