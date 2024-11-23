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
        </div>
    )
}

export default MainPage
