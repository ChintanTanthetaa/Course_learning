import React from 'react'
import logo from "../../assets/imgs/Screenshot_2023-07-25_103308-removebg-preview.png";
import { AiFillYoutube, AiOutlineDribbble, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { BsSend } from "react-icons/bs";

const Footer = () => {
    return (
        <div className='bg-[#430b52] -mt-64 sticky'>
            <div className='mx-auto max-w-2xl pt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8'>
                    <div className='col-span-4'>
                        <img className="h-16" src={logo} alt="Courses-Logo" />
                        <h3 className='text-white text-lg font-medium leading-9 mb-4 lg:mb-20'> Level up your skills, and get dream <br />  job with passion. </h3>
                        <div className='flex gap-4 text-white '>
                            <span className='bg-[#ffe6e652]  rounded-full p-1 hover:-translate-y-3 cursor-pointer'>
                                <AiOutlineInstagram size={30} />
                            </span>
                            <span className='bg-[#ffe6e652]  rounded-full p-1 hover:-translate-y-3 cursor-pointer'>
                                <AiOutlineDribbble size={30} />
                            </span>
                            <span className='bg-[#ffe6e652]  rounded-full p-1 hover:-translate-y-3 cursor-pointer'>             <AiOutlineTwitter size={30} />
                            </span>
                            <span className='bg-[#ffe6e652]  rounded-full p-1 hover:-translate-y-3 cursor-pointer'>
                                <AiFillYoutube size={30} />
                            </span>
                        </div>
                    </div>
                    <div className="group relative col-span-2">
                        <p className='text-white text-2xl font-semibold mb-9'>Company</p>
                        <ul>
                            <li className='mb-5'>
                                <a className='text-[#e7e5e5] text-lg font-normal mb-6 space-links' href="/">About us</a>
                            </li>
                            <li className='mb-5'>
                                <a className='text-[#e7e5e5] text-lg font-normal mb-6 space-links' href="/">Blog</a>
                            </li>
                            <li className='mb-5'>
                                <a className='text-[#e7e5e5] text-lg font-normal mb-6 space-links' href="/">Contact us</a>
                            </li>
                            <li className='mb-5'>
                                <a className='text-[#e7e5e5] text-lg font-normal mb-6 space-links' href="/">Pricing</a>
                            </li>
                            <li className='mb-5'>
                                <a className='text-[#e7e5e5] text-lg font-normal mb-6 space-links' href="/">Testimonials</a>
                            </li>
                        </ul>
                    </div>
                    <div className='group relative col-span-2'>
                        <p className='text-white text-2xl font-semibold mb-9'>Support</p>
                        <ul>
                            <li className='mb-5'>
                                <a className='text-[#e7e5e5] text-lg font-normal mb-6 space-links' href="/">Help center</a>
                            </li>
                            <li className='mb-5'>
                                <a className='text-[#e7e5e5] text-lg font-normal mb-6 space-links' href="/">Terms of service</a>
                            </li>
                            <li className='mb-5'>
                                <a className='text-[#e7e5e5] text-lg font-normal mb-6 space-links' href="/">Legal</a>
                            </li>
                            <li className='mb-5'>
                                <a className='text-[#e7e5e5] text-lg font-normal mb-6 space-links' href="/">Privacy Policy</a>
                            </li>
                            <li className='mb-5'>
                                <a className='text-[#e7e5e5] text-lg font-normal mb-6 space-links' href="/">Status</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-4'>
                        <h3 className='text-white text-2xl font-semibold mb-9'>Stay up to date</h3>
                        <div className='relative text-white focus-within:text-white flex flex-row-reverse'>
                            <input type='Email address' placeholder='Your email address' className='py-4 text-sm w-full text-white bg-[#f5e6ff52] rounded-md pl-4' autocomplete="off"></input>
                            <div className='absolute inset-y-0 right-0 flex items-center pr-2 '>
                                <button type='submit' className="p-1 focus:outline-none focus:shadow-outline">
                                    <BsSend size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pb-24 px-4'>
                <h3 className='text-center text-white'>@2023 - All Rights Reserved by Adminmart.com</h3>
            </div>
        </div>
    )
}

export default Footer