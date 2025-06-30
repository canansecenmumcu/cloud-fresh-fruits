'use client';
import Image from 'next/image';
import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/animation";

const Hero = () => {
  return (
    <section>
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative ' >
        {/* Brand info */}
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10  '>
          <div className='text-center md:text-left space-y-6 lg:max-w-[400px] ' >
            <motion.h1
              variants={FadeRight(0.6)}
              initial='hidden'
              animate='visible'
              className='text-5xl font-bold lg:text-6xl leading-relaxed xl:leading-loose font-averia ' >
              Healty  <br /> Fresh <span className='text-secondary' > Fruits!</span>
            </motion.h1>
          </div>
          <motion.p
            variants={FadeRight(0.9)}
            initial='hidden'
            animate='visible'
            className='text-2xl tracking-wide mt-6' >Order Now For Fresh Healthy Life</motion.p>
          <motion.p
            variants={FadeRight(1.2)}
            initial='hidden'
            animate='visible'
            className='text-gray-400 mt-6' >Healthy and yummy food for fresh morning breakfast. Eat Daily for good health and mind Order now and get 20% off on your first order
          </motion.p>
          {/* button */}
          <motion.div
            variants={FadeRight(1.5)}
            initial='hidden'
            animate='visible'
            className=' flex justify-center md:justify-start mt-6 '>
            <button className='primary-btn flex items-center gap-2' >
              <span>
                <IoBagHandleOutline />
              </span>
              Order Now</button>
          </motion.div>
        </div>
        {/* Meyve tabağı */}
        <div className='flex justify-center items-center'>
          <motion.div
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Image src="/assets/fruit-plate.png" width={350} height={550} alt='' className='w-[350px] md:w-[550px] drop-shadow ' />
          </motion.div>
        </div>
        {/* Leaf */}
        <div className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg] '>
          <motion.div
            initial={{ opacity: 0, x: -200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Image src="/assets/leaf.png" width={300} height={235456789435} alt='' className='w-full md:max-w-[300px]' />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero