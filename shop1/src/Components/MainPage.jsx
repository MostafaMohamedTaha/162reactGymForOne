import React from 'react'
import { Link } from 'react-router-dom'
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const MainPage = () => {
    return (
        <div>
            <Navbar fluid >
                <NavbarBrand href="https://flowbite-react.com">
                    <img src="https://picsum.photos/2000/1100" className="mr-3 size-6 rounded-full" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white capitalize">gym masr</span>
                </NavbarBrand>
                <Flowbite>
                    <DarkThemeToggle />
                </Flowbite>
            </Navbar>
            <div>
                <p className=" font-bold mt-[100px] capitalize text-center">it's time to get</p>
                <div className='text-center mt-5'>
                    <span className='text-4xl uppercase text-center'>swole</span>
                    <span className='text-4xl uppercase text-blue-400 text-center'>normous</span>
                </div>
                <div className="flex justify-center mt-4 mx-3">
                    <div className=' md:max-w-[700px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate provident nostrum beatae esse facilis deserunt cum magnam illo <span className='text-blue-400'>aliquam</span> consequuntur earum eum, accusantium dolorum quidem natus! Corrupti ipsa quae quidem ullam ipsam, dignissimos <span className='text-blue-400'>praesentium</span> obcaecati voluptatem tempora, ex nobis quasi error. Itaque quos <span className='text-blue-400'> officiis</span> magnam quisquam voluptates dolores saepe.
                    </div>
                </div>

            </div>
            <div className="flex justify-center">
                <button className='border-blue-400 border-2 px-4 py-2 bg-blue-800 text-white  rounded-md transform transition-transform hover:scale-110  shadow-[6px_6px_12px_rgba(0,0,0,0.3)] dark:shadow-blue-400'>
                    accept and begin
                </button>
            </div>
        </div>
    )
}

export default MainPage
