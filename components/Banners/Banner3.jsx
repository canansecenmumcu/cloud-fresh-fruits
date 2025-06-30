"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeLeft } from '@/utility/animation'


const bgStyle = {
    backgroundImage: `url('/assets/banner-bg.jpg')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: '400px', // Yükseklik ayarlamak isteyebilirsiniz
    width: '100%', // Genişlik ayarlamak isteyebilirsiniz
};
const Banner3 = () => {
    return (
        <section className='container mb-12 h-full w-full' >
            <div
                style={bgStyle}
                className='container grid grid-cols-1 md:grid-cols-2 py-14 space-y-6 md:space-y-0 rounded-3xl'
            >
                <div></div>
                {/* Brand Info */}
                <div className='flex flex-col justify-center' >
                    <div className='text-center md:text-left space-y-4 lg:max-w-[400px]' >
                        <motion.h1
                            variants={FadeLeft(0.5)}
                            initial='hidden'
                            animate='visible'
                            viewport={{ once: true }}
                            className='text-3xl font-bold lg:text-6xl uppercase' >get fresh fruits today</motion.h1>
                        <motion.p
                            variants={FadeLeft(0.7)}
                            initial='hidden'
                            animate='visible'
                            viewport={{ once: true }}
                            className='mt-4 text-base ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!

                        </motion.p>
                        {/* button section */}
                        <motion.div
                            variants={FadeLeft(0.9)}
                            initial='hidden'
                            animate='visible'
                            viewport={{ once: true }}
                            className='flex justify-center md:justify-start'>
                            <button
                                className='primary-btn' >
                                Order Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner3