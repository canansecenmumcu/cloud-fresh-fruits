"use client";
import { useState } from 'react'
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';
const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        link: '/'
    },
    {
        id: 2,
        title: 'Products',
        link: '#'
    },
    {
        id: 3,
        title: 'About',
        link: '#'
    },
    {
        id: 4,
        title: 'Shop',
        link: '#'
    },
    {
        id: 5,
        title: 'Contacts',
        link: '#'
    }
]

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <nav>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='container flex items-center justify-between py-4 md:pt-4 '>
                    {/*  Logo  */}
                    <div
                        className='flex text-2xl font-bold py-4' >
                        <p className='text-primary uppercase'> Fruit</p>
                        <p className='text-secondary uppercase '> Store</p>
                        <FaLeaf className="text-[#48c048]" />
                    </div >
                    {/*  Menu */}
                    <div className='hidden md:block ' >
                        <ul className='flex items-center gap-6 text-gray-600' >
                            {NavbarMenu.map((menu) => (
                                <li key={menu.id} className='text-xl' >
                                    <a href={menu.link}
                                        className='inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold  '
                                    >{menu.title}</a>
                                </li>
                            ))}
                            <button className='text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200  hover:shadow-[]' >
                                <MdOutlineShoppingCart className='w-6 h-6' />
                            </button>
                        </ul>
                    </div >
                    {/* Mobile Hamburger Menu section */}
                    <div className='md:hidden' onClick={() => setOpen(!open)} >
                        <MdMenu className='text-4xl' />

                    </div>
                </motion.div >
            </nav>
            {/* Mobile Menu section */}
            <ResponsiveMenu open={open} />
        </>

    )
}

export default Navbar