"use client"
import React from 'react'
import { FaLeaf, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion'

const Footer = () => {
  return (

    <footer className='bg-primary/10 py-12' >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex justify-between items-center ">
        {/* logo */}
        <div
          className='flex text-2xl gap-2 items-center font-bold' >
          <p className='text-primary uppercase'> Fruit</p>
          <p className='text-secondary uppercase '> Store</p>
          <FaLeaf className="text-[#48c048]" />
        </div >
        {/* Social Media */}
        <div className='text-3xl flex items-center
         gap-4 mt-6 text-gray-700' >
          <FaInstagram />
          <FaFacebook />
          <FaYoutube />
          <FaTwitter />
        </div>
      </motion.div>
    </footer>


  )
}

export default Footer